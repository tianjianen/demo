<template>
	<div class="picture">
		<img width="100%" :src="images" alt="">
		<!-- <Uploader type="images" dataType="url" :files="images" readonly></Uploader> -->
 
	</div>
</template>
<script>
export default {
	data() {
		return {
			images: ''
		}
	},
	methods:{
		_getPicture() {
			this.images = 'http://bing.getlove.cn/bingImage'	
		}
	},
	created() {
		this._getPicture();
	}	
}
</script>
<style scoped>

</style>

