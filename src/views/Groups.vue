<template>
    <content-frame title="" icon="el-icon-connection" no-title>
        <template v-slot:content >
            <div class="hot-playlist-box">
                <img-name-box round
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
                groupList: []
            }
        },
        methods:{
            getData(){
                const that= this
                that.$http.post(that.$store.state.api+'/v1/group/load_group')
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