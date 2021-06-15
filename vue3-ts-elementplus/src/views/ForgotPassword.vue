<template>

    <el-form  label-width="100px" class="container">
        <el-form-item label="邮箱">
            <el-input v-model="email" placeholder="Enter Email"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleForgetPassword('')" type="primary" class="submit_btn">
                找回密码
            </el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    import {ref, getCurrentInstance} from "vue";
    export default {

        setup(){
            const {ctx} = getCurrentInstance();
            const email = ref("");
            const handleForgetPassword = async () =>{
                if(email.value){
                    const res = await ctx.$axios.post("/api/v1/auth/forgotpassword", {email:email.value});
                    console.log(res.data);
                }


            };

            return {email, handleForgetPassword};
        },
    }
</script>

<style scoped>
    .container{
        width: 50%;
        margin: 200px auto;
    }
    .submit_btn {
        width: 100%;
    }
</style>