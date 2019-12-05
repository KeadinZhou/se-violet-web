<template>
    <div>
        <content-frame title="评论列表" :more="false" icon="el-icon-chat-line-square">
            <template v-slot:content>
                <comment-sender :item_type="2" :item_id="playlist_id" @sendOK="getData"></comment-sender>
                <comment-frame
                        v-for="(item,index) in commentsList"
                        :key="index"
                        :comment-data="item">
                </comment-frame>
            </template>
        </content-frame>
    </div>
</template>

<script>
    import CommentSender from '@/components/moment-page/comment-sender'
    import ContentFrame from '@/components/pageitems/content-frame'
    import CommentFrame from '@/components/pageitems/comment-frame'
    export default {
        name: "detail-page-comment",
        components: {
            'content-frame': ContentFrame,
            'comment-frame': CommentFrame,
            'comment-sender': CommentSender
        },
        props: {
            playlist_id: Number
        },
        data () {
            return {
                commentsList: []
            }
        },
        methods: {
            getData () {
                const that = this
                var sendData = new FormData()
                sendData.append('item_type', 2)
                sendData.append('item_id', that.playlist_id)
                that.$http.post(that.$store.state.api + '/v1/comment/load_comment', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if (Data.code === 0) {
                            that.commentsList = []
                            for (const item of Data.data) {
                                that.commentsList.push({
                                    comment_id: item.comment_id,
                                    img_url: that.$store.state.headurl + item.user_id % 30,
                                    user_id: item.user_id,
                                    user_nickname: item.user_nickname,
                                    time: item.create_time,
                                    content: item.content,
                                    star_cnt: item.thumbs_up_num,
                                    i_stared: item.is_liked
                                })
                            }
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for (const item in msg) {
                                    that.$message.error(msg[item][0])
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response)
                            that.$message.error('系统错误')
                        }
                    })
            }
        },
        created () {
            this.getData()
        },
        watch: {
            playlist_id: function () {
                this.getData()
            }
        }
    }
</script>

<style scoped>

</style>