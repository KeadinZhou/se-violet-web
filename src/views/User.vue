<template>
    <div v-if="user_info">
        <user-page-head :user="user_info"></user-page-head>
        <user-page-playlist :user_id="user_info.userId"></user-page-playlist>
    </div>
</template>

<script>
    import UserPageHead from '@/components/user-page/user-page-head'
    import UserPagePlaylist from '@/components/user-page/user-page-playlist'
    export default {
        name: "User",
        components: {
            'user-page-head': UserPageHead,
            'user-page-playlist': UserPagePlaylist
        },
        data () {
            return {
                user_id: '',
                user_info: null
            }
        },
        methods: {
            getUserId () {
                const that = this
                if (that.$route.query.userid) {
                    that.user_id = that.$route.query.userid
                } else {
                    if (!that.$store.state.user.userid) {
                        setTimeout(()=>{that.getUserId()},500)
                    }
                    that.user_id = that.$store.state.user.userid
                }
            },
            getData () {
                const that = this
                if(!that.user_id) return
                var sendData = new FormData()
                sendData.append('uid', that.user_id)
                that.$http.post(that.$store.state.api + '/v1/user/search', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 200){
                            that.user_info = Data.user
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
            this.getUserId()
        },
        watch: {
            '$route' () {
                this.getUserId()
            },
            user_id: function () {
                this.getData()
            }
        }
    }
</script>

<style scoped>

</style>