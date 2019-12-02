<template>
    <div>
        <div class="search-box">
            <img src="@/assets/logo.png" alt="" width="180px">
            <div style="margin: 20px"></div>
            <el-input placeholder="键入关键词在曲库中进行搜索" v-model="keyword">
                <el-button slot="append" icon="el-icon-search" @click="resShow=true"></el-button>
            </el-input>
        </div>
        <transition name="el-zoom-in-top">
            <song-list-frame :title="'\''+keyword+'\''+'  的搜索结果'" v-if="keyword&&resShow"></song-list-frame>
        </transition>
    </div>
</template>

<script>
    import SongListFrame from '@/components/detail-page/song-list-frame'
    export default {
        name: "Library",
        components: {
            'song-list-frame': SongListFrame
        },
        data () {
            return {
                resShow: false,
                keyword: ''
            }
        },
        watch: {
            keyword: function(){
                this.resShow = false
            }
        }
    }
</script>

<style scoped>
    .search-box{
        display: flex;
        width: 80%;
        height: 550px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>