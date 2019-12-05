<template>
    <div class="post-sender">
        <div class="post-sender-box">
            <el-input
                    v-if="!noTitle"
                    v-model="title"
                    placeholder="帖子标题">
            </el-input>
            <el-input
                    style="margin: 10px 0"
                    type="textarea"
                    :autosize="{ minRows: 5, maxRows: 10}"
                    placeholder="内容"
                    v-model="text">
            </el-input>
            <el-button type="primary" style="width: 100%" @click="sendPost">发送</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post-sender",
        props: {
            noTitle: Boolean,
            group_id:String,
            Item_id: String
        },
        data () {
            return {
                flag:false,
                title: '',
                text: '',
            }
        },
        methods: {
            sendPost () {
                if (!this.noTitle)
                {
                    const that= this
                    if (!that.title){
                        that.$message.error('标题不能为空！')
                        return
                    }
                    if (!that.text){
                        that.$message.error('帖子内容不能为空！')
                        return
                    }
                    let sendData=new FormData()
                    sendData.append('group_id',this.group_id)
                    sendData.append('post_title',this.title)
                    sendData.append('content',this.text)
                    that.$http.post(that.$store.state.api + '/v1/post/add_post', sendData)
                        .then(data=>{
                            const Data= data.data
                            console.log(Data)
                            if (Data.code===0) {
                                that.$message.success('发送成功!')
                                that.text = ''
                                that.title=''
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
                else {
                    const that= this
                    if (!that.text){
                        that.$message.error('评论内容不能为空！')
                        return
                    }
                    let sendData=new FormData()
                    sendData.append('content',that.text)
                    sendData.append('item_type', 4)
                    sendData.append('item_id', that.Item_id)
                    that.$http.post(that.$store.state.api + '/v1/comment/add_comment', sendData)
                        .then(data => {
                            const Data = data.data
                            console.log(Data)
                            if(Data.code === 0){
                                that.$message.success('评论成功!')
                                that.text = ''
                                that.$emit('sendOKK', true)
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
    }
</script>

<style scoped>
    .post-sender{
        width: calc(100% - 100px);
        background: #F5F5F9;
        padding: 50px;
    }
    .post-sender-box{
        width: 100%;
    }
</style>