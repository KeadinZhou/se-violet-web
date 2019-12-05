import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = 'http://shysimon.cn:5000'
const headurl = 'http://kealine.top/SE/head/'
const groupurl = 'http://kealine.top/SE/group/'
const playlistpurl = 'http://kealine.top/SE/playlist/'
// const api = 'http://10.66.2.108:5000'

const USER_NULL={
  userid: null,
  email: null,
  nickname: '登录/注册',
  permission: -9
}

const PLAY_LIST=[{
  title: 'Lover',
  artist: 'Taylor Swift',
  src: 'http://kealine.top/SE/mp3/c551fb70807b248847b4e2b74dfd353a.mp3',
  pic: 'http://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg',
  lrc: '[00:00.000] 作曲 : Taylor Swift\n[00:01.000] 作词 : Taylor Swift\n[00:15.076]We could leave the Christmas lights up ‘til January\n[00:21.880]This is our place, we make the rules\n[00:28.012]And there\'s a dazzling haze\n[00:29.726]A mysterious way\n[00:31.423]About you dear\n[00:34.542]Have I known you twenty seconds\n[00:37.753]Or twenty years?\n[00:40.327]\n[00:41.609]Can I go where you go?\n[00:49.032]Can we always be this close\n[00:54.345]Forever and ever?\n[00:56.043]And ah, take me out\n[00:58.690]And take me home\n[01:02.641]You\'re my, my, my, my\n[01:09.583]Lover\n[01:10.477]\n[01:17.930]We can let our friends crash in the living room\n[01:24.910]This is our place, we make the call\n[01:31.001]And I\'m highly suspicious\n[01:32.997]That everyone who sees you wants you\n[01:37.888]I\'ve loved you three summers now, honey\n[01:40.806]But I want them all\n[01:43.624]\n[01:45.225]Can I go where you go?\n[01:51.874]Can we always be this close?\n[01:57.295]Forever and ever\n[01:58.982]And ah, take me out\n[02:01.749]And take me home (forever and ever)\n[02:05.989]You\'re my, my, my, my\n[02:12.406]Lover\n[02:13.572]\n[02:13.874]Ladies and gentlemen\n[02:14.999]Will you please stand\n[02:16.475]With every guitar string scar on my hand\n[02:19.926]I take this magnetic force of a man\n[02:23.324]To be my lover\n[02:26.576]\n[02:27.027]My heart’s been borrowed\n[02:28.638]And yours has been blue\n[02:30.392]All’s well that ends well\n[02:32.321]To end up with you\n[02:33.945]Swear to be overdramatic and true\n[02:37.696]To my lover\n[02:40.920]\n[02:41.077]And you\'ll save all your dirtiest jokes for me\n[02:47.712]And at every table\n[02:50.681]I\'ll save you a seat, lover\n[02:55.036]\n[02:55.471]Can I go where you go?\n[03:01.933]And can we always be this close\n[03:07.250]Forever and ever\n[03:09.050]And ah, take me out\n[03:11.695]And take me home (forever and ever)\n[03:16.137]Your my my my my\n[03:22.637]Oh, you\'re my my my my\n[03:29.716]Darling, you\'re my my my my\n[03:36.500]Lover\n'
}]

export default new Vuex.Store({
  state: {
    page: null,
    api: api,
    headurl: headurl,
    user: USER_NULL,
    playList: PLAY_LIST,
    nowPlaying: PLAY_LIST[0],
    myPlayList: [],
    headImg: function (id) {
      return headurl + id%30
    },
    groupImg: function (id) {
      return groupurl + (id%50 + 50)
    },
    playlistImg: function (id) {
      return playlistpurl + (id%30 + 20)
    }
  },
  mutations: {
    savePage (state, page) {
      state.page = page
    },
    updateUser(state) {
      const that = state.page
      that.$http.post(that.$store.state.api + '/v1/user/search')
          .then(data => {
            const Data = data.data
            console.log(Data)
            if(Data.code === 200){
              state.user = {
                userid: Data.user.userId,
                email:  Data.user.email,
                nickname: Data.user.userNickName,
                permission: Data.user.userType,
                img: state.headurl + Data.user.userId % 30
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
    logoutUser(state) {
      const that = state.page
      that.$http.post(that.$store.state.api + '/v1/auth/logout')
          .then(data => {
            const Data = data.data
            console.log(Data)
            if(Data.code === 200){
              state.user = USER_NULL
              console.log(state.user)
              console.log(USER_NULL)
              that.$message.success('登出成功!')
              that.$router.push('/')
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
    addSong(state, data) {
      state.playList.push(data)
      state.nowPlaying = data
    },
    updateMyPlayList (state, data) {
      state.myPlayList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
