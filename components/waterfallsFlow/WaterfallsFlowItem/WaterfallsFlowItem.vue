<template>
    <view class="wf">
        <view class="one">
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
    </view>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        }
    },
	onLoad() {
		
	}
}
</script>

<style lang="scss">
*{
	background-color: #f85347;
}
.wf{
	background-color: #f85347;
	.one{
		background-color: #fff;
		border: 1px solid #666;
		border-radius: 20rpx;
		margin: 5rpx;
		padding: 5rpx;
		
		
		.img{
			
			image{
				width: 100%;
			}
		}
		.name{
			text-overflow:ellipsis;
			white-space: nowrap;
			overflow: hidden;
			font-weight: bold;
			font-family: 'KaiTi';
		}
		.bottom{
			
			display: flex;
			justify-content: space-between;
			width: 100%;
			.store{
				text-overflow:ellipsis;
				white-space: nowrap;
				overflow: hidden;
				color: #666;
				font-style: italic;
				// margin-top: 30rpx;
				bottom:20%;
			}
			.price{
				// margin-top: 10rpx;
				top:20%;
				font-size: 60rpx;
				font-style: oblique;
				color: #3776ff;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			}
			.classify{
				border: 1px solid #f85347;
				border-radius: 10rpx;
				// margin-top: 30rpx;
				color: #f85347;
				top:50%;
			}
		}
	}
}
</style>
