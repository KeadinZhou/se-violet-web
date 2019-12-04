<template>
    <div id="page-top">
        <el-menu :default-active="this.$route.path" class="page-nav" style="height:60px;width:100%;z-index:1000" mode="horizontal" router>
            <el-menu-item index="/" class="nav-item" route="/">首页</el-menu-item>
            <el-menu-item index="/library" class="nav-item" route="/library">曲库</el-menu-item>
            <el-menu-item index="/groups" class="nav-item" route="/groups">圈子</el-menu-item>
            <template v-if="this.$store.state.user.permission !== -9">
                <el-menu-item index="/moment" class="nav-item" route="/moment">动态</el-menu-item>
            </template>
            <el-dropdown @command="handleCommand" class="page-nav-right-menu">
                <span class="el-dropdown-link">
                    <i class="el-icon-user el-icon--right"></i>
                    {{ this.$store.state.user.nickname }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <template v-if="this.$store.state.user.permission !== -9">
                        <el-dropdown-item command="user">个人主页</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </template>
                    <template v-else>
                        <el-dropdown-item command="login">登录账号</el-dropdown-item>
                        <el-dropdown-item command="register">注册账号</el-dropdown-item>
                    </template>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'page-nav',
        data () {
            return {
            }
        },
        methods: {
            handleCommand (command) {
                if (command === 'register') {
                    this.$router.push('/register')
                }
                if (command === 'login') {
                    this.$router.push('/login')
                }
                if (command === 'user') {
                    this.$router.push('/user')
                }
                if (command === 'logout') {
                    this.$store.commit('logoutUser')
                }
            }
        }
    }
</script>

<style scoped>
    .nav-item{
        font-size: 16px;
    }
    .page-nav-right-menu{
        float: right;
        height: 60px;
        line-height: 60px;
        outline:none;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #9b59b6;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
