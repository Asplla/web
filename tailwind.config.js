/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      600: '600px',
      640: '640px',
      960: '960px',
      1024: '1024px',
      1200: '1200px',
      1280: '1280px',
      1440: '1440px'
    },
    // 内边距
    padding: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index }px`
      return map
    }, {}),
    // 外边距
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`
      return map
    }, {}),
    // 圆角
    borderRadius: Array.from({ length: 100 }).reduce((map, _, index) => {
      map[index] = `${index}px`
      return map
    }, {}),
    extend: {
      // 宽度
      width: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
      // 高度
      height: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
      // 字体大小
      fontSize: Array.from({ length: 100 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
      // 行高
      lineHeight: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
    }
  },
  plugins: [],
}

