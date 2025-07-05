const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,ts,scss}'],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            blue: colors.blue,
        },
    },
    plugins: [require('@tailwindcss/forms')({ strategy: 'class' }), require('daisyui')],
    daisyui: {
        themes: [
            'light',
        ],
        styled: true,
        prefix: 'daisy-',
    },
};
