<template>
	<div>
		<!-- 		<div class="logo">
			<a href='/'>
				<img src="~assets/imgs/main.png" alt="">
			</a>
		</div>
		<div class="rightLogo">
			<a href='/'>
				<img src="~assets/imgs/right-logo.png" alt="">
			</a>
		</div> -->
		<div class="topNavbar">
			<a-dropdown class="dropNav" placement="bottomRight">
				<a class="ant-dropdown-link">
					Menu
					<a-icon type="down" />
				</a>
				<a-menu slot="overlay">
					<a-menu-item>
						<a href="/interactive-map">
							<img class="imgIcon" src="~assets/icons/interactivemapblack.png">
							Interactive Map
						</a>
					</a-menu-item>
					<a-menu-item>
						<a href="/data-repository">
							<img class="imgIcon" src="~assets/icons/datarepositoryblack.png">
							Data Repository
						</a>
					</a-menu-item>
					<a-menu-item>
						<a href="/gallery">
							<img class="imgIcon" src="~assets/icons/galleryblack.png">
							Gallery
						</a>
					</a-menu-item>
					<a-menu-item>
						<a href="/about">
							<img class="imgIcon" src="~assets/icons/aboutblack.png">
							About
						</a>
					</a-menu-item>
					<a-menu-item>
						<a href="/contact">
							<img class="imgIcon" src="~assets/icons/contactusblack.png">
							Contact Us
						</a>
					</a-menu-item>
				</a-menu>
			</a-dropdown>

			<a href='/'>
				<img class="leftLogo" width="180px" src="~assets/imgs/main.png" alt="">
			</a>
			<div class="fullLinks">
				<a class="link" :href="{ path: '/', hash:'#islands'}">
					<img class="imgIcon" src="~assets/icons/icons8-browse-folder-32.png">
					Island Modules
				</a>
				<a class="link" href="/interactive-map">
					<img class="imgIcon" src="~assets/icons/interactivemapwhite.png">
					Interactive Map
				</a>
				<a class="link" href="/data-repository">
					<img class="imgIcon" src="~assets/icons/datarepositorywhite.png">
					Data Repository
				</a>
				<a class="link" href="/gallery">
					<img class="imgIcon" src="~assets/icons/gallerywhite.png">
					Gallery
				</a>
				<a class="link" href="/sitemap">
					<img class="imgIcon" src="~assets/icons/sitemapwhite.png">
					Site Map
				</a>
				<a class="link" href="/about">
					<img class="imgIcon" src="~assets/icons/aboutwhite.png">
					About
				</a>
				<a class="link" href="/contact">
					<img class="imgIcon" src="~assets/icons/contactuswhite.png">
					Contact Us
				</a>
			</div>
			<a href='/'>
				<img class="rightLogo" src="~assets/imgs/right-logo.png" alt="">
			</a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.topNavbar {
		position: fixed;
		width: 100%;
		background: #4b5861;
		color: white;
		display: flex;
		top: 0;
		align-items: center;
		justify-content: center;
		height: 55px;
		z-index: 1;
		a {
			color: white;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.link {
		margin-right: 5px;
	}
	.imgIcon {
		width: 20px;
		vertical-align: text-bottom;
	}
	.dropNav {
		display: none;
	}
	@media screen and (max-width: 940px) {
		.fullLinks {
			display: none;
		}

		.rightLogo {
			display: none;
		}
		.dropNav {
			display: block;
			margin-left: auto;
			margin-right: 20px;
			padding-right: 40px;
		}
	}
	@media screen and (max-width: 1260px) {
		.fullLinks {
			margin-left: 168px;
		}
		.rightLogo {
			display: none;
		}
	}

	.rightLogo {
		top: 0;
		right: 0;
		position: absolute;
		width: 257px;
	}
	.leftLogo {
		top: 0;
		left: 0;
		position: absolute;
		width: 180px;
	}
</style>