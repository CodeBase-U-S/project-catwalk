
const stylesReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLES':
    return {
      stylesObj: styleParser(action.styles),
      styles: action.styles
    };

    // return { styles: action.styles };
  default:
    return state;
  }
};

const styleParser = (styleArray) => {
  const styles = {};
  styleArray.forEach((style, key) => {
    styles[style['style_id']] = style;
  });
  console.log(styles);
  return styles;
};

export default stylesReducer;