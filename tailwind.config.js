import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "psm-success-50": "#e7f8f0",
                "psm-success-100": "#b6e9d1",
                "psm-success-200": "#92deba",
                "psm-success-300": "#60cf9b",
                "psm-success-400": "#41c588",
                "psm-success-500": "#12b76a",
                "psm-success-600": "#10a760",
                "psm-success-700": "#0d824b",
                "psm-success-800": "#0a653a",
                "psm-success-900": "#084d2d",

                "psm-red-50": "#feeceb",
                "psm-red-100": "#fac5c1",
                "psm-red-200": "#f8a9a3",
                "psm-red-300": "#f5827a",
                "psm-red-400": "#f36960",
                "psm-red-500": "#f04438",
                "psm-red-600": "#da3e33",
                "psm-red-700": "#aa3028",
                "psm-red-800": "#84251f",
                "psm-red-900": "#651d18",

                "psm-primary-50": "#e8f1fd",
                "psm-primary-100": "#b6d3fa",
                "psm-primary-200": "#93bdf8",
                "psm-primary-300": "#629ff4",
                "psm-primary-400": "#448df2",
                "psm-primary-500": "#1570ef",
                "psm-primary-600": "#1366d9",
                "psm-primary-700": "#0f50aa",
                "psm-primary-800": "#0c3e83",
                "psm-primary-900": "#092f64",

                "psm-gray-50": "#f0f1f3",
                "psm-gray-100": "#d0d3d9",
                "psm-gray-200": "#b9bdc7",
                "psm-gray-300": "#989fad",
                "psm-gray-400": "#858d9d",
                "psm-gray-500": "#667085",
                "psm-gray-600": "#5d6679",
                "psm-gray-700": "#48505e",
                "psm-gray-800": "#383e49",
                "psm-gray-900": "#2b2f38",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
