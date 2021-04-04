<template>
	<view>
		<uni-nav-bar backgroundColor="#014343" :border="false" class="header" :statusBar="true">
			<view class="container_top" slot="right" >
				<image src="https://xiaochengxu.houjiemeishi.com/V3/images/icon1/my_set.png" mode=""></image>
			</view>
		</uni-nav-bar>
		
		<view class="card">
			<image v-if="user.headimgurl" :src="user.headimgurl" mode=""></image>
			<image v-else src="https://xiaochengxu.houjiemeishi.com/V3/images/icon1/unLogin.png" mode=""></image>
			<view class="">
				<text v-if="user.user_name">{{user.user_name}}</text>
				<text v-else>Hi~等你很久了</text>
				<view class="grade" v-if="grade">{{grade}}
					<image src="https://v3pro.houjiemeishi.com//images/icon1/vip_icon1.png" mode=""></image>
				</view>
				<text v-if="grade_end" class="grade_end">{{grade_end}}到期</text>
				<button type="primary" @tap="jumps" v-else>登陆/注册</button>
			</view>
		</view>
		
		<view class="cart_list">
			<view class="cart_list_item">
				<text>{{user.coupon_num}}</text>
				<text>优惠券</text>
			</view>
			<view class="cart_list_item">
				<text>{{user.score}}</text>
				<text>积分</text>
			</view>
			<view class="cart_list_item">
				<text>{{user.money}}</text>
				<text>余额</text>
			</view>
			<view class="cart_list_item">
				<view class="">
					<image src="https://xiaochengxu.houjiemeishi.com/V3/images/icon1/xiaoxi.png" mode=""></image>
					<text>{{user_message}}</text>
				</view>
				<text>消息</text>
			</view>
		</view>
		
		
		

		<button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">获取手机号</button>


		
		<view class="myVip">
			<image src="https://v3pro.houjiemeishi.com//images/icon1/my_VIPbg.png" mode="" class="vip1"></image>
			<image src="https://v3pro.houjiemeishi.com//images/icon1/my_VIPwz.png" mode="" class="vip2"></image>
			<view class="">开通即享<text>6</text>大特权</view>
		</view>
		
		<view class="content">
			<view class="order">
				<view class="order_top">
					我的订单
					<view class="">查看全部<image src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png" mode=""></image></view>
				</view>
				<view class="order_bottom">
					<view class="">
						<view class="">
							<image style="height: 22px;" src="https://v3pro.houjiemeishi.com//images/icon1/my_dfk.png" mode=""></image>
							<view class="order_bottom_icon" v-if="list_num.dfk_num>0">{{list_num.dfk_num}}</view>
						</view>
						<text>待付款</text>
					</view>
					<view class="">
						<view class="">
							<image style="height: 22px;" src="https://v3pro.houjiemeishi.com//images/icon1/my_dfh.png" mode=""></image>
							<view class="order_bottom_icon" v-if="list_num.dfh_num>0">{{list_num.dfh_num}}</view>
						</view>
						<text>待发货</text>
					</view>
					<view class="">
						<view class="">
							<image style="height: 22px;" src="https://v3pro.houjiemeishi.com//images/icon1/my_dsh.png" mode=""></image>
							<view class="order_bottom_icon" v-if="list_num.dsh_num>0">{{list_num.dsh_num}}</view>
						</view>
						<text>待收货</text>
					</view>
					<view class="">
						<view class="">
							<image style="height: 22px;" src="https://v3pro.houjiemeishi.com//images/icon1/my_dpj.png" mode=""></image>
							<view class="order_bottom_icon" v-if="list_num.dpj_num>0">{{list_num.dpj_num}}</view>
						</view>
						<text>待评价</text>
					</view>
					<view class="">
						<view class="">
							<image style="height: 22px;" src="https://v3pro.houjiemeishi.com//images/icon1/my_tk.png" mode=""></image>
							<view class="order_bottom_icon" v-if="list_num.th>0">{{list_num.th}}</view>
						</view>
						<text>退款/售后</text>
					</view>
				</view>
			</view>
			
			<view class="listBox" v-if="plugin.mch == 1 || plugin.PT == 1 || plugin.MS == 1 || plugin.KJ == 1 || plugin.JP == 1 || plugin.JF == 1 || plugin.FX == 1">
			    <view v-if="plugin.mch == 1" @tap="_navigateTo1('/pagesA/myStore/myStore')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_mch.png" mode="widthFix"></image>
			        <text>我的店铺</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <!-- #ifndef MP-ALIPAY -->
			    <view v-if="plugin.PT == 1" @tap="_navigateTo1('/pagesA/group/groupOrder')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_group.png" mode="widthFix"></image>
			        <text>我的拼团</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <!-- #endif -->
			    <view v-if="plugin.MS == 1" @tap="_navigateTo1('/pagesB/seckill/seckill_my')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_seckill.png" mode="widthFix"></image>
			        <text>我的秒杀</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <view v-if="plugin.KJ == 1" @tap="_navigateTo1('/pagesA/bargain/bargain')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_bargain.png" mode="widthFix"></image>
			        <text>我的砍价</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <view v-if="plugin.JP == 1" @tap="_navigateTo1('/pagesA/bidding/bidding_my')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_bidding.png" mode="widthFix"></image>
			        <text>我的竞拍</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <view v-if="plugin.JF == 1" @tap="_navigateTo1('/pagesB/integral/exchange')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_dh.png" mode="widthFix"></image>
			        <text>我的兑换</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			    <view v-if="plugin.FX == 1" @tap="_navigateTo1('/pagesA/distribution/distribution_center')">
			        <image class="list_left" src="https://v3pro.houjiemeishi.com//images/icon1/my_fx.png" mode="widthFix"></image>
			        <text>代理中心</text>
			        <image class="jiantou" src="https://v3pro.houjiemeishi.com//images/icon1/jiantou.png"></image>
			    </view>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{},
				grade_end:'',
				grade:'',
				user_message:'',
				list_num:{},
				plugin:{},
				isClick: false, //防止因为频繁点击导致的页面跳转出错
			}
		},
		onLoad() {
			this._axios()
		},
		onShow() {
			this._axios()
		},
		methods: {
			onGetPhoneNumber(phonenumber) {
				console.log(phonenumber);
			},
			jumps(){
				this.utils.Jump('','../login/login')
			},
			_axios(){
				var data = {
				    module: 'app',
				    action: 'user',
				    app: 'index',
				}
				console.log(123);
				this.$req.post({data}).then(res => {
					if(res.code==200){
						res = res.data
						this.user = res.data.user
						this.grade_end = res.data.grade_end
						this.grade = res.data.grade
						this.user_message = res.data.xxnum
						this.plugin = res.plugin
						this.list_num.dfh_num = res.data.dfh_num
						this.list_num.dfk_num = res.data.dfk_num
						this.list_num.dpj_num = res.data.dpj_num
						this.list_num.dsh_num = res.data.dsh_num
						this.list_num.th = res.data.th
					}
					console.log(res);
				}).catch(error =>{
					
				})
			},
			_navigateTo1(url) {
			    if (this.isClick == false) {
			        this.isClick = true;
			        this.isLogin(()=>{
			            if(url.includes('/pagesA/shop/sign')){
			                this.$req.post({
			                    data: {
			                        module: 'app',
			                        action: 'sign',
			                        app: 'sign',
			                    }
			                }).then(res=>{
			                    if(res.code == 200){
			                        uni.navigateTo({
			                            url: url
			                        });
			                    }else{
			                        uni.showToast({
			                            title: res.message,
			                            icon: 'none'
			                        })
			                    }
			                })
			                return
			            }
			            
			            uni.navigateTo({
			                url: url
			            });
			        })
			        setTimeout(() => {
			            this.isClick = false;
			        }, 2000);
			    }
			},
		}
	}
</script>

<style lang="scss" >
	.header{
		padding-bottom: 88rpx;
		background: $color-default;
		border-radius: 0 0 40rpx 40rpx;
	}
	.container_top{
		display: -webkit-box;
		display: flex;
		align-items: flex-end;
		image{
			width: 36rpx;
			height: 36rpx;
			// margin: 8px 20px 0;
		}
	}
	.card{
		display: flex;
		margin: -60rpx 30rpx 0;
		image{
			width: 140rpx;
			height: 140rpx;
			border-radius: 16rpx;
			margin-right: 24rpx;
			background-color: #ddd;
		}
		text{
			font-size: 30rpx;
			line-height: 30rpx;
			color: #fff;
			margin-top: 12rpx;
			font-weight: 700;
		
		}
		button{
			margin-left: 0;
			margin-top: 17px;
			background-color: #fff;
			color: #ff7d00;
			border: 1px solid #ff7d00;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			font-size: 14px;
			height: 24px;
			border-radius: 22rpx;
			@include Vertical_center;
		}
		.grade{
			background-image: url("https://v3pro.houjiemeishi.com//images/icon1/my_vipIBg.png");
			position: relative;
			display: flex;
			align-items: center;
			min-width: 152rpx;
			height: 32rpx;
			border-radius: 16rpx;
			box-sizing: border-box;
			padding: 0 46rpx 0 12rpx;
			font-size: 24rpx;
			color: #ff7d00;
			margin-top: 32rpx;
			background-position: 0 0;
			background-size: 100% 100%;
			image{
				position: absolute;
				width: 22rpx;
				height: 18rpx;
				top: 50%;
				right: 8rpx;
				transform: translateY(-50%);
				margin-right: 0;
				background-color: inherit;
			}
		}
		.grade_end{
			font-size: 22rpx;
			line-height: 22rpx;
			color: #999;
		}
	}
	.cart_list{
		display: flex;
		padding: 0 30rpx;
		margin-top: 60rpx;
		.cart_list_item{
			flex: 1;
			align-items:center;
			position: relative;
			view{
				image{
					width: 38rpx;
					height: 38rpx;
				}
				text{
					position: absolute;
					right: 44rpx;
					top: -8rpx;
					background: #FF7D00;
					color: #FFFFFF!important;
					border-radius: 6px;
					font-size: 22rpx;
					padding:3rpx 4rpx;
					line-height: 26rpx;
				}
			}
			text:nth-child(1){
				font-size: 32rpx;
				// line-height: 13px;
				color: #014343;
				font-weight: bold;
			}
			text:nth-child(2){
				font-size: 24rpx;
				// line-height: 12px;
				color: #888888;
			}
			@include up_donw
			
		}
	}
	.myVip{
		position: relative;
		.vip1{
			display: block;
			width: 690rpx;
			height: 72rpx;
		}
		.vip2{
			position: absolute;
			left: 54rpx;
			top: 22rpx;
			width: 132rpx;
			height: 30rpx;
		}
		view{
			position: absolute;
			top: 24rpx;
			right: 54rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			line-height: 28rpx;
			color: #68400b;
			text{
				font-weight: 700;
				margin: 0px 3px;
			}
		}
		display: flex;
		justify-content: center;
		margin: 60rpx auto 0;
	}
	.content{
		padding: 38rpx 30rpx;
		background: #cee5e5;
		border-radius: 40rpx 40rpx 0px 0px;
	}
	.order {
	    width: 690rpx;
	    height: 240rpx;
	    background: #fff;
	    box-shadow: 0px 2rpx 32rpx 0px rgba(0,0,0,.1);
	    border-radius: 10rpx;
	}
	.order_top {
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 28rpx 24rpx 0;
	    font-size: 30rpx;
	    line-height: 30rpx;
	    color: #014343;
	}
	.order_top view {
	    display: flex;
	    align-items: center;
	    font-size: 24rpx;
	    color: #999;
	}
	.order_top image{
	    width: 10rpx;
	    height: 18rpx;
	    margin-left: 12rpx;
	}
	.order_bottom {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 54rpx 24rpx 0;
	    position: relative;
	}
	.order_bottom image {
	    width: 42rpx;
	    height: 42rpx;
	}
	.order_bottom > view {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	}
	.order_bottom > view > view {
	    display: flex;
	    position: relative;
	}
	.order_bottom > view text {
	    font-size: 24rpx;
	    line-height: 24rpx;
	    color: #666;
	    margin-top: 24rpx;
	}
	.order_bottom_icon {
	    position: absolute;
	    right: -6rpx;
	    top: -6rpx;
	    padding: 4rpx 6rpx;
	    background: #ff7d00;
	    border-radius: 12rpx;
	    font-size: 22rpx;
	    line-height: 16rpx;
	    color: #fff;
	}
	.listBox{
	    display: flex;
	    flex-direction: column;
	    width:690rpx;
	    background:rgba(255,255,255,1);
	    box-shadow:0rpx 2rpx 32rpx 0rpx rgba(0, 0, 0, 0.1);
	    border-radius:10rpx;
	    margin: 30rpx auto 0;
	    padding: 10rpx 0;
	}
	
	.listBox>view{
	    position: relative;
	    display: flex;
	    align-items: center;
	    padding: 20rpx 22rpx;
	}
	
	.listBox .button_kefu{
	    position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    top: 0;
	    border-radius: 0;
	    background-color: transparent;
	    border: 0;
	}
	
	.listBox .button_kefu:after{
	    border: 0;
	}
	
	.listBox>view text{
	    font-size: 26rpx;
	    line-height: 26rpx;
	    color: #020202;
	}
	
	.list_left{
	    width: 36rpx;
	    height: 36rpx;
	    margin-right: 15rpx;
	}
	
	.jiantou{
	    width:15rpx;
	    height:27rpx;
	    margin-left: auto;
	}
</style>
