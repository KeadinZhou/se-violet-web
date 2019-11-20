<template>
    <div>
        <detail-page-head></detail-page-head>
        <song-list-frame></song-list-frame>
        <detail-page-comment></detail-page-comment>
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
        }
    }
</script>

<style scoped>

</style>