<template>
    <div class="detail-page-head">
        <img :src="info.sheet_img?info.sheet_img:this.$store.state.playlistImg(info.sheet_id)" alt="" width="300px">
        <div class="detail-page-head-right-box">
            <div class="detail-page-title-box">
                <div class="detail-page-title">{{info.sheet_name}}&nbsp;&nbsp;<el-tag>{{info.owner_id===0?'专辑':'歌单'}}</el-tag></div>
                <div class="detail-page-user" v-if="info.owner_id!==0">
                    <span><i class="el-icon-user"></i>&nbsp;<el-link style="font-size: 16px" :href="'/user?userid='+owner_id">{{info.owner}}</el-link></span>
                    <span style="color: #72767b;margin-left: 20px">创建</span>
                </div>
                <div class="detail-page-data">
                    <p>播放量：{{info.play_times}}</p>
                    <p>收藏量：{{info.follow_num}}</p>
                    <p>评论量：{{info.comment_count}}</p>
                </div>
                <div class="detail-page-description">简介：{{info.info?info.info:'无'}}</div>
                <div class="buttons-box">
                    <el-button class="detail-page-button" type="primary" icon="el-icon-caret-right" @click="playAll">播放</el-button>
                    <el-button class="detail-page-button" plain icon="el-icon-star-off">收藏</el-button>
                    <el-button class="detail-page-button" plain icon="el-icon-share">分享</el-button>
                    <el-button class="detail-page-button" plain icon="el-icon-download">下载</el-button>
                    <el-button class="detail-page-button" plain icon="el-icon-chat-line-square">评论</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail-page-head",
        props: {
            info: Object
        },
        methods: {
            playAll () {
                this.$emit('playall', true)
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
        font-size: 30px;
    }
    .buttons-box{
        display: flex;
        justify-items: center;
        justify-content: space-between;
    }
    .detail-page-button{
        width: 200px;
    }
    .detail-page-description{
        color: #72767b;
    }
</style>