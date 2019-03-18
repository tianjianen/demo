import {ArticleHOSTULR} from './config'
import Axios from 'axios'

// 获取今天的文章
export function getNowArticle() {
	let url = '/article/today'

	let data = {
		dev: 1
	}

	return Axios.get(`${ArticleHOSTULR}${url}`, {
		params: data
	}).then(res => {
		return Promise.resolve(res.data)
	})

}

// 获取随机一天的文章
export function getRadomArticle() {
	let url = '/article/random'

	let data = {
		dev: 1
	}
	
	return Axios.get(`${ArticleHOSTULR}${url}`,{
		params: data
	}).then(res => {
		return Promise.resolve(res.data)
	})
}


// 获取指定某天的
export function getPrevArtile(date) {
	let url = '/article/day';

	let data  = {
		dev:1,
		date: date,
	}

	return Axios.get(`${ArticleHOSTULR}${url}`,{
		params: data
	}).then(res => {
		return Promise.resolve(res.data);
	})
}