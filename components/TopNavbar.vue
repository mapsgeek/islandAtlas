<template>
	<div>
		<!-- 		<div class="logo">
			<nuxt-link to='/'>
				<img src="~assets/imgs/main.png" alt="">
			</nuxt-link>
		</div>
		<div class="rightLogo">
			<nuxt-link to='/'>
				<img src="~assets/imgs/right-logo.png" alt="">
			</nuxt-link>
		</div> -->
		<div class="topNavbar">
			<a-dropdown class="dropNav" placement="bottomRight">
				<a class="ant-dropdown-link">
					Menu
					<a-icon type="down" />
				</a>
				<a-menu slot="overlay">
					<a-menu-item>
						<nuxt-link to="/interactive-map">
							<img class="imgIcon" src="~assets/icons/interactivemapblack.png">
							Interactive Map
						</nuxt-link>
					</a-menu-item>
					<a-menu-item>
						<nuxt-link to="/data-repository">
							<img class="imgIcon" src="~assets/icons/datarepositoryblack.png">
							Data Repository
						</nuxt-link>
					</a-menu-item>
					<a-menu-item>
						<nuxt-link to="/gallery">
							<img class="imgIcon" src="~assets/icons/galleryblack.png">
							Gallery
						</nuxt-link>
					</a-menu-item>
					<a-menu-item>
						<nuxt-link to="/about">
							<img class="imgIcon" src="~assets/icons/aboutblack.png">
							About
						</nuxt-link>
					</a-menu-item>
					<a-menu-item>
						<nuxt-link to="/contact">
							<img class="imgIcon" src="~assets/icons/contactusblack.png">
							Contact Us
						</nuxt-link>
					</a-menu-item>
				</a-menu>
			</a-dropdown>

			<nuxt-link to='/'>
				<img class="leftLogo" width="180px" src="~assets/imgs/main.png" alt="">
			</nuxt-link>
			<div class="fullLinks">
				<nuxt-link class="link" :to="{ path: '/', hash:'#islands'}">
					<img class="imgIcon" src="~assets/icons/icons8-browse-folder-32.png">
					Island Modules
				</nuxt-link>
				<nuxt-link class="link" to="/interactive-map">
					<img class="imgIcon" src="~assets/icons/interactivemapwhite.png">
					Interactive Map
				</nuxt-link>
				<nuxt-link class="link" to="/data-repository">
					<img class="imgIcon" src="~assets/icons/datarepositorywhite.png">
					Data Repository
				</nuxt-link>
				<nuxt-link class="link" to="/gallery">
					<img class="imgIcon" src="~assets/icons/gallerywhite.png">
					Gallery
				</nuxt-link>
				<nuxt-link class="link" to="/sitemap">
					<img class="imgIcon" src="~assets/icons/sitemapwhite.png">
					Site Map
				</nuxt-link>
				<nuxt-link class="link" to="/about">
					<img class="imgIcon" src="~assets/icons/aboutwhite.png">
					About
				</nuxt-link>
				<nuxt-link class="link" to="/contact">
					<img class="imgIcon" src="~assets/icons/contactuswhite.png">
					Contact Us
				</nuxt-link>
			</div>
			<nuxt-link to='/'>
				<img class="rightLogo" src="~assets/imgs/right-logo.png" alt="">
			</nuxt-link>
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