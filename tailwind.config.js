/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'selector',
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        //o day dinh nghia 1 so mau hay khoang cach ma tailwind khong co
        // nhung da duoc fig voi jit
        extend: {
            fontFamily: {
                'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
