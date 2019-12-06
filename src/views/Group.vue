<template>
    <div>
        <group-page-head></group-page-head>
        <post-list-frame v-if="show"></post-list-frame>
        <post-sender v-if="group_id" :group_id="group_id" :Item_id="Item_id" @sendOK="refresh"></post-sender>
    </div>
</template>

<script>
    import PostListFrame from '@/components/group-page/post-list-frame'
    import GroupPageHead from '@/components/group-page/group-page-head'
    import PostSender from '@/components/group-page/post-sender'
    export default {
        name: "Group",
        components: {
            'post-list-frame': PostListFrame,
            'group-page-head': GroupPageHead,
            'post-sender': PostSender
        },
        data () {
            return {
                show: true,
                group_id: '',
                Item_id:null
            }
        },
        methods: {
            refresh() {
                const that = this
                that.show = false
                that.$nextTick(() => {
                    that.show = true
                })
            },
            getGroupId() {
                const that = this
                if (that.$route.query.groupid) {
                    that.group_id = Number(that.$route.query.groupid)
                } else {
                    that.$router.push('/groups')
                }
            }
        },
        created () {
            this.getGroupId()
        },
        watch: {
            '$route' () {
                this.getGroupId()
            }
        }

    }
</script>

<style scoped>

</style>