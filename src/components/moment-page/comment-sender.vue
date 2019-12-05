<template>
    <div class="comment-frame">
        <el-avatar
                :src="this.$store.state.user.img">
        </el-avatar>
        <div class="comment-body">
            <div class="comment-user-time-box">
                <el-input v-model="content" placeholder="评论内容">
                    <el-button slot="append" type="primary" @click="sendComment">发送</el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment-sender",
        props: {
            item_type: Number,
            item_id: Number
        },
        data () {
            return {
                content: ''
            }
        },
        methods: {
            sendComment () {
                const that = this
                if (!that.content) {
                    that.$message.error('评论内容不能为空！')
                    return
                }
                let sendData = new FormData()
                sendData.append('content', that.content)
                sendData.append('item_type', that.item_type)
                sendData.append('item_id', that.item_id)
                that.$http.post(that.$store.state.api + '/v1/comment/add_comment', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.$message.success('评论成功!')
                            that.content = ''
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
    .comment-frame{
        padding: 10px 20px 10px 40px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .comment-body{
        width: calc(100% - 60px);
    }
    .comment-user-time-box{
        height: 40px;
    }
</style>