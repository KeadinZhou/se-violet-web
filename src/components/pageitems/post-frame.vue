<template>
    <div class="post-frame">
        <div class="post-left-icon">
            <el-badge :value="postData.reply_cnt" type="primary">
                <i class="el-icon-chat-round" style="font-size: 30px"></i>
            </el-badge>
        </div>
        <div class="post-middle-box">
            <div>
                <el-link :href="postData.url" type="primary" class="post-title"><b>{{postData.title}}</b></el-link>
            </div>
            <div class="post-content">
                {{longCut(postData.content,100)}}
            </div>
        </div>
        <div class="post-right-box">
            <div>
                <i class="el-icon-user"></i>&nbsp;
                <el-link style="font-size: 14px">{{postData.user_nickname}}</el-link>
            </div>
            <div>
                <i class="el-icon-connection"></i>&nbsp;
                <el-link style="font-size: 14px">{{postData.time}}</el-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post-frame",
        props: {
            postData: Object
        },
        data () {
            return {
                loading: false,
                isRefresh: true,
            }
        },
        methods: {
            longCut(s, len){
                s = String(s)
                if(s.length>len){
                    return s.substr(0, len-3)+'...'
                }
                return s
            }
        }
    }
</script>

<style scoped>
    .post-frame{
        padding: 20px 10px;
        /*background: #AAA;*/
        display: flex;
        transition: all 0.2s ease-in-out;
    }
    .post-frame:hover{
        background: #FFFFFF;
    }
    .post-left-icon{
        margin: 20px;
        display: inline-block;
    }
    .post-middle-box{
        margin: 0 20px;
        padding: 0;
        height: 70px;
        display: inline-block;
        /*background: #BBB;*/
        width: calc( 100% - 30px - 20px - 20px - 20px - 150px );
    }
    .post-right-box{
        margin: 0 20px;
        height: 50px;
        width: 160px;
        /*background: #13ce66;*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        font-size: 14px;
    }
    .post-title{
        font-size: 16px;
        margin-bottom: 4px;
    }
    .post-content{
        color: #999999;
        font-size: 14px;
    }
</style>