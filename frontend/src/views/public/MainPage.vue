<template>
	<div class="main-page">
		<div class="block">
			<div class="title">
				<h2>Articles</h2>
				<h3>Здесь будет довольно длинное и важное описание блока</h3>
			</div>
			<div class="row">
				<transition-group name="fade">
					<article-view v-for="article in articles" :info="article" :key="article.id"></article-view>
				</transition-group>
			</div>
			<a class="button" v-show="has_next" @click="loadMoreArticles">LOAD MORE</a>
		</div>
		<div class="block">
			<div class="title">
				<h2>Our instagram stories</h2>
				<h3>Здесь будет довольно длинное и важное описание блока</h3>
			</div>
			<div class="row">
				<transition-group name="fade">
					<insta-story v-for="story in stories" :key="story.id" :url="story.url"></insta-story>
				</transition-group>
			</div>
			<a class="button" @click="loadMoreStories">LOAD MORE</a>
		</div>
	</div>
</template>

<script>
	import ArticleView from './components/ArticleView';
	import InstaStory from './components/InstaStory';
	import axios from 'vue-axios';
	import {public_api} from '../../store.js';
	export default {
		name: "MainPage",
		inject: ['globalLoading'],
		components: {
			ArticleView,
			InstaStory
		},
		data() {
			return {
				now_page: 1,
				has_next: true,
				articles: [],
				stories: [
					{
						id:0, url: 'https://www.instagram.com/p/BmEdSQ7hqcm/'
					},
					{
						id:1, url: 'https://www.instagram.com/p/BmFtny_nDTT/'
					}
				]
			}
		},
		created() {
			this.loadMoreArticles()
			this.loadMoreStories()
		},
		methods: {
			loadMoreArticles: function(){
				this.globalLoading(true);
				const params = {
					page_size: 4,
					page_num: this.now_page,
					type: 0
				}
				public_api.get('/public/article', {params: params})
					.then(response => {
						this.articles = this.articles.concat(response.data.result);
						this.has_next = response.data.has_next;
						this.now_page++;
						this.globalLoading(false);
					})
					.catch((error) => {

					})
			},
			loadMoreStories: function(){
				//this.globalLoading(true);
				const params = {
					page_size: 4,
					page_num: this.now_page_stories,
					type: 0
				}
				public_api.get('/public/story', {params: params})
					.then(response => {
						this.stories = this.stories.concat(response.data.result);
						this.globalLoading(false);
					})
					.catch((error) => {

					})
			}
		}
	}
</script>

<style lang="scss">
	.main-page{
	}
</style>