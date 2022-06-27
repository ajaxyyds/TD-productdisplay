<template>
	
	<view class="searahlist" @click.stop="tranfor">
		<input placeholder="请输入您需要的商品" type="text" v-model="target" @input="inputchange">
	</view>
	
</template>

<script>
	export default {
		props:{
			isSearch:{
				type:Boolean,
				default:false
			}
		},
		name:"search",
		data() {
			return {
				target:''
			};
		},
		methods:{
			tranfor(){
				if(this.isSearch)return
				uni.navigateTo({
					url:'/pages/seek/seek'
				})
			},
			inputchange(e){
				const {value} = e.detail;
				// console.log(value)
				this.$emit('input',value)
			}
		}
	}
</script>

<style lang="scss">
	
.searahlist{
	background-color: #f85347;
	z-index: 1;
	position: fixed;
	width: 100%;
	height: 90rpx;
	padding: 10rpx;
	input{
		
		height: 100%;
		background-color: #fff;
		border-radius: 15rpx;
		color: #666;
	}
}
	
</style>