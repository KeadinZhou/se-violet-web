<template>
    <div class="comment-frame">
        <el-avatar
                :src="commentData.img_url">
        </el-avatar>
        <div class="comment-body">
            <div class="comment-user-time-box">
                <el-link style="font-size: 15px" type="primary"><b>{{commentData.user_nickname}}:</b></el-link>
                <span style="font-size: 15px">{{commentData.content}}</span>
                <br>
                <span style="font-size: 12px; color: #999999">{{commentData.time}}</span>
            </div>
        </div>
        <el-badge :value="commentData.star_cnt" class="comment-star-button" type="primary" :hidden="commentData.star_cnt===0" :max="999">
            <span @click="star()"><i :class="commentData.i_stared?'el-icon-star-on':'el-icon-star-off'"></i></span>
        </el-badge>
    </div>
</template>

<script>
    export default {
        name: "comment-frame",
        props: {
            commentData: Object
        },
        methods: {
            star () {
                const that = this
                var sendData = new FormData()
                sendData.append('item_type', 5)
                sendData.append('item_id', that.commentData.comment_id)
                that.$http.post(that.$store.state.api + '/v1/thumbs/' + (that.commentData.i_stared ? 'dislike' : 'like'), sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.commentData.star_cnt += (that.commentData.i_stared ? -1 : 1)
                            that.commentData.i_stared = ! that.commentData.i_stared
                            that.$message.success((that.commentData.i_stared?'':'取消')+'点赞成功!')
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
        padding: 10px 40px;
        /*background: #AAA;*/
        display: flex;
        justify-content: space-between;
    }
    .comment-star-button{
        font-size: 18px;
        cursor: pointer;
        line-height: 40px;
        /*background: #2ecc71;*/
    }
    .comment-body{
        /*background: #13ce66;*/
        width: calc(100% - 20px - 80px);
    }
    .comment-user-time-box{
        height: 40px;
        /*background: #FFF;*/
    }
</style>