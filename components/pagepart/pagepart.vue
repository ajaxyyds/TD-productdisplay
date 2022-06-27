<template>
	<view>
		<PartItem :prolist='prolist' :title='title'></PartItem>
	</view>
</template>

<script>
	import PartItem from'./partItem.vue'
	
	export default {
		components:{
			PartItem
		},
		props:{
			prolist:{
				type:Array,
				default(){
					
					}
				},
			title:{
				type:String,
				require:true
			}
			
		},
		name:"pagepart",
		data() {
			return {
				top:this.title
			}
		},
		watch:{
			title:{
				handler(newValue,oldValue){
					// console.log('title被修改了',newValue,oldValue)
					this.top=newValue
				}
			}
		}
		// computed:{
		// 	top:{
		// 		get(){
		// 		return this.title
		// 		}
		// 	}
		// },
		// mounted() {
		// 	console.log(this.top)
		// }
	}
</script>

<style lang="scss">

</style>