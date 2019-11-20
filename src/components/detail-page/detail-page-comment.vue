<template>
    <div>
        <content-frame title="评论列表" :more="false" icon="el-icon-chat-line-square">
            <template v-slot:content>
                <comment-frame
                        v-for="(item,index) in commentsList"
                        :key="index"
                        :comment-data="item">
                </comment-frame>
            </template>
        </content-frame>
    </div>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    import CommentFrame from '@/components/pageitems/comment-frame'
    export default {
        name: "detail-page-comment",
        components: {
            'content-frame': ContentFrame,
            'comment-frame': CommentFrame
        },
        data () {
            return {
                commentsList: [{
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    user_id: '15151',
                    user_nickname: 'Shoegazerbaby',
                    time: '2019-10-31 17:59',
                    content: '在孤独难捱的日子里，哪首歌曾经陪伴过你?',
                    star_cnt: 999,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331602313.jpg',
                    user_id: '15151',
                    user_nickname: 'Keadin',
                    time: '2019-10-31 17:59',
                    content: '纯路人 有一说一 确实',
                    star_cnt: 666,
                    i_stared: true
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    user_id: '15151',
                    user_nickname: '南國',
                    time: '2019-10-31 17:59',
                    content: '非常好的歌单',
                    star_cnt: 0,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    user_id: '15151',
                    user_nickname: 'Shoegazerbaby',
                    time: '2019-10-31 17:59',
                    content: '在孤独难捱的日子里，哪首歌曾经陪伴过你?',
                    star_cnt: 999,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331602313.jpg',
                    user_id: '15151',
                    user_nickname: 'Keadin',
                    time: '2019-10-31 17:59',
                    content: '纯路人 有一说一 确实',
                    star_cnt: 666,
                    i_stared: true
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    user_id: '15151',
                    user_nickname: '南國',
                    time: '2019-10-31 17:59',
                    content: '非常好的歌单',
                    star_cnt: 0,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604617.png',
                    user_id: '15151',
                    user_nickname: 'Shoegazerbaby',
                    time: '2019-10-31 17:59',
                    content: '在孤独难捱的日子里，哪首歌曾经陪伴过你?',
                    star_cnt: 999,
                    i_stared: false
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331602313.jpg',
                    user_id: '15151',
                    user_nickname: 'Keadin',
                    time: '2019-10-31 17:59',
                    content: '纯路人 有一说一 确实',
                    star_cnt: 666,
                    i_stared: true
                }, {
                    comment_id: '518515',
                    img_url: 'http://kealine.top/SE/img/head/mmexport1530331604614.jpg',
                    user_id: '15151',
                    user_nickname: '南國',
                    time: '2019-10-31 17:59',
                    content: '非常好的歌单',
                    star_cnt: 0,
                    i_stared: false
                }]
            }
        }
    }
</script>

<style scoped>

</style>