import { visit } from 'unist-util-visit';

export function remarkCodeblockSharp() {
    return (tree) => {
        visit(tree, 'code', (node) => {
            // 如果 lang 属性中包含 '#'，则进行转义
            if (node.lang && node.lang.includes('#')) {
                node.lang = node.lang.replace(/#/g, 'sharp');
            }
        });
    };
};
