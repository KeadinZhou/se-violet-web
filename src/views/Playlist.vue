<template>
    <div>
        <detail-page-head v-if="playlist_info" :info="playlist_info" @playall="playAllSongs" :is-loading="isLoading"></detail-page-head>
        <song-list-frame v-if="songs" :song-list-data="songs"></song-list-frame>
        <detail-page-comment v-if="playlist_id" :playlist_id="playlist_id"></detail-page-comment>
    </div>
</template>

<script>
    import SongListFrame from '@/components/detail-page/song-list-frame'
    import DetailPageHead from '@/components/detail-page/detail-page-head'
    import DetailPageComment from '@/components/detail-page/detail-page-comment'
    export default {
        name: "Playlist",
        components: {
            'song-list-frame': SongListFrame,
            'detail-page-head': DetailPageHead,
            'detail-page-comment': DetailPageComment
        },
        data () {
            return {
                playlist_id: '',
                playlist_info: null,
                songs: null,
                allSongs: null,
                okCnt: 0,
                isLoading: false
            }
        },
        methods: {
            getPlaylistId () {
                const that = this
                if (that.$route.query.playlistid) {
                    that.playlist_id = Number(that.$route.query.playlistid)
                } else {
                    that.$router.push('/playlists')
                }
            },
            checkToPlayAll () {
                const that = this
                if(that.okCnt<that.songs.length){
                    setTimeout(()=>{
                        that.checkToPlayAll()
                    },500)
                } else {
                    that.$store.commit('updatePlayList', that.allSongs)
                    setTimeout(()=>{
                        document.getElementsByTagName("audio")[0].play()
                        that.isLoading = false
                    }, 1000)
                }
            },
            singersToString (singers) {
                var res= ''
                for(var index in singers) {
                    if(index > 0) res += '/'
                    res += singers[index]
                }
                return res
            },
            playAllSongs () {
                const that = this
                that.allSongs = []
                that.okCnt = 0
                that.isLoading = true
                for(const song of that.songs){
                    let sendData = new FormData()
                    sendData.append('music163_id', song.music163_id)
                    sendData.append('song_id', song.song_id)
                    that.$http.post(that.$store.state.api + '/v1/song/geturl', sendData)
                        .then(data => {
                            const Data = data.data
                            console.log(Data)
                            if(Data.code === 0){
                                that.okCnt ++
                                if (Data.url) {
                                    that.allSongs.push({
                                        title: song.song_name,
                                        artist: that.singersToString(song.singers),
                                        src: Data.url,
                                        pic: song.song_img,
                                        lrc: Data.lrc
                                    })
                                }
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
                }
                that.checkToPlayAll()
            },
            getData () {
                const that = this
                var sendData = new FormData()
                sendData.append('sheet_id', that.playlist_id)
                that.$http.post(that.$store.state.api + '/v1/sheet/sheets_by_id', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 0){
                            that.playlist_info = Data.data[0]
                            that.songs = Data.songs
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
            }
        },
        created () {
            this.getPlaylistId()
        },
        watch: {
            '$route' () {
                this.getPlaylistId()
            },
            playlist_id: function () {
                this.getData()
            }
        }
    }
</script>

<style scoped>

</style>