<template>
    <div class="detail-page-head">
        <img src="https://p4.music.126.net/FlPMK7ifTw5Bw75nyXWqSg==/109951164475215683.jpg" alt="" width="300px">
        <div class="detail-page-head-right-box">
            <div class="detail-page-title-box">
                <div class="detail-page-title">在孤独难捱的日子里，哪首歌曾经陪伴过你?&nbsp;&nbsp;<el-tag>歌单</el-tag></div>
                <div class="detail-page-user">
                    <span><i class="el-icon-user"></i>&nbsp;<el-link style="font-size: 16px">-独守一人心-</el-link></span>
                    <span style="color: #72767b;margin-left: 20px">2019-11-08 创建</span>
                </div>
                <div class="detail-page-data">
                    <p>播放量：31701030</p>
                    <p>收藏量：51553</p>
                    <p>评论量：556</p>
                </div>
                <div class="detail-page-description">简介：在孤独的时候 给自己安慰 在寂寞的时候 给自己温暖 积累坚强 面对阳光</div>
                <div class="buttons-box">
                    <el-button class="detail-page-button" type="primary" icon="el-icon-caret-right">播放</el-button>
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
        name: "detail-page-head"
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