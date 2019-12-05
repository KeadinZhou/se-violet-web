<template>
    <div class="moment-frame">
        <div style="display: flex; justify-content: center" v-if="!senderShow">
            <el-button type="primary" icon="el-icon-plus" circle @click="senderShow = true"></el-button>
        </div>
        <transition name="el-zoom-in-top">
            <el-card class="moment-card" shadow="hover" v-if="senderShow">
                <div class="moment-box">
                    <div class="user-head">
                        <el-avatar
                                :size="60"
                                :src="this.$store.state.user.img">
                        </el-avatar>
                    </div>
                    <div class="moment-body">
                        <div class="moment-user-time-box">
                            <el-link :href="'#'" style="font-size: 18px" type="primary"><b>{{this.$store.state.user.nickname}}</b></el-link>
                            <div style="height: 2px"></div>
                            <span style="font-size: 14px; color: #999999">To Everyone:</span>
                        </div>
                        <div class="moment-content-box">
                            <p>
                                <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 5, maxRows: 10}"
                                        placeholder="动态内容"
                                        v-model="content">
                                </el-input>
                            </p>
                        </div>
                        <div class="moment-bottom">
                            <div class="moment-about">
                                <!--                            <el-link :href="momentData.about_url"><i class="el-icon-paperclip"> {{momentData.about}}</i></el-link>-->
                            </div>
                            <div class="comment-star-box">
                                <el-button type="primary" style="width: 100%" @click="sendMoment">发送</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "moment-sender",
        components: {
        },
        data () {
            return {
                senderShow: false,
                content: ''
            }
        },
        methods: {
            sendMoment () {
                const that = this
                if (!that.content) {
                    that.$message.error('动态内容不能为空！')
                    return
                }
                let sendData = new FormData()
                sendData.append('content', that.content)
                sendData.append('item_type', 1)
                sendData.append('item_id', 1)
                that.$http.post(that.$store.state.api + '/v1/zone/add_zone', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.$message.success('发送成功!')
                            that.content = ''
                            that.senderShow = false
                            that.$emit('sendOK', true)
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
    .moment-frame{
        padding: 0 20px;
    }
    .moment-card{
        width: 100%;
    }
    .moment-box{
        display: flex;
        align-items: flex-start;
    }
    .user-head{
        display: inline-block;
    }
    .moment-body{
        display: inline-block;
        width: 920px;
        /*background: #AAA;*/
        padding: 10px;
    }
    .moment-user-time-box{
        height: 40px;
        /*background: #FFF;*/
        width: 150px;
    }
    .moment-content-box{
        width: 100%;
        padding: 10px 0;
        /*background: #EEE;*/
        font-size: 16px;
        color: #000;
    }
    .moment-bottom{
        display: flex;
        justify-content: space-between;
        /*background: #EEE;*/
    }
    .comment-star-box{
        /*background: #EEE;*/
        height: 40px;
        width: 100px;
        display: flex;
        justify-content: space-around;
    }
    .comment-star-button{
        margin-top: 12px;
        font-size: 24px;
        cursor: pointer;
    }
</style>