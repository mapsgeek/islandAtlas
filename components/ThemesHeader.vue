<template>
	<div style="position:fixed;z-index:1;right:0;top:50px;left:0">
		<div style="display:flex;flex-direction:column">
			<div class="logo">
				<a-dropdown>
					<img :src="require(`assets/imgs/normal-${this.island}.png`)">
					<a-menu slot="overlay" class="flags">
						<a-menu-item>
							<a href='/yap'>
								<!-- <img src="https://islandatlas.org/nuxt/imgs/normal-yap.png" onmouseover="this.src='https://islandatlas.org/nuxt/imgs/grey-yap.png';" onmouseout="this.src='https://islandatlas.org/nuxt/imgs/normal-yap.png';"> -->
								<img width="200px" class="hover08" src="~assets/imgs/normal-yap.png">
							</a>
						</a-menu-item>
						<a-menu-item disabled>
							<img width="200px" class="hover08" src="~assets/imgs/normal-yap-OI.png" alt="">
						</a-menu-item>
						<a-menu-item>
							<a href='/chuuk'>
								<img width="200px" class="hover08" src="~assets/imgs/normal-chuuk.png" alt="">
							</a>
						</a-menu-item>
						<a-menu-item disabled>
							<img width="200px" class="hover08" src="~assets/imgs/normal-chuuk-OI.png" alt="">
						</a-menu-item>
						<a-menu-item>
							<a href='/pohnpei'>
								<img width="200px" class="hover08" src="~assets/imgs/normal-pohnpei.png" alt="">
							</a>
						</a-menu-item>
						<a-menu-item disabled>
							<img width="200px" class="hover08" src="~assets/imgs/normal-pohnpei-OI.png" alt="">
						</a-menu-item>
						<a-menu-item>
							<a href='/kosrae'>
								<img width="200px" class="hover08" src="~assets/imgs/normal-kosrae.png" alt="">
							</a>
						</a-menu-item>
					</a-menu>
				</a-dropdown>
			</div>
			<div class="topNavbar">
				<div style="justify-content:center;display:flex;flex-grow:1">
					<a-dropdown class="dropNav" placement="bottomRight">
						<a class="ant-dropdown-link" style="margin-right:15px;margin-bottom: 15px;">
							Themes
							<a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item>
								<a active-class="land" :href='"/"+this.island+"/land"'>
									Land
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="reefs" :href='"/"+this.island+"/reefs"'>
									Reefs
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="water" :href='"/"+this.island+"/water"'>
									Water
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="vegetation" :href='"/"+this.island+"/vegetation"'>
									Vegetation
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="population" :href='"/"+this.island+"/population"'>
									Population
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="infrastructure" :href='"/"+this.island+"/infrastructure"'>
									Infrastructure
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="conservation" :href='"/"+this.island+"/conservation"'>
									Conservation
								</a>
							</a-menu-item>
							<a-menu-item>
								<a active-class="culture" :href='"/"+this.island+"/culture"'>
									Culture
								</a>
							</a-menu-item>
						</a-menu>
					</a-dropdown>
					<div class="fullLinks">
						<ul class="nav navbar-nav themes">
							<li>
								<a exact-active-class="intro" :href='"/" +this.island'>
									Intro
								</a>
							</li>
							<li>
								<a active-class="land" :href='"/"+this.island+"/land"'>
									LAND
								</a>
							</li>
							<li>
								<a active-class="reefs" :href='"/"+this.island+"/reefs"'>
									REEFS
								</a>
							</li>
							<li>
								<a active-class="water" :href='"/"+this.island+"/water"'>
									WATER
								</a>
							</li>
							<li>
								<a active-class="vegetation" :href='"/"+this.island+"/vegetation"'>
									VEGETATION
								</a>
							</li>
							<li>
								<a active-class="population" :href='"/"+this.island+"/population"'>
									POPULATION
								</a>
							</li>
							<li>
								<a active-class="infrastructure" :href='"/"+this.island+"/infrastructure"'>
									INFRASTRUCTURE
								</a>
							</li>
							<li>
								<a active-class="conservation" :href='"/"+this.island+"/conservation"'>
									CONSERVATION
								</a>
							</li>
							<li>
								<a active-class="culture" :href='"/"+this.island+"/culture"'>
									CULTURE
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			island: String
		},
		computed: {

		},
		mounted() {
			// console.log(this.$route)
		},
		data() {
			return {
				normal: "normal",
				grey: "grey"
			}
		}
	}
</script>

<style lang="less" scoped>
	/* Gray Scale */
	.hover08 {
		-webkit-filter: grayscale(60%);
		filter: grayscale(60%);
		&:hover {
			-webkit-filter: grayscale(0);
			filter: grayscale(0);
			// -webkit-transition: 0.3s ease-in-out;
			// transition: 0.3s ease-in-out;
		}
	}

	.flags {
		padding: 0;
		transition: all 0;
		margin-top: -4px;
		box-shadow: none;
		& > .ant-dropdown-menu-item {
			padding: 0;
		}
		a {
			padding: 0 12px;
		}
	}
	.navbar {
		overflow: hidden;
		background-color: #333;
		position: fixed;
		top: 0;
		width: 100%;
	}

	.navbar a {
		float: left;
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}
	.nav {
		margin: auto;
		display: flex;
		list-style: none;
		padding: 0;
	}
	.nav > li > a {
		position: relative;
		display: block;
		padding: 9px 15px;
	}

	.topNavbar {
		position: relative;
		background: #4b5861;
		color: white;
		display: flex;
		align-items: flex-end;
		height: 50px;
		a {
			color: white;
			// margin-right: 15px;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.nav > li {
		&:hover {
			&:nth-child(1) {
				background: #959595;
			}
			&:nth-child(2) {
				background: #954c97;
			}
			&:nth-child(3) {
				background: #2ca2db;
			}
			&:nth-child(4) {
				background: #1dbbb0;
			}
			&:nth-child(5) {
				background: #7fb842;
			}
			&:nth-child(6) {
				background: #fab317;
			}
			&:nth-child(7) {
				background: #ee5525;
			}
			&:nth-child(8) {
				background: #be2326;
			}
			&:nth-child(9) {
				background: #901c21;
			}
		}
	}
	.dropNav {
		display: none;
	}
	.fullLinks {
		margin: auto;
	}
	@media screen and (max-width: 920px) {
		.fullLinks {
			display: none;
		}
		.dropNav {
			display: block;
			margin-left: auto;
			// margin-right: 40px;
			padding-right: 37px;
		}
	}
	.logo {
		margin-top: 10px;
		width: 200px;
		position: fixed;
		z-index: 1;
		& img {
			width: 100%;
		}
	}
</style>