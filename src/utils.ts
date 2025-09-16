import { textMap } from './constants'

export function transformText(input: string) {
  const styleMap = textMap
  // @ts-expect-error TS2345
  return Array.from(input).map(char => styleMap[char] || char).join('')
}
