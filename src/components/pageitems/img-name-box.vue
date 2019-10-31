<template>
    <div class="img-name-box">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="imgUrl"  alt="" width="180px" height="180px">
            <div style="padding: 10px;height: 60px">
                <p style="font-size: 14px"><el-link :underline="false" :href="url" :title="title">{{titleCut(title)}}</el-link></p>
                <p style="font-size: 13px;color: #999">{{secondTitle}}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "img-name-box",
        props: {
            imgUrl: String,
            url: String,
            title: String,
            secondTitle: String
        },
        methods: {
            titleCut (title) {
                title = String(title)
                if (title.length > 18) {
                    return title.substr(0,17) + '...'
                }
                return title
            }
        }
    }
</script>

<style scoped>
    .img-name-box{
        width: 180px;
        height: 290px;
        display: inline-block;
        margin: 15px;
    }
</style>