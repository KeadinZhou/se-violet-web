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
                    'http://kealine.top/SE/bigimg/0',
                    'http://kealine.top/SE/bigimg/1',
                    'http://kealine.top/SE/bigimg/2',
                    'http://kealine.top/SE/bigimg/3',
                    'http://kealine.top/SE/bigimg/4'
                ]
            }
        }
    }
</script>

<style scoped>

</style>