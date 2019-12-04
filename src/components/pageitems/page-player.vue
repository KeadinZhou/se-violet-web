<template>
    <div class="player">
        <span class="switch-button" @click="isMini=!isMini"><i :class="isMini?'el-icon-arrow-right':'el-icon-arrow-left'"></i></span>
        <div class="player-box">
            <Aplayer
                    theme="#9B59B6"
                    showLrc
                    :mini="isMini"
                    listMaxHeight="100px"
                    :music="this.$store.state.nowPlaying"
                    :list="this.$store.state.playList">
            </Aplayer>
        </div>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    export default {
        name: "page-player",
        components: {
            Aplayer
        },
        data() {
            return {
                isMini: true
            }
        }
    }
</script>

<style scoped>
    .player{
        position: fixed;
        float: left;
        /*top: 50%;*/
        /*transform: translate(0,-50%);*/
        bottom: 50px;
        max-width: 620px;
        background: rgba(0,0,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2019;
    }
    .player-box{
        width: 600px;
        float: right;
    }
    .switch-button{
        cursor: pointer;
    }
</style>