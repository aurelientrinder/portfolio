import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

function replaceInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/href="\//g, 'href="./')
      .replace(/src="\//g, 'src="./')
      .replace(/url\(\//g, 'url(./');
      
    // Fix double dots if any (e.g. if base was already ./ and we added another)
    // Actually, just replacing "/ with "./ is safe if we assume root-relative.
    // But if we have href="/foo" it becomes href="./foo".
    // If we have href="/" it becomes href="./".
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated paths in ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

function traverseDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      traverseDir(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.css')) {
      replaceInFile(filePath);
    }
  }
}

console.log('Fixing paths for file protocol compatibility...');
traverseDir(distDir);
console.log('Path fix complete.');
