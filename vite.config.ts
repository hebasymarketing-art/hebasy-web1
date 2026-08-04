import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // ለዲበገን ካስፈለገህ ብቻ true አድርገው፣ ካልሆነ ግን ለፍጥነት false ወይም 'hidden' ማድረግ ይሻላል
    sourcemap: false, 
    
    // ኮዱን በጥናናሽ ቁርጥራጮች በመሰባበር የዴስክቶፕን ፍጥነት ለመጨመር
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // በ node_modules ውስጥ ያሉ ከባድ ላይብረሪዎችን ለብቻው 'vendor' በሚል ፋይል ይለየዋል
            return 'vendor';
          }
        },
      },
    },
    // ከባድ ፋይሎችን አንድ ላይ አጭቆ ፍጥነቱን እንዳያቀዘቅዝ ገደብ ማድረግ
    chunkSizeWarningLimit: 1000,
  },
});