<template>
    <div class="moment-frame">
        <el-card class="moment-card" shadow="hover">
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
                            <el-link v-if="momentData.about" :href="momentData.about_url"><i class="el-icon-paperclip"> {{momentData.about}}</i></el-link>
                        </div>
                        <div class="comment-star-box">
                            <el-badge :value="momentData.comment_cnt" class="comment-star-button" type="primary" :max="999" :hidden="!momentData.comment_cnt">
                                <span @click="commentSwitch()"><i class="el-icon-chat-square"></i></span>
                            </el-badge>
                            <el-badge :value="momentData.star_cnt" class="comment-star-button" type="primary" :max="999" :hidden="!momentData.star_cnt">
                                <span @click="star()"><i :class="momentData.i_stared?'el-icon-star-on':'el-icon-star-off'"></i></span>
                            </el-badge>
                        </div>
                    </div>
                </div>
            </div>
            <el-collapse-transition>
                <div v-if="showComments">
                    <el-divider><i class="el-icon-chat-square"></i></el-divider>
                    <comment-sender :item_id="momentData.moment_id" :item_type="6" @sendOK="getData(false)"></comment-sender>
                    <comment-frame
                            v-for="(item,index) in commentsList"
                            :key="index"
                            :comment-data="item">
                    </comment-frame>
                </div>
            </el-collapse-transition>
        </el-card>
    </div>
</template>

<script>
    import CommentFrame from '@/components/pageitems/comment-frame'
    import CommentSender from '@/components/moment-page/comment-sender'
    export default {
        name: "moment-frame",
        components: {
            'comment-frame': CommentFrame,
            'comment-sender': CommentSender
        },
        props: {
            momentData: Object
        },
        data () {
            return {
                showComments: false,
                commentsList: []
            }
        },
        methods: {
            getData (open) {
                const that = this
                var sendData = new FormData()
                sendData.append('item_type', 6)
                sendData.append('item_id', that.momentData.moment_id)
                that.$http.post(that.$store.state.api + '/v1/comment/load_comment', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.commentsList = []
                            for(const item of Data.data) {
                                that.commentsList.push({
                                    comment_id: item.comment_id,
                                    img_url: that.$store.state.headurl + item.user_id % 30,
                                    user_id: item.user_id,
                                    user_nickname: item.user_nickname,
                                    time: item.create_time,
                                    content: item.content,
                                    star_cnt: item.thumbs_up_num,
                                    i_stared: item.is_liked
                                })
                            }
                            if (open) this.showComments = ! this.showComments
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
            commentSwitch () {
                if (this.showComments) {
                    this.showComments = ! this.showComments
                } else {
                    this.getData(true)
                }
            },
            star () {
                const that = this
                var sendData = new FormData()
                sendData.append('item_type', 6)
                sendData.append('item_id', that.momentData.moment_id)
                that.$http.post(that.$store.state.api + '/v1/thumbs/' + (that.momentData.i_stared ? 'dislike' : 'like'), sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.momentData.star_cnt += (that.momentData.i_stared ? -1 : 1)
                            that.momentData.i_stared = ! that.momentData.i_stared
                            that.$message.success((that.momentData.i_stared?'':'取消')+'点赞成功!')
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
        padding: 20px;
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