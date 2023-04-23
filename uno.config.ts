import { readFile } from 'node:fs/promises'

// eslint-disable-next-line no-restricted-imports
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'li-entry': 'flex flex-row gap-x-8px items-center',
    'li-icon': 'inline-block w-1.2em h-1.2em',
  },
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        iconify: {
          around: () => readFile('./public/around-logo.svg', 'utf8'),
        },
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
