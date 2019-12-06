<template>
    <div>
        <div class="block">
            <el-carousel height="420px">
                <el-carousel-item v-for="(item, index) in imgList" :key="index">
                    <a :href="item.target_url">
                        <img :src="item.img_url" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-carousel",
        data () {
            return {
                imgList: []
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.post(that.$store.state.api + '/v1/ads/index_ads')
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if (Data.code === 0) {
                            that.imgList = Data.data
                        } else {
                            const msg = Data.msg
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
        }
    }
</script>

<style scoped>

</style>