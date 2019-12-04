<template>
    <div class="moment-frame">
            <div class="moment-box">
                <div class="user-head">
                    <el-avatar
                            :size="60"
                            :src="momentData.img_url">
                    </el-avatar>
                </div>
                <div class="moment-body">
                    <div class="moment-user-time-box">
                        <el-link :href="momentData.user_url" style="font-size: 18px" type="primary"><b>{{momentData.user_nickname}}</b></el-link>
                        <div style="height: 2px"></div>
                        <span style="font-size: 14px; color: #999999">{{momentData.time}}</span>
                    </div>
                    <div class="moment-content-box">
                        <p>
                            {{momentData.content}}
                        </p>
                    </div>
                    <div class="moment-bottom">
                        <div class="moment-about">
                        </div>
                        <div class="comment-star-box">
                            <el-badge :value="momentData.star_cnt" class="comment-star-button" type="primary" :max="999" :hidden="!momentData.star_cnt">
                                <span @click="star()"><i :class="momentData.i_stared?'el-icon-star-on':'el-icon-star-off'"></i></span>
                            </el-badge>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "post-detail-frame",
        props: {
            momentData: Object
        },
        data () {
            return {
                showComments: false
            }
        },
        methods: {
            star() {
                const that = this
                var sendData = new FormData()
                sendData.append('item_type', 5)
                sendData.append('item_id', that.momentData.comment_id)
                that.$http.post(that.$store.state.api + '/v1/thumbs/' + (that.momentData.i_stared ? 'dislike' : 'like'), sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if (Data.code === 0) {
                            that.momentData.star_cnt += (that.momentData.i_stared ? -1 : 1)
                            that.momentData.i_stared = !that.momentData.i_stared
                            that.$message.success((that.momentData.i_stared ? '' : '取消') + '点赞成功!')
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
            }
        }
    }
</script>

<style scoped>
    .moment-frame{
        padding: 20px;
        background: #F5F5F9;
    }
    .moment-card{
        width: 100%;
    }
    .moment-box{
        margin-left: 30px;
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