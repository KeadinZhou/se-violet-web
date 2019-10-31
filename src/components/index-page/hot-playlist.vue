<template>
    <content-frame title="热门歌单" more>
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
                playList: [
                    {
                        title: 'Cover集(那些开口就惊艳的翻唱）',
                        imgUrl: 'http://p1.music.126.net/SyOISKKFQVQKcpTfn7TDeQ==/109951164203396142.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '我曾经爱过她呢',
                        imgUrl: 'http://p2.music.126.net/WdSjDDqCbn0J3g0CW_1-Gw==/109951164329153331.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '你大可不必抽空来爱我',
                        imgUrl: 'http://p2.music.126.net/SB1V3U5hDnALTcej915V7A==/109951164186893497.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '神仙翻唱|个人向',
                        imgUrl: 'http://p2.music.126.net/uNz73r6RTseqgUhaVxXoBQ==/109951164359639566.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '听一曲北欧民谣 漫步在乡间小路上',
                        imgUrl: 'http://p1.music.126.net/rIoR-AhkTjuss7Z6R-2umQ==/109951164291066712.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '记得开心，即便在那些糟糕的日子里',
                        imgUrl: 'http://p2.music.126.net/LId1lziLGUEFjkFifN7_KA==/109951164385726883.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '「欧美冷门」拒绝平庸，旋律至上',
                        imgUrl: 'http://p1.music.126.net/YjX4fp1ya_135nlPWkvjZg==/109951164317240502.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '如果明天你还存在',
                        imgUrl: 'http://p1.music.126.net/msjlcj-pBXThEqD9HA8P-w==/109951164455536375.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: '你是人间理想',
                        imgUrl: 'http://p2.music.126.net/MXz18-SFdiiJL2lMQsw65g==/109951164408915066.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    },{
                        title: 'BODYJAM 92',
                        imgUrl: 'http://p1.music.126.net/WMZLMsaZAFN8gtWi6uGAJg==/109951164423492487.jpg',
                        url: '#',
                        secondTitle: '播放量:19.2万'
                    }]
            }
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