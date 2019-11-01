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
                            <el-link :href="momentData.about_url"><i class="el-icon-paperclip"> {{momentData.about}}</i></el-link>
                        </div>
                        <div class="comment-star-box">
                            <el-badge :value="momentData.comment_cnt" class="comment-star-button" type="primary" :max="999">
                                <span @click="commentSwitch()"><i class="el-icon-chat-square"></i></span>
                            </el-badge>
                            <el-badge :value="momentData.star_cnt" class="comment-star-button" type="primary" :max="999">
                                <span @click="star()"><i :class="momentData.i_stared?'el-icon-star-on':'el-icon-star-off'"></i></span>
                            </el-badge>
                        </div>
                    </div>
                </div>
            </div>
            <el-collapse-transition>
                <div v-if="showComments">
                    <el-divider><i class="el-icon-chat-square"></i></el-divider>
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
    export default {
        name: "moment-frame",
        components: {
            'comment-frame': CommentFrame
        },
        props: {
            momentData: Object
        },
        data () {
            return {
                showComments: false,
                commentsList: [{
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    user_id: '15151',
                    user_nickname: 'Shoegazerbaby',
                    time: '2019-10-31 17:59',
                    content: '我瞎说的',
                    star_cnt: 999,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331602313.jpg',
                    user_id: '15151',
                    user_nickname: 'Keadin',
                    time: '2019-10-31 17:59',
                    content: '纯路人 有一说一 确实',
                    star_cnt: 666,
                    i_stared: true
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    user_id: '15151',
                    user_nickname: '南國',
                    time: '2019-10-31 17:59',
                    content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈艹',
                    star_cnt: 0,
                    i_stared: false
                }]
            }
        },
        methods: {
            commentSwitch () {
                this.showComments = ! this.showComments
            },
            star () {
                this.momentData.star_cnt += (this.momentData.i_stared ? -1 : 1)
                this.momentData.i_stared = ! this.momentData.i_stared
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