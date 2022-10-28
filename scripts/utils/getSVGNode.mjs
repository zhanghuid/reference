import fs from 'fs-extra';
import path from 'path';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { VFile } from 'vfile';

export const ICONS_PATH = path.resolve(process.cwd(), 'scripts/assets');

export function getSVGNode(iconPath, space = 'svg') {
  const svgStr = fs.readFileSync(iconPath);
  const processor = unified().use(rehypeParse, { fragment: true, space });
  const file = new VFile();
  file.value = svgStr.toString();
  const hastNode = processor.runSync(processor.parse(file), file);
  return hastNode.children || [];
}

export function getVNode(str = '', space = 'html') {
  const processor = unified().use(rehypeParse, { fragment: true, space });
  const file = new VFile();
  file.value = str.toString();
  const hastNode = processor.runSync(processor.parse(file), file);
  return hastNode.children || [];
}
