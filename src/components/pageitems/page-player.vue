<template>
    <div class="player">
        <span class="switch-button" @click="isMini=!isMini"><i :class="isMini?'el-icon-arrow-right':'el-icon-arrow-left'"></i></span>
        <div class="player-box">
            <Aplayer
                    theme="#9B59B6"
                    showLrc
                    :mini="isMini"
                    listMaxHeight="100px"
                    :music="musicList[0]"
                    :list="musicList">
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
                isMini: true,
                musicList: [{
                    title: 'Lover',
                    artist: 'Taylor Swift',
                    src: 'http://kealine.top/SE/mp3/c551fb70807b248847b4e2b74dfd353a.mp3',
                    pic: 'http://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg',
                    lrc: '[00:00.000] 作曲 : Taylor Swift\n[00:01.000] 作词 : Taylor Swift\n[00:15.076]We could leave the Christmas lights up ‘til January\n[00:21.880]This is our place, we make the rules\n[00:28.012]And there\'s a dazzling haze\n[00:29.726]A mysterious way\n[00:31.423]About you dear\n[00:34.542]Have I known you twenty seconds\n[00:37.753]Or twenty years?\n[00:40.327]\n[00:41.609]Can I go where you go?\n[00:49.032]Can we always be this close\n[00:54.345]Forever and ever?\n[00:56.043]And ah, take me out\n[00:58.690]And take me home\n[01:02.641]You\'re my, my, my, my\n[01:09.583]Lover\n[01:10.477]\n[01:17.930]We can let our friends crash in the living room\n[01:24.910]This is our place, we make the call\n[01:31.001]And I\'m highly suspicious\n[01:32.997]That everyone who sees you wants you\n[01:37.888]I\'ve loved you three summers now, honey\n[01:40.806]But I want them all\n[01:43.624]\n[01:45.225]Can I go where you go?\n[01:51.874]Can we always be this close?\n[01:57.295]Forever and ever\n[01:58.982]And ah, take me out\n[02:01.749]And take me home (forever and ever)\n[02:05.989]You\'re my, my, my, my\n[02:12.406]Lover\n[02:13.572]\n[02:13.874]Ladies and gentlemen\n[02:14.999]Will you please stand\n[02:16.475]With every guitar string scar on my hand\n[02:19.926]I take this magnetic force of a man\n[02:23.324]To be my lover\n[02:26.576]\n[02:27.027]My heart’s been borrowed\n[02:28.638]And yours has been blue\n[02:30.392]All’s well that ends well\n[02:32.321]To end up with you\n[02:33.945]Swear to be overdramatic and true\n[02:37.696]To my lover\n[02:40.920]\n[02:41.077]And you\'ll save all your dirtiest jokes for me\n[02:47.712]And at every table\n[02:50.681]I\'ll save you a seat, lover\n[02:55.036]\n[02:55.471]Can I go where you go?\n[03:01.933]And can we always be this close\n[03:07.250]Forever and ever\n[03:09.050]And ah, take me out\n[03:11.695]And take me home (forever and ever)\n[03:16.137]Your my my my my\n[03:22.637]Oh, you\'re my my my my\n[03:29.716]Darling, you\'re my my my my\n[03:36.500]Lover\n'
                },{
                    title: '失眠飞行',
                    artist: '沈以诚/薛明媛',
                    src: 'http://kealine.top/SE/mp3/0431c434b788a0a8a90f3658c6c0fd5f.mp3',
                    pic: 'http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg',
                    lrc: '[00:00.000] 作曲 : 接个吻，开一枪\n[00:00.004] 作词 : 沈以诚/刘思鉴/接个吻，开一枪\n[00:00.13] 编曲：接个吻，开一枪\n[00:01.10] 混音：接个吻，开一枪\n[00:02.90] 想要和你低空飞行\n[00:05.70] 和你到处收集氧气\n[00:07.95] 假如迷雾你看不清\n[00:10.74] 不如坠入我的心里\n[00:13.45] 想带你从吵闹到安宁\n[00:15.95] 想带你从多云到转晴\n[00:18.00] 想要为你整理衬衣\n[00:20.70] 为你到处收集诗句\n[00:23.90] 又过了每晚给你热牛奶的时间\n[00:26.70] 床头还写着我们没看完的影片\n[00:29.00] 离开后的时间里你是否还失眠\n[00:31.75]从不熬夜的我也明显黑了眼圈\n[00:34.00] 你送的玩偶依然陪在身边\n[00:39.00] 记忆逐渐浮现从开始到终点 又重演\n[00:43.00] 我想和你 一起闯进森林潜入海底\n[00:48.00] 我想和你 一起看日出到日落天气\n[00:52.95] 我想和你穿过格林威治和时间飞行\n[00:58.00] 我想见你 穿过教堂和人海拥抱你\n[01:02.80] 我想和你\n[01:13.40] 我想和你\n[01:23.90] 想要和你低空飞行\n[01:26.20] 和你到处收集氧气\n[01:28.70] 假如迷雾你看不清\n[01:31.20] 不如坠入我的心里\n[01:34.10] 想带你从吵闹到安宁\n[01:36.85] 想带你从多云到转晴\n[01:38.90] 想要为你整理衬衣\n[01:41.75] 为你到处收集诗句\n[01:44.75] 又过了每晚给你热牛奶的时间\n[01:47.10] 床头还写着我们没看完的影片\n[01:49.90] 离开后的时间里你是否还失眠\n[01:52.60] 从不熬夜的我也明显黑了眼圈\n[01:54.90] 你送的玩偶依然陪在身边\n[01:59.90] 记忆逐渐浮现从开始到终点 又重演\n[02:03.90] 我想和你 一起闯进森林潜入海底\n[02:08.90] 我想和你 一起看日出到日落天气\n[02:13.75] 我想和你穿过格林威治和时间飞行\n[02:18.96] 我想见你 穿过教堂和人海拥抱你\n[02:23.95] 我想和你\n[02:34.00] 我想和你\n[02:44.30] 我想和你\n[02:46.40] 再路过那家咖啡店\n[02:48.78] 熟悉又陌生的地点\n[02:50.70] 驻足希望你的身影会出现\n[02:56.30] 还没说出口的抱歉\n[02:58.75] 曾和你约定的诺言\n[03:00.80] 抬头闭眼让泪流进心里面\n[03:04.65] 我想和你 一起闯进森林潜入海底\n[03:09.75] 我想和你 一起看日出到日落天气\n[03:14.78] 我想和你穿过格林威治和时间飞行\n[03:19.05] 我想见你 穿过教堂和人海拥抱你\n[03:23.45] 母带工程师：殇小谨 \n[03:23.70] 录音室：tweak tone labs ( Beijing ）\n[03:24.00] 录音师：接个吻，开一枪 / 梁家银\n[03:25.10] 电吉他：接个吻，开一枪\n[03:25.45] 木吉他：接个吻，开一枪\n'
                },{
                    title: '心做し（Cover GUMI）',
                    artist: '双笙',
                    src: 'http://kealine.top/SE/mp3/3184a3dddf4fd51ec344e50721c6e983.mp3',
                    pic: 'http://p2.music.126.net/uwF73BxhvWiR-Kxn0wGe0g==/109951162927951204.jpg',
                    lrc: '[00:00.000] 作曲 : 蝶々P\n[00:00.580] 作词 : 蝶々P\n[00:01.740]ねぇもしも\n[00:03.900]全て投げ捨てられたら\n[00:07.480]笑って生きることが楽になるの\n[00:12.900]また胸が痛くなるから\n[00:17.300]もう何も言わないでよ\n[00:23.030]\n[00:47.400]ねぇもしも\n[00:48.900]全て忘れられたなら\n[00:52.850]泣かないで生きることも 楽になるの\n[00:58.730]でもそんな事出来ないから\n[01:02.910]もう何も見せないでよ\n[01:08.520]君にどれだけ近づいても\n[01:14.300]僕の心臓は一つだけ\n[01:20.520]酷いよ酷いよ\n[01:22.720]もういっそ僕の体を\n[01:25.720]壊して引き裂いて\n[01:28.600]好きなようにしてよ\n[01:31.300]叫んで藻掻いて\n[01:34.100]瞼を腫らしても\n[01:37.000]まだ君は僕の事を\n[01:39.850]抱きしめて離さない\n[01:42.760]もういいよ\n[01:46.800]\n[01:55.640]ねぇもしも\n[01:57.750]僕の願いが叶うなら\n[02:01.150]君と同じものが欲しいんだ\n[02:06.700]でも僕には存在しないから\n[02:11.450]じゃあ せめて此処に来てよ\n[02:18.350]\n[02:21.100]あ\n[02:42.300]君にどれだけ愛されても\n[02:48.090]僕の心臓は一つだけ\n[02:53.780]やめてよやめてよ\n[02:56.500]優しくしないでよ\n[02:59.390]どうしても僕には\n[03:02.300]理解ができないよ\n[03:05.060]痛いよ痛いよ\n[03:08.010]言葉で教えてよ\n[03:10.800]こんなの知らないよ\n[03:13.660]独りにしないで\n[03:16.600]酷いよ酷いよ\n[03:19.180]もういっそ僕の体を\n[03:22.210]壊して引き裂いて\n[03:24.970]好きなようにしてよ\n[03:27.800]叫んで藻掻いて\n[03:30.550]瞼を腫らしても\n[03:33.540]まだ君は僕の事を\n[03:36.250]抱きしめて離さない\n[03:39.290]もういいよ\n[03:45.510]\n[04:03.590]ねぇもしも\n[04:04.870]僕に心があるなら\n[04:09.060]どうやってそれを 見つければいいの\n[04:14.800]少し微笑んで君が言う\n[04:19.130]「それはねここにあるよ」\n[04:24.560]\n'
                },{
                    title: '雨幕',
                    artist: '许嵩',
                    src: 'http://kealine.top/SE/mp3/b39fb3c4423064af01ec5c81923f20c9.mp3',
                    pic: 'http://p1.music.126.net/QT7m6ctX-woeKI3A-mY3JA==/109951164428933842.jpg',
                    lrc: '[00:00.000] 作曲 : 许嵩\n[00:01.000] 作词 : 许嵩\n[00:36.420]桃花岛屿之巅\n[00:39.153]一座残碑镇住想念\n[00:42.866]故人题词十年前\n[00:46.633]而今古苔已横啮\n[00:51.035]冬深春浅时节\n[00:54.217]岛畔福船入港寒夜\n[00:57.653]蒙蒙雾气里跃上甲板\n[01:00.986]道声勿念\n[01:05.421]海上三日无言 卧听雨打舷\n[01:09.038]邻舱客叩门寒暄\n[01:12.837]他鹤发童颜 举着夜光杯\n[01:16.613]与我对饮舷窗前\n[01:19.906]窗外潇潇的雨幕里\n[01:23.163]飘然一曲诱我侧耳听\n[01:27.065]水面箫中剑的倒影\n[01:30.683]是爱中藏恨的诗句\n[01:34.424]我从潇潇的雨幕里\n[01:38.114]遥望漉雪千山都过尽\n[01:42.997]隔海隔山你的背影\n[02:02.700]冬深春浅时节\n[02:05.317]岛畔福船入港寒夜\n[02:09.098]蒙蒙雾气里跃上甲板\n[02:12.150]道声勿念\n[02:16.114]海上三日无言 卧听雨打舷\n[02:20.149]邻舱客叩门寒暄\n[02:24.114]他鹤发童颜 举着夜光杯\n[02:27.640]与我对饮舷窗前\n[02:31.021]窗外潇潇的雨幕里\n[02:34.424]飘然一曲诱我侧耳听\n[02:38.249]水面箫中剑的倒影\n[02:41.924]是爱中藏恨的诗句\n[02:45.768]我从潇潇的雨幕里\n[02:49.452]遥望漉雪千山都过尽\n[02:54.267]隔海隔山你的背影\n[03:01.852]窗外潇潇的雨幕里\n[03:04.473]飘然一曲诱我侧耳听\n[03:08.318]水面箫中剑的倒影\n[03:11.909]是爱中藏恨的诗句\n[03:15.749]我在潇潇的雨幕里\n[03:19.556]漉雪千山都过尽\n[03:24.115]隔海隔山你的背影\n[03:31.615]绯泊之间喘息渐停\n'
                }]
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