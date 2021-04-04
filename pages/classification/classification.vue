<template>
	<view class="class" :style="{height: height}">
		<view class="class_left">
			<view class="class_left_item" @tap="Tab_switch(index,item.cate_id,$event)" :class="{'active':index==active}" :key="index"
			 :data-id="item.cate_id" v-for="(item,index) in class_data" @touchstart="getCur">
				<text>{{item.cate_name}}</text>
				<text :class="{'isborder':index==active}"></text>
			</view>
		</view>
		<scroll-view scroll-y="true" :scroll-into-view="'all'+mainCur" scroll-with-animation="true" class="content_box" id="content"
		 @scroll="scroll">
			<view class="class_right">
				<view class="class_right_item" :id="'all'+item.cate_id" v-for="(item,index) in class_data" :key="item.cate_id">
					<text class="class_right_catename">{{item.cate_name}}</text>
					<view class="class_right_flex">
						<view class="class_right_info" v-for="(items,indexs) in item.children" :key="items.child_id">
							<image :src="items.picture" mode=""></image>
							<text>{{items.name}}</text>
						</view>
					</view>
					<view class="no_data" v-if="item.children.length==0">
						<image src="https://v3pro.houjiemeishi.com//images/icon/fenlei.png" mode=""></image>
						<text>暂无二级分类</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
		
		
	</view>
</template>

<script>
	// import { Chart } from '@antv/g2';
	import scorllT from '../../static/js/scroll.js'
	export default {
		data() {
			return {
				class_data: [],
				active: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load2: true,
				
				height: 0
				
			}
		},
		onLoad: function(options) {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			let me = this
			uni.getSystemInfo({
			    success: function (res) {
					me.height = res.windowHeight + 'px'
					console.log(res);
			    }
			});
			
			//uni.startPullDownRefresh();
		},
		onShow() {
			this._axios()
			this.load2 = true
		},
		onPullDownRefresh() {
			console.log('refresh');
			let that = this
			setTimeout(function() {
				that._axios()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			_axios() {
				let data = {
					module: 'app',
					action: 'search',
					app: 'index'
				}
				this.$req.post({
					data
				}).then(res => {
					if (res.code == 200) {

						this.class_data = res.data
					}
					console.log(res);
				}).catch(error => {
					uni.showToast({
						title: error.message
					})
				})
			},
			Tab_switch(index, id, e) {
				this.active = index
				let _id = '#all' + id
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50 + 44
			},
			scroll(e) {
				this.list = this.class_data
				let that = this;
				let tabHeight = 0;
				if (this.load2) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#all" + this.list[i].cate_id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
							//console.log(this.list[i].top);
						}).exec();
					}
					this.load2 = false
				}
				let scrollTop = e.detail.scrollTop + 44;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.active = i
						//console.log(scrollTop)
						return false
					}
				}
			},
			getCur(e){
				console.log(e);
			},
			
		},

	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}
	.content_box{
		// position: absolute;
		//     left: 200rpx;
		//     right: 0;
		//     top: 0;
		//     bottom: 0;
		flex: 1;
	}
	.class {
		display: flex;
		height: 100%;
		position: relative;
		.class_left {
			width: 200rpx;
			overflow-y: auto;
			// position: absolute;
			// left: 0;
			// top: 0;
			// bottom: 0;
			.class_left_item {
				background: white;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 20rpx 10rpx;

				text {
					font-size: 28rpx;
				}

				.isborder {
					position: absolute;
					left: 10rpx;
					top: 50%;
					-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
					width: 3px;
					height: 15px;
					background: #014343;
					-webkit-border-radius: 1px;
					border-radius: 1px;
				}
			}

			.active {
				background: $background-class;
			}
		}

		.class_right {
			flex: 1;
			background: $background-class;
			padding: 20rpx 20rpx;
			overflow-y: auto;
			// position: absolute;
			// left: 200rpx;
			// right: 0;
			// top: 0;
			// bottom: 0;
			.class_right_item {
				background: white;
				min-height: 600rpx;
				margin-bottom: 20rpx;
				border-radius: 20rpx;

				.class_right_catename {
					text-align: center;
					font-size: 30rpx;
					display: flex;
					justify-content: center;
					color: #333333;
					font-weight: bold;
					padding: 20rpx 0;
				}

				.class_right_flex {
					display: flex;
					flex-wrap: wrap;
				}

				.class_right_info {
					flex: 0 0 33%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					height: 160rpx;
					margin-top: 20rpx;

					image {
						width: 120rpx;
						height: 120rpx;
					}

					text {
						font-size: 26rpx;
						color: #666;
					}
				}

				.no_data {
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					align-items: center;

					image {
						width: 240rpx;
						height: 240rpx;
					}

					text {
						font-size: 30rpx;
						color: #666;
					}
				}
			}
		}
	}
</style>
