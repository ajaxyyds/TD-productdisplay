<template>
	<view class="navbar">
		<scroll-view scroll-x>
			<view class="box">
				<view class="type" v-for="(item, index) in list" @click="selectbar(item,index,active)" :class="{active:activeIndex === index}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		
		data() {
			return {
				list:[{
					name:'全部'
				},{
					name:'图书'
				},{
					name:'文化用品'
				},{
					name:'生活用品'
				},{
					name:'小家电'
				},{
					name:'玩具'
				}],
				activeIndex:0,
				activename:'全部'
			};
		},
		watch:{
			// activeIndex(newValue){
			// 	this.activeIndex=newValue
			// }
		},
		methods:{
			selectbar(item,index,active){
				this.activeIndex=index;
				this.activename=item.name;
				active=this.activename;
				this.$emit('active',active);
				// console.log(active,index);
			}
		}
	}
</script>

<style lang="scss">
	.navbar{
		width: 100%;
		border: 1px solid #f85347;
		position: fixed;
		margin-top: 100rpx;
		z-index: 1;
		background-color: #fff;
		.box{
			display: flex;
			flex-wrap: nowrap;
			column-count:6;
			column-gap:10rpx;
			justify-content:center;
			
			.type{
				font-size: 40rpx;
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				text-align: center;
				font-family: SimHei;
				font-weight: bold;
				flex-shrink: 0;
				&.active{
					color: #f85347;
				}
			}
		}
	}
</style>