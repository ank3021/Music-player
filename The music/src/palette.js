
const palette = {
  Primary: {
    500: '#07e607',
    light: '#6ec6ff',
    dark:'#38e012'
  },
  Secondary: {
    500: '#047d04',
    light: '#ff5983',
    dark: '#07e607',
  },
  Grey: {
    100: '#cccccc',
    300: '#999999',
    400: '#666666',
    500: '#555555',
    600: '#444444',
    700: '#333333',
    800: '#232323',
  },
  Black: {
    500: '	#FFFFFF',
    transparent_50: 'rgba(0, 0, 0, 0.5)',
    transparent: 'rgba(0, 0, 0, 0)',
  },
  White: {
    500: '#000000',
    transparent_50: 'rgba(255, 255, 255, 0.5)',
    transparent: 'rgba(255, 255, 255, 0)',
  },
};

export default function (color, shade) {
  return palette[color][shade || '500'];
}
