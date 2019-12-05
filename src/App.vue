<template>
  <div id="app" ref="pageBox">
    <el-scrollbar class="scrollbar">
      <page-player></page-player>
      <div id="appBox">
        <page-nav></page-nav>
        <div class="page-main-box" ref="pageMainBox">
          <router-view/>
        </div>
        <page-foot></page-foot>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
  import PageNav from '@/components/pageitems/page-nav'
  import PageFoot from '@/components/pageitems/page-foot'
  import PagePlayer from '@/components/pageitems/page-player'
  export default {
    name: 'App',
    components: {
      'page-nav': PageNav,
      'page-foot': PageFoot,
      'page-player': PagePlayer
    },
    data () {
      return {
        clientHeight: window.innerHeight,
        clientWidth: window.innerWidth
      }
    },
    methods: {
      fixBox () {
        this.clientHeight = window.innerHeight
        this.clientWidth = window.innerWidth
        this.$refs.pageMainBox.style.minHeight = this.clientHeight - 61 - 44 - 120 + 10 + 'px'
        this.$refs.pageBox.style.height = this.clientHeight + 'px'
        this.$refs.pageBox.style.widows = this.clientWidth + 'px'
      }
    },
    mounted () {
      this.fixBox()
      const that = this
      window.onresize = () => {
        return (() => {
          that.fixBox()
        })()
      }
    }
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
    list-style-type: none;
  }
  #app{
    font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    overflow: hidden;
    width: 100%;
    min-width: 1080px;
  }
  #appBox{
    width: 1080px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
  }
  .page-main-box{
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
  }
  .scrollbar{
    height: 100%;
  }
  .el-scrollbar__wrap {
    overflow: auto;
  }
  .el-select-dropdown__wrap{
    overflow: scroll;
  }
</style>
