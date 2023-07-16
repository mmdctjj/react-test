import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import addCommitInfo from 'vite-plugin-add-commit-info';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [addCommitInfo({root: '#root', description: 'test'}), react()],
})
