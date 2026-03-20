const fs = require('fs');
const glob = require('glob');

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
  
  let newContent = content.replace(/dark:text-slate-\s/g, 'dark:text-slate-400 ');
  newContent = newContent.replace(/dark:text-slate-"/g, 'dark:text-slate-400"');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Fixed ' + file);
  }
});
