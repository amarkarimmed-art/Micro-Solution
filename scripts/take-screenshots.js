const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\a378948f-5478-4b46-ad4d-50151fb784ac\\screenshots';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const siteViewports = [
  { name: 'site-360.png', width: 360, height: 800 },
  { name: 'site-390.png', width: 390, height: 844 },
  { name: 'site-768.png', width: 768, height: 1024 },
  { name: 'site-1024.png', width: 1024, height: 768 },
  { name: 'site-1440.png', width: 1440, height: 900 },
];

const headerViewports = [
  { name: 'header-360.png', width: 360, height: 100 },
  { name: 'header-768.png', width: 768, height: 100 },
  { name: 'header-1440.png', width: 1440, height: 100 },
];

console.log('Capturing site screenshots...');
for (const vp of siteViewports) {
  const dest = path.join(outputDir, vp.name);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-sandbox --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" http://localhost:3000/`;
  console.log(`Taking ${vp.name} (${vp.width}x${vp.height})...`);
  try {
    execSync(cmd, { stdio: 'ignore' });
  } catch (e) {
    console.error(`Error on ${vp.name}:`, e.message);
  }
}

console.log('Capturing header close-up screenshots...');
for (const vp of headerViewports) {
  const dest = path.join(outputDir, vp.name);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-sandbox --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" http://localhost:3000/`;
  console.log(`Taking ${vp.name} (${vp.width}x${vp.height})...`);
  try {
    execSync(cmd, { stdio: 'ignore' });
  } catch (e) {
    console.error(`Error on ${vp.name}:`, e.message);
  }
}

console.log('All screenshots captured successfully!');

