import { create } from '@storybook/theming'
import theme from '../src/styles/theme'
import logo from '../public/img/nextjs-logo.svg'

export default create({
  base: 'dark',
  colorSecondary: theme.colors.red,
  brandTitle: 'List.me',
  brandImage: logo
})
