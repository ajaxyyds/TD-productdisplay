<template>
	<view>
		<waterfall :list='prolist' :title="top"></waterfall>
	</view>
</template>

<script>
	export default {
		name:'PartItem',
		props:{
			prolist:{
				type:Array,
				default(){
					
				}
			},
			title:{
				type:String,
				default(){
							
				}
			}
		},
		data() {
			return {
				top:this.title
			};
		},
		watch:{
			title:{
				handler(newValue,oldValue){
					// console.log('title被修改了',newValue,oldValue)
					this.top=newValue
				}
			}
		}
	}
</script>

<style lang="scss">

</style>