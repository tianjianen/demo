import {HOSTURL} from './config' 
import Axios from 'axios';

export function getMVList(city, start, count) {
	
	const url = '/v2/movie/in_theaters';

	const data = {
		apikey: '0b2bdeda43b5688921839c8ecb20399b',
		city:  city,
		start: start,
		count: count,
		client: '',
		uid: ''
	}

	return Axios.get(`${HOSTURL}${url}`, {
		params: data
	}).then(res => {
		return Promise.resolve(res.data);
	}) 
}

export function getMVInfo(mvid, city) {
	const url = '/v2/movie/subject/' + mvid;
	
	const data = {
		apikey: '0b2bdeda43b5688921839c8ecb20399b',
		city:  city,
		client: '',
		uid: ''
	}

	return Axios.get(`${HOSTURL}${url}`, {
		params: data
	}).then(res => {
		return Promise.resolve(res.data);
	}) 
}