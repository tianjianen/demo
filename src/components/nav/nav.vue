<template>
  <div class="title">
		<Row >
			<Cell width="8" ><div><router-link class="nav" to="/home">电影</router-link></div></Cell>
			<Cell width="8" ><div><router-link class="nav" to="/article">每日一文</router-link></div></Cell>
			<Cell width="8" ><div><router-link class="nav" to="/bar">Go to Bar</router-link></div></Cell>
      
      
		</Row>  
    </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>

<style scoped>
.title{
  position: fixed;
  top: 0px;
	width: 100%;
  height: 30px;
  z-index: 100;
  background: #fff;
}
.nav{
  display: inline-block;
  font-size: 20px;
}
</style>


