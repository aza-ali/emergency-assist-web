// No umd build for react/jsx-runtime @see https://github.com/facebook/react/issues/20923
import React, { useMemo, useCallback } from 'react';
import { useTts } from './hook';
import { iconSizes, Sizes } from './icons';
import { Control, padding as ctrlPadding } from './control';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Positions;

(function (Positions) {
  Positions["TL"] = "topLeft";
  Positions["TR"] = "topRight";
  Positions["BL"] = "bottomLeft";
  Positions["BR"] = "bottomRight";
  Positions["TC"] = "topCenter";
  Positions["RC"] = "rightCenter";
  Positions["BC"] = "bottomCenter";
  Positions["LC"] = "leftCenter";
})(Positions || (Positions = {}));

const wrap = _ref => {
  let {
    position = Positions.LC
  } = _ref;
  let gridTemplateAreas = `'cnt ctl'`;
  let gridTemplateColumns = '1fr auto';
  let alignItems = 'start';

  switch (position) {
    case Positions.TL:
      gridTemplateAreas = `'ctl cnt'`;
      gridTemplateColumns = 'auto 1fr';
      break;

    case Positions.BL:
      gridTemplateAreas = `'ctl cnt'`;
      alignItems = 'end';
      gridTemplateColumns = 'auto 1fr';
      break;

    case Positions.BR:
      gridTemplateAreas = `'cnt ctl'`;
      alignItems = 'end';
      break;

    case Positions.TC:
      gridTemplateColumns = '1fr';
      gridTemplateAreas = `'ctl'\n'cnt'`;
      alignItems = 'center';
      break;

    case Positions.RC:
      alignItems = 'center';
      break;

    case Positions.BC:
      gridTemplateColumns = '1fr';
      gridTemplateAreas = `'cnt'\n'ctl'`;
      alignItems = 'center';
      break;

    case Positions.LC:
      gridTemplateAreas = `'ctl cnt'`;
      gridTemplateColumns = 'auto 1fr';
      alignItems = 'center';
  }

  return {
    alignItems,
    gridTemplateAreas,
    gridTemplateColumns,
    display: 'grid',
    gap: '15px'
  };
};

const controls = _ref2 => {
  let {
    align,
    position = Positions.LC,
    size = Sizes.MEDIUM
  } = _ref2;
  return {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: align === 'horizontal' ? 'row' : 'column',
    gap: '5px',
    gridArea: 'ctl',
    padding: 0,
    margin: position.includes('Center') ? 'auto' : 0,
    backgroundColor: '#f2f1f1a6',
    borderRadius: `${iconSizes[size] + ctrlPadding[size]}px`,
    border: '1px solid transparent'
  };
};

const content = () => {
  return {
    gridArea: 'cnt'
  };
};
/**
 * `useTts` is a React hook for converting text to speech using
 * the `SpeechSynthesis` and `SpeechSynthesisUtterance` Browser API's.
 * Optionally, you can fallback to using the `HTMLAudioElement` API
 * when setting the `fetchAudioData` prop, for example to use Amazon Polly.
 *
 * The `TextToSpeech` component is an implementation of `useTts` that provides
 * controls for playing, pausing/stopping, and replaying the spoken text.
 * It also extends the props of `useTts` by supporting some of it's own:
 *
 * - `align`
 * - `allowMuting`
 * - `onMuteToggled`
 * - `position`
 * - `size`
 * - `useStopOverPause`
 */


const TextToSpeech = _ref3 => {
  let {
    size,
    lang,
    rate,
    voice,
    volume,
    children,
    position,
    onStart,
    onPause,
    onBoundary,
    onEnd,
    onError,
    onMuteToggled,
    onVolumeChange,
    onPitchChange,
    onRateChange,
    fetchAudioData,
    markColor,
    markBackgroundColor,
    autoPlay = false,
    allowMuting = true,
    align = 'horizontal',
    markTextAsSpoken = false,
    useStopOverPause = false
  } = _ref3;
  const {
    state,
    replay,
    toggleMute,
    playOrPause,
    playOrStop,
    ttsChildren
  } = useTts({
    lang,
    rate,
    voice,
    volume,
    children,
    onStart,
    onPause,
    onBoundary,
    onEnd,
    onError,
    onVolumeChange,
    onPitchChange,
    onRateChange,
    fetchAudioData,
    autoPlay,
    markColor,
    markBackgroundColor,
    markTextAsSpoken
  });
  const wrapStyle = useMemo(() => wrap({
    position
  }), [position]);
  const controlsStyle = useMemo(() => controls({
    align,
    position,
    size
  }), [align, position, size]);
  const contentStyle = useMemo(() => content(), []);
  const [type, title, onClick] = useMemo(() => {
    if (state.isPlaying) {
      if (useStopOverPause) {
        return ['stop', 'Stop', playOrStop];
      }

      return ['pause', 'Pause', playOrPause];
    }

    return ['play', 'Play', playOrPause];
  }, [state.isPlaying, useStopOverPause, playOrStop, playOrPause]);
  const handleOnMuteClicked = useCallback(() => {
    toggleMute(onMuteToggled);
  }, [toggleMute, onMuteToggled]);
  return /*#__PURE__*/_jsxs("div", {
    style: wrapStyle,
    className: "tts-react",
    children: [state.isReady && /*#__PURE__*/_jsxs("aside", {
      style: controlsStyle,
      children: [allowMuting && /*#__PURE__*/_jsx(Control, {
        size: size,
        align: align,
        title: state.isMuted ? 'Unmute' : 'Mute',
        "aria-label": state.isMuted ? 'Unmute' : 'Mute',
        onClick: handleOnMuteClicked,
        type: state.isMuted ? 'volumeOff' : state.isPlaying ? 'volumeUp' : 'volumeDown'
      }), /*#__PURE__*/_jsx(Control, {
        type: type,
        title: title,
        "aria-label": title,
        onClick: onClick,
        size: size,
        align: align
      }), state.isPaused && /*#__PURE__*/_jsx(Control, {
        type: "replay",
        size: size,
        align: align,
        title: "Replay",
        "aria-label": "Replay",
        onClick: replay
      })]
    }), /*#__PURE__*/_jsx("div", {
      style: contentStyle,
      children: ttsChildren
    })]
  });
};

export { Sizes } from './icons';
export { TextToSpeech, Positions };