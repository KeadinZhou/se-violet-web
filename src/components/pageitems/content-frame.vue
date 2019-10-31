<template>
    <div class="frame-box">
        <div class="frame-top">
            <span class="frame-title"><i :class="icon?icon:'el-icon-headset'" style="color: #9b59b6"></i><b> {{title}}</b></span>
            <el-button type="text" style="float: right" v-if="more">更多</el-button>
        </div>
        <div class="frame-line"></div>
        <div class="frame-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "content-frame",
        props: {
            title: String,
            more: Boolean,
            icon: String
        }
    }
</script>

<style scoped>
    .frame-box{
        margin:50px 0;
    }
    .frame-top{
        height: 30px;
    }
    .frame-title{
        font-size: 20px;
        letter-spacing: 5px;
        line-height: 20px;
    }
    .frame-line{
        height: 4px;
        background: #9b59b6;
        margin-top: 10px;
    }
    .frame-content{
        background: #F5F5F9;
        padding: 10px;
    }
</style>