<template>
	<view class="">
	<uni-nav-bar fixed="true" backgroundColor="#014343" color="#ffffff" :border="false" title="uview测试" :statusBar="true"></uni-nav-bar>
	<view class="wrap">
		
		<u-swiper :list="list" :current="current" :autoplay="true" :effect3d="true" :circular="true" ></u-swiper>
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice2.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice3.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice4.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice5.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice6.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice7.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://xiaochengxu.houjiemeishi.com/HKSTB/images/icon1/novice/novice8.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				current: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx;
	}
</style>