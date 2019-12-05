<template>
    <div v-if="this.$store.state.user.permission===-9" style="text-align: center">
        <b>错误：请先登录！</b>
    </div>
    <div v-else class="listBox" style="text-align: center">
        <el-select v-model="addTo" placeholder="加入歌单" size="mini">
            <el-option
                    v-for="item in this.$store.state.myPlayList"
                    :key="item.playlist_id"
                    :label="item.playlist_name"
                    :value="item.playlist_id">
            </el-option>
        </el-select>
        <el-button type="primary" style="width: 100%;margin-top: 10px" size="mini" @click="addToList">加入歌单</el-button>
        <el-divider>or</el-divider>
        <el-input placeholder="新建歌单" size="mini" v-model="newListName">
            <el-button slot="append" @click="newList">新建</el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "add-song-to-list",
        props: {
            song_id: Number
        },
        data () {
            return {
                playlistData: [],
                addTo: '',
                newListName: ''
            }
        },
        methods: {
            getList () {
                const that = this
                var sendData = new FormData()
                sendData.append('user_id', that.$store.state.user.userid)
                that.$http.post(that.$store.state.api + '/v1/sheet/sheets_by_owner', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        that.playlistData = []
                        if(Data.code === 0){
                            for(const item of Data.data) {
                                that.playlistData.push({
                                    playlist_id: item.sheet_id,
                                    playlist_name: item.sheet_name
                                })
                            }
                            that.$store.commit('updateMyPlayList', that.playlistData)
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for(const item in msg) {
                                    that.$message.error(msg[item][0])
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response)
                            that.$message.error('系统错误')
                        }
                    })
            },
            addToList () {
                const that = this
                var sendData = new FormData()
                sendData.append('sheet_id', that.addTo)
                sendData.append('song_id', that.song_id)
                that.$http.post(that.$store.state.api + '/v1/sheet/sheet_add_song', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        that.playlistData = []
                        if(Data.code === 0){
                            that.$message.success('添加成功！')
                            that.$emit('addOK', true)
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for(const item in msg) {
                                    that.$message.error(msg[item][0])
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response)
                            that.$message.error('系统错误')
                        }
                    })
            },
            newList () {
                const that = this
                var sendData = new FormData()
                sendData.append('sheet_name', that.newListName)
                that.$http.post(that.$store.state.api + '/v1/sheet/create_sheet', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        that.playlistData = []
                        if(Data.code === 0){
                            that.$message.success('创建成功！')
                            that.newListName = ''
                            that.getList()
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for(const item in msg) {
                                    that.$message.error(msg[item][0])
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response)
                            that.$message.error('系统错误')
                        }
                    })
            }
        },
        created () {
            if (this.$store.state.user.permission===-9) {
                return
            }
            if (this.$store.state.myPlayList.length > 0) {
                return
            }
            this.getList()
        }
    }
</script>

<style scoped>
    .listBox{
        width: 100%;
    }
    .list-item{
        display: block;
    }
</style>