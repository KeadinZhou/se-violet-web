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
                this.commentData.star_cnt += (this.commentData.i_stared ? -1 : 1)
                this.commentData.i_stared = ! this.commentData.i_stared
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