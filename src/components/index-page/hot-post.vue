<template>
    <content-frame title="热门帖子" icon="el-icon-chat-line-square" more>
        <template v-slot:content>
            <div class="hot-playlist-box">
            </div>
        </template>
    </content-frame>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    export default {
        name: "hot-post",
        components: {
            'content-frame': ContentFrame
        }
    }
</script>

<style scoped>

</style>