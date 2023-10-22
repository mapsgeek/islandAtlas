<template>
	<div style="text-align:center;margin-top:55px">
		<a-tabs default-active-key="1" size="small">
			<a-tab-pane key="1" tab="Yap" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/yap/Yapmain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="2" tab="Neighboring Islands of Yap" force-render>
				<iframe class="iframe" src="https://experience.arcgis.com/experience/2b603dd7371b409ca3dbc6891c38311e/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="3" tab="Chuuk" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/chuuk/ChuukMain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="4" tab="Outer Islands of Chuuk" force-render>
				<iframe class="iframe" src="https://experience.arcgis.com/experience/44c858e25e1842a8b0253cec15417fd6/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="5" tab="Pohnpei" force-render>
				<iframe class="iframe" src="https://islandatlas.org/assets/maps/pohnpei/PohnpeiMain/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="6" tab="Outer Islands of Pohnpei" force-render>
				<iframe class="iframe" src="https://experience.arcgis.com/experience/3ee7105dbb514b1985e594b22d6e9c92/" frameborder="0"
					seamless="seamless"></iframe>
			</a-tab-pane>
			<a-tab-pane key="7" tab="Kosrae" force-render>
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