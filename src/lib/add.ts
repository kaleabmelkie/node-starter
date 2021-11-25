export async function add(...n: number[]) {
  return n.reduce((a, c) => a + c, 0)
}
