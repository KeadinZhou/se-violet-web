<template>
    <div>
        <group-page-head post-title="post_name"></group-page-head>
        <post-detail-frame
            v-for="(item,index) in commentsList"
            :key="index"
            :moment-data="item">
        </post-detail-frame>
        <post-sender :Item_id="Item_Id" :group_id="group_id" no-title @sendOKK="getData"></post-sender>
    </div>
</template>

<script>
    import GroupPageHead from '@/components/group-page/group-page-head'
    import PostDetailFrame from '@/components/group-page/post-detail-frame'
    import PostSender from '@/components/group-page/post-sender'
    export default {
        name: "Post",
        components: {
            'group-page-head': GroupPageHead,
            'post-sender': PostSender,
            'post-detail-frame': PostDetailFrame
        },
        data () {
            return {
                post_name:'',
                show: true,
                commentsList: [],
                Item_Id: '',
                group_id:''
            }
        },
        methods:{
            getItemId () {
                const that = this
                if (that.$route.query.postid) {
                    that.Item_id = Number(that.$route.query.postid)
                } else {
                    that.$router.push('/posts')
                }
            },
            getData() {
                const that = this
                var sendData = new FormData()
                sendData.append('post_id', that.Item_Id)
                that.$http.post(that.$store.state.api + '/v1/post/load_post_by_id', sendData)
                    .then(data => {
                        const Data = data.data

                        console.log(Data)
                        if(Data.code === 0){
                            that.post_name=Data.data[0].post_title
                            that.commentsList = []
                            for (const item of Data.comments) {
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
                            if (open) this.showComments = !this.showComments
                        } else {
                            const msg = Data.errMsg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for(const item in msg) {
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
            this.getItemId()
        },
        watch: {
            '$route' () {
                this.getItemId()
            },
            Item_Id: function () {
                this.getData()
            }
        }
    }
</script>
<style scoped>

</style>