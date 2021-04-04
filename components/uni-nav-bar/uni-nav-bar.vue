<template>
	<view class="uni-navbar">
		<view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor}"
		 class="uni-navbar__content">
			<uni-status-bar v-if="statusBar" />
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<view @tap="onClickLeft" class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="leftIcon.length">
						<uni-icons :color="color" :type="leftIcon" size="24" />
					</view>
					<view :class="{ 'uni-navbar-btn-icon-left': !leftIcon.length }" class="uni-navbar-btn-text uni-navbar__content_view"
					 v-if="leftText.length">
						<text :style="{ color: color, fontSize: '14px' }">{{ leftText }}</text>
					</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view class="uni-navbar__header-container-inner uni-navbar__content_view" v-if="title.length">
						<text class="uni-nav-bar-text" :style="{color: color }">{{ title }}</text>
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view :class="title.length ? 'uni-navbar__header-btns-right' : ''" @tap="onClickRight" class="uni-navbar__header-btns uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="rightIcon.length">
						<uni-icons :color="color" :type="rightIcon" size="24" />
					</view>
					<!-- 优先显示图标 -->
					<view class="uni-navbar-btn-text uni-navbar__content_view" v-if="rightText.length && !rightIcon.length">
						<text class="uni-nav-bar-right-text">{{ rightText }}</text>
					</view>
					<slot name="right" />
				</view>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="fixed">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../uni-status-bar/uni-status-bar.vue";
	import uniIcons from "../uni-icons/uni-icons.vue";
	//可自定义
	// <uni-nav-bar>
	//     <view>标题栏</view>
	//     <view slot="left">left</view>
	//     <view slot="right">right</view>
	// </uni-nav-bar>
	export default {
		name: "UniNavBar",
		components: {
			uniStatusBar,
			uniIcons
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			//左边图标
			leftIcon: {
				type: String,
				default: ""
			},
			//右边图标
			rightIcon: {
				type: String,
				default: ""
			},
			//是否固定顶部
			fixed: {
				type: [Boolean, String],
				default: false
			},
			//设置字体颜色
			color: {
				type: String,
				default: "#000000"
			},
			//设置背景颜色
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			//获取导航栏信息高度
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			//阴影
			shadow: {
				type: [String, Boolean],
				default: false
			},
			//边框
			border: {
				type: [String, Boolean],
				default: true
			}
		},
		data(){
			return{
				titleHeight: 0, //状态栏和导航栏的总高度
				statusBarHeight: 0 ,//状态栏高度
				naviBarHeight:0,//导航栏高度
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync()
			const system = res.platform
			this.statusBarHeight = res.statusBarHeight
			if (system === 'android') {
				this.titleHeight = (48 + this.statusBarHeight)
			} else if (system === 'ios') {
				this.titleHeight = (44 + this.statusBarHeight)
			}
			console.log(this.titleHeight);
			this.naviBarHeight = this.titleHeight - this.statusBarHeight
			console.log(this.naviBarHeight);
		},
        mounted() {
          if(uni.report && this.title !== '') {
			  console.log(this.title)
              uni.report('title', this.title)
          }
        },
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight(e) {
				this.$emit("clickRight",e);
			}
		}
	};
</script>

<style lang="scss" scoped>
	$nav-height: 44px;
	.uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: $uni-font-size-lg;
		/* #endif */
	}
	.uni-nav-bar-right-text {
		font-size: $uni-font-size-base;
	}

	.uni-navbar {
		width: 750rpx;
	}

	.uni-navbar__content {
		position: relative;
		width: 750rpx;
		background-color: $uni-bg-color;
		overflow: hidden;
	}

	.uni-navbar__content_view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		// background-color: #FFFFFF;
	}

	.uni-navbar__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 750rpx;
		height: $nav-height;
		line-height: $nav-height;
		font-size: 16px;
		// background-color: #ffffff;
	}

	.uni-navbar__header-btns {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-wrap: nowrap;
		width: 120rpx;
		padding: 0 6px;
		justify-content: center;
		align-items: center;
	}

	.uni-navbar__header-btns-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		justify-content: flex-start;
	}

	.uni-navbar__header-btns-right {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		padding-right: 30rpx;
		justify-content: flex-end;
	}

	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: $uni-font-size-base;
	}


	.uni-navbar__placeholder-view {
		height: $nav-height;
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar--shadow {
		/* #ifndef APP-NVUE */
		box-shadow: 0 1px 6px #ccc;
		/* #endif */
	}

	.uni-navbar--border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: $uni-border-color;
	}
</style>
