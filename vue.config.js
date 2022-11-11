module.exports = {
	devServer: {
		host: '0.0.0.0',
		hot: true,
		allowedHosts: 'all',
		client: {
	        webSocketURL: 'auto://0.0.0.0:0/ws'
    }
  },
};
