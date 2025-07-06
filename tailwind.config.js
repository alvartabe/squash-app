const colors = require('tailwindcss/colors');

module.exports = {
    important: true,
    content: ['./src/**/*.{html,ts}'],
    theme: {
        fontFamily: {
            sans: ['Poppins'],
        },
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
            success: 'var(--color-success)',
            warning: 'var(--color-warning)',
            danger: 'var(--color-danger)',
        },
        extend: {
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
        },
    },
    variants: {
        extend: {},
    },
    safelist: ['opacity-25', 'opacity-75', 'animate-spin', 'large', 'w-16', 'h-16'],
    plugins: [require('@tailwindcss/forms')({ strategy: 'class' }), require('daisyui')],

    daisyui: {
        themes: ["light", "dark", "lemonade", "synthwave", "cupcake"],
        styled: true,
        prefix: 'daisy-',
    },
};
