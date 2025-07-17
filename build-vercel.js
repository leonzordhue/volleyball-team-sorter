#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Change to the correct directory and run build
process.chdir(__dirname);

console.log('Building volleyball app for Vercel...');
console.log('Current directory:', process.cwd());
console.log('Files in current directory:', require('fs').readdirSync('.'));

try {
  // Run the build command
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}