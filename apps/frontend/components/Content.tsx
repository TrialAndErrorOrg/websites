export const Content = ({ children }: { children: string }) => (
  <div
    className="prose prose-slate dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: children }}
  />
)
