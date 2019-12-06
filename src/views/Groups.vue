<template>
    <content-frame title="" icon="el-icon-connection" no-title>
        <template v-slot:content >
            <el-dialog
                    title="发起一个新的圈子"
                    :visible.sync="addBoxShow"
                    width="600px"
                    modal-append-to-body
                    append-to-body>
                <el-input
                        v-model="newGroupName"
                        placeholder="圈子名称">
                </el-input>
                <el-input
                        style="margin: 10px 0"
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 10}"
                        placeholder="圈子的描述"
                        v-model="newGroupInfo">
                </el-input>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="addBoxShow = false">取消</el-button>
                    <el-button type="primary" @click="addGroup">发起</el-button>
                </span>
            </el-dialog>
            <div class="hot-playlist-box">
                <img-name-box round
                        v-for="(item, index) in groupList"
                        :key="index"
                        :title="item.group_name"
                        :img-url="item.img_url"
                        :url="item.url"
                        :second-title="'成员数量:'+item.member_cnt">
                </img-name-box>
                <div class="add-group-box" @click="tryToAddGroup">
                    <img-name-box
                            round
                            img-url="http://kealine.top/SE/img/plus.png"
                            title="发起一个新的圈子"
                            second-title="与志同道合的人讨论">
                    </img-name-box>
                </div>
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
                groupList: [],
                addBoxShow: false,
                newGroupName: '',
                newGroupInfo: ''
            }
        },
        methods:{
            getData (){
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
            },
            tryToAddGroup () {
                const that = this
                that.addBoxShow = true
            },
            addGroup () {
                const that= this
                var sendData = new FormData()
                sendData.append('group_name', that.newGroupName)
                sendData.append('info', that.newGroupInfo)
                sendData.append('thumbs_up_num', 0)
                sendData.append('follow_num', 0)
                that.$http.post(that.$store.state.api+'/v1/group/add_group', sendData)
                    .then(data =>{
                        const Data=data.data
                        console.log(Data)
                        if (Data.code === 0 ){
                            that.getData()
                            that.newGroupName = ''
                            that.newGroupInfo = ''
                            that.addBoxShow = false
                            that.$message.success('发起成功！')
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
    .add-group-box{
        cursor: pointer;
        display: inline-block;
    }
</style>