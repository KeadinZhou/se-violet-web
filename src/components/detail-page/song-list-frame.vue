<template>
    <div>
        <content-frame :title="title?title:'歌曲列表'" :more="false">
            <template v-slot:content>
                <el-table :data="songListData">
                    <el-table-column label="#" align="center" width="90">
                        <template slot-scope="scope">
                            <span @click="playSong(scope.row)" style="line-height: 20px">{{ scope.$index+1 }} <i class="el-icon-video-play play-button"></i></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="歌曲标题" align="left" width="400">
                        <template slot-scope="scope">
                            {{ scope.row.song_name }}
                        </template>
                    </el-table-column>
                    <el-table-column label="时长" align="left" width="90">
                        <template slot-scope="scope">
                            {{ songLen(scope.row.song_dt) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="歌手" align="left">
                        <template slot-scope="scope">
                            <template v-for="(artist,index) in scope.row.singers">
                                <template v-if="index!==0">/</template>
                                {{ artist }}
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column label="专辑" align="left">
                        <template slot-scope="scope">
                            {{ scope.row.song_album }}
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
        props: {
            title: String,
            songListData: Array
        },
        data () {
            return {
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
            singersToString (singers) {
                console.log(singers)
                var res= ''
                for(var index in singers) {
                    console.log(index)
                    if(index > 0) res += '/'
                    res += singers[index]
                }
                return res
            },
            playSong (song) {
                const that = this
                let sendData = new FormData()
                sendData.append('music163_id', song.music163_id)
                that.$http.post(that.$store.state.api + '/v1/song/geturl', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            if (!Data.url) {
                                that.$message.error('抱歉，没有该歌曲的版权')
                                return
                            }
                            that.$store.commit('addSong',{
                                title: song.song_name,
                                artist: that.singersToString(song.singers),
                                src: Data.url,
                                pic: song.song_img,
                                lrc: Data.lrc
                            })
                            setTimeout(()=>{
                                document.getElementsByTagName("audio")[0].play()
                            }, 500)
                        } else {
                            const msg = Data.errMsg
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