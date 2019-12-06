<template>
    <content-frame title="热门圈子" icon="el-icon-connection" more="/groups">
        <template v-slot:content>
            <div class="hot-playlist-box">
                <img-name-box
                        round
                        v-for="(item, index) in groupList"
                        :key="index"
                        :title="item.group_name"
                        :img-url="item.img_url"
                        :url="item.url"
                        :second-title="'成员数量:'+item.member_cnt">
                </img-name-box>
            </div>
        </template>
    </content-frame>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    import ImgNameBox from '@/components/pageitems/img-name-box'
    export default {
        name: "hot-group",
        components: {
            'content-frame': ContentFrame,
            'img-name-box': ImgNameBox
        },
        data () {
            return {
                groupList: [
                    {
                        group_name: '文艺音乐点评',
                        member_cnt: 2265,
                        img_url: 'http://p1.music.126.net/rIoR-AhkTjuss7Z6R-2umQ==/109951164291066712.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '不喜欢世界只喜欢你',
                        member_cnt: 4557,
                        img_url: 'http://p2.music.126.net/SB1V3U5hDnALTcej915V7A==/109951164186893497.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '只聊开心的',
                        member_cnt: 788,
                        img_url: 'http://p2.music.126.net/LId1lziLGUEFjkFifN7_KA==/109951164385726883.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Kealine-Pop',
                        member_cnt: 45,
                        img_url: 'http://p1.music.126.net/YjX4fp1ya_135nlPWkvjZg==/109951164317240502.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Violet社区官方',
                        member_cnt: 1,
                        img_url: 'http://p1.music.126.net/SyOISKKFQVQKcpTfn7TDeQ==/109951164203396142.jpg',
                        url: '#/group',
                        id: 11515
                    }
                ]
            }
        },
        methods:{
            getData(){
                const that= this
                that.$http.post(that.$store.state.api+'/v1/group/index_groups')
                    .then(data =>{
                        const Data=data.data
                        console.log(Data)
                        if (Data.code === 0 ){
                            that.groupList=[]
                            for (const item of Data.data){
                                console.log(item)
                                that.groupList.push({
                                    group_name: item.group_name,
                                    member_cnt: item.follow_num,
                                    img_url:  that.$store.state.groupImg(item.group_id),
                                    url:'#/group?groupid='+item.group_id,
                                    info:item.info,
                                    owner_id: item.user_id
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