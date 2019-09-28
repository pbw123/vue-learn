<template>
	<div>
		这是子组件
		{{title+msg}}
	</div>
</template>

<script>
	export default {
		props: {
			title: Number
		},
		data() {
			return {
				msg: 10
			}
		}
	}
</script>

<style>
</style>
