import fs from 'fs-extra';

const srcDir = 'dist/pagefind';
const destDir = 'public/pagefind';

fs.copy(srcDir, destDir)
  .then(() => console.log('Pagefind directory copied successfully!'))
  .catch(err => console.error(err));
