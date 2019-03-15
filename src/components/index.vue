<template>
  <div class="hello">
    <Nav></Nav>
    <!-- <keep-alive> -->
     <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Nav from '@/components/nav/nav'

export default {
  components: {
    Nav
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
