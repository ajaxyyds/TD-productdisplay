<template>
	<view class="search">
		<search :isSearch="true" v-model="value" @input="change"></search>
		<view class="history">
			<view v-if="is_histroy" class="label">
				<view class="header">
					<text class="title">搜索历史</text>
					<text class="clear" @click="clear">清空</text>
				</view>
				<view class="content" v-if="historyList.length > 0">
					<view class="item" v-for="(item,index) in  historyList" :key="index" @click="openHistroy(item)">
						{{item.name}}
					</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>						
			</view>
			<view v-else>
				<pagepart :prolist="searchList"></pagepart>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				value:'',
				// historyList:{}
				loading:false,
				searchList: [],
				is_histroy: true  //搜索记录
			};
		},
		computed:{
			...mapState(['historyList'])
		},
		onLoad() {
			this.getSearch()
		},
		methods:{
			change(value){
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
						// 做标记
				if(!this.mark){
				this.mark = true
				this.timer = setTimeout(()=>{
				this.mark = false
				this.getSearch(value)
				},1000)
			}
			},
			openHistroy(item){
				this.value = item.name
				this.getSearch(this.value)
			},
			clear(){
			this.$store.dispatch('clearHistory')
			uni.showToast({
				title:"清空完成"
				})
			},
			getSearch(value) {
					if(!value){
						this.searchList = []
						this.is_histroy = true
						return
					}
					this.is_histroy = false
					this.loading = true
					uniCloud.callFunction({
						name:'get_search',
						data:{
							value
						  }
						}).then((res) => {
							const {result} = res
							console.log(res);
							this.loading = false
							this.searchList = result.data
						}).catch(()=>{
							this.loading = false
						})
					}			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
	}
	.search{
		display: flex;
		flex-direction: column;
		flex: 1;
		.label{
			background-color: #fff;
			margin-top: 100rpx;
			.header{
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				color: #666;
				padding: 20rpx;
				border-bottom: 1px #f5f5f5 solid;
				.title{
					color: #f85347 ;
				}
				.clear{
					color: #30b33a;
					font-weight: bold;
				}
			}
			.content{
				display: flex;
				flex-wrap: wrap;
				padding: 30rpx;
				.title{
					padding: 10rpx;
					border: 1px #666 solid;
					font-size: 30rpx;
					border-radius: 5rpx;
					color: #666;
				}
			}
			.no-data {
					height: 200px;
					line-height: 200px;
					width: 100%;
					text-align: center;
					font-size: 60rpx;
					color: #666;
				}
		}
		
	}
</style>
