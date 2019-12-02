<template>
    <div class="post-sender">
        <div class="post-sender-box">
            <el-input
                    v-if="!noTitle"
                    v-model="title"
                    placeholder="帖子标题">
            </el-input>
            <el-input
                    style="margin: 10px 0"
                    type="textarea"
                    :autosize="{ minRows: 5, maxRows: 10}"
                    placeholder="内容"
                    v-model="text">
            </el-input>
            <el-button type="primary" style="width: 100%" @click="sendPost">发送</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post-sender",
        props: {
            noTitle: Boolean
        },
        data () {
            return {
                title: '',
                text: ''
            }
        },
        methods: {
            sendPost () {
                this.$message.success('发送成功！！！')
            }
        }
    }
</script>

<style scoped>
    .post-sender{
        width: calc(100% - 100px);
        background: #F5F5F9;
        padding: 50px;
    }
    .post-sender-box{
        width: 100%;
    }
</style>