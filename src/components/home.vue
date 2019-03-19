<template>
	<div  class="wrapper" ref="wrapper" >
		<div class="content" >
			<div class="h-panel" v-for="(list, index) in mvList" :key="index" @click="_getmvInfo(list.id)">
				<div class="h-panel-bar">
					<span class="h-panel-title" >{{list.title}}</span>
					
				</div>
				<div class="h-panel-bar">
					<i class="h-split"></i>
					<span v-for="(tag, index) in list.genres" :key="index" class="h-tag " :class="tagclass[index]">{{tag}}</span>
				</div>
				<div class="h-panel-body">
					<Row :space-x="24">
						<Cell width="12"  >
							<div >
								<img  v-lazy="'https://images.weserv.nl/?url=' + list.images.small" width="150px" :alt="list.title">
							</div>
						</Cell>
						<Cell width="12" >
							<div style="text-align:left"> 
								<p><i class="h-icon-plus"></i> 电影名称: {{list.original_title}}</p>
								<p><i class="h-icon-calendar"></i> 上映时间: {{list.mainland_pubdate}}</p>
								<p><i class="h-icon-calendar"></i> 影片时长: {{list.durations[0]}}</p>
								<p><i class="h-icon-star"></i> 影片评分: <span class="h-tag-circle  h-tag-bg-green">{{list.rating.average}}</span></p>
							</div>
						</Cell>
					</Row>
					<!-- <p>上映时间{{list.mainland_pubdate}}</p>
					<p>content</p>
					<p>content</p> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getMVList } from "../api/released.js";
import BScroll from 'better-scroll';

export default {
	data() {
    return {
       param: {
        module1: '电影',
        module2: 'module2',
        module3: 'module3'
      },
      selected: '电影',
      visible: false,
      mvList:[],
			tagclass:['h-tag-bg-primary', 'h-tag-bg-blue', 'h-tag-bg-green', 'h-tag-bg-yellow', 'h-tag-bg-gray'],
			startpage: 0,
			countnum: 10
    };
  },
  methods: {

    _getmvList(startpage, countnum) {
			this.$Loading('Loading...');

      getMVList("beijing", startpage, countnum).then(res => {
        
				// this.mvList = res.subjects;
				if(res.subjects.length <= 0) {
					this.$Loading.close();
					this.$Loading('加载完毕');
					this.$Loading.close();
					return;
				}
				this.$Loading.close();	
				this.mvList = this.mvList.concat(res.subjects)
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {
								tap: true,
								click: true,
								scrollY: true,
								pullUpLoad: {
									threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
								}
							})
							
							this.scroll.on('pullingUp', () => {
								this.startpage =  this.startpage + this.countnum  + 1;
								this._getmvList(this.startpage, this.countnum)
								this.scroll.finishPullUp();
							})
            } else {
              this.scroll.refresh()
            }
          })


      });
    },
    _getmvInfo(mvId) {
			this.$router.push({
				path: `/mvinfo/${mvId}`
			});
			
    }
  },
  created() {
		this._getmvList(this.startpage,this.countnum);
		
		// this._initBScroll();
  }
}
</script>
<style scoped>
.wrapper{
	width: 100%;
  height: 100vh;
	overflow: hidden;
  /* position: absolute; */
	margin-top: 40px;
}
.h-panel {
  margin: 20px;
	border: 1px solid #9dd3e4;
	box-shadow: 5px 5px 1px #d4c4c9;
}
.h-panel:first-of-type{
	margin-top: 60px;

}
.h-panel i{
	color:#4bbe89;
}
.h-panel-bar:first-of-type{
	background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
}
</style>

