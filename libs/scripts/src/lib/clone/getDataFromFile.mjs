/* eslint-disable no-useless-return */
import { unified } from 'unified';
import uniorgParse from 'uniorg-parse';
import { visitIds } from 'orgast-util-visit-ids';
import { visit } from 'unist-util-visit';
import { extractKeywords } from 'uniorg-extract-keywords';
export const getDataFromFile = async (text) => {
    const data = {};
    const processor = unified()
        .use(uniorgParse)
        .use(extractKeywords, { name: 'keywords' })
        .use(() => (node) => visit(node, 'link', (link) => {
        const type = link.linkType;
        switch (type) {
            case 'id':
                data.forwardLinks = [...(data.forwardLinks ?? []), link.path];
                return;
            case 'cite':
                data.citations = [...(data.citations ?? []), link.path];
                return;
            default:
                return;
        }
    }))
        .use(() => (tree) => visitIds(tree, (id) => {
        if (data.id)
            return;
        data.id = id;
    }))
        .use(() => (node) => {
        visit(node, 'property-drawer', (drawer) => {
            const kids = drawer.children;
            kids.forEach((kid) => {
                const { key, value } = kid;
                switch (key) {
                    case 'ctime':
                        data.ctime = value;
                        return;
                    case 'mtime':
                        data.mtime = value;
                        return;
                    case 'ROAM_REFS':
                        data.citation = value.replace(/(cite:|@)/g, '');
                        return;
                    default:
                        return;
                }
            });
        });
        visit(node, 'keyword', (keyword) => {
            const { key, value } = keyword;
            switch (key.toLowerCase()) {
                case 'title':
                    data.title = value.replace(/\//g, ' or ').replace(/\"/g, "'").replace(/_/g, '-');
                    return;
                case 'filetags':
                    data.tags = value.split(':').join(' ').trim().split(' ');
                    return;
                default:
                    return;
            }
        });
    });
    const tree = processor.parse(text);
    await processor.run(tree);
    return data;
};
