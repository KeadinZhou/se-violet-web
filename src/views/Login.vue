<template>
    <div>
        <!--        <el-button @click="debug()"></el-button>-->
        <!--        <img :src="'data:image/jpg;base64,'+ this.captcha" alt="">-->
        <el-card class="box-card" shadow="hover">
            <div class="imgBox">
                <img src="@/assets/logo.png" alt="" width="110px">
            </div>
            <div class="page-title">
                <b>登&nbsp;&nbsp;录</b>
            </div>
            <el-divider><i class="el-icon-postcard"></i></el-divider>
            <div class="form-box">
                <el-form :model="FormData" status-icon :rules="rules" ref="FormData" class="demo-ruleForm">
                    <el-form-item prop="email">
                        <el-input
                                v-model="FormData.email"
                                placeholder="邮箱"
                                prefix-icon="el-icon-message">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                  v-model="FormData.password"
                                  placeholder="密码"
                                  prefix-icon="el-icon-key"
                                  @keyup.enter.native="submitForm('FormData')">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="submitBox">
                            <el-button class="submitButton" type="primary" @click="submitForm('FormData')">登录</el-button>
                            <el-link type="info" :underline="false" style="width: 100%; text-align: center; font-size: 10px" @click="noAc">&nbsp;没有账号?</el-link>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                captcha: '',
                FormData: {
                    email: '',
                    password: ''
                },
                rules: {
                    email: [{ required: true, message: '请输入你的邮箱!', trigger: ['blur', 'change']},{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
                    username: [{ required: true, message: '请输入你的账号!', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入你的密码!', trigger: 'blur' }]
                }
            }
        },
        methods: {
            login (email, password) {
                const that = this
                let sendData = new FormData()
                sendData.append('email', email)
                sendData.append('password', password)
                that.$http.post(that.$store.state.api + '/v1/auth/login', sendData)
                    .then(data => {
                        const Data = data.data
                        console.log(Data)
                        if(Data.code === 200){
                            that.$message.success('登录成功!')
                            that.$store.commit('updateUser')
                            that.$router.push('/moment')
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
                        this.login(this.FormData.email, this.FormData.password)
                    } else {
                        return false
                    }
                })
            },
            noAc () {
                this.$router.push('/register')
            }
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
