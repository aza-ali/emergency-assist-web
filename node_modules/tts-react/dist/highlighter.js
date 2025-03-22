import React, { useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

const markStyles = _ref => {
  let {
    color,
    backgroundColor
  } = _ref;
  return {
    color,
    backgroundColor
  };
};

const Highlighter = _ref2 => {
  let {
    text,
    mark,
    color,
    backgroundColor
  } = _ref2;
  const markStyle = useMemo(() => markStyles({
    color,
    backgroundColor
  }), [color, backgroundColor]);

  if (text && mark) {
    const textStr = text.toString();
    const escapedMark = mark.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(`(${escapedMark})`, 'gi');
    const parts = textStr.split(regex);

    if (parts.length > 1) {
      return /*#__PURE__*/_jsx("span", {
        children: parts.map((part, idx) => {
          const key = `${part}-${idx}`;

          if (!part) {
            // Happens when the entire text matches the mark
            return null;
          }

          if (regex.test(part)) {
            return /*#__PURE__*/_jsx("mark", {
              style: markStyle,
              children: part
            }, key);
          }

          return /*#__PURE__*/_jsx("span", {
            children: part
          }, key);
        })
      });
    }
  }

  return /*#__PURE__*/_jsx(_Fragment, {
    children: text
  });
};

export { Highlighter };