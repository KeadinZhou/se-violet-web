<template>
    <div>
        <content-frame title="歌曲列表" :more="false">
            <template v-slot:content>
                <el-table :data="playlistData">
                    <el-table-column label="#" align="center" width="90">
                        <template slot-scope="scope">
                            <span @click="playSong(scope.row.id)" style="line-height: 20px">{{ scope.$index+1 }} <i class="el-icon-video-play play-button"></i></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="歌曲标题" align="left" width="400">
                        <template slot-scope="scope">
                            {{ scope.row.name }}
                        </template>
                    </el-table-column>
                    <el-table-column label="时长" align="left" width="90">
                        <template slot-scope="scope">
                            {{ songLen(scope.row.len) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="歌手" align="left">
                        <template slot-scope="scope">
                            <template v-for="(artist,index) in scope.row.artist">
                                <template v-if="index!==0">/</template>
                                {{ artist.name }}
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column label="专辑" align="left">
                        <template slot-scope="scope">
                            {{ scope.row.album.name }}
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </content-frame>
    </div>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    export default {
        name: "song-list-frame",
        components: {
            'content-frame': ContentFrame
        },
        data () {
            return {
                playlistData: [
                    {
                        id: 27678691,
                        name: '独处的时候',
                        artist: [
                            {
                                id: 12707,
                                name: '苏打绿'
                            }
                        ],
                        album: {
                            id: 2519094,
                            name: '秋：故事'
                        },
                        len: 274506
                    },
                    {
                        id: 25794009,
                        name: '裂缝中的阳光',
                        artist: [
                            {
                                id: 3684,
                                name: '林俊杰'
                            }
                        ],
                        album: {
                            id: 2301158,
                            name: ' 因你而在'
                        },
                        len: 228600
                    },
                    {
                        id: 1365393542,
                        name: ' 孤身',
                        artist: [
                            {
                                id: 1197168,
                                name: ' 徐秉龙'
                            }
                        ],
                        album: {
                            id: 79130968,
                            name: ' 孤身'
                        },
                        len: 211541
                    },
                    {
                        id: 432698831,
                        name: ' 我离孤单几公里',
                        artist: [
                            {
                                id: 861777,
                                name: ' 华晨宇'
                            }
                        ],
                        album: {
                            id: 34897688,
                            name: ' 我离孤单几公里'
                        },
                        len: 245435
                    },
                    {
                        id: 1302090508,
                        name: ' 自己的房间',
                        artist: [
                            {
                                id: 9548,
                                name: ' 田馥甄'
                            }
                        ],
                        album: {
                            id: 72302969,
                            name: ' 自己的房间'
                        },
                        len: 251620
                    },
                    {
                        id: 1294570781,
                        name: ' 挥手之间',
                        artist: [
                            {
                                id: 1058230,
                                name: ' 黑薄荷乐队'
                            }
                        ],
                        album: {
                            id: 78657494,
                            name: ' 在生命中奏响音乐'
                        },
                        len: 258510
                    },
                    {
                        id: 1400438197,
                        name: ' 最后一个失眠的夜晚',
                        artist: [
                            {
                                id: 13197170,
                                name: ' 仇志'
                            }
                        ],
                        album: {
                            id: 82922271,
                            name: ' 最后一个失眠的夜晚'
                        },
                        len: 230000
                    },
                    {
                        id: 1360807181,
                        name: ' 地球上最后的夜晚',
                        artist: [
                            {
                                id: 12084229,
                                name: ' 焦迈奇'
                            }
                        ],
                        album: {
                            id: 78720135,
                            name: ' 我的名字'
                        },
                        len: 245435
                    },
                    {
                        id: 1395252835,
                        name: ' 黑夜一束光',
                        artist: [
                            {
                                id: 1094010,
                                name: ' 摩登兄弟刘宇宁'
                            }
                        ],
                        album: {
                            id: 82167564,
                            name: ' 黑夜一束光'
                        },
                        len: 209349
                    },
                    {
                        id: 1400453119,
                        name: ' 生于理想',
                        artist: [
                            {
                                id: 13447762,
                                name: ' 陈亦云'
                            }
                        ],
                        album: {
                            id: 82924919,
                            name: ' 生于理想'
                        },
                        len: 262706
                    },
                    {
                        id: 108557,
                        name: ' 残酷月光',
                        artist: [
                            {
                                id: 3685,
                                name: ' 林宥嘉'
                            }
                        ],
                        album: {
                            id: 10776,
                            name: ' 神秘嘉宾'
                        },
                        len: 269400
                    },
                    {
                        id: 1399533630,
                        name: ' 与火星的孩子对话',
                        artist: [
                            {
                                id: 861777,
                                name: ' 华晨宇'
                            }
                        ],
                        album: {
                            id: 82784844,
                            name: ' 与火星的孩子对话'
                        },
                        len: 309537
                    },
                    {
                        id: 1398295408,
                        name: ' 自言自语',
                        artist: [
                            {
                                id: 12482069,
                                name: ' 七楼刘明'
                            }
                        ],
                        album: {
                            id: 82597568,
                            name: ' 十级孤独'
                        },
                        len: 257272
                    },
                    {
                        id: 355992,
                        name: ' 追梦赤子心',
                        artist: [
                            {
                                id: 11679,
                                name: ' GALA '
                            }
                        ],
                        album: {
                            id: 35139,
                            name: ' 追梦痴子心'
                        },
                        len: 317400
                    },
                    {
                        id: 1396073496,
                        name: ' 拾忆',
                        artist: [
                            {
                                id: 32399227,
                                name: ' 王巨星'
                            }
                        ],
                        album: {
                            id: 82575447,
                            name: ' 拾忆'
                        },
                        len: 268666
                    },
                    {
                        id: 1332662900,
                        name: ' Forever Young ',
                        artist: [
                            {
                                id: 167006,
                                name: ' 艾怡良'
                            }
                        ],
                        album: {
                            id: 74947015,
                            name: ' 垂直活着，水平留恋着。'
                        },
                        len: 313906
                    },
                    {
                        id: 1331919081,
                        name: ' 时光是座博物馆',
                        artist: [
                            {
                                id: 12037229,
                                name: ' 木小雅'
                            }
                        ],
                        album: {
                            id: 74812519,
                            name: ' 时光是座博物馆'
                        },
                        len: 220624
                    },
                    {
                        id: 1336856777,
                        name: ' 我曾',
                        artist: [
                            {
                                id: 12429072,
                                name: ' 隔壁老樊'
                            }
                        ],
                        album: {
                            id: 75019098,
                            name: ' 我曾'
                        },
                        len: 285995
                    },
                    {
                        id: 542667160,
                        name: ' 华年',
                        artist: [
                            {
                                id: 1195028,
                                name: ' 鹿先森乐队'
                            }
                        ],
                        album: {
                            id: 71810639,
                            name: ' 华年'
                        },
                        len: 259310
                    }
                ]
            }
        },
        methods: {
            songLen (len) {
                len /= 1000
                var m = Math.floor(len / 60)
                var s = Math.floor(len - m * 60)
                m = '' + m<10?'0'+m:m
                s = '' + s<10?'0'+s:s
                return m+':'+s
            },
            playSong (id) {
                alert('Playing ' + id)
            },
            KK (data) {
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    .play-button{
        cursor: pointer;
        /*font-size: 20px;*/
    }
    .play-button:hover{
        color: #9b59b6;
    }
</style>