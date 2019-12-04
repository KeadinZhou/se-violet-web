<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div class="imgBox">
                <img src="@/assets/logo.png" alt="" width="110px">
            </div>
            <div class="page-title">
                <b>注&nbsp;&nbsp;册</b>
            </div>
            <el-divider><i class="el-icon-postcard"></i></el-divider>
            <div class="form-box">
                <el-form :model="FormData" :rules="rules" ref="FormData" class="demo-ruleForm">
                    <el-form-item prop="email">
                        <el-input
                                v-model="FormData.email"
                                placeholder="邮箱"
                                prefix-icon="el-icon-message">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="nickname">
                        <el-input
                                v-model="FormData.nickname"
                                placeholder="昵称"
                                prefix-icon="el-icon-user">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                  v-model="FormData.password"
                                  placeholder="密码"
                                  prefix-icon="el-icon-key">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password2">
                        <el-input type="password"
                                  v-model="FormData.password2"
                                  placeholder="重复密码"
                                  prefix-icon="el-icon-key">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="submitBox">
                            <el-button class="submitButton" type="primary" @click="submitForm('FormData')">注册</el-button>
                            <el-link type="info" :underline="false" style="width: 100%; text-align: center; font-size: 10px" href="#/login">&nbsp;已有账号?</el-link>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'login-page',
        data () {
            var validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入你的账号!'))
                } else {
                    callback()
                }
            }
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请重复你的密码!'))
                } else if (value !== this.FormData.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            return {
                captchaImg: '',
                captchaUuid: '',
                FormData: {
                    email: '',
                    nickname: '',
                    password: '',
                    password2: '',
                },
                rules: {
                    email: [{ required: true, message: '请输入你的邮箱!', trigger: ['blur', 'change']},{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
                    nickname: [{ validator: validateUsername, trigger: 'blur' }],
                    password: [{ required: true, message: '请输入你的密码!', trigger: 'blur' }],
                    password2: [{ validator: validatePass, trigger: 'blur' }]
                }
            }
        },
        methods: {
            regSure (regData) {
                const that = this
                let sendData = new FormData()
                sendData.append('email', regData.email)
                sendData.append('password', regData.password)
                sendData.append('nickname', regData.nickname)
                that.$http.post(that.$store.state.api + '/v1/auth/register', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 200){
                            that.$message.success('注册成功!')
                            that.$router.push('/login')
                        } else {
                            const msg = Data.errMsg
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
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.regSure(this.FormData)
                    } else {
                        return false
                    }
                })
            }
        },
        created () {
        }
    }
</script>

<style scoped>
    .box-card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
    }
    .imgBox{
        position: absolute;
        margin-top: 10px;
        left: 50%;
        transform: translate(-50%,0);
    }
    .form-box{
        width: 80%;
        float: left;
        transform: translate(12%,0);
    }
    .page-title{
        width: 100%;
        margin-top: 150px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 25px;
    }
    .submitBox{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .submitButton{
        width: 100%;
        height: auto;
    }
</style>
