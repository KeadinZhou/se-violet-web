<template>
    <div>
        <group-page-head></group-page-head>
        <post-list-frame></post-list-frame>
        <post-sender></post-sender>
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
        }
    }
</script>

<style scoped>

</style>