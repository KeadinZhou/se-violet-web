<template>
    <div id="page-top">
        <el-menu :default-active="this.$route.path" class="page-nav" style="height:60px;width:100%;z-index:1000" mode="horizontal" router>
            <el-menu-item index="/" class="nav-item" route="/">首页</el-menu-item>
            <el-menu-item index="/library" class="nav-item" route="/library">曲库</el-menu-item>
            <el-menu-item index="/group" class="nav-item" route="/group">圈子</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'page-nav',
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .nav-item{
        font-size: 16px;
    }
</style>
