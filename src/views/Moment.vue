<template>
    <div>
        <moment-sender @sendOK="getData"></moment-sender>
        <moment-frame
                v-for="(item,index) in momentsList"
                :key="index"
                :moment-data="item">
        </moment-frame>
    </div>
</template>

<script>
    import MomentFrame from '@/components/moment-page/moment-frame'
    import MomentSender from '@/components/moment-page/moment-sender'
    export default {
        name: "Moment",
        components: {
            'moment-frame': MomentFrame,
            'moment-sender': MomentSender
        },
        data() {
            return {
                momentsList: []
            }
        },
        methods: {
            getData() {
                const that = this
                that.$http.post(that.$store.state.api + '/v1/zone/load_zone')
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.momentsList = []
                            for(const item of Data.data) {
                                that.momentsList.push({
                                    moment_id: item.zone_id,
                                    user_id: item.user_id,
                                    user_nickname: item.user_nickname,
                                    user_url: '#/user?userid=' + item.user_id,
                                    img_url: that.$store.state.headurl + item.user_id % 30,
                                    time: item.create_time,
                                    content: item.content,
                                    about: null,
                                    about_url: '#',
                                    comment_cnt: item.comment_count,
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
            this.getData()
        }
    }
</script>

<style scoped>

</style>