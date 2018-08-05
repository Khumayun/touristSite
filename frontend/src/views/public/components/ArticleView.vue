<template>
	<div class="article">
		<div class="img"></div>
		<div class="description-block">
			<div class="title">Progressive Web Apps</div>
			<div class="description">
				Cross the Greenland Ice Sheet, 
				kayak in the wilderness for a week, 
				or climb the highest mountain in Greenland. 
				How will you test your limits?
				Cross the Greenland Ice Sheet, 
				kayak in the wilderness for a week, 
				or climb the highest mountain in Greenland. 
				How will you test your limits?
			</div>
			<a href="#" class="button">READ</a>
		</div>
	</div>
</template>

<script>
  export default {
    name: "ArticleView",
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
		box-shadow: 0 0 38px rgba(0,0,0,0.6);
		margin-bottom: 35px;
		.img {
			height: 250px;
			background: url('https://goo.gl/RrgMvU');
			background-size: cover;
			background-position: center;
		}
		.description-block {
			height: 270px;
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