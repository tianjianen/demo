<template>
  <div class="picture">
    <img width="100%" :src="images" alt>
    <Row>
      <Cell>
        <SwitchList v-model="currVideo" :datas="videoList" @change="showinfo">
          </SwitchList>
      </Cell>
    </Row>
    
    <dplayer :videoInfo="videoInfo"></dplayer>
  </div>
</template>
<script>
import dplayer from "../Dplayer/dplayer";
export default {
  name: "videoGallery",
  data() {
    return {
      images: "",
      currVideo: 1,
      activeName: "1",
      activeMenu: 0,
      loading: false,
      videoList: [
        {
          key:1,
          title: "CCTV-1",
          url: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
        },
        {
          key:2,
          title: "CCTV-5",
          url: "http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8"
        },
        {
          key:3,
          title: "CCTV-6",
          url: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8"
        },
        {
          key:4,
          title: "CCTV-3",
          url: "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8"
        },
        {
          key:5,
          title: "CCTV-8",
          url: "http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8"
        },
        {
          key:6,
          title: "北京卫视",
          url: "http://ivi.bupt.edu.cn/hls/btv1hd.m3u8"
        },
        {
          key:7,
          title: "湖南卫视",
          url: "http://ivi.bupt.edu.cn/hls/hunanhd.m3u8"
        },
        {
          key:8,
          title: "浙江卫视",
          url: "http://ivi.bupt.edu.cn/hls/zjhd.m3u8"
        },
        {
          key:9,
          title: "江苏卫视",
          url: "http://ivi.bupt.edu.cn/hls/jshd.m3u8"
        },
        {
          key:10,
          title: "东方卫视",
          url: "http://ivi.bupt.edu.cn/hls/dfhd.m3u8"
        },
        {
          key:11,
          title: "辽宁卫视",
          url: "http://ivi.bupt.edu.cn/hls/lnhd.m3u8"
        },
         {
          key:12,
          title: "卡酷少儿",
          url: "http://ivi.bupt.edu.cn/hls/btv10.m3u8"
        }
      ]
    };
  },
  computed: {
    videoInfo() {
      return {
        src: this.videoList[this.activeMenu].url,
        type: "hls",
        autoplay: true
      };
    }
  },
  components: {
    dplayer
  },
  methods: {
    _getPicture() {
      this.images = "http://bing.getlove.cn/bingImage";
    },
    showinfo(val) {
      console.log(val);
      this.activeMenu = Number(val.key-1);
    }
  },
  created() {
    this._getPicture();
  },
 
};
</script>
<style >
.h-switchlist>span{
  margin: 5px 10px;
}
.h-switchlist>span:first-child{
  margin-left: 0px;
}
</style>

