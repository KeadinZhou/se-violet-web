<template>
    <content-frame title="热门帖子" icon="el-icon-chat-line-square">
        <template v-slot:content>
            <div class="hot-postlist-box">
                <post-frame v-for="(item,index) in postList" :key="index" :post-data="item"></post-frame>
            </div>
        </template>
    </content-frame>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    import PostFrame from '@/components/pageitems/post-frame'
    export default {
        name: "hot-post",
        components: {
            'content-frame': ContentFrame,
            'post-frame': PostFrame
        },
        data () {
            return {
                postList: [
                    // {
                    //     post_id: 1,
                    //     reply_cnt: 225,
                    //     title: '虚空黑暗里的一线光明和希望回声',
                    //     content: '平克弗洛伊德在这张名为《Meddle》(干涉)的第六张专辑中，终于产生了脱离Syd Barrett之后的第一首经典代表作——《Echoes》。歌名就像他们制作这张专辑的过程一样。回声——像是乐队的前进方向有了回应，乐迷也给予了积极的反馈。犹如一个人走在空旷黑暗的环境中，喊了一声，若没有回音，可知面临的是怎样的空旷。1971年，皇后乐队成立，披头士则已经散伙一年。朋克浪潮还在孕育中，那群组成Sex Pistols的混子们还没有长大。',
                    //     url: '#/post',
                    //     time: '2019-10-31 11:41:59',
                    //     user_id: '31701030',
                    //     user_nickname: 'Shoegazerbaby',
                    //     group_id: '111111',
                    //     group_name: '文艺音乐点评'
                    // },{
                    //     post_id: 2,
                    //     reply_cnt: 156,
                    //     title: '怀念曾经',
                    //     content: '唱出了多少人相似的童年，回不去的过去，想流泪却流不出来，怀念以前的时光。时代在呐喊，就给我们太多的虚叹，为了生活苟延残喘，忘记了给曾经的朋友一声问候，忘记了给父母一些关怀，忘记了什么时候回过一次家。想起以前和小伙伴一起跳皮筋，弹玻璃珠，打纸面包，每天下午放学回家无忧无虑的和小伙伴玩耍。现在的社会再也不会有那种感觉了，哪怕是现在的小孩子也找不到那个年代的纯真。虽然条件差但是每个人的过的踏实……',
                    //     url: '#/post',
                    //     time: '2019-10-31 11:41:59',
                    //     user_id: '31701030',
                    //     user_nickname: 'Keadin',
                    //     group_id: '111111',
                    //     group_name: 'Violet社区官方'
                    // },{
                    //     post_id: 3,
                    //     reply_cnt: 52,
                    //     title: '这是一张典型的台湾年轻音乐人风格的专辑',
                    //     content: '情感丰富 饱满 故事性极强 却又那么真实 以《爱丽丝》歌词里写的那样开篇 “故事有些莫名其妙开始了” “黑白的颜色 配乐是哭声” 从《爱丽丝》开始 到《喧闹》 故事在逐渐往下的情绪里讲完 全部情绪收在心里 然后寻找突破口 但不会有压抑感和负面感 旋律相对轻快且有一定起伏 《小星星》的时候会开始变得缓慢沉重 在《艺术家的假期》里开始挣脱 释放 这首歌里他丢掉了所有的束缚 不管旋律 不管配乐 不管唱法 不管是否搭调 用他最真实最舒适的方式去撕开那道口子',
                    //     url: '#/post',
                    //     time: '2019-10-31 11:41:59',
                    //     user_id: '31701030',
                    //     user_nickname: 'StupidTurtle',
                    //     group_id: '111111',
                    //     group_name: '与众不同的态度'
                    // },{
                    //     post_id: 4,
                    //     reply_cnt: 10,
                    //     title: 'Angel face',
                    //     content: '当周蕙的《Angel face》在耳边响起，我仿佛又被音乐那神奇的魔力打开了记忆，在《预言》中彻底融化了。 我很庆幸自己出身在80年代，在那个流行音乐还是那么纯粹的年代里，有着福茂唱片的陪伴。 在那个时候，我很喜欢一个台湾的女歌手叫范晓萱，在《深呼吸》的MTV里，一个白色连衣裙的少女，清澈如水，美丽如花，唱着淡淡的情歌，那时我顿然诧异，世间还有如此清纯的女子。是啊，只是被表象迷惑了，只是被一瞬间的悸动困住了内心，只是被比花还要美的容颜释放了激动。',
                    //     url: '#/post',
                    //     time: '2019-10-31 11:41:59',
                    //     user_id: '31701030',
                    //     user_nickname: '淡人',
                    //     group_id: '111111',
                    //     group_name: '不喜欢世界只喜欢你'
                    // },{
                    //     post_id: 5,
                    //     reply_cnt: 1,
                    //     title: '嘿，你有点生不逢时',
                    //     content: '周深应该挺羡慕朱七的吧，尤其是第一张专辑把《大鱼》放进去了（尽管是重新编曲）独立音乐人最大的优势是可以唱自己所以现在很多还是夸周深的声音好听，无数溢美之词都不过分的好听但是朱七顶着不怎么好听的声音，做了这张专辑没火，但朱七的人生是完整的(或许只是他有关于阅读的人生)高晓松挺欣赏周深的可能只停留在欣赏周深的声音我挺希周深有一张完整的，有概念的，有人生感的专辑但挺难的毕竟周董 JJ都已经几年憋一首单曲了其实挺期待《说好不哭》可以扩展成《说好范特西》可能这就是时代吧',
                    //     url: '#/post',
                    //     time: '2019-10-31 11:41:59',
                    //     user_id: '31701030',
                    //     user_nickname: '南國',
                    //     group_id: '111111',
                    //     group_name: 'Kealine-Pop'
                    // }
                ]
            }
        },
        methods:{
            getData(){
                const that= this
                that.$http.post(that.$store.state.api+'/v1/post/index_posts')
                    .then(data =>{
                        const Data=data.data
                        console.log(Data)
                        if (Data.code === 0 ){
                            that.postList=[]
                            for (const item of Data.data){
                                console.log(item)
                                that.postList.push({
                                    post_id: item.post_id,
                                    reply_cnt: item.comment_count,
                                    title: item.post_title,
                                    content:item.content,
                                    url:'#/post?postid='+item.post_id,
                                    group_name: item.group_name,
                                    user_id:item.user_id,
                                    user_nickname:item.owner_nickname,
                                    gruop_id:item.group_id,
                                    link: '#/group?groupid='+item.group_id
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
        created(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>