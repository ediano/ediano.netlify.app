import { shade, setLightness } from 'polished'

const theme = {
  colors: {
    primary: '#27a9e1',
    secondary: '#6c757d',
    success: '#04d361',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',

    light: '#f8f9fa',
    dark: '##343a40',
    black: '#000',
    white: '#fff',
    transparent: 'transparent',

    primaryLight: setLightness(0.5, '#27a9e1'),
    secondaryLight: setLightness(0.5, '#6c757d'),
    successLight: setLightness(0.5, '#04d361'),
    dangerLight: setLightness(0.5, '#dc3545'),
    warningLight: setLightness(0.5, '#ffc107'),
    infoLight: setLightness(0.5, '#17a2b8'),

    primaryDark: shade(0.5, '#27a9e1'),
    secondaryDark: shade(0.5, '#6c757d'),
    successDark: shade(0.5, '#04d361'),
    dangerDark: shade(0.5, '#dc3545'),
    warningDark: shade(0.5, '#ffc107'),
    infoDark: shade(0.5, '#17a2b8')
  }
}

export default theme
