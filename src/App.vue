<template>
  <div id="app">
    <Navbar />
    <br><br><br><br>
     <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  components:{
   Navbar,
  }
}
</script>
<style scoped>
body{background-color:darkgrey; }
</style>
