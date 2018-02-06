<template>
	<div class="nav">
	  	<h1>{{ msg }}</h1>
	  	<ul class="clearfix">
			<li>Shopping cart</li>
			<router-link :to="'/index'"><li>apple</li></router-link>
			<router-link :to="'/cart'"><li>购物车</li></router-link>
	  	</ul>
	    
	</div>
</template>

<script>
export default {
	name: 'Nav',
	data () {
		return {
		  msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav ul{
	list-style-type:none;
	background-color: #e7e7e7;
}
.nav ul li{
	float: left;
	line-height: 40px;
	padding:0 10px;
}
.nav ul li:hover{
	color: #666;
}
.router-link-active li{
	background: #ccc;
}

</style>
