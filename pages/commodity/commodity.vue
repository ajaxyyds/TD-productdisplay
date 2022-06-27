<template>
	<view>
		<search></search>
		<navbar @active="shownow"></navbar>
		<pagepart :title="title" :prolist="product"></pagepart>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				product:[
					
				],
				title:'全部'
			};
		},
		onLoad() {
			this.getproduct()
		},
		// watch:{
		// 	title(newValue){
		// 		this.title=newValue
		// 	}
		// },
		methods:{
			getproduct(){
				uniCloud.callFunction({
					name:'get_product'
				}).then((res)=>{
					const {result} =res
					this.product = result.data
					// console.log(this.product)
				})
			},
			shownow(active){
				this.title=active
				// console.log(this.title)
				this.$set(this,'title',active)
			}
		}
	}
</script>

<style lang="less">
	
</style>
