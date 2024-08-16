import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = (props) => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    (event) => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // Reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor]
  );

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="122.000000pt" // Aquí se ajusta el ancho
      height="108.000000pt" // Aquí se ajusta la altura
      viewBox="1 1 116.000000 34.000000"
      preserveAspectRatio="xMidYMid meet"
      fill={theme.text}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      <g
        transform="translate(0.000000,44.000000) scale(0.100000,-0.10000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M499 400 c-41 -22 -89 -74 -89 -97 0 -12 4 -11 18 5 24 28 94 52 150 52 62 0 138 -26 157 -53 22 -32 19 1 -4 39 -40 66 -158 93 -232 54z" />
        <path d="M550 343 c-61 -22 -78 -87 -34 -128 55 -51 154 -19 154 48 0 37 -6 47 -40 70 -24 17 -52 20 -80 10z m83 -45 c-1 -16 2 -28 8 -28 15 0 10 -37 -7 -54 -19 -19 -74 -21 -98 -3 -10 8 -18 29 -20 55 -4 52 10 63 74 59 42 -2 45 -4 43 -29z" />
        <path d="M570 294 c0 -9 5 -14 12 -12 18 6 21 28 4 28 -9 0 -16 -7 -16 -16z" />
        <path d="M570 240 c0 -11 6 -20 14 -20 21 0 31 21 15 31 -22 14 -29 11 -29 -11z" />
        <path d="M411 237 c-2 -23 34 -69 72 -92 83 -48 195 -28 245 45 29 43 28 55 -3 26 -54 -50 -169 -60 -251 -22 -29 13 -54 30 -57 37 -3 8 -6 10 -6 6z" />
        <path d="M11 76 c-18 -21 -6 -63 20 -71 29 -10 51 13 47 49 -2 25 -8 32 -29 34 -14 2 -31 -4 -38 -12z m53 -40 c-4 -9 -14 -16 -23 -14 -20 4 -27 38 -9 49 18 11 40 -13 32 -35z" />
        <path d="M117 84 c-11 -11 -8 -72 3 -79 6 -3 10 1 10 10 0 8 12 20 26 25 33 13 29 44 -6 48 -14 2 -29 0 -33 -4z m43 -24 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z" />
        <path d="M212 77 c9 -7 18 -29 21 -48 l4 -34 1 38 c2 25 7 37 17 37 8 0 15 5 15 10 0 6 -17 10 -37 10 -33 -1 -36 -2 -21 -13z" />
        <path d="M300 45 c0 -28 4 -44 10 -40 6 3 10 21 10 40 0 19 -4 37 -10 40 -6 4 -10 -12 -10 -40z" />
        <path d="M363 84 c-18 -8 -16 -59 2 -74 17 -14 55 -4 55 16 0 12 -3 12 -20 2 -17 -11 -22 -10 -29 1 -15 24 -1 43 26 36 18 -4 24 -2 21 7 -5 14 -35 20 -55 12z" />
        <path d="M465 60 c-19 -36 -21 -70 -3 -52 16 16 45 15 51 0 11 -26 7 20 -4 51 -14 39 -24 39 -44 1z" />
        <path d="M600 46 c0 -42 2 -46 24 -46 33 0 47 20 37 56 -5 22 -14 30 -34 32 -26 3 -27 1 -27 -42z m42 12 c-12 -12 -35 -1 -27 12 3 5 13 6 21 3 10 -4 12 -9 6 -15z m8 -28 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z" />
        <path d="M700 45 c0 -43 1 -45 30 -45 17 0 30 5 30 10 0 6 -11 10 -25 10 -34 0 -32 20 3 21 25 1 26 1 4 7 -13 4 -23 12 -23 17 0 6 10 13 23 17 20 5 18 6 -9 7 -32 1 -33 0 -33 -44z" />
        <path d="M790 46 c0 -25 5 -46 10 -46 6 0 10 9 10 20 0 26 8 25 30 -3 l18 -22 -1 45 c-2 43 -3 45 -34 48 -33 3 -33 3 -33 -42z m42 19 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z" />
        <path d="M890 51 c0 -22 5 -43 10 -46 6 -4 10 6 10 22 l0 28 25 -30 24 -30 -1 50 c0 40 -2 44 -7 20 l-6 -29 -18 27 c-25 38 -37 34 -37 -12z" />
        <path d="M1005 54 c-18 -45 -20 -63 -3 -46 16 16 45 15 51 0 2 -7 7 -10 11 -7 9 8 -23 89 -35 89 -5 0 -16 -16 -24 -36z m30 -4 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z" />
        <path d="M1102 48 c-2 -45 0 -48 23 -48 14 0 25 5 25 10 0 6 -9 10 -19 10 -15 0 -21 8 -24 38 -3 34 -4 33 -5 -10z" />
      </g>
    </svg>  
  );
};

export default Logo;
