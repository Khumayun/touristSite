<template>
	<div class="main-page">
		<div class="block">
			<div class="title">
				<h2>Articles</h2>
				<h3>Здесь будет довольно длинное и важное описание блока</h3>
			</div>
			<div class="row">
				<article-view></article-view>
				<article-view></article-view>
				<article-view></article-view>
				<article-view></article-view>
				<article-view></article-view>
				<article-view></article-view>
				<article-view></article-view>
			</div>
			<a href="#" class="button">LOAD MORE</a>
		</div>
	</div>
</template>

<script>
	import ArticleView from './components/ArticleView';
	export default {
		name: "MainPage",
		components: {
			ArticleView	
		},
		data() {
			return {
			}
		}
	}
</script>

<style lang="scss">
	
</style>