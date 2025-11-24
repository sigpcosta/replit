const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Create a tar.gz which WordPress can also accept
try {
    execSync('tar -czf ai-pro-ultra-theme.tar.gz ai-pro-ultra-theme/', { stdio: 'inherit' });
    console.log('✅ Created ai-pro-ultra-theme.tar.gz');
    
    const stats = fs.statSync('ai-pro-ultra-theme.tar.gz');
    console.log(`📦 Size: ${(stats.size / 1024).toFixed(2)} KB`);
} catch (error) {
    console.error('Error creating archive:', error);
    process.exit(1);
}
