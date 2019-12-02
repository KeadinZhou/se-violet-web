<template>
    <div>
        <div class="group-page-head">
            <div class="group-info-box">
                <div class="group-name"><b>{{postTitle?postTitle:'文艺音乐点评'}}</b></div>
                <div><el-button size="small" round v-if="!postTitle">加入圈子</el-button></div>
            </div>
            <div class="group-img-box">
                <img src="http://p1.music.126.net/rIoR-AhkTjuss7Z6R-2umQ==/109951164291066712.jpg" alt="" width="200px">
            </div>
        </div>
        <div class="head-bottom-line"></div>
    </div>
</template>

<script>
    export default {
        name: "group-page-head",
        props: {
            postTitle: String
        }
    }
</script>

<style scoped>
    .head-bottom-line{
        height: 30px;
        width: 100%;
        background: #9b59b6;
    }
    .group-page-head{
        display: flex;
        justify-content: space-between;
        justify-items: flex-end;
        background: linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #9b59b6 50%, #9b59b6 100%);
        padding: 0 30px;
    }
    .group-img-box{
        height: 200px;
        width: 200px;
        border-radius: 50%;
        overflow: hidden;
    }
    .group-info-box{
        margin-top: 150px;
        height: 50px;
        width: calc(100% - 200px);
        /*background: #999;*/
        display: flex;
        justify-content: space-between;
        justify-items: center;
    }
    .group-name{
        /*margin-top: 50%;*/
        font-size: 30px;
        color: #FFFFFF;
    }
</style>