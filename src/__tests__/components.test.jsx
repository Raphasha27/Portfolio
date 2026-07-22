import { describe, it, expect } from 'vitest'

const components = [
  'TechMarquee',
]

describe('Component exports', () => {
  for (const name of components) {
    it(`${name} exports a default component`, async () => {
      const mod = await import(`../components/${name}.jsx`)
      expect(mod.default).toBeDefined()
      expect(typeof mod.default).toBe('function')
    })
  }
})
