<template>
    <div class="detail-page-head">
        <img :src="this.$store.state.headurl + this.user.userId % 30" alt="" width="300px">
        <div class="detail-page-head-right-box">
            <div class="detail-page-title-box">
                <div class="detail-page-title">
                    <b style="margin-right: 30px">{{user.userNickName}}</b>
                    <i v-if="user.gender" style="margin-right: 30px" :class="(user.gender===1)?'el-icon-male':'el-icon-female'"></i>
                    <el-button type="primary" v-if="this.user.userId!==this.$store.state.user.userid" @click="follow">{{user.isFollowed?'取消关注':'关注TA'}}</el-button>
                </div>
                <div class="detail-page-data">
                    <el-divider></el-divider>
                    <div class="detail-page-data-box">
                        <div class="detail-page-data-item">
                            <div style="width: 100%;text-align: center;font-size: 45px;color: #72767b">{{user.zoneCount}}</div>
                            <div style="width: 100%;text-align: center;font-size: 15px;color: #727634">动态</div>
                        </div>
                        <el-divider direction="vertical" class="dividerX"></el-divider>
                        <div class="detail-page-data-item">
                            <div style="width: 100%;text-align: center;font-size: 45px;color: #72767b">{{user.followCount}}</div>
                            <div style="width: 100%;text-align: center;font-size: 15px;color: #727634">关注</div>
                        </div>
                        <el-divider direction="vertical" class="dividerX"></el-divider>
                        <div class="detail-page-data-item">
                            <div style="width: 100%;text-align: center;font-size: 45px;color: #72767b">{{user.fansCount}}</div>
                            <div style="width: 100%;text-align: center;font-size: 15px;color: #727634">粉丝</div>
                        </div>
                    </div>
                </div>
                <div class="detail-page-description">签名：{{user.motto ? user.motto : '这个人很懒，什么也没留下'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-page-head",
        props: {
            user: Object
        },
        methods: {
            follow () {
                const that = this
                var sendData = new FormData()
                sendData.append('toUserid', that.user.userId)
                that.$http.post(that.$store.state.api + '/v1/user/' + (that.user.isFollowed ? 'unfollow' : 'follow'), sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 200){
                            that.user.fansCount += (that.user.isFollowed ? -1 : 1)
                            that.user.isFollowed = ! that.user.isFollowed
                            that.$message.success((that.user.isFollowed?'':'取消')+'关注成功!')
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
        }
    }
</script>

<style scoped>
    .detail-page-head{
        height: 300px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .detail-page-head-right-box{
        display: inline-block;
        width: calc(100% - 350px);
        /*background: #13ce66;*/
    }
    .detail-page-title-box{
        display: flex;
        flex-direction: column;
        justify-items: left;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .detail-page-title{
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 50px;
    }
    .detail-page-data{
        height: 150px;
    }
    .detail-page-data-box{
        display: flex;
        width: 100%;
        height: 100px;
        /*background: #72767b;*/
    }
    .detail-page-description{
        margin-top: 20px;
        height: 80px;
        color: #72767b;
    }
    .detail-page-data-item{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100px;
        height: 100px;
        /*background: black;*/
    }
    .dividerX{
        height: 100px;
    }
    .el-icon-male{
        color: blue;
    }
    .el-icon-female{
        color: deeppink;
    }
</style>