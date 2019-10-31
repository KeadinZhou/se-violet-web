<template>
    <content-frame title="热门圈子" icon="el-icon-connection" more>
        <template v-slot:content>
            <div class="hot-playlist-box">
            </div>
        </template>
    </content-frame>
</template>

<script>
    import ContentFrame from '@/components/pageitems/content-frame'
    export default {
        name: "hot-group",
        components: {
            'content-frame': ContentFrame
        }
    }
</script>

<style scoped>

</style>