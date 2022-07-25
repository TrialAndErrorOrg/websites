export function strapiToWebflowId(id: number): string {
  return id.toString(16);
}

export function webflowToStrapiId(id: string): number {
  return parseInt(id, 16);
}
