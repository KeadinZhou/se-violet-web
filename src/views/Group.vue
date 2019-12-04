<template>
    <div>
        <group-page-head></group-page-head>
        <post-list-frame v-if="show"></post-list-frame>
        <post-sender @sendOK="refresh"></post-sender>
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
                show: true
        }
        },
        methods: {
            refresh () {
                const that = this
                that.show = false
                that.$nextTick(() => {
                    that.show = true
                })
            }
        }
    }
</script>

<style scoped>

</style>