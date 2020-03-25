<template>

 <div data-target="#navbarSupportedContent "> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
 <div class="row">
      <div class="md-col-4">
      <a class="navbar-brand ml-auto">Laravel_vujs</a>
      </div>
 <div class="md-col-4">

   </div>

<div class="md-col-4  collapse navbar-collapse" id="navbarSupportedContent">
       
      <ul class="navbar-nav ml-auto">
          <li class="nav-item" >
           <router-link to='/register' class='btn btn-primary float-md-right ' v-if='!token'>Register</router-link>
          </li>
          <li class="nav-item"> 
           <router-link to='/login' class='btn btn-success float-md-right  ' v-if='!token' >  Logingin  </router-link>
          </li>
          <li class="nav item " @click.prevent='performLogout' v-if='token'><button class="btn btn-warning float-md-right">Logingout</button></li>
      </ul>
    
</div>
</div>
</nav>
</div> 
</template>
<script>

export default{
    
    data(){
        return {
            token:null
        };
    },
    mounted(){

        this.checkUserStatus()
    },
    computed:{
        
        loggedIn(){
            return this.$store.getters.get_loggedIn; 
        }

    },
    methods:{
        checkUserStatus(){
            if(localStorage.getItem('token')!=null){
                this.token= localStorage.getItem('token')
            }

        },
        performLogout(){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            this.token=null
            this.$router.push('/login')
        }


    }


};
</script>
<style >
 nav {
                            text-transform: uppercase;
                            background: rgba(0, 0, 0, 0.2)!important;
                            font-weight: 700;
                            font-size: .9rem;
                            letter-spacing: .1rem;
                        }
                         .navbar-brand {
                            color: white;
                            float:left;
                        }
                        nav ul li{margin-right: 20px;}
nav ul li router-link {
                            text-decoration: none;
                            color: #fff;
                            padding: 5px 10px;
                            transition: 0.6s ease;
                            margin-left: 10px;
                        }
                        
</style>