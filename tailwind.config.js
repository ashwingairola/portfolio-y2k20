module.exports = {
	theme: {
		textColor: {
			primary: 'var(--color-text-primary)',
			secondary: 'var(--color-text-secondary)',
			navbar: 'var(--color-text-navbar)'
		},
		backgroundColor: {
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			'app-primary': 'var(--color-bg-primary)',
			'app-secondary': 'var(--color-bg-secondary)',
			navbar: 'var(--color-bg-navbar)'
		},
		height: theme => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			half: '50%',
            screen: '100vh',
            '50vh': '50vh'
		})
	}
};
