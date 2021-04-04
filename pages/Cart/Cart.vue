<template>
	<view class="">
		<uni-nav-bar fixed="true" right="123" statusBar="true" backgroundColor="rgb(1, 67, 67)" color="white" title="购物车"></uni-nav-bar>
		<view class="Mch_list" v-for="(item,index) in mch_list" :key="index">
			<view class="item">
				<image src="https://v3pro.houjiemeishi.com//images/icon/xuanzehui2x.png" mode="" class="check_img"></image>
				<image src="https://v3pro.houjiemeishi.com//images/icon/store.png" mode="" class="mch_img"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="Cart_list" v-for="(item2,index) in Cart_list" :key="item.mch_id" v-if="item2.mch_id == item.id">
				<view class="" style="width: 34rpx;height: 34rpx;">
					<image class="Cart_check" src="https://v3pro.houjiemeishi.com//images/icon/xuanzehui2x.png" mode=""></image>
				</view>

				<view class="" style="width: 150rpx;height: 150rpx;margin: 0 32rpx;">
					<image class="Cart_img" :src="item2.imgurl" mode=""></image>
				</view>

				<view class="Cart_item">
					<p class="Cart_title">{{item2.pro_name}}</p>
					<view class="Cart_gg">
						<text v-for="(value,key) in item2.skuBeanList">{{value.name}}</text>
						<image src="https://v3pro.houjiemeishi.com//images/icon/jianX.png" mode=""></image>
					</view>
					<view class="Cart_price">
						<view class="">
							<text class="price_text">¥</text>
							<text class="price_text2">{{item2.price}}</text>
						</view>
						<view class="Cart_comput">
							<view class="Cart_comput_add">
								<image src="https://v3pro.houjiemeishi.com//images/icon/jianhui2x.png" mode=""></image>
							</view>
							<text>{{item2.num}}</text>
							<view class="Cart_comput_reduce">
								<image src="https://v3pro.houjiemeishi.com//images/icon/jia+2x.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="hr">

			</view>
		</view>

		<!-- 
		<u-keyboard ref="uKeyboard" @change="valChange" mode="number" v-model="show"></u-keyboard> -->
		<!-- <u-button @click="show = true">打开</u-button> -->


		<view class="wrap">
			<u-button @click="clear">清空列表</u-button>
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.imgurl" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.product_title}}
						</view>
						<view class="demo-title2">
							{{item.subtitle}}
						</view>
						<view class="demo-price">
							¥{{item.vip_yprice}}元
						</view>
						<view class="demo-vipprice">
							会员价{{item.vip_price}}
						</view>
						<view class="demo-tag">
							<view class="demo-mch">
								<image :src="item.logo" mode=""></image>
								<text>{{item.mch_name}}</text>
							</view>
							<image @tap="popup(item.id)" class="demo-card" src="https://v3pro.houjiemeishi.com//images/icon1/allgoods_shopImg.png"
							 mode=""></image>
							<!-- <view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view> -->
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.imgurl" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.product_title}}
						</view>
						<view class="demo-price">
							{{item.vip_price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-mch">
								<image :src="item.logo" mode=""></image>
								<text>{{item.mch_name}}</text>
							</view>
							<image @tap="popup(item.id)" class="demo-card" src="https://v3pro.houjiemeishi.com//images/icon1/allgoods_shopImg.png"
							 mode=""></image>
							<!-- <view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view> -->
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>

		<u-popup v-model="is_popup" mode="bottom" :closeable="true" border-radius="30" height="800upx">
			<view class="SKU">
				<scroll-view scroll-y="true" style="height: 720upx;" class="Sku-scroll">
					<view class="sku-info">
						<image :src="SKU_imgUrls" mode=""></image>
						<view class="sku-item">
							<view class="sku-price">
								¥
								<text>{{SKU_price}}</text>
							</view>
							<text class="sku-stock">库存{{SKU_stock}}</text>
						</view>
					</view>
					<view class="sku-attribute" v-for="(item,index) in attrList" :key="item.id">
						<text class="attribute-name">{{item.attrName}}</text>
						<view class="attribute-norms">
							<text :class="{active:item2==attribute[index]}" v-for="(item2,index2) in item.all" @tap="AttributeChange(item2,index)">{{item2}}</text>
							
						</view>
					</view>
					<view class="sku-number">
						<text>数量</text>
						<u-number-box :min="1" :max="SKU_stock" v-model="number" @change="valChange"></u-number-box>
					</view>
				</scroll-view>
				<view class="confrim-btn">
					<u-button type="warning" @click="show = false;">确定</u-button>
				</view>
			</view>
		</u-popup>

		<view class="Cart_bottom">
			<view class="Cart_all">
				<image src="https://v3pro.houjiemeishi.com//images/icon/xuanzehui2x.png" mode=""></image>
				<text>全选</text>
			</view>
			<view class="Cart_end">
				<text>合计：</text>
				<text><text style="font-size: 26rpx;">¥</text>0.00</text>
				<button type="default">结算(0)</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import icons from "@/components/uni-icons/icons.js"
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				icons: icons,
				page: 1,
				mch_list: [],
				Cart_list: [],
				show: false,
				value: '',
				tjlist: [],

				loadStatus: 'loadmore',
				flowList: [],
				list: [],
				is_popup: false,
				number:1,
				attrList:[],
				attribute:[],
				skuBeanList:[],
				SKU_price:'',//价钱
				SKU_stock:'',//库存
				SKU_imgUrls:'',
				disabled:[]//是否禁止点击
			}
		},
		components: {
			uniNavBar
		},
		onLoad() {
			this._axios()


		},
		onShow() {
			this._axios()
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			this.page++
			// 模拟数据加载
			setTimeout(() => {
				this._axios();
				this.loadStatus = 'loadmore';
			}, 50)
		},
		methods: {
			_axios() {
				let data = {
					module: 'app',
					action: 'cart',
					app: 'index',
					cart_id: '',
					page: this.page
				}
				this.$req.post({
					data
				}).then(res => {
					if (res.code == 200) {
						this.mch_list = res.data.mch_list
						this.Cart_list = res.data.data
						this.tjlist = res.data.list
						if (res.data.list == 0) {
							this.loadStatus = 'nomore'
							return
						}
						this.addRandomData();
						console.log(res);
					} else {

					}
				}).catch(error => {

				})
			},
			popup(id) {
				let data = {
					module: 'app',
					action: 'product',
					app: 'index',
					pro_id: id
				}
				this.$req.post({data}).then(res => {
					if(res.code==200){
						console.log(res);
						this.attribute = []
						let attribute_list = res.data.attribute_list
						this.SKU_stock = parseInt(res.data.attribute_list[0].Stock)
						this.SKU_price = res.data.attribute_list[0].Price
						this.SKU_imgUrls = res.data.attribute_list[0].Pic
						this.skuBeanList = res.data.skuBeanList
						this.attrList = res.data.attrList
						
						for(var i = 0 ; i < res.data.attrList.length ; i++){
							this.attribute.push(res.data.attrList[i].all[0])
							if(res.data.attrList[i].Stock=="0"){
								this.attrList[i].disabled = true
							}
						}
						attribute_list.filter(item => {
							console.log(item);
						})
						
						this.is_popup = true
						console.log(this.attribute);
					}
				}).catch(error => {

				})
				
			},
			AttributeChange(item,index){
				let name = this.attribute[index]
				this.attribute[index] = item
				
				let attribute_name = ''
				for(var j = 0 ; j < this.attribute.length ; j++){
					attribute_name += this.attribute[j]
				}
				for(var i in this.skuBeanList){
					if(this.skuBeanList[i].name==attribute_name){
						if(this.skuBeanList[i].count=="0"){
							uni.showToast({
							    title: '库存不足，请选择其它！',
							    duration: 2000,
								icon:'none'
							});
							this.attribute[index] = name
							return
						}
						console.log(this.skuBeanList[i]);
						this.SKU_price = this.skuBeanList[i].price
						this.SKU_stock = parseInt(this.skuBeanList[i].count)
						this.SKU_imgUrls = this.skuBeanList[i].imgurl
						
					}
					
				}
				this.number = 1
				this.$forceUpdate();
			},
			valChange(val) {
				
				console.log(val);
				// this.value += val
				// console.log(this.value);
			},
			addRandomData() {
				for (let i = 0; i < this.tjlist.length; i++) {
					let index = this.$u.random(0, this.tjlist.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.tjlist[index]))
					item.sid = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f2f2f2;
	}

	.hr {
		height: 20rpx;
		background: #f0f6f6;
	}

	.Mch_list {
		background: #FFFFFF;
		.item {
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #e6e6e6;
			margin-left: 30rpx;
			height: 80rpx;

			.check_img {
				width: 34rpx;
				height: 34rpx;
				padding-right: 30rpx;
			}

			.mch_img {
				width: 32rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}

			text {
				font-size: 28rpx;
				color: #666;
			}
		}

		.Cart_list {
			margin: 30rpx 0px 0px 30rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			border-bottom: 2rpx solid #e6e6e6;
			padding-bottom: 20rpx;

			.Cart_check {
				width: 34rpx;
				height: 34rpx;

			}

			.Cart_img {
				width: 150rpx;
				height: 150rpx;
				// margin: 0 32rpx;
			}

			.Cart_item {
				padding-right: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				width: calc(100% - 75px - 17px - 32px - 15px);
				height: 150rpx;

				.Cart_title {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 28rpx;
				}

				.Cart_gg {
					color: #9d9d9d;
					height: 40rpx;
					width: 208rpx;
					padding: 0 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					background-color: #f6f6f6;

					image {
						width: 24rpx;
						height: 14rpx;
						margin-left: 2rpx;
					}

					text {
						width: 140rpx;
						height: 40rpx;
						margin-right: 10rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 24rpx;
					}
				}

				.Cart_price {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.price_text {
						color: #ff7d00;
						font-size: 24rpx;
					}

					.price_text2 {
						font-size: 32rpx;
						font-weight: 700;
						color: #ff7d00;
					}

					.Cart_comput {
						display: flex;
						align-items: center;
						border: 2rpx solid #ddd;
						border-radius: 8rpx;
						background: #f6f6f6;
						color: #9d9d9d;

						.Cart_comput_add {
							@include Vertical_center border-right: 2rpx solid #ddd !important;

							image {
								width: 16rpx;
								height: 16rpx;
								padding: 10rpx;
							}
						}

						text {
							margin: 0 10rpx;
							font-size: 30rpx;
							border: none !important;
							color: #020202;
							width: 42rpx;
							text-align: center;
						}

						.Cart_comput_reduce {
							@include Vertical_center border-left: 2rpx solid #ddd !important;

							image {
								width: 16rpx;
								height: 16rpx;
								padding: 10rpx;
							}
						}
					}
				}
			}
		}
	}

	.Cart_bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: calc(var(--window-bottom));
		background: #FFFFFF;
		border-top: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 999;

		.Cart_all {
			display: flex;
			align-items: center;
			padding-left: 20upx;

			image {
				width: 34rpx;
				height: 34rpx;
				margin-right: 10upx;
			}

			text {
				font-size: 28rpx;
				color: #020202;
			}
		}

		.Cart_end {
			@include Vertical_center text:nth-child(2) {
				padding-right: 20rpx;
			}

			text {
				font-size: 34rpx;
				color: #ff7d00;

			}

			button {
				background: $uni-button-bg;
				color: $uni-button-color;
				border-radius: 0;
				border: 2upx solid $uni-button-bg;
			}
		}
	}


	.wrap {
		padding-bottom: calc(var(--window-bottom));
	}


	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 28rpx;
		margin-top: 5px;
		font-weight: 500;
		color: $u-main-color;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.demo-title2 {
		font-size: 24upx;
		color: #888;
		margin-top: 2upx;
		font-weight: 400;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.demo-vipprice {
		color: $uni-button-bg;
		font-size: 24upx;

	}

	.demo-tag {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	.demo-mch {
		@include Vertical_center;

		image {
			width: 30upx;
			height: 30upx;
			border-radius: 100%;
		}
	}

	.demo-card {
		width: 60upx;
		height: 60upx;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
	
	
	
	.SKU{
		
		.Sku-scroll{
			padding: 0 30upx;
			width: calc(100% - 60upx);
		}
		.sku-info{
			display: flex;
			align-items: flex-end;
			padding: 30upx 0 30upx 0;
			border-bottom: 2upx solid $uni-border-bottom;
			image{
				border: 1px solid #eee;
				width: 140upx;
				height: 140upx;
			}
			.sku-item{
				padding-left: 20upx;
				.sku-price{
					padding-bottom: 30upx;
					color: $uni-button-bg;
					font-size: 24upx;
					text{
						font-size: 30upx;
						padding-left: 10upx;
					}
				}
				.sku-stock{
					font-size: 24upx;
					color: $uni-text-color-grey;
				}
			}
		}
		.sku-attribute{
			display: flex;
			flex-direction: column;
			padding: 30upx 0;
			border-bottom: 2upx solid $uni-border-bottom;
			.attribute-name{
				font-size: 28upx;
				color: $uni-text-color-grey;
			}
			.attribute-norms{
				display: flex;
				flex-wrap: wrap;
				// margin-top: 20upx;
				text{
					text-align: center;
					border: 2upx solid $uni-border-bottom;
					border-radius: 8upx;
					min-width: 60upx;
					padding: 0 40upx;
					color: $uni-color;
					margin: 20upx 20upx 0 0;
					background: #f8f8f8;
				}
				.active{
					border: 2upx solid $uni-button-bg;
					color: $uni-button-bg;
					background: $uni-button-color;
				}
			}
		}
		
		
		.sku-number{
			display: flex;
			justify-content: space-between;
			padding: 30upx 0;
			border-bottom: 2upx solid $uni-border-bottom;
		}
		
		.confrim-btn{
			button{
				background: $uni-button-bg;
				color: $uni-button-color;
				border-radius: 0;
				border-color: 0;
			}
			button:after{
				border:0;
			}
		}
	}
</style>
