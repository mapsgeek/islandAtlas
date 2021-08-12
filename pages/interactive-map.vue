<template>
	<div style="text-align:center;margin-top:55px">
		<a-tabs default-active-key="1" size="small">
			<a-tab-pane key="1" tab="Yap" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/yap/Yapmain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="4" tab="Chuuk" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/chuuk/ChuukMain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="3" tab="Pohnpei" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/pohnpei/PohnpeiMain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="2" tab="Kosrae" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/kosrae/kosraemain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		layout: 'NotFixedNavbar'
	}
</script>

<style lang='less' scoped>
	.iframe {
		position: fixed;
		top: 91px;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 91vh;
		border: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>