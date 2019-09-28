<template>
	<div>
		<Son :title="9"></Son>
	</div>
</template>

<script>
	import Son from '@/components/Son.vue'
export default{
	data(){
		return {
			val:'这是父组件数据'
		}
	},
	components:{
		Son
	}
}
</script>

<style>
</style>
