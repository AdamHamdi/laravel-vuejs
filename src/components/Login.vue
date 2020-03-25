<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 bg-black">
            <form action="POST">
                <label><H1>Login Form:</H1></label>
                <div class="form-group">
                    <label for="email"> Email address:</label>
                    <input type='email' id='email' v-model="email" placeholder="Wrap your email here"
                     class ='form-control' name='email' required > 

                </div>
                <div class="form-group">
                    <label for="email"> Password:</label>
                    <input type='password' v-model="password" placeholder="Wrap your password here"
                    id='password' class ='form-control' name='password' required 
                  > <div style="color:red;" v-if="error">{{ error }}</div> 
                    
                </div>
                <div class="form-group">
                <button type='submit' class='btn btn-primary btn-block' @click.prevent="performLogin"> Log In</button>
                </div>
            </form>
        </div>
        <div class="col-md-4"></div>


    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"login",
    data(){
        return{
         email:"",
         password:"",
         error:""
};
    },
    methods:{
            performLogin(){
           axios.post(' http://127.0.0.1:8000/api/auth/login',{
               email:this.email,
               password:this.password
           })
                .then(res=>{
                    console.log(res.data);
                    //store the token and user in localstorage
                     localStorage.setItem('token',res.data.access_token)
                    localStorage.setItem('user',res.data.user)
                      this.$router.push("/profile");
                })
                .catch( err =>{
                    console.log(err.message)
                    this.error=err.message

                })
                console.log("perform login");
                
            }
        }
    
}
</script>