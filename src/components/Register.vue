<template>
    <div class="row">
        <div class="offset-md-4"></div>
        <div class="col-md-4 bg-black">
            <form action="post">
                <label><H1>Register Form:</H1></label>
                <div class="form-group">
                    <label for="email"> Name:</label>
                    <input type='name' id='name' placeholder="Wrap your name here"
                     class ='form-control'  v-model="name" name='name' required> 

                </div>
                <div class="form-group">
                    <label for="email"> Email address:</label>
                    <input type='email' id='email'
                    v-model="email" placeholder="Wrap your email here"
                     class ='form-control' name='email' required> 

                </div>
                <div class="form-group">
                    <label for="email"> Password:</label>
                    <input type='password' placeholder="Wrap your password here"
                    id='password' class ='form-control' v-model="password" name='password' required> 
                    
                </div>
                <div class="form-group">
                <button type='submit' class='btn btn-success btn-block' @click.prevent="performRegister"> Register</button>
                </div>
            </form>
        </div>
        <div class="col-md-4"></div>


    </div>
</template>
<script>
import axios from 'axios'
export default {
     name:"register",
    data(){
        return{
         name:"",
         email:"",
         password:""
        };
        },
        methods:{
            performRegister(){
           axios.post(' http://127.0.0.1:8000/api/auth/register',{
               name:this.name,
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
                console.log("perform register");
                
            }
        }
}
</script>