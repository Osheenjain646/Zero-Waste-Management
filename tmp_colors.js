const fs = require('fs');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let newContent = content;

  const colors = ['brand', 'red', 'amber', 'purple', 'teal', 'rose', 'blue', 'orange', 'slate'];
  
  colors.forEach(col => {
      // Find `bg-color-50 ` or `bg-color-50'` or `bg-color-50"`
      // We need to look for ` ["]bg-color-50[ "'\n]` if not followed by dark:bg-
      const bgRegex = new RegExp('\\bbg-' + col + '-50(?!\\s*dark:bg-)([^\\w-])', 'g');
      newContent = newContent.replace(bgRegex, 'bg-' + col + '-50 dark:bg-' + col + '-900/30$1');
      
      const text700 = new RegExp('\\btext-' + col + '-700(?!\\s*dark:text-)([^\\w-])', 'g');
      newContent = newContent.replace(text700, 'text-' + col + '-700 dark:text-' + col + '-400$1');
      
      const text600 = new RegExp('\\btext-' + col + '-600(?!\\s*dark:text-)([^\\w-])', 'g');
      newContent = newContent.replace(text600, 'text-' + col + '-600 dark:text-' + col + '-400$1');
      
      const border100 = new RegExp('\\bborder-' + col + '-100(?!\\s*dark:border-)([^\\w-])', 'g');
      newContent = newContent.replace(border100, 'border-' + col + '-100 dark:border-' + col + '-800/50$1');
      
      const border200 = new RegExp('\\bborder-' + col + '-200(?!\\s*dark:border-)([^\\w-])', 'g');
      newContent = newContent.replace(border200, 'border-' + col + '-200 dark:border-' + col + '-800/50$1');
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Polished colors for ' + file);
  }
});
