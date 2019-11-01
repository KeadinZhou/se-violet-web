<template>
    <div>
        <index-carousel></index-carousel>
        <hot-playlist></hot-playlist>
        <hot-post></hot-post>
        <hot-group></hot-group>
        <hot-moment></hot-moment>
    </div>
</template>

<script>
    import IndexCarousel from '@/components/index-page/index-carousel'
    import HotPlaylist from '@/components/index-page/hot-playlist'
    import HotGroup from '@/components/index-page/hot-group'
    import HotPost from '@/components/index-page/hot-post'
    import HotMoment from '@/components/index-page/hot-moment'
    export default {
        name: "Index",
        components: {
            'index-carousel': IndexCarousel,
            'hot-playlist': HotPlaylist,
            'hot-group': HotGroup,
            'hot-post': HotPost,
            'hot-moment': HotMoment
        }
    }
</script>

<style scoped>
    .hot-playlist{

    }
</style>