<template>
    <content-frame title="" icon="el-icon-connection" no-title>
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
        name: "Groups",
        components: {
            'content-frame': ContentFrame,
            'img-name-box': ImgNameBox
        },
        data() {
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
                    }, {
                        group_name: '只聊开心的',
                        member_cnt: 788,
                        img_url: 'http://p2.music.126.net/v67SbZODGYuZPToAWnOUXw==/109951164483649976.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Kealine-Pop',
                        member_cnt: 45,
                        img_url: 'http://p2.music.126.net/vzkTrhnmo8PTGaipeukTyw==/109951164504558077.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Violet社区官方',
                        member_cnt: 1,
                        img_url: 'http://p2.music.126.net/V9sg-UKg0mEI_93kOOA6Dg==/109951163980645067.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Violet社区官方',
                        member_cnt: 1,
                        img_url: 'http://p2.music.126.net/qOKXt75yFxOCKolIpLS-fQ==/109951164515611729.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '只聊开心的',
                        member_cnt: 788,
                        img_url: 'http://p2.music.126.net/A-zqiAduk5US32Fga10-Gg==/109951164524099014.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '文艺音乐点评',
                        member_cnt: 2265,
                        img_url: 'http://p2.music.126.net/nLu1MWFl9lJ0zT55n1k_nA==/109951164485467983.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '不喜欢世界只喜欢你',
                        member_cnt: 4557,
                        img_url: 'http://p2.music.126.net/0a56FLdyySKVC6g15DL-RQ==/109951164266089265.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: '只聊开心的',
                        member_cnt: 788,
                        img_url: 'http://p2.music.126.net/FT7h6zQv8F_P-IFBfRfayg==/109951164223437502.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Kealine-Pop',
                        member_cnt: 45,
                        img_url: 'http://p2.music.126.net/a0bINEA9ZxTQm3BuXIJRYA==/109951164171117030.jpg',
                        url: '#/group',
                        id: 11515
                    }, {
                        group_name: 'Kealine-Pop',
                        member_cnt: 45,
                        img_url: 'http://p2.music.126.net/3DCZrxJ4svHIobxLcg_KyQ==/109951164240032297.jpg',
                        url: '#/group',
                        id: 11515
                    }
                ]
            }
        },
        methods:{
            getData(){
                const that= this
                that.$http.post(that.$store.state.api+'/v1/group/load_group')
                    .then(data =>{
                        const Data=data.data
                        console.log(Data)
                        if (Data.code==0){
                            that.groupList=[]
                            for (const item of Data.data){
                                that.momentsList.push({

                                })
                            }
                        }
                })
            }

        }
    }
</script>

<style scoped>

</style>