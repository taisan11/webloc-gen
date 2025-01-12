import {defineConfig} from "vite"

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                index: './index.html',
                en: './en.html'
            }
        },
        minify:true
    }
})