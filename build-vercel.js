#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Change to the correct directory and run build
process.chdir(__dirname);

console.log('Building volleyball app for Vercel...');
console.log('Current directory:', process.cwd());

try {
  // Use npx to ensure vite and esbuild are available
  console.log('Step 1: Building frontend with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Step 2: Building backend with esbuild...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}