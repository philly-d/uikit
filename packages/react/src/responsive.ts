import { useParent } from './context.js'

export function useRootSize() {
  return useParent().root.size
}

export function useRootPixelSize() {
  return useParent().root.pixelSize
}