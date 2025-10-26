import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	// http://192.168.88.98 proxy setup if needed
	server: {
		host: '0.0.0.0', // чтобы Vite был доступен по локальной сети
		port: 5173,
		proxy: {
			'/api': {
				target: 'http://192.168.88.98:8080', // адрес твоего backend сервера
				changeOrigin: true,
				secure: false,
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
