import sizeOf from 'image-size';
import fs from 'fs';
import path from 'path';
const dir = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir);
  process.exit(1);
}
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.webp'))) {
  try {
    const p = path.join(dir, f);
    const s = sizeOf(p);
    const stat = fs.statSync(p);
    console.log(`${f} ${s.width}x${s.height} ${stat.size} bytes`);
  } catch (e) {
    console.error(f, 'ERR', e.message);
  }
}
