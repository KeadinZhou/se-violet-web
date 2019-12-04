<template>
    <div class="comment-frame">
        <el-avatar
                :src="this.$store.state.user.img">
        </el-avatar>
        <div class="comment-body">
            <div class="comment-user-time-box">
                <el-input v-model="content" placeholder="评论内容">
                    <el-button slot="append" type="primary">发送</el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment-sender",
        props: {
            item_type: Number,
            item_id: Number
        },
        data () {
            return {
                content: ''
            }
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
        padding: 10px 20px 10px 40px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .comment-body{
        width: calc(100% - 60px);
    }
    .comment-user-time-box{
        height: 40px;
    }
</style>