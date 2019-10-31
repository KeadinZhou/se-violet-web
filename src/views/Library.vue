<template>
    <div>
        <div class="search-box">
            <img src="@/assets/logo.png" alt="" width="180px">
            <div style="margin: 20px"></div>
            <el-input placeholder="键入关键词在曲库中进行搜索" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Library",
        data () {
            return {
                keyword: ''
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