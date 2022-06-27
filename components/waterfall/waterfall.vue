<template>
	<view class="waterfall">
		<!-- <view v-for="(item, index) in list" class="left" v-if="index%2 === 0">
			<view class="img">
				<image :src="item.img"></image>
			</view>
			<view class="name">
				{{item.name}}
			</view>
			<view class="bottom">
				<view class="store">
					{{item.store}}
				</view>
				<view class="price">
					{{item.price}}
				</view>
				<view class="classify">
					{{item.classify}}
				</view>
			</view>
		</view>
		<view v-for="(item, index) in list" class="right" v-if="index%2 === 1">
			<view class="img">
				<image :src="item.img"></image>
			</view>
			<view class="name">
				{{item.name}}
			</view>
			<view class="bottom">
				<view class="store">
					{{item.store}}
				</view>
				<view class="price">
					{{item.price}}
				</view>
				<view class="classify">
					{{item.classify}}
				</view>
			</view>
		</view> -->
		<!-- <view class="fall" v-for="(item,index) in list" @click="group(item)"> -->
			<WaterfallsFlow :wfList='list' ref="wf">
				
			</WaterfallsFlow>
		<!-- </view> -->
		
	</view>
</template>

<script>
	import WaterfallsFlow from '@/components/waterfallsFlow/WaterfallsFlow/WaterfallsFlow.vue'
	export default {
		components:{
			WaterfallsFlow
		},
		name:"waterfall",
		props:{
			list:{
				type:Array,
				require: true
			},
			title:{
				type:String,
				require: true
			}	
		},
		data() {
			return {
				top:this.title
			
			};
		},
		updated() {
			this.group(),
			this.$refs.wf.getlist(this.list)
			
		},
		methods:{
			group(){
				// this.list.forEach((item,index)=>{
				// 	if(item.classify != this.top){
				// 		this.list.splice(index,1)
				// 	}
					
				// })
				for(var i=0;i<this.list.length;i++){
					if(this.top=='全部'){
						
						break
					}
					if(this.list[i].classify!=this.top){
						this.list.splice(i,1)
						i--
					}
				}
				console.log(this.list)
			}
		},
		
		watch:{
			title:{
				handler(newValue,oldValue){
					// console.log('title被修改了',newValue,oldValue)
					this.top=newValue
					// console.log(this.top)
				}
			},
			list:{
				handler(newValue,oldValue){
					this.list=newValue
					// console.log(this.list)
				}
			}
		}
		
		
	}
</script>

<style lang="scss">
.waterfall{
	position: relative;
	top: 155rpx;
	background-color: #f85347;
	
}

	
// .left{
// 		background-color: #fff;
// 		border: 1px solid #666;
// 		border-radius: 20rpx;
// 		margin: 5rpx;
// 		padding: 5rpx;
// 		width: 45%;
		
// 		.img{
			
// 			image{
// 				width: 100%;
// 			}
// 		}
// 		.name{
// 			text-overflow:ellipsis;
// 			white-space: nowrap;
// 			overflow: hidden;
// 			font-weight: bold;
// 			font-family: 'KaiTi';
// 		}
// 		.bottom{
			
// 			display: flex;
// 			justify-content: space-between;
// 			width: 100%;
// 			.store{
// 				color: #666;
// 				font-style: italic;
// 				// margin-top: 30rpx;
// 			}
// 			.price{
// 				// margin-top: 10rpx;
// 				font-size: 60rpx;
// 				font-style: oblique;
// 				color: #3776ff;
// 				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// 			}
// 			.classify{
// 				border: 1px solid #f85347;
// 				border-radius: 10rpx;
// 				// margin-top: 30rpx;
// 				color: #f85347;
// 			}
// 		}
// 	}
// 	.right{
// 			border-radius: 20rpx;
// 			background-color: #fff;
// 			border: 1px solid #666;
// 			margin: 5rpx;
// 			padding: 5rpx;
// 			width: 45%;
			
// 			.img{
				
// 				image{
// 					width: 100%;
// 				}
// 			}
// 			.name{
// 				text-overflow:ellipsis;
// 				white-space: nowrap;
// 				overflow: hidden;
// 				font-weight: bold;
// 				font-family: 'KaiTi';
// 			}
// 			.bottom{
				
// 				display: flex;
// 				justify-content: space-between;
// 				width: 100%;
// 				.store{
// 					color: #666;
// 					font-style: italic;
// 					// margin-top: 30rpx;
// 				}
// 				.price{
// 					// margin-top: 10rpx;
// 					font-size: 60rpx;
// 					font-style: oblique;
// 					color: #3776ff;
// 					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// 				}
// 				.classify{
// 					border: 1px solid #f85347;
// 					border-radius: 10rpx;
// 					// margin-top: 30rpx;
// 					color: #f85347;
// 				}
// 			}
		
// 	}

</style>