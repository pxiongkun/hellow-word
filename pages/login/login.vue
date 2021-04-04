<template>
	<view class="">
		<uni-nav-bar fixed="true" backgroundColor="#fff" color="#020202" :border="false" :statusBar="true">
			<view slot="left" class="header_left">
				<image src="https://v3pro.houjiemeishi.com//images/icon1/guanbi2x.png" mode="" @tap="utils.Jump('page')"></image>
			</view>
			<view slot="right" class="header_right">
				注册
			</view>
		</uni-nav-bar>
		<view class="login">
			<view class="login_title" v-if="is_mode">密码登陆</view>
			<view class="login_title" v-else>验证码登陆</view>
			<view class="uni-form-item uni-column">
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入账号密码" :value="inputClearValue" @input="clearInput" />
					<text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
				</view>
			</view>
			<view class="uni-form-item uni-column" v-if="is_mode">
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入密码" v-model="password" :password="showPassword" />
					<text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']" @click="changePassword">&#xe568;</text>
				</view>
			</view>

			<view class="three" v-else>
				<view class="get" @tap="getCheckNum()">
					<text>{{!codeTime?'获取验证码':codeTime+'s后重新获取'}}</text>
				</view>
				<view class="all">
					<input v-model="checkNum" placeholder="请输入验证码" />
				</view>
			</view>

			<view class="login_pass">忘记密码?</view>
			<view class="logn_button">
				<button type="primary" @tap="login" v-if="inputClearValue && password || checkNum.length==6">登陆</button>
				<button type="primary" v-else style="opacity: 0.4;">登陆</button>
			</view>
			<view class="or">或</view>
			<view class="code_button">
				<button type="primary" plain="true" @tap="Code" v-if="is_mode">验证码登陆</button>
				<button type="primary" plain="true" @tap="Code" v-else>密码登陆</button>
			</view>
		</view>
	</view>
</template>

<script>
	// var lastTouchEnd = 0;
	// document.documentElement.addEventListener('touchend', function(event) {
	// 	var now = Date.now();
	// 	if (now - lastTouchEnd <= 300) {
	// 		event.preventDefault();
	// 	}
	// 	lastTouchEnd = now;
	// }, false);
	export default {
		data() {
			return {
				inputClearValue: '',
				password: '',
				showClearIcon: false,
				showPassword: true,
				is_mode: true,
				codeTime: 0,
				checkNum: ''
			}
		},
		methods: {
			clearInput: function(event) {
				this.inputClearValue = event.detail.value;
				if (event.detail.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			Back() {
				this.utils.Jump('page')
			},
			Code() {
				if (this.is_mode) {
					this.is_mode = false
				} else {
					this.is_mode = true
				}


			},
			getCheckNum() {
				if(this.inputClearValue==''){
					uni.showToast({
						title: '请输入手机号',
						icon: "none"
					});
					return;
				}
				if (this.codeTime > 0) {
					uni.showToast({
						title: '不能重复获取',
						icon: "none"
					});
					return;
				} else {
					let data = {
						module: 'app',
						action: 'user',
						app: 'secret_key',
						phone: this.inputClearValue,
						message_type: 0,
						message_type1: 1
					}
					this.$req.post({data}).then(res => {
						if(res.code==200){
							uni.showToast({
								title: '发送成功',
								icon: "none"
							});
							this.codeTime = 60
							let timer = setInterval(() => {
								this.codeTime--;
								if (this.codeTime < 1) {
									clearInterval(timer);
									this.codeTime = 0
								}
							}, 1000)
						}else{
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					}).catch(error => {
						uni.showToast({
							title: error.message,
							icon: "none"
						});
					})
					
				}
			},
			login() {
				let data = ''
				if(this.is_mode){
					data = {
						module: 'app',
						action: 'login',
						app: 'login',
						phone: this.inputClearValue,
						password: this.password,
						clientid: ''
					}
				}else{
					data = {
						module: 'app',
						action: 'login',
						app: 'register',
						phone: this.inputClearValue,
						keyCode: this.checkNum,
						clientid:''
					}
				}
				this.$req.post({
					data
				}).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: '登陆成功',
							icon: 'none',
							duration: 1000,
						});
						uni.setStorage({
						    key: 'access_id',
						    data: res.data.access_id,
						    success: function () {
						
						    }
						})
						setTimeout(()=>{
							this.utils.Jump('tabbar', '/pages/my/my')
						},1500)
						
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none',
							duration: 1000,
						});
					}
				}).catch(error => {
					uni.showToast({
						title: error.message,
						icon: 'none',
						duration: 1000,
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.header_left {
		padding-left: 30rpx;

		image {
			width: 26rpx;
			height: 26rpx;
		}
	}

	.header_right {
		padding-right: 30rpx;
	}

	.login {
		padding: 0 40rpx;

		.login_title {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			height: 115px;
			width: 100%;
			font-size: 54rpx;
			color: #020202;
		}

		.login_pass {
			margin: 30rpx 0;
			font-size: 24rpx;
			color: #020202;
			text-align: right;
			padding-right: 24rpx;
		}

		.or {
			text-align: center;
			font-size: 28rpx;
			color: rgb(153, 153, 153);
		}

		.logn_button {
			button {
				background-color: #014343;
				color: #fff;
				border: 0 !important;
				width: 90%;
				margin: 10px auto;
				justify-content: center;
				font-size: 15px;
				border-radius: 4px;
				height: 45px;
				display: flex;
				align-items: center;
			}
		}

		.code_button {
			button {
				border: 1px solid #014343;
				color: #014343;
				background-color: #fff;
				width: 90%;
				margin: 10px auto;
				background-color: #fff;
				justify-content: center;
				font-size: 15px;
				border-radius: 4px;
				height: 45px;
				display: flex;
				align-items: center;
			}

		}
	}

	.all {
		padding: 36rpx 0;
		border-bottom: 2rpx solid #ddd;
		display: flex;
		flex-wrap: nowrap;
	}

	.left {
		margin-bottom: 30rpx;
		margin-right: 40rpx;
		width: 150rpx;
	}

	.three {
		background-color: white;
		border-radius: 10rpx;
		padding: 0 30rpx;
		position: relative;
	}

	.btn {
		background-color: orange;
		font-size: 28rpx;
		width: 160rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-top: 40rpx;
		color: white;
		font-weight: 600;
	}

	.get {
		position: absolute;
		top: 40rpx;
		right: 0;
		// background-color: orange;
		height: 70rpx;
		line-height: 70rpx;
		color: #020202;
		border-radius: 10rpx;
		padding: 0 20rpx;
	}

	.uni-column {
		padding: 0 30rpx;
	}

	.uni-form-item__title {
		font-size: 32rpx;
		line-height: 48rpx;
	}

	.uni-input-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// justify-content: space-between;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
		padding: 32rpx 0;
		border-bottom: 2rpx solid #ddd;
		align-items: center;
	}

	.uni-input {
		height: 80rpx;
		// line-height: 40px;
		font-size: 30rpx;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 48rpx;
		font-weight: normal;
		font-style: normal;
		width: 48rpx;
		height: 48rpx;
		line-height: 48rpx;
		color: #999999;
	}

	.uni-eye-active {
		color: #007AFF;
	}

	.uni-input-placeholder {
		color: rgb(184, 184, 184);
	}

	input::-webkit-input-placeholder {
		color: rgb(184, 184, 184);

	}
</style>
