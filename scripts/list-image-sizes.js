const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir);
  process.exit(1);
}
fs.readdirSync(dir).filter(f => f.endsWith('.webp')).forEach(f => {
  try {
    const p = path.join(dir, f);
    const s = sizeOf(p);
    const stat = fs.statSync(p);
    console.log(`${f} ${s.width}x${s.height} ${stat.size} bytes`);
  } catch (e) {
    console.error(f, 'ERR', e.message);
  }
});
