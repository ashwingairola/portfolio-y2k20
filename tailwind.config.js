module.exports = {
	purge: {
		enabled: true,
		content: ['./src/**/*.{html,ts}']
	},
	theme: {
		extend: {
			screens: {
				xxl: '1440px',
				fullHD: '1920px',
				'4k': '2560px'
			}
		},
		textColor: {
			primary: 'var(--color-text-primary)',
			secondary: 'var(--color-text-secondary)',
			'app-primary': 'var(--color-primary)',
			'app-secondary': 'var(--color-secondary)',
			navbar: 'var(--color-text-navbar)'
		},
		backgroundColor: {
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			'app-primary': 'var(--color-bg-primary)',
			'app-secondary': 'var(--color-bg-secondary)',
			navbar: 'var(--color-bg-navbar)'
		}
	}
};
