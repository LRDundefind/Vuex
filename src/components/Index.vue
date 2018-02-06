<template>
	<div class="index">
	    <ul class="product">
			<li v-for="product in products" class="clearfix">
				<div class="productShow">{{product.title}} - {{product.price | currency}}</div>
				<button :disabled="!product.inventory" @click="addToCart(product)">加入购物车</button>
			</li>
	    </ul>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
	name: 'Index',
	data () {
	    return {
	    	
	    }
	},
	filters: {
		currency: function (value,quentity) {
			return "$"+value;
		}
	},
	created(){
		this.$store.dispatch('getAllProducts')
	},
	computed:mapGetters({
		products:'allProducts'
	}),
	methods: mapActions([
		'addToCart'
	])


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product li{
	height: 100px;
}
.product .productShow{
	width: 200px;
	float: left;
}
</style>
