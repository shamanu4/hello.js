(function(hello) {

	hello.init({

		twitch: {

			name: 'Twitch',

			oauth: {
				version: 2,
				auth: 'https://id.twitch.tv/oauth2/authorize',
				grant: 'https://id.twitch.tv/oauth2/token'
			},

			// Authorization scopes
			scope: {
				email: 'user_read',
			},

			scope_delim: ' ',

			login: function(p) {

				if (p.qs.response_type === 'code') {
					p.qs.access_type = 'offline';
				}

				if (p.options.force) {
					p.qs.approval_prompt = 'force';
				}
			},

			get: {
				me: 'user',
			},

			form: false
		}
	});

})(hello);
