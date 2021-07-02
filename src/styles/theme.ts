export const theme = {
  grid: {
    container: '105rem',
  },
  radius: {
    input: '0.5rem',
    rounded: '50%',
  },
  font: {
    family: 'Roboto',
    weights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      disclaimer: '1.2rem',
      small: '1.4rem',
      paragraph: '1.6rem',
      subtitle: '2rem',
      title: '2.4rem',
      headline: '4.8rem',
    },
  },
  colors: {
    white: '#fff',
    black: '#000',
    green: {
      500: '#04D361',
    },
    neutral: {
      100: '#f2f2fA',
      200: '#c9c9d4',
      500: '#a8a8b3',
      700: '#3d3d4d',
      900: '#3a3a3a',
    },
  },
  spacing: {
    0: '0',
    1: '0.4rem',
    2: '0.8rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4.0rem',
    7: '4.8rem',
    8: '5.6rem',
    9: '6.4rem',
  },
  shadows: {
    small: '0 0.9rem 1.8rem rgba(161, 161, 161, 0.1)',
    large: '0 0.4rem 2.5rem rgba(0, 0, 0, 0.1)',
    dropdown: '0 0.5rem 1rem rgba(0, 0, 0, 0.05)',
    popover: '0 0.4rem 2.5rem rgba(0, 0, 0, 0.15)',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    slow: '0.5s ease-in-out',
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  avatar: {
    small: '3.2rem',
    large: '6.2rem',
  },
} as const
