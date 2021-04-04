<template>
	<view class="prohibition">
		<uni-nav-bar fixed="true" backgroundColor="#014343" color="#fff" :border="false" :statusBar="true">
		    <view class="input">
				<input type="text" value="" readonly placeholder="搜索商品" />
			</view>
		    <view slot="left" class="address">
				<text class="address_text">{{region.district}}</text>
				<image src="https://v3pro.houjiemeishi.com//images/icon1/jianX_h.png" mode=""></image>
			</view>
		    <view slot="right" class="message">
				<image src="https://v3pro.houjiemeishi.com//images/icon1/xiaoxi172x.png" mode=""></image>
			</view>
		</uni-nav-bar>
		<!-- <view class="">
			<video src="http://39.96.25.51:8090/pxk/RPReplay_Final1604816610.MP4" poster="" controls :show-center-play-btn="false"
			 auto-pause-if-navigate></video>

			<image class="zu_logo" :src="src" mode=""></image>

		</view> -->
		<button @tap="getPhoneNumbers">1231</button>  
		<!-- #ifdef MP-WEIXIN -->
		<view class="">
			<image :src="WX_data.img" mode="" style="width: 60rpx;height: 60rpx;border-radius: 100%;"></image>
			<text>{{WX_data.name}}</text>
			<button open-type="getUserInfo" @click="getuserinfo">微信授权</button>
		</view>
		<!-- #endif -->
		
		<!-- <button type="default" @tap="toPay">toPay</button> -->
		<view class='home'>
			<view class="colorBg"></view>
			<swiper @change="change($event)" indicator-dots circular autoplay interval=3000>
				<swiper-item style="border-radius: 10px;" v-for="(item,index) in swipers" :key="index">
					<image :src="item.image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="nav">
			<view class="Item" v-for="(item,index) in list_nav" :key="index">
				<image :src="item.appimg" mode=""></image>
				<text>{{item.name}}</text>
			</view>
			
		</view>
		<view class="colorBg2">

			<view class="">
				<view class="homeAdv">
					<image src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600067308501.png" mode=""></image>
					<image src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600067308501.png" mode=""></image>
				</view>
			</view>

			<view class="seckill-wrap">
				<view class="seckill">
					<view class="seckill_top">
						<view class="seckill_top_title">
							<image src="../../static/ms.png" mode=""></image>
							<view class="">
								{{h}}
							</view>
							:
							<view class="">
								{{m}}
							</view>
							:
							<view class="">
								{{s}}
							</view>
						</view>
						<text>更多 &gt;</text>
					</view>
					<view class="scroll-view_H">
						<view class="scroll-view_item">
							<image class="scroll-view_item_img" src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1598868859736.jpeg"
							 mode=""></image>
							<text class="scroll-view_item_title">测试滚动</text>
							<view class="scroll-view_item_price">
								<text class="scroll-view_item_dis">¥100.00</text>
								<text class="scroll-view_item_ori">¥150.00</text>
								<image class="scroll-view_item_img2" src="../../static/qiang.png" mode=""></image>
							</view>
						</view>
						<view class="scroll-view_item">
							<image class="scroll-view_item_img" src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1598868859736.jpeg"
							 mode=""></image>
							<text class="scroll-view_item_title">测试滚动</text>
							<view class="scroll-view_item_price">
								<text class="scroll-view_item_dis">¥100.00</text>
								<text class="scroll-view_item_ori">¥150.00</text>
								<image class="scroll-view_item_img2" src="../../static/qiang.png" mode=""></image>
							</view>
						</view>
						<view class="scroll-view_item">
							<image class="scroll-view_item_img" src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1598868859736.jpeg"
							 mode=""></image>
							<text class="scroll-view_item_title">测试滚动</text>
							<view class="scroll-view_item_price">
								<text class="scroll-view_item_dis">¥100.00</text>
								<text class="scroll-view_item_ori">¥150.00</text>
								<image class="scroll-view_item_img2" src="../../static/qiang.png" mode=""></image>
							</view>
						</view>
						<view class="scroll-view_item">
							<image class="scroll-view_item_img" src="https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1598868859736.jpeg"
							 mode=""></image>
							<text class="scroll-view_item_title">测试滚动</text>
							<view class="scroll-view_item_price">
								<text class="scroll-view_item_dis">¥100.00</text>
								<text class="scroll-view_item_ori">¥150.00</text>
								<image class="scroll-view_item_img2" src="../../static/qiang.png" mode=""></image>
							</view>
						</view>
					</view>

				</view>
			</view>

			<view class="group-wrapper" v-for="(item,index) in plug_unit" :key="index" v-if="item.list.length">
				<view class="home_title">
					<text>{{item.name}}</text>
					<image src="../../static/ys.png" mode=""></image>
				</view>
				<view class="group_content">
					<view class="group_content_item" v-for="(item2,index2) in item.list" :key="index2">
						<image class="group_content_item_img" :src="item2.imgurl"
						 mode=""></image>
						<view class="group_content_item_right">
							<view class="group_content_item_title">
								<text v-if="item.name=='超值拼团'">{{item2.pro_name1}}</text>
								<text v-else-if="">{{item2.product_title}}</text>
								<view class="" v-if="item.name=='拼团'">
									<image src="https://v3pro.houjiemeishi.com//images/icon1/group_icon.png" mode=""></image>
									{{item2.sum_total}}人已拼团
								</view>
							</view>
							<view class="group_content_item_bottom" v-if="item.name!='积分'">
								<view class="group_content_item_bottom_text" v-if="item.name=='超值拼团'">
									<text>{{item2.sum}}人拼</text>
									¥ {{item2.kaiprice}}
								</view>
								<view class="group_content_item_bottom_text" v-else>
									¥{{item2.vip_yprice}} <text>已售{{item2.volume}}件</text>
								</view>
								<text class="group_content_item_bottom_del" v-if="item.name=='超值拼团'">¥{{item2.market_price}}</text>
								<text class="product" v-else>会员价¥{{item2.vip_price}}</text>
							</view>
							<view class="integral" v-else>
								<image src="https://v3pro.houjiemeishi.com//images/icon1/integral.png" mode=""></image>
								{{item2.integral}}
							</view>
						</view>
					</view>

				</view>
			</view>


			<view class="mch">
				<view class="home_title">
					<text>优选店铺</text>
					<image src="../../static/ys.png" mode=""></image>
				</view>
				<view class="mch_content">
					<view class="mch_content_scroll" v-for="(item,index) in mch_list">
						<view class="mch_content_img">
							<image :src="item.logo" mode=""></image>
						</view>
						<view class="mch_content_title">{{item.name}}</view>
						<text class="mch_content_km">{{item.distance}}km</text>
					</view>
					

				</view>
			</view>

			<view class="swipt">
				<swiper indicator-dots circular autoplay interval=3000 class="swipt_item">
					<swiper-item style="border-radius: 10px;" v-for="(item,index) in swipers2" :key="index">
						<image :src="item"></image>
					</swiper-item>
				</swiper>
			</view>


			<view class="navTabBox">
				<view class="navTabBox_tab">
					<view :class="{'goods-view':index==num}" class="goods_title_item" v-for="(item,index) in list" :key="index" @tap="tabInfo(index,item)">
						<view class="">
							{{item.pname}}
						</view>
						<text>{{item.english_name}}</text>
						<view :class="{'active-view':index==num}"></view>
					</view>
				</view>
				<view class="navTabBox_content">
					<view class="navTabBox_content_item" id="test" v-for="(item,index) in list2" :key="index" @tap="Img()">
						<view class="" style="position: relative;">
							<image :src="item.imgurl" mode=""></image>
							<view class="Short" v-if="item.num==0">
								已售罄
							</view>
						</view>

						<view class="navTabBox_content_item_right">
							<view class="content_item_top">
								<view class="content_item_top_title">
									{{item.product_title}}
								</view>
								<view class="goods_content_item_icon">
									热销
								</view>
							</view>
							<view class="content_item_bottom">
								<view class="content_item_bottom_price">
									¥{{item.price}}
									<view class="">
										会员价¥ {{item.vip_price}}
									</view>
								</view>
								<view class="content_item_bottom_num">
									<text>销量：{{item.volume}}件</text>
									<view class="">
										找相似
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-show="isLoadMore">
						<uni-load-more :status="loadStatus"></uni-load-more>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"

	export default {
		data() {
			return {
				demo: {
					top: 0,
					height: "88upx"
				},
				currentTabIndex: 'index',
				swipers: ['https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600244834436.png',
					'https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600244834843.png'
				],
				swipers2: ['https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600247958665.png',
					'https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1600247958665.png'
				],
				list: [{
						title: "手机数码",
						name: "MOBILE PHONE DIGITAL"
					},
					{
						title: "家居家纺",
						name: "MOBILE PHONE DIGITAL"
					},
					{
						title: "精选服饰",
						name: "MOBILE PHONE DIGITAL"
					}
				],
				list2: [],
				list_nav:[],
				mch_list:[],
				region:{},
				plug_unit:[],//插件
				num: '0',
				h: 23, //时
				m: 59, //分
				s: 59, //秒
				countdown: '14:00:00', //倒计时
				timer: null, //重复执行
				page: 1,
				pagesize: 10,
				loadStatus: 'loading', //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
				isLoadMore: false,
				WX_data:{},
				contacts_json: '',
				src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4?x-oss-process=video/snapshot,t_0,f_jpg'
			}
		},
		onLoad() {
			this.timer = setInterval(() => {
				this.timeCount()
			}, 1000)
			this.getVideoList();
			console.log(this.$store.state);
			//this.getPhoneNumbers()
		},
		onShow() {
			this._axios()
			this._axios_list()
			uni.setTabBarBadge({
				index: 2,
				text: '5'
			})
		},
		onReachBottom() { //上拉触底函数
			if (!this.isLoadMore) { //此处判断，上锁，防止重复请求
				this.isLoadMore = true
				this.page += 1
				this.getVideoList()
			}
		},
		methods: {
			gettel() {
				
				var that = this
				// 获取通讯录对象
				plus.contacts.getAddressBook( plus.contacts.ADDRESSBOOK_PHONE, function( addressbook ) {
					uni.showToast({
						title: '获取通讯录对象成功',
						duration: 2000
					})
					console.log('获取通讯录对象成功')
					console.log(addressbook)
					// 查找联系人
					addressbook.find(["displayName","phoneNumbers"],function(contacts){
						uni.showToast({
							title: '获取联系人成功',
							duration: 2000
						})
						console.log('获取联系人成功')
						console.log(JSON.stringify(contacts))
						that.list = contacts
					}, function () {
						uni.showToast({
							title: '获取联系人失败',
							duration: 2000
						})
					},{multiple:true});
				}, function ( e ) {
					uni.showToast({
						title: '获取通讯录对象失败:' + e.message,
						duration: 2000
					})
				});
			},
			getPhoneNumbers() { 
				uni.login({
				    provider: 'univerify',
				    univerifyStyle: { 
						//fullScreen: true
					},
					success(res) {
						console.log(res);
					}
				})
				
				// 程序全局环境对象  
				// var userinfo ={  
				// 	msisnd:123,  
				// 	phone:null  
				// }
				// console.log(userinfo);
				// var mainActivity = plus.android.runtimeMainActivity();  
				// var Context = new plus.android.importClass("android.content.Context");  
				// var TelephonyManager = new plus.android.importClass("android.telephony.TelephonyManager");  
				// var tm = mainActivity.getSystemService(Context.TELEPHONY_SERVICE);  
				
				
				// console.log(plus.device.uuid);
				
				// userinfo.msisdn = tm.getLine1Number();  
				// plus.storage.setItem("msisdn", userinfo.msisdn);  
				// console.log(JSON.stringify(userinfo));
				// if (userinfo.msisdn != "") {  
				// 	userinfo.phone = userinfo.msisdn;  
				// 	plus.storage.setItem("phone", userinfo.msisdn);  
					
				// }  
				
				// uni.showModal({
				// 	content:userinfo,
				// 	success(e) {
						
				// 	}
				// })
				// console.log();
				// plus.contacts.getAddressBook( plus.contacts.ADDRESSBOOK_PHONE, function( addressbook ) {
				// 	addressbook.find(["displayName","phoneNumbers"],function(contacts){
				// 		//var contacts_json= ''
				// 	   this.contacts_json = JSON.stringify(contacts);
				// 	   console.log(this.contacts_json);
					   
				// 	   //contacts_msg = '获取成功！';
				// 	}, function () {
				// 		console.log('获取通讯录失败！');
				// 		//contacts_msg = '获取通讯录失败！';
				// 	},{multiple:true});
				// }, function ( e ) {
				// 	//contacts_msg = '获取通讯录失败！';
				// 	console.log('获取通讯录失败！');
				// } );
			},
			tabInfo(e,item) {
				this.list2 = item.list
				this.num = e
			},
			getuserinfo: function() {
				// wx登录
				// wx.login({
				//   success (res) {
				//     if (res.code) {
				//       //发起网络请求
				// 	  var code = res.code
				// 	  	// 获取微信用户信息
				// 		wx.getUserInfo({
				// 		  success: function(res) {
				// 			// var userInfo = res.userInfo
				// 			// var nickName = userInfo.nickName
				// 			// var avatarUrl = userInfo.avatarUrl
				// 			// var gender = userInfo.gender //性别 0：未知、1：男、2：女
				// 			// var province = userInfo.province
				// 			// var city = userInfo.city
				// 			// var country = userInfo.country
				// 			console.log(res);
				// 		  },
				// 		  fail:res=>{
				// 		      // 获取失败的去引导用户授权 
				// 		   }
				// 		})

				//     } else {
				// 		...
				//     }
				//   }
				// })
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes);
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
								that.yonghuwx = infoRes.userInfo
								uni.showToast({
									title:'授权成功'
								})
								that.WX_data.img = that.yonghuwx.avatarUrl
								that.WX_data.name = that.yonghuwx.nickName
								console.log(that.yonghuwx)
							}
						});
					}
				});
				
			},
			timeCount() {
				--this.s;
				if (this.s < 0) {
					--this.m;
					this.s = 59;
				}
				if (this.m < 0) {
					--this.h;
					this.m = 59
				}
				if (this.h < 0) {
					this.s = 0;
					this.m = 0;
				}
				//this.countdown = this.h + ":" + this.m + ":" + this.s
				//console.log(this.h + ":" + this.m + ":" + this.s);
			},
			change(e) {
				//console.log(e);
			},
			Img(e) {
				// uni.navigateTo({
				// 	url: '/pages/my/my?name=1',
				// });
				// uni.switchTab({
				// 	url: '/pages/my/my?name=1'
				// })
				var ss = 2
				var dd = 4
				if (ss == 1) return uni.switchTab({
					url: '/pages/my/my?name=1'
				}), !dd

				if (dd == 1) dd
				else dd = 3
				console.log(dd);
			},
			_axios() {
				let data = {
					access_id: '',
					module: 'app',
					action: 'cart',
					app: 'index',
					cart_id: '',
					page: this.page
				}
				this.$req.post({
					data
				}).then(res => {
					console.log(res);
				}).catch(error => {

				})
			},
			_axios_list(){
				let data = {
					module: 'app',
					action: 'index',
					app: 'index',
					longitude: '112.951227',
					latitude: '28.227965'
				}
				this.$req.post({
					data
				}).then(res => {
					if(res.code==200){
						this.list_nav = res.data.nav_list
						this.swipers = res.data.banner
						this.mch_list = res.data.r_mch
						this.region = res.data.region
						this.plug_unit = res.data.Marketing_list
						this.list = res.data.list2
						this.list2 = res.data.list2[0].list
						
						
					}
					console.log(res);
				}).catch(error => {
					console.log(error);
				})
			},
			toPay() {
				
				uni.getProvider({
					service: "payment",
					success: (e) => {	// e: {"errMsg":"getProvider:ok","service":"payment","provider":["alipay","wxpay"]}
						console.log(e)
						let arrStr = e.provider.join(',')
						if (arrStr.indexOf('alipay') === -1) {
							uni.showToast({ icon: 'none', title: '目前只支持支付宝' })
							return
						}
						// 调用支付
						//this.requestPayment()
					},
					fail: (e) => {
						console.log("获取支付通道失败：", e);
					}
				});
				
			},
			getVideoList() {


				uni.request({
					url: 'https://v3pro.houjiemeishi.com/index.php?store_id=1&store_type=2', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						access_id: '',
						module: 'app',
						action: 'cart',
						app: 'index',
						cart_id: '',
						page: this.page
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					// header: {
					//     'custom-header': 'hello' //自定义请求头信息
					// },
					success: res => {
						console.log(res);
						if (res.data.code == 200) {
							if (res.data.list) {
								this.list2 = this.list2.concat(res.data.list)
								if (res.data.list.length < this.pagesize) { //判断接口返回数据量小于请求数据量，则表示此为最后一页
									this.isLoadMore = true
									this.loadStatus = 'nomore'
									uni.showToast({
										title: '没有更多数据了',
										icon: 'none'
									})
								} else {
									this.isLoadMore = false
								}
							} else {
								this.isLoadMore = true
								this.loadStatus = 'nomore'

							}
						} else { //接口请求失败的处理
							uni.showToast({
								title: res.data.message,
								icon: 'none'
							})
							this.isLoadMore = false
							if (this.page > 1) {
								this.page -= 1
							}
						}
					},
					fail: () => { //接口请求失败的处理
						uni.showToast({
							title: '服务器开小差了呢，请您稍后再试',
							icon: 'none'
						})
						this.isLoadMore = false
						if (this.page > 1) {
							this.page -= 1
						}
					},
				});
			}
		},
		mounted() {
			uni.createSelectorQuery().select('#test').boundingClientRect(function(e) {
				console.log(e)

			}).exec()
		},
		components: {
			uniLoadMore
		},

		created() {

			// uni.request({
			// 	url: 'http://v3pro.houjiemeishi.com/index.php?module=AdminLogin', //仅为示例，并非真实接口地址。
			// 	method: 'POST',
			// 	data: {
			// 		m: 'check'
			// 	},
			// 	header: {
			// 		'content-type': 'application/x-www-form-urlencoded',
			// 	},
			// 	// header: {
			// 	//     'custom-header': 'hello' //自定义请求头信息
			// 	// },
			// 	success: (res) => {
			// 		console.log(res);
			// 		//this.text = 'request success';
			// 	}
			// });



		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.hei {
		height: var(--status-bar-height);
	}
	.message {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		background: white;
		border-radius: 17px;
		margin-left: 10px;
	
		image {
			width: 40upx;
			height: 40upx;
		}
	}
	.address {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		width: 71px;
		margin-right: 10px;
		.address_text{
			color: #FFFFFF;
		}
		image {
			width: 22upx;
			height: 14upx;
		}
	
	}
	.input {
		flex: 1;

		input {
			border-radius: 22px;
			box-sizing: border-box;
			width: 226px;
			height: 34px;
			padding: 0 0 0 15px;
			background: #fff;
			border: 1px solid #fff;
			color: #bbb;
			font-size: 14px;
		}

		input::-webkit-input-placeholder {
			color: #bbb;
		}
	}
	.product{
		color: #014343;
		font-size: 24rpx;
	}
	.integral{
		image{
			width: 28rpx!important;
			height: 28rpx!important;
			margin-right: 10rpx;
		}
		color: #ff7d00;
		font-size: 34rpx;
		font-weight: 700;
	}
	.header {
		display: flex;
		align-items: center;
		background: linear-gradient(90deg, rgb(1, 67, 67) 0%, rgb(1, 67, 67) 100%);
		color: white;
		padding: 0 12px;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		height: 44px;
		z-index: 999;
		height: var(--status-bar-height);
		padding-top: var(--status-bar-height);

		.address {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			width: 71px;
			margin-right: 10px;
			text{
				color: white;
			}
			image {
				width: 22upx;
				height: 14upx;
			}

		}

		.input {
			flex: 1;

			input {
				border-radius: 22px;
				box-sizing: border-box;
				width: 226px;
				height: 34px;
				padding: 0 0 0 15px;
				background: #fff;
				border: 1px solid #fff;
				color: #bbb;
				font-size: 14px;
			}

			input::-webkit-input-placeholder {
				color: #bbb;
			}
		}

		.message {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 34px;
			height: 34px;
			background: white;
			border-radius: 17px;
			margin-left: 10px;

			image {
				width: 40upx;
				height: 40upx;
			}
		}
	}

	.colorBg2 {
		background: #cee5e5;
		padding-bottom: 20px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.home {
		position: relative;
		padding: 0 10px;

		.colorBg {
			position: absolute;
			left: 0;
			top: 0;
			height: 85px;
			width: 100%;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
			background: linear-gradient(90deg, rgb(1, 67, 67) 50%, rgb(1, 67, 67) 100%);

		}

		image {
			height: 160px;
			width: 100%;
		}
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		padding: 25px 15px 5px;
		font-size: 12px;

		.Item {
			width: 20%;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-between;
			padding-bottom: 20rpx;
			image {
				width: 30px;
				height: 30px;
			}
			text{
				padding-top: 10rpx;
			}
		}
	}

	.homeAdv {
		display: flex;
		justify-content: space-between;
		padding: 12px;
		background: linear-gradient(90deg, rgb(207, 230, 230) 0%, rgb(207, 230, 230) 100%);
		margin-top: 0px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;

		image {
			border-radius: 10px;
			width: 166px;
			height: 80px;
		}
	}

	.seckill-wrap {
		background: linear-gradient(90deg, rgb(207, 230, 230) 0%, rgb(207, 230, 230) 100%);
		height: 232px;

		.seckill {
			width: 345px;
			background: #fff;
			box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, .1);
			border-radius: 8px;
			margin: 0px auto;
			padding: 5px 12px;
			box-sizing: border-box;

			.seckill_top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 5px;

				.seckill_top_title {
					display: flex;
					align-items: center;
					color: rgb(248, 142, 40);
					font-size: 12px;

					image {
						width: 103px;
						height: 24px;
						margin-right: 6px;
					}

					view {
						display: flex;
						align-items: center;

						background: rgb(248, 142, 40);
						color: white;
						border-radius: 2px;
						margin: 0 2px;
						padding: 4px 2px;
						line-height: 10px;
					}
				}

				text {
					display: flex;
					align-items: center;
					font-size: 13px;
					color: #999;
				}
			}

			.scroll-view_H {
				display: flex;
				overflow-x: auto;

				.scroll-view_item {
					width: 130px;
					margin-right: 10px;
					display: flex;
					flex-direction: column;

					.scroll-view_item_img {
						width: 130px;
						height: 130px;
						border-radius: 5px;
					}

					.scroll-view_item_title {
						font-size: 13px;
						line-height: 13px;
						color: #020202;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						margin-top: 10px;
					}

					.scroll-view_item_price {
						display: flex;
						align-items: center;
						font-size: 12px;
						margin-top: 7px;

						.scroll-view_item_dis {
							color: rgb(248, 142, 40);
						}

						.scroll-view_item_ori {
							color: #999;
							text-decoration: line-through;
							margin-left: 4px;
						}
					}

					.scroll-view_item_img2 {
						width: 25px;
						height: 19px;
					}
				}
			}


		}

	}

	.group-wrapper {
		background: linear-gradient(90deg, rgb(207, 230, 230) 0%, rgb(207, 230, 230) 100%);
		padding: 5px 0;

		.home_title {
			margin: 0 15px;
			z-index: 10;
			position: relative;

			text {
				font-size: 17px;
				font-weight: 700;
				color: #014343;
				line-height: 17px;
			}

			image {
				position: absolute;
				width: 55px;
				height: 9px;
				top: 16px;
				left: 12px;
				z-index: -1;
			}
		}

		.group_content {
			margin-top: 15px;
			padding: 0 15px;
			overflow-x: auto;
			min-height: 130px;
			display: flex;

			.group_content_item {
				display: flex;
				margin-right: 10px;
				width: 280px;
				min-width: 280px;

				background: #fff;
				box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, .1);
				padding: 15px 12px;
				border-radius: 8px;

				.group_content_item_img {
					width: 100px;
					height: 100px;
					margin-right: 12px;
				}

				.group_content_item_right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;

					.group_content_item_title {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						text {
							font-size: 14px;
							color: #020202;
							line-height: 15px;
						}

						view {
							display: flex;
							align-items: center;
							height: 14px;
							padding: 0 7px 0 5px;
							background: #ffefee;
							border-radius: 7px;
							line-height: 11px;
							font-size: 11px;
							color: #ff5041;
							margin-top: 8px;

						}
					}

					.group_content_item_bottom {
						.group_content_item_bottom_text {
							font-size: 15px;
							color: rgb(255, 125, 0);
							line-height: 12px;
							font-weight: 700;

							text {
								font-size: 12px;
								line-height: 12px;
								color: #020202;
								margin-right: 3px;
							}
						}

						.group_content_item_bottom_del {
							font-size: 12px;
							color: #999;
							text-decoration: line-through;
							margin-top: 7px;
							line-height: 10px;
						}
					}

					image {
						width: 7px;
						height: 10px;
					}
				}
			}
		}
	}

	.mch {
		background: linear-gradient(90deg, rgb(207, 230, 230) 0%, rgb(207, 230, 230) 100%);
		padding: 5px;

		.home_title {
			margin: 0 15px;
			z-index: 10;
			position: relative;

			text {
				font-size: 34rpx;
				font-weight: 700;
				color: #014343;
				line-height: 17px;
			}

			image {
				position: absolute;
				width: 55px;
				height: 9px;
				top: 16px;
				left: 12px;
				z-index: -1;
			}
		}

		.mch_content {
			margin: 15px;
			display: flex;

			.mch_content_scroll {
				margin-right: 10px;
				display: flex;
				flex-direction: column;
				width: 108px;
				height: 158px;
				background: #fff;
				border-radius: 5px;
				-webkit-box-orient: vertical;

				image {
					border-radius: 5px;
					width: 108px;
					height: 108px;
				}

				.mch_content_title {
					font-size: 12px;
					line-height: 12px;
					color: #000;
					margin: 10px 7px 9px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.mch_content_km {
					color: #999;
					font-size: 12px;
					line-height: 10px;
					margin: 0 7px;
				}
			}
		}
	}

	.swipt {
		background: rgb(207, 230, 230);

		.swipt_item {
			height: 90px;
			padding: 0 10px;
		}

		image {
			width: 100%;
			height: 90px;
		}
	}

	.navTabBox {
		background: linear-gradient(90deg, rgb(207, 230, 230) 50%, rgb(207, 230, 230) 100%);
		color: rgb(2, 2, 2);
		padding-top: 10px;

		.navTabBox_tab {
			overflow-x: auto;
			display: flex;
			padding-bottom: 8px;

			.goods-view {
				font-weight: 700;
			}

			.goods_title_item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				padding: 0 15px;
				height: 30px;
				border-right: 1px solid #a1cece;

				view {
					font-size: 17px;
					font-weight: 400;
					line-height: 17px;
				}

				text {
					font-size: 11px;
					line-height: 11px;
					white-space: nowrap;
				}

				.active-view {
					position: absolute;
					bottom: -8px;
					left: 50%;
					-webkit-transform: translateX(-50%);
					transform: translateX(-50%);
					width: 15px;
					height: 3px;
					border-radius: 1px;
					background: rgb(118, 230, 182);
				}
			}
		}

		.navTabBox_content {
			padding: 13px 15px 0;

			.navTabBox_content_item {
				position: relative;
				display: flex;
				background: #fff;
				border-radius: 5px;
				height: calc(100% - 12px * 2);
				box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, .1);
				padding: 12px 0 12px 12px;
				margin-bottom: 12px;

				.Short {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background: rgba(0, 0, 0, .5);
					color: #fff;
					font-size: 14px;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 90px;
					height: 90px;
				}

				image {
					width: 115px;
					height: 115px;
				}

				.navTabBox_content_item_right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 12px;

					.content_item_top {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.content_item_top_title {
							font-size: 13px;
							line-height: 15px;
							color: #020202;
							padding-right: 12px;
						}

						.goods_content_item_icon {
							display: flex;
							align-items: center;
							justify-content: center;
							border: 1px solid #ff5041;
							border-radius: 6px;
							margin-top: 5px;
							font-size: 10px;
							color: #ff5041;
							width: 27px;
							height: 13px;
						}
					}

					.content_item_bottom {
						.content_item_bottom_price {
							display: flex;
							color: #ff7d00;
							font-size: 13px;
							margin-right: 12px;
							line-height: 13px;
							padding-bottom: 5px;

							view {
								font-size: 12px;
								line-height: 12px;
								color: #014241;
								margin-left: 4px;
							}
						}

						.content_item_bottom_num {
							display: flex;
							align-items: center;
							justify-content: space-between;

							text {
								font-size: 10px;
								line-height: 10px;
								color: #999;
							}

							view {
								display: flex;
								align-items: center;
								justify-content: center;
								background: #76e6b6;
								border-radius: 9px 0px 0px 9px;
								font-size: 11px;
								color: #014241;
							}
						}
					}
				}
			}
		}

	}
	// ::-webkit-scrollbar {
	//   width: 6px;
	//   height: 6px;
	// }
	
	// ::-webkit-scrollbar-track {
	//   width: 6px;
	//   background: rgba(#101F1C, 0.1);
	//   -webkit-border-radius: 2em;
	//   -moz-border-radius: 2em;
	//   border-radius: 2em;
	// }
	
	// ::-webkit-scrollbar-thumb {
	//   background-color: rgba(#101F1C, 0.5);
	//   background-clip: padding-box;
	//   min-height: 28px;
	//   -webkit-border-radius: 2em;
	//   -moz-border-radius: 2em;
	//   border-radius: 2em;
	// }
	
	// ::-webkit-scrollbar-thumb:hover {
	//   background-color: rgba(#101F1C, 1);
	// }
</style>
