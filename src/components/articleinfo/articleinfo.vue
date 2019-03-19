<template>
	<div class="artile">
		<Row :space="9">
			<Cell width="6">
				<div>
					<Button color="h-btn h-btn-primary" @click="_getRadomArticle">随机文</Button>
				</div>
			</Cell>
			<Cell width="6">
				<div>
					<Button color="h-btn h-btn-yellow" @click="_getArtile">今天文</Button>
				</div>
			</Cell>
			<Cell width="6">
				<div>
					<Button color="h-btn h-btn-green" @click="_getPrevArtile">前一天</Button>
				</div>
			</Cell>
			<Cell width="6">
				<div>
					<Button color="h-btn h-btn-blue" :disabled = "_getNowDate() <= parseInt(nextday)" @click="_getNextArtile">后一天</Button>
				</div>
			</Cell>
		</Row>

		<p class="title">{{artile.title}}</p>
		<p class="author">作者: {{artile.author}}</p>
		<p class="publish">发布时间: {{time}}</p>
		<p class="count">字数:  {{artile.wc}}字</p>
		<div class="content" v-html="artile.content"></div>
	</div>
</template>
<script>
import {getNowArticle, getRadomArticle, getPrevArtile} from "@/api/article.js";
export default {
	data() {
		return {
			artile:'',
			prevday: '',
			nextday: ''
		}
	},
	computed:{
		time() {
				return this.artile.date.curr.slice(0, 4) +'年' + this.artile.date.curr.slice(4, 6) + '月' + this.artile.date.curr.slice(6, 8) + '号';		
		}
	},
	methods:{
		_getArtile() {
		
			getNowArticle().then(res => {
				this.artile = res.data;
				this.prevday = res.data.date.prev;
				this.nextday = res.data.date.next;
				this.$Loading.close();
			})
		},
		_getRadomArticle() {
				this.$Loading();
			getRadomArticle().then(res => {
				this.artile = res.data;
				this.prevday = res.data.date.prev;
				this.nextday = res.data.date.next;
				this.$Loading.close();

			})
		},
		_getPrevArtile() {
			this.$Loading();
			getPrevArtile(this.prevday).then(res => {
				this.artile = res.data;
				this.prevday = res.data.date.prev;
				this.nextday = res.data.date.next;
				this.$Loading.close();
			})
		},
		_getNextArtile() {
			this.$Loading();
			getPrevArtile(this.nextday).then(res => {
				this.artile = res.data;
				this.prevday = res.data.date.prev;
				this.nextday = res.data.date.next;
				this.$Loading.close();

			})
		},
		_getNowDate() {
			let date =  new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1 < 10 ? '0' +(date.getMonth()+1) : date.getMonth() + 1;
			let day = date.getDate()< 10 ? '0' + date.getDate() : date.getDate();
			return  parseInt('' + year + month + day); 
		}
	},
	created() {
		this.$Loading();
		setTimeout(() => {
			this._getArtile();
			this.$Loading.close();
		}, 1000);
	}
}
</script>
<style scoped>
.artile{
	/* margin-top: 50px; */
	/* margin-left: 20px; */
	/* margin-right: 20px; */
	background: #f5f5d5;
	padding: 20px;
	font-size: 16px;
}

.artile .title{
	/* padding-top: 20px; */
	display: inline-block;
	font-weight: bold;

}
.artile .author, .artile .publish, .artile .count{
	color: #bb8a8a;
	text-align:left;
}
.artile .content{
	text-align: left;
	font-family:'Courier New', Courier, monospace

}
.artile .content {
	text-indent: 2em;
}
</style>
