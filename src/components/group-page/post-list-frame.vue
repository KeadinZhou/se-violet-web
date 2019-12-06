<template>
    <div class="post-list-box">
        <post-frame v-for="(item,index) in postList" :key="index" :post-data="item"></post-frame>
    </div>
<!--    <content-frame no-title>-->
<!--        <template v-slot:content>-->
<!--            <div class="hot-postlist-box">-->
<!--            </div>-->
<!--        </template>-->
<!--    </content-frame>-->
</template>

<script>
    // import ContentFrame from '@/components/pageitems/content-frame'
    import PostFrame from '@/components/pageitems/post-frame'
    export default {
        name: "post-list-frame",
        components: {
            // 'content-frame': ContentFrame,
            'post-frame': PostFrame
        },
        data () {
            return {
                group_id: '',
                postList: []
            }
        },
        methods:{
            getGroupId () {
                const that = this
                if (that.$route.query.groupid) {
                    that.group_id = Number(that.$route.query.groupid)
                } else {
                    that.$router.push('/groups')
                }
            },
            getData(){
                const that= this
                let sendData = new FormData()
                sendData.append('group_id',that.group_id)
                that.$http.post(that.$store.state.api+'/v1/post/load_post',sendData)
                    .then(data =>{
                        const Data=data.data
                        console.log(Data)
                        if (Data.code === 0 ){
                            that.postList=[]
                            for (const item of Data.data){
                                console.log(item)
                                that.postList.push({
                                    post_id: item.post_id,
                                    reply_cnt: item.comment_count,
                                    title: item.post_title,
                                    content:item.content,
                                    url:'#/post?postid='+item.post_id,
                                    group_name: item.recent_time.substring(5),
                                    user_id:item.user_id,
                                    user_nickname:item.owner_nickname,
                                    gruop_id:item.group_id
                                })
                            }
                        }else {
                            const msg=Data.msg
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
            this.getGroupId()
        },
        watch: {
            '$route' () {
                this.getGroupId()
            },
            group_id: function () {
                this.getData()
            }
        }
    }
</script>

<style scoped>
    .post-list-box{
        background: #F5F5F9;
        padding: 10px;
    }
</style>