<template>
	<view class="tabBar">
		<view v-for="(item,index) in tabBar" :key="item.url" class="tabbar_item" :class="{'active':item.url == currentPage}"
		 @click="navTo(item,index)">
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
			<image v-else :src="item.imgNormal" mode=""></image>
			<view class="text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentPage: {
				type: String,
				default: 'index'
			}
		},
		data() {
			return {
				tabBar: [{
						url: 'index',
						text: '首页',
						imgNormal: 'http://v3pro.houjiemeishi.com/H5/static/img/homeWx.png',
						imgClick: 'http://v3pro.houjiemeishi.com/H5/static/img/homeWxh.png'
					},
					{
						url: 'officialPartner',
						text: '全部分类',
						imgNormal: 'http://v3pro.houjiemeishi.com/H5/static/img/goShoppingWx.png',
						imgClick: 'http://v3pro.houjiemeishi.com/H5/static/img/goShoppingWxh.png'
					},
					{
						url: 'Cart',
						text: '购物车',
						imgNormal: 'http://v3pro.houjiemeishi.com/H5/static/img/shoppingWx.png',
						imgClick: '../../static/images/active/stock_active.png'
					},  {
						url: 'mine',
						text: '我的',
						imgNormal: 'http://v3pro.houjiemeishi.com/H5/static/img/myWx.png',
						imgClick: '../../static/images/active/mine_active.png'
					}
				],
				level: ''

			};
		},
		mounted() {
			let userlevel = uni.getStorageSync('level');
			/* console.log(userlevel); */
			let _this = this;
			// if (userlevel == 1) {
			// 	_this.tabBar.splice(3, 1);
			// } else {
			// 	_this.tabBar.splice(1, 1);
			// 	_this.tabBar.splice(1, 1);
			// }
		},
		created() {
			uni.hideTabBar({})
		},
		computed: {

		},
		methods: {
			navTo(item, index) {
				let _this = this;
				if (item.url !== _this.currentPage) {
					var isUrl = `/pages/${item.url}/${item.url}`
					console.log(isUrl);
					const that = this
					uni.switchTab({
						url: isUrl
					})
				} else {
					/* this.$parent.toTop() */
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	//导航栏设置
	$isRadius:20upx; //左上右上圆角
	$isWidth:100vw; //导航栏宽度
	$isBorder:1px solid #eeeeee; //边框 不需要则设为0px
	$isBg:white; //背景

	// 选中设置
	$chooseTextColor:rgb(1, 67, 67); //选中时字体颜色
	$chooseBgColor:white; //选中时背景颜色 transparent为透明

	//未选中设置
	$normalTextColor:#999; //未选中颜色

	.tabBar {
		width: $isWidth;
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 998;
		background-color: $isBg;
		color: $normalTextColor;
		border-left: $isBorder;
		border-top: $isBorder;
		border-right: $isBorder;
		display: flex;
		justify-content: space-around;
		// border-top-right-radius: $isRadius;
		// border-top-left-radius: $isRadius;
		box-sizing: border-box;
		overflow: hidden;

		.tabbar_item {
			width: 25%;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.text{
				font-size: 10px;
				line-height: 1.8;
			}
			&.active {
				/* border-left: $isBorder;
                border-top: $isBorder; */
				background: $chooseBgColor;
				color: $chooseTextColor;
			}
		}

		image {
			margin-top: 5px;
			width: 48upx;
			height: 48upx;
		}
	}
</style>
