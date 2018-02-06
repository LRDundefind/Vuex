<template>
    <div id="app">
        <cart-nav></cart-nav>
        <router-view/>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
    name: 'App',
    components:{
        'cart-nav':Nav
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
a{ 
  text-decoration:none; 
  color:#333; 
} 
ul{
  list-style-type:none;
}

</style>
