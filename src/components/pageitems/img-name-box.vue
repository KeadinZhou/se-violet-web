<template>
    <div v-if="round" class="img-name-box-round">
        <div class="img-box img-box-round">
            <a :href="url"><img :src="imgUrl"  alt="" width="180px" height="180px"></a>
        </div>
        <div style="padding: 10px;height: 60px">
            <p style="font-size: 14px"><el-link :underline="false" :href="url" :title="title">{{longCut(title,titleLen?titleLen:18)}}</el-link></p>
            <p style="font-size: 13px;color: #999">{{secondTitle}}</p>
        </div>
    </div>
    <div v-else class="img-name-box">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="img-box">
                <a :href="url"><img :src="imgUrl"  alt="" width="180px" height="180px"></a>
            </div>
            <div style="padding: 10px;height: 60px">
                <p style="font-size: 14px"><el-link :underline="false" :href="url" :title="title">{{longCut(title,titleLen?titleLen:18)}}</el-link></p>
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
            secondTitle: String,
            titleLen: Number,
            round: Boolean
        },
        methods: {
            longCut (s, len) {
                s = String(s)
                if (s.length > len) {
                    return s.substr(0,len-1) + '...'
                }
                return s
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
        text-align: center;
    }
    .img-name-box-round{
        width: 180px;
        height: 250px;
        display: inline-block;
        margin: 15px;
        text-align: center;
    }
    .img-box{
        width: 180px;
        height: 180px;
        overflow: hidden;
    }
    .img-box-round{
        border-radius: 50%;
        overflow: hidden;
    }
    .img-box>a>img{
        transition: all .5s;
    }
    .img-box>a>img:hover{
        transform: scale(1.2);
    }
</style>