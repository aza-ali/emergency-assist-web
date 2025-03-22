import React, { useMemo, useEffect } from 'react';
import { Sizes, icons, iconSizes } from './icons';
import { jsx as _jsx } from "react/jsx-runtime";
const padding = {
  [Sizes.SMALL]: 5,
  [Sizes.MEDIUM]: 5,
  [Sizes.LARGE]: 5
};

const button = _ref => {
  let {
    size,
    align,
    type
  } = _ref;
  const styles = {
    margin: 0,
    padding: `${padding[size]}px`,
    border: 'none',
    borderRadius: `${iconSizes[size]}px`,
    color: 'black',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  };

  if (type === 'replay') {
    // Include left/right padding + gutter
    const value = `-${iconSizes[size] + 2 * padding[size] + 5}px`;
    const property = align === 'horizontal' ? 'right' : 'bottom';
    return { ...styles,
      [property]: value,
      position: 'absolute',
      background: '#f2f1f1a6',
      zIndex: 9999
    };
  }

  return styles;
};

const Control = _ref2 => {
  let {
    title,
    type,
    onClick,
    size = Sizes.MEDIUM,
    align = 'horizontal',
    ...rest
  } = _ref2;
  const styleDataId = 'tts-react-controls';
  const svg = useMemo(() => {
    return icons[type]({
      size
    });
  }, [type, size]);
  const btnStyle = useMemo(() => button({
    size,
    align,
    type
  }), [size, align, type]);
  useEffect(() => {
    // Keep pseudo styles in stylesheets where they are supported.
    let style = document.querySelector(`style[data-id="${styleDataId}"]`);

    if (!style) {
      style = document.createElement('style');
      style.setAttribute('data-id', styleDataId);
      style.innerHTML = `
        button[data-tts-react-control]:hover {
          background-color: #ebeaeaa6 !important;
        }
        button[data-id="tts-react-replay"]:hover {
          filter: brightness(0.98);
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      // Cleanup reference to DOM element
      style = null;
    };
  }, [align, size, type]);
  return /*#__PURE__*/_jsx("button", {
    title: title,
    "data-tts-react-control": true,
    "data-id": `tts-react-${type}`,
    onClick: onClick,
    style: btnStyle,
    dangerouslySetInnerHTML: {
      __html: svg
    },
    ...rest
  });
};

export { Control, padding };