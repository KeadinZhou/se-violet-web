<template>
    <content-frame title="热门歌单" more="/playlists">
        <template v-slot:content>
            <div class="hot-playlist-box">
                <img-name-box
                        v-for="(item, index) in playList"
                        :key="index"
                        :title="item.title"
                        :img-url="item.imgUrl"
                        :url="item.url"
                        :second-title="item.secondTitle">
                </img-name-box>
            </div>
        </template>
    </content-frame>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    import ImgNameBox from '@/components/pageitems/img-name-box'
    export default {
        name: "hot-playlist",
        components: {
            'content-frame': ContentFrame,
            'img-name-box': ImgNameBox
        },
        data () {
            return {
                playList: []
            }
        },
        methods: {
            getData(){
                const that= this
                that.playList = []
                that.$http.post(that.$store.state.api+'/v1/sheet/index_sheets')
                    .then(data =>{
                        const Data = data.data
                        console.log(Data)
                        that.playList = []
                        if(Data.code === 0){
                            for(const item of Data.data) {
                                that.playList.push({
                                    title: item.sheet_name,
                                    imgUrl: item.sheet_img?item.sheet_img:that.$store.state.playlistImg(item.sheet_id),
                                    url: '#/playlist?playlistid='+item.sheet_id,
                                    secondTitle: '播放量:'+item.play_times
                                })
                            }
                        }else {
                            const msg=Data.msg
                            console.log(msg)
                            if ((typeof msg) === 'string') {
                                that.$message.error(msg)
                            } else {
                                for(const item in msg) {
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
    .hot-playlist-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
    }
</style>