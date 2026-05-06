import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
	plugins: [react(), viteCompression()],
	server: {
		host: '0.0.0.0', // чтобы Vite был доступен по локальной сети
		port: 5173,
		proxy: {
			'/api': {
				target: 'http://192.168.88.48:80', // адрес твоего backend сервера
				changeOrigin: true,
				secure: false,
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name].js',
				chunkFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]',
			}
		}
	}
})
