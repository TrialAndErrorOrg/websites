import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
// import { NEXT_PUBLIC_NOTE_DIR } from '@zkp/paths'
import { catchPromise } from 'try-catch'

const proc = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify)

async function main() {
  const file = await proc.process('# Hey')
  console.log(String(file))
  catchPromise((async () => 'cheese')())
  //  console.log(NEXT_PUBLIC_NOTE_DIR)
}

main()
