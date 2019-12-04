<template>
    <div>
        <user-page-head :user="user_info" v-if="user_info"></user-page-head>
    </div>
</template>

<script>
    import UserPageHead from '@/components/user-page/user-page-head'
    export default {
        name: "User",
        components: {
            'user-page-head': UserPageHead
        },
        data () {
            return {
                user_id: '',
                user_info: null
            }
        },
        methods: {
            getUserId () {
                if (this.$route.query.userid) {
                    this.user_id = this.$route.query.userid
                } else {
                    this.user_id = this.$store.state.user.userid
                }
            },
            getData () {
                const that = this
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