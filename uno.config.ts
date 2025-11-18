import { defineConfig, presetWind4 } from 'unocss'
import presetIcons from '@unocss/preset-icons/browser'
import presetWind from '@unocss/preset-wind'
import type { Theme } from '@unocss/preset-wind4/theme'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

const aprendeCreceTheme: Theme = {
  colors: {
    primary: '#77AADD', // Soft sky blue
    secondary: '#FFB890', // Soft peach
    accent: '#C7E7A7', // Soft mint green
    success: '#C7E7A7', // Semantics
    warning: '#FDE047', // (Example soft yellow)
    error: '#FCA5A5', // (Example soft red)
    gray: {
      50: '#F9FAFB',
      900: '#111827',
    },
  },
  shadow: {
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
  },
}

export default defineConfig({
  theme: aprendeCreceTheme,
  presets: [
    presetWind4({
      preflights: [
        {
          getCSS: () => `
            * {
              backface-visibility: hidden;
              -webkit-tap-highlight-color: transparent;
            }
            html {
              scroll-behavior: smooth;
            }
            body {
              font-smooth: always;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-family: 'Inter', sans-serif;
            }
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
              }
            }
          `,
        },
      ],
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        material: () => import('@iconify-json/material-symbols/icons.json').then((i) => i.default),
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['300', '400', '500', '600', '700'],
          },
        ],
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|mdx?|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
})
