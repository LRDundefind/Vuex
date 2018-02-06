<template>
	<div class="cart">
	    <h1>{{ msg }}</h1>
	    <p v-show="!products.length"><i>请添加商品到购物车</i></p>
	    <ul class="productList">
			<li v-for="product in products">
				{{ product.title }} - {{ product.price}} x {{ product.quantity }}
			</li>
	    </ul>
	    <p>共：${{total}}</p>
	    <p><button :disabled="!products.length" @click="checkout(products)">支付</button></p>
	    <p v-show="checkoutStatus">支付{{checkoutStatus}}.</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: 'Cart',
	data () {
	    return {
	      msg: '我的购物车'
	    }
	},
	computed:{
		...mapGetters({
			products:'cartProducts',
			checkoutStatus:'checkoutStatus',
			total:'cartTotalPrice'
		})
	},
	methods:{
		checkout(products){
			this.$store.dispatch('checkout',products)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productList li{
	text-align: left;
	line-height: 40px;
}
</style>
