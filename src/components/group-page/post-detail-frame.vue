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
                            <el-badge :value="momentData.star_cnt" class="comment-star-button" type="primary" :max="999">
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