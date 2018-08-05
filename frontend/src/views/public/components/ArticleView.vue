<template>
	<div class="article">
		<div class="space"></div>
		<div class="progressive" style="display: flex;justify-content: center;align-items: center;">
			<img class="preview" v-progressive="info.img.basic" :src="info.img.preview" />
		</div>
		<!-- <div class="img" style="overflow: hidden">
		</div> -->
		<div class="description-block">
			<div class="title">{{ info.title }} {{ info.id }}</div>
			<div class="description">{{ info.description }}</div>
			<a href="#" class="button">READ</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ArticleView",
		props: ['info'],
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss">
	.article {
		width: calc(25% - 10px);
		margin-left: 5px;
		margin-right: 5px;
		background: black;
		margin-bottom: 35px;
		height: fit-content;
		@media only screen and (max-width: 1500px) {
			width: calc(33.333% - 10px)
		}
		@media only screen and (max-width: 860px) {
			width: calc(50% - 10px)
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% - 10px)
		}
		.img {
			height: 250px;
			background-size: cover;
			background-position: center;
		}
		.description-block {
			color: white;
			padding-bottom: 10px;
			padding-left: 20px;
			padding-right: 20px;
			.title {
				font-family: brush;
				font-size: 18px;
				font-weight: 400;
				line-height: 22px;
				text-align: center;
				letter-spacing: .02em;
				text-transform: uppercase;
				padding-top: 20px;
				padding-bottom: 20px;
			}
			.description {
				font-size: 16px;
				font-weight: 300;
				line-height: 22px;
				padding-top: 10px;
				padding-bottom: 10px;
				text-align: justify;
				letter-spacing: .02em;
			}
			.button {
				display: block;
				margin: 0 auto;
				margin-top: 20px;
				text-align: center;
				border: 1px solid #fff;
				font-weight: 400;
				font-size: 18px;
				text-transform: uppercase;
				letter-spacing: .02em;
				border-radius: 25px;
				padding: 10px 20px;
				color: white;
				width: max-content;
				transition: .3s;
				&:hover {
					transition: .5s;
					color: black;
					background-color: white;
				}
			}
		}
	}
</style>