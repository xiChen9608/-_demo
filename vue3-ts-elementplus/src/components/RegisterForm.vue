<template>

    <el-form  :model="registerUser" :rules="registerRules" ref="registerForm" label-width="100px" class="registerForm sign-up-form">
        <el-form-item label="名字" prop="name">
            <el-input v-model="registerUser.name" placeholder="Enter Name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="Enter Email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="Enter Password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model="registerUser.password2" placeholder="Enter Password"></el-input>
        </el-form-item>
        <el-form-item label="确认身份">
            <el-select v-model="registerUser.role" placeholder="请选择身份">
                <el-option label="管理员" value="admin"></el-option>
                <el-option label="用户" value="user"></el-option>
                <el-option label="游客" value="visitor"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button @click="handleregister('registerForm')" type="primary" class="submit_btn">注册</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    import {getCurrentInstance} from "vue";
    import {useRouter} from "vue-router";
    export default {
        props:{
            registerUser:{
                type: Object,
                required: true
            },
            registerRules:{
                type: Object,
                required: true
            }
        },
        setup(props){
            const {ctx} = getCurrentInstance();
            const router = useRouter();

            const handleregister = (item) =>{
                ctx.$refs[item].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        ctx.$axios.post("/api/v1/auth/register", props.registerUser)
                            .then((res)=>{
                                ctx.$message({
                                    message: "注册成功",
                                    type: "success"
                                });
                                router.push("/");
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            };
            return {handleregister};
        },
    }
</script>

<style scoped>

</style>