export default {
	Jump: function(type, url) {
		switch (type) {
			case 'tabbar':
				uni.switchTab({
					url: url
				});
				break;
			case 'page':
				uni.navigateBack()
				break;
			default:
				uni.navigateTo({
					url: url
				});
				break;
		}
	}
}
