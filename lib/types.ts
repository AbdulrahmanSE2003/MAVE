export type PostContent = {
  blocks: Array<
    | {
        type: "paragraph"
        content: string
      }
    | {
        type: "heading"
        content: string
      }
    | {
        type: "list"
        items: string[]
      }
  >
}
