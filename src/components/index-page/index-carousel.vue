<template>
    <div>
        <div class="block">
            <el-carousel height="420px">
                <el-carousel-item v-for="(item, index) in imgList" :key="index">
                    <img :src="item" alt="">
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
                imgList: [
                    'http://kealine.top/SE/img/big/mxcp_1572420345368_109951164457734015.jpg',
                    'http://kealine.top/SE/img/big/mxcp_1572420369681_109951164457731257.jpg',
                    'http://kealine.top/SE/img/big/mxcp_1572519326336_109951164458569349.jpg',
                    'http://kealine.top/SE/img/big/mxcp_1572420388094_109951164457739003.jpg',
                ]
            }
        }
    }
</script>

<style scoped>

</style>