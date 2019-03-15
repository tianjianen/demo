<template>
  <div class="mvinfo">
    <Row>
      <Cell width="12">
        <div>
          <img
            v-lazy="'https://images.weserv.nl/?url=' + mvinfo.photos[0].cover"
            width="150px"
            :alt="mvinfo.title"
          >
        </div>
      </Cell>
      <Cell width="12">
        <div style="text-align: left">
          <p>电影名称: {{mvinfo.title}}</p>

          <p>电影时长: {{mvinfo.durations[0]}}</p>
          <p>电影导演:
            <span
              style="margin-right:10px;"
              v-for="(author1, ind) in mvinfo.directors"
              :key="ind"
            >{{author1.name}}</span>
          </p>
          <p>电影主演:
            <span
              style="margin-right:10px;"
              v-for="(author2, ind) in mvinfo.casts"
              :key="ind"
            >{{author2.name}}</span>
          </p>
        </div>
      </Cell>
      <p>电影简介: {{mvinfo.summary}}</p>
      <Cell width="24">
        <div>
          <video :src="mvinfo.trailer_urls[0]" controls="controls" width="100%" height="100%"></video>
        </div>
      </Cell>
    </Row>
  </div>
</template>
<script>
import { getMVInfo } from "@/api/released.js";
export default {
  data() {
    return {
      mvinfo: ""
    };
  },
  methods: {
    _getMVInfo(mvId) {
      this.$Loading();
      getMVInfo(mvId, "beijing").then(res => {
        // console.log(res);
        this.$Loading.close();
        this.mvinfo = res;
      });
    }
  },
  created() {
    if (this.$route.params.id !== undefined) {
      this._getMVInfo(this.$route.params.id);
    }
  }
};
</script>
<style scoped>
.mvinfo {
  margin-top: 30px;
}
</style>
