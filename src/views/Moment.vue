<template>
    <div>
        <moment-frame
                v-for="(item,index) in momentsList"
                :key="index"
                :moment-data="item">
        </moment-frame>
    </div>
</template>

<script>
    import MomentFrame from '@/components/pageitems/moment-frame'

    export default {
        name: "Moment",
        components: {
            'moment-frame': MomentFrame
        },
        data() {
            return {
                momentsList: [{
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Shoegazerbaby',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    time: '2019-10-31 17:59',
                    content: '平克弗洛伊德在这张名为《Meddle》的第六张专辑中，终于产生了脱离Syd Barrett之后的第一首经典代表作——《Echoes》。歌名就像他们制作这张专辑的过程一样。回声——像是乐队的前进方向有了回应，乐迷也给予了积极的反馈。犹如一个人走在空旷黑暗的环境中，喊了一声，若没有回音，可知面临的是怎样的空旷。1971年，皇后乐队成立，披头士则已经散伙一年。朋克浪潮还在孕育中，那群组成Sex Pistols的混子们还没有长大。',
                    about: 'Pink Floyd - Meddle',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 225,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: '南國',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604619.jpg',
                    time: '2019-10-31 17:59',
                    content: '唱出了多少人相似的童年，回不去的过去，想流泪却流不出来，怀念以前的时光。时代在呐喊，就给我们太多的虚叹，为了生活苟延残喘，忘记了给曾经的朋友一声问候，忘记了给父母一些关怀，忘记了什么时候回过一次家。想起以前和小伙伴一起跳皮筋，弹玻璃珠，打纸面包，每天下午放学回家无忧无虑的和小伙伴玩耍。现在的社会再也不会有那种感觉了，哪怕是现在的小孩子也找不到那个年代的纯真。虽然条件差但是每个人的过的踏实……',
                    about: '许嵩 - 雨幕',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 999,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Keadin',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    time: '2019-10-31 17:59',
                    content: '当周蕙的《Angel face》在耳边响起，我仿佛又被音乐那神奇的魔力打开了记忆，在《预言》中彻底融化了。 我很庆幸自己出身在80年代，在那个流行音乐还是那么纯粹的年代里，有着福茂唱片的陪伴。 在那个时候，我很喜欢一个台湾的女歌手叫范晓萱，在《深呼吸》的MTV里，一个白色连衣裙的少女，清澈如水，美丽如花，唱着淡淡的情歌，那时我顿然诧异，世间还有如此清纯的女子。是啊，只是被表象迷惑了，只是被一瞬间的悸动困住了内心，只是被比花还要美的容颜释放了激动。',
                    about: '周蕙 - Angel face',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 1520,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Shoegazerbaby',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    time: '2019-10-31 17:59',
                    content: '平克弗洛伊德在这张名为《Meddle》的第六张专辑中，终于产生了脱离Syd Barrett之后的第一首经典代表作——《Echoes》。歌名就像他们制作这张专辑的过程一样。回声——像是乐队的前进方向有了回应，乐迷也给予了积极的反馈。犹如一个人走在空旷黑暗的环境中，喊了一声，若没有回音，可知面临的是怎样的空旷。1971年，皇后乐队成立，披头士则已经散伙一年。朋克浪潮还在孕育中，那群组成Sex Pistols的混子们还没有长大。',
                    about: 'Pink Floyd - Meddle',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 225,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: '南國',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604619.jpg',
                    time: '2019-10-31 17:59',
                    content: '唱出了多少人相似的童年，回不去的过去，想流泪却流不出来，怀念以前的时光。时代在呐喊，就给我们太多的虚叹，为了生活苟延残喘，忘记了给曾经的朋友一声问候，忘记了给父母一些关怀，忘记了什么时候回过一次家。想起以前和小伙伴一起跳皮筋，弹玻璃珠，打纸面包，每天下午放学回家无忧无虑的和小伙伴玩耍。现在的社会再也不会有那种感觉了，哪怕是现在的小孩子也找不到那个年代的纯真。虽然条件差但是每个人的过的踏实……',
                    about: '许嵩 - 雨幕',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 999,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Keadin',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    time: '2019-10-31 17:59',
                    content: '当周蕙的《Angel face》在耳边响起，我仿佛又被音乐那神奇的魔力打开了记忆，在《预言》中彻底融化了。 我很庆幸自己出身在80年代，在那个流行音乐还是那么纯粹的年代里，有着福茂唱片的陪伴。 在那个时候，我很喜欢一个台湾的女歌手叫范晓萱，在《深呼吸》的MTV里，一个白色连衣裙的少女，清澈如水，美丽如花，唱着淡淡的情歌，那时我顿然诧异，世间还有如此清纯的女子。是啊，只是被表象迷惑了，只是被一瞬间的悸动困住了内心，只是被比花还要美的容颜释放了激动。',
                    about: '周蕙 - Angel face',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 1520,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Shoegazerbaby',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    time: '2019-10-31 17:59',
                    content: '平克弗洛伊德在这张名为《Meddle》的第六张专辑中，终于产生了脱离Syd Barrett之后的第一首经典代表作——《Echoes》。歌名就像他们制作这张专辑的过程一样。回声——像是乐队的前进方向有了回应，乐迷也给予了积极的反馈。犹如一个人走在空旷黑暗的环境中，喊了一声，若没有回音，可知面临的是怎样的空旷。1971年，皇后乐队成立，披头士则已经散伙一年。朋克浪潮还在孕育中，那群组成Sex Pistols的混子们还没有长大。',
                    about: 'Pink Floyd - Meddle',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 225,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: '南國',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604619.jpg',
                    time: '2019-10-31 17:59',
                    content: '唱出了多少人相似的童年，回不去的过去，想流泪却流不出来，怀念以前的时光。时代在呐喊，就给我们太多的虚叹，为了生活苟延残喘，忘记了给曾经的朋友一声问候，忘记了给父母一些关怀，忘记了什么时候回过一次家。想起以前和小伙伴一起跳皮筋，弹玻璃珠，打纸面包，每天下午放学回家无忧无虑的和小伙伴玩耍。现在的社会再也不会有那种感觉了，哪怕是现在的小孩子也找不到那个年代的纯真。虽然条件差但是每个人的过的踏实……',
                    about: '许嵩 - 雨幕',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 999,
                    i_stared: false
                }, {
                    moment_id: 123124124,
                    user_id: 2341234,
                    user_nickname: 'Keadin',
                    user_url: '#',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    time: '2019-10-31 17:59',
                    content: '当周蕙的《Angel face》在耳边响起，我仿佛又被音乐那神奇的魔力打开了记忆，在《预言》中彻底融化了。 我很庆幸自己出身在80年代，在那个流行音乐还是那么纯粹的年代里，有着福茂唱片的陪伴。 在那个时候，我很喜欢一个台湾的女歌手叫范晓萱，在《深呼吸》的MTV里，一个白色连衣裙的少女，清澈如水，美丽如花，唱着淡淡的情歌，那时我顿然诧异，世间还有如此清纯的女子。是啊，只是被表象迷惑了，只是被一瞬间的悸动困住了内心，只是被比花还要美的容颜释放了激动。',
                    about: '周蕙 - Angel face',
                    about_url: '#',
                    comment_cnt: 3,
                    star_cnt: 1520,
                    i_stared: false
                }]
            }
        }
    }
</script>

<style scoped>

</style>