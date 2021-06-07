<template>

    <el-form  :model="loginUser" :rules="rules" ref="loginForm" label-width="100px" class="loginForm sign-in-form">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="Enter Email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="Enter Password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleLogin('loginForm')" type="primary" class="submit_btn">提交</el-button>
        </el-form-item>
        <div class="tiparea">
            <p>忘记密码？ <a v-on:click="handleForget">立即找回</a></p>
        </div>
    </el-form>

</template>

<script>
    import {getCurrentInstance} from "vue";
    import {useRouter} from "vue-router";
    export default {
        //子组件接收父组件传值， 验证
        props:{
            loginUser: {
                type: Object,
                required: true,
            },
            rules: {
                type: Object,
                required: true,
            }
        },
        setup(props){
            const {ctx} = getCurrentInstance();
            const router = useRouter();

            const handleLogin = (formName) =>{
                // console.log(ctx);
                ctx.$refs[formName].validate((valid) => {
                    if (valid) {
                        ctx.$axios.post("api/v1/auth/login", props.loginUser)
                            .then((res)=>{
                                console.log(res.data);
                                const {token} = res.data;
                                localStorage.setItem("msToken", token);
                            });
                        router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            };

            const handleForget =  ()=>{
                router.push("/forgotpassword");
            }
            return {handleLogin,handleForget};
        },
    }
</script>

<style scoped>
    /*login*/
    .loginForm {

        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #ccc;
    }
    .tiparea{
        text-align: right;
        font-size: 12px;
        color:#333;
    }
    .tiparea p a {
        color: #409eff;
    }
</style>