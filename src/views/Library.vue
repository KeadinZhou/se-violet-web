<template>
    <div>
        <div class="search-box">
            <img src="@/assets/logo.png" alt="" width="180px">
            <div style="margin: 20px"></div>
            <el-input placeholder="键入关键词在曲库中进行搜索" v-model="keyword">
                <el-button slot="append" icon="el-icon-search" @click="searchSongs" :loading="isLoading"></el-button>
            </el-input>
        </div>
        <a id="resMark"></a>
        <transition name="el-zoom-in-top">
            <song-list-frame
                    v-if="keyword&&resShow"
                    :title="'\''+keyword+'\''+'  的搜索结果'"
                    :songListData="songListData">
            </song-list-frame>
        </transition>
    </div>
</template>

<script>
    import SongListFrame from '@/components/detail-page/song-list-frame'
    export default {
        name: "Library",
        components: {
            'song-list-frame': SongListFrame
        },
        data () {
            return {
                resShow: false,
                keyword: '',
                isLoading: false,
                songListData: []
            }
        },
        methods: {
            searchSongs () {
                const that = this
                if (!that.keyword) {
                    that.$message.error('搜索内容不能为空')
                    return
                }
                that.isLoading = true
                let sendData = new FormData()
                sendData.append('name', that.keyword)
                that.$http.post(that.$store.state.api + '/v1/song/songs_by_name', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.songListData = Data.data
                            that.isLoading = false
                            that.resShow = true
                            setTimeout( () => {
                                document.querySelector('#resMark').scrollIntoView({behavior: 'smooth', block: 'start'})
                            }, 850)
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
        watch: {
            keyword: function(){
                this.resShow = false
            }
        }
    }
</script>

<style scoped>
    .search-box{
        display: flex;
        width: 80%;
        height: 550px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>