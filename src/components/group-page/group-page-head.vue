<template>
    <div>
        <div class="group-page-head">
            <div class="group-info-box">
                <div class="group-name"><b>{{isPost?postTitle:groupname}}</b></div>
                <div><el-button size="small" round v-if="groupname&&!isPost" @click="joinOrExit">{{is_joined?'退出圈子':'加入圈子'}}</el-button></div>
            </div>
            <div class="group-img-box">
                <img :src="img" alt="" width="200px">
            </div>
        </div>
        <div class="head-bottom-line"></div>
    </div>
</template>

<script>
    export default {
        name: "group-page-head",
        props: {
            isPost: Boolean,
            postTitle: String,
            groupId: Number
        },
        data() {
            return{
                groupname:'',
                img: null,
                group_id: '',
                is_joined: false
            }
        },
        methods: {
            getGroupId() {
                const that = this
                if (that.isPost) {
                    that.group_id = that.groupId
                    return
                }
                if (that.$route.query.groupid) {
                    that.group_id = Number(that.$route.query.groupid)
                } else {
                    that.$router.push('/groups')
                }
            },
            getData() {
                const that = this
                var sendData = new FormData()
                sendData.append('group_id', that.group_id)
                that.$http.post(that.$store.state.api + '/v1/group/load_group_by_id', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if (Data.code === 0) {
                            that.groupname =  Data.data[0].group_name
                            that.img = that.$store.state.groupImg(that.group_id)
                            that.is_joined = Data.data[0].is_joined
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for (const item in msg) {
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
            joinOrExit () {
                const that = this
                that.is_joined = !that.is_joined
                that.$message.success(that.is_joined?'加入成功':'退出成功')
            }
        },
        created() {
            this.getGroupId()
        },
        watch: {
            '$route'() {
                this.getGroupId()
            },
            group_id: function () {
                this.getData()
            }
        }
    }
</script>

<style scoped>
    .head-bottom-line{
        height: 30px;
        width: 100%;
        background: #9b59b6;
    }
    .group-page-head{
        display: flex;
        justify-content: space-between;
        justify-items: flex-end;
        background: linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #9b59b6 50%, #9b59b6 100%);
        padding: 0 30px;
    }
    .group-img-box{
        height: 200px;
        width: 200px;
        border-radius: 50%;
        overflow: hidden;
    }
    .group-info-box{
        margin-top: 150px;
        height: 50px;
        width: calc(100% - 200px);
        /*background: #999;*/
        display: flex;
        justify-content: space-between;
        justify-items: center;
    }
    .group-name{
        /*margin-top: 50%;*/
        font-size: 30px;
        color: #FFFFFF;
    }
</style>