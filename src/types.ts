import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

export interface OptionsHasTypeScript {
  typescript?: boolean
}

export interface OptionsOverrides {
  overrides?: FlatConfigItem['rules']
}

export interface OptionsStylistic {
  stylistic?: boolean | StylisticConfig
}

export interface StylisticConfig extends Pick<StylisticCustomizeOptions, 'indent' | 'quotes' | 'jsx' | 'semi'> {
}

export type FlatConfigItem = Omit<
  FlatESLintConfigItem<Rules, false>,
  'plugins'
> & {}
