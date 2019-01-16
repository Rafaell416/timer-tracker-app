'use strict'
import { Font } from 'expo'

function cacheFonts ( fonts ) {
  return fonts.map(font => Font.loadAsync(font))
}

export {
  cacheFonts
}