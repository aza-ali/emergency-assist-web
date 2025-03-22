function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

import { isPunctuation } from './utils';
var Events;

(function (Events) {
  Events["BOUNDARY"] = "boundary";
  Events["END"] = "end";
  Events["ERROR"] = "error";
  Events["PAUSED"] = "paused";
  Events["PITCH"] = "pitch";
  Events["PLAYING"] = "playing";
  Events["RATE"] = "rate";
  Events["READY"] = "ready";
  Events["VOLUME"] = "volume";
})(Events || (Events = {}));

var _target = /*#__PURE__*/new WeakMap();

var _synthesizer = /*#__PURE__*/new WeakMap();

var _dispatchBoundaries = /*#__PURE__*/new WeakMap();

var _fetchAudioData = /*#__PURE__*/new WeakMap();

var _marks = /*#__PURE__*/new WeakMap();

var _text = /*#__PURE__*/new WeakMap();

var _lang = /*#__PURE__*/new WeakMap();

var _aborter = /*#__PURE__*/new WeakMap();

var _initialized = /*#__PURE__*/new WeakMap();

var _initWebSpeechVoice = /*#__PURE__*/new WeakSet();

var _attachAudioSource = /*#__PURE__*/new WeakSet();

var _dispatchEnd = /*#__PURE__*/new WeakSet();

var _dispatchError = /*#__PURE__*/new WeakSet();

var _dispatchReady = /*#__PURE__*/new WeakSet();

var _dispatchPlaying = /*#__PURE__*/new WeakSet();

var _dispatchPaused = /*#__PURE__*/new WeakSet();

var _dispatchBoundary = /*#__PURE__*/new WeakSet();

var _dispatchVolume = /*#__PURE__*/new WeakSet();

var _dispatchRate = /*#__PURE__*/new WeakSet();

var _dispatchPitch = /*#__PURE__*/new WeakSet();

var _playHtmlAudio = /*#__PURE__*/new WeakSet();

var _getPollySpeechMarkForAudioTime = /*#__PURE__*/new WeakSet();

var _getBoundaryWordCharLength = /*#__PURE__*/new WeakSet();

var _clamp = /*#__PURE__*/new WeakSet();

var _recycle = /*#__PURE__*/new WeakSet();

var _utteranceInit = /*#__PURE__*/new WeakSet();

var _htmlAudioInit = /*#__PURE__*/new WeakSet();

class Controller extends EventTarget {
  constructor(options) {
    super();

    _classPrivateMethodInitSpec(this, _htmlAudioInit);

    _classPrivateMethodInitSpec(this, _utteranceInit);

    _classPrivateMethodInitSpec(this, _recycle);

    _classPrivateMethodInitSpec(this, _clamp);

    _classPrivateMethodInitSpec(this, _getBoundaryWordCharLength);

    _classPrivateMethodInitSpec(this, _getPollySpeechMarkForAudioTime);

    _classPrivateMethodInitSpec(this, _playHtmlAudio);

    _classPrivateMethodInitSpec(this, _dispatchPitch);

    _classPrivateMethodInitSpec(this, _dispatchRate);

    _classPrivateMethodInitSpec(this, _dispatchVolume);

    _classPrivateMethodInitSpec(this, _dispatchBoundary);

    _classPrivateMethodInitSpec(this, _dispatchPaused);

    _classPrivateMethodInitSpec(this, _dispatchPlaying);

    _classPrivateMethodInitSpec(this, _dispatchReady);

    _classPrivateMethodInitSpec(this, _dispatchError);

    _classPrivateMethodInitSpec(this, _dispatchEnd);

    _classPrivateMethodInitSpec(this, _attachAudioSource);

    _classPrivateMethodInitSpec(this, _initWebSpeechVoice);

    _classPrivateFieldInitSpec(this, _target, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _synthesizer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _dispatchBoundaries, {
      writable: true,
      value: true
    });

    _classPrivateFieldInitSpec(this, _fetchAudioData, {
      writable: true,
      value: async () => ({
        audio: '',
        marks: []
      })
    });

    _classPrivateFieldInitSpec(this, _marks, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _lang, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _aborter, {
      writable: true,
      value: new AbortController()
    });

    _classPrivateFieldInitSpec(this, _initialized, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _lang, (options === null || options === void 0 ? void 0 : options.lang) ?? _classPrivateFieldGet(this, _lang));

    _classPrivateFieldSet(this, _synthesizer, window.speechSynthesis);

    _classPrivateFieldSet(this, _target, new SpeechSynthesisUtterance(_classPrivateFieldGet(this, _text)));

    _classPrivateFieldSet(this, _dispatchBoundaries, (options === null || options === void 0 ? void 0 : options.dispatchBoundaries) ?? _classPrivateFieldGet(this, _dispatchBoundaries));

    if (options !== null && options !== void 0 && options.fetchAudioData) {
      _classPrivateFieldSet(this, _target, _classPrivateFieldSet(this, _synthesizer, new Audio()));

      _classPrivateFieldSet(this, _fetchAudioData, options.fetchAudioData);
    } else {
      _classPrivateMethodGet(this, _initWebSpeechVoice, _initWebSpeechVoice2).call(this, options === null || options === void 0 ? void 0 : options.voice);

      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
          _classPrivateMethodGet(this, _initWebSpeechVoice, _initWebSpeechVoice2).call(this, options === null || options === void 0 ? void 0 : options.voice);
        };
      }
    }
  }

  get synthesizer() {
    return _classPrivateFieldGet(this, _synthesizer);
  }

  get target() {
    return _classPrivateFieldGet(this, _target);
  }

  set text(value) {
    _classPrivateFieldSet(this, _text, value);

    if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
      _classPrivateFieldGet(this, _target).text = value;
    }
  }

  get paused() {
    return _classPrivateFieldGet(this, _synthesizer).paused;
  }

  get rate() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      return _classPrivateFieldGet(this, _synthesizer).playbackRate;
    }

    return _classPrivateFieldGet(this, _target).rate;
  }

  set rate(value) {
    const clamped = _classPrivateMethodGet(this, _clamp, _clamp2).call(this, parseFloat(value.toPrecision(3)), 0.1, 10);

    if (!Number.isNaN(clamped)) {
      _classPrivateMethodGet(this, _dispatchRate, _dispatchRate2).call(this, clamped);

      if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
        _classPrivateFieldGet(this, _synthesizer).defaultPlaybackRate = clamped;
        _classPrivateFieldGet(this, _synthesizer).playbackRate = clamped;
      }

      if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
        _classPrivateFieldGet(this, _target).rate = clamped;
      }
    }
  }

  get pitch() {
    if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
      return _classPrivateFieldGet(this, _target).pitch;
    } // Not supported by HTMLAudioElement


    return -1;
  }

  set pitch(value) {
    if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
      const clamped = _classPrivateMethodGet(this, _clamp, _clamp2).call(this, parseFloat(value.toPrecision(2)), 0, 2);

      if (!Number.isNaN(clamped)) {
        _classPrivateMethodGet(this, _dispatchPitch, _dispatchPitch2).call(this, clamped);

        _classPrivateFieldGet(this, _target).pitch = clamped;
      }
    }
  }
  /**
   * Edge on Android was not working with toggling
   * between volumes of zero and one. This sets a
   * different lower and upper bound on the volume.
   */


  get volumeMin() {
    return 0.01;
  }

  get volumeMax() {
    return 0.99;
  }

  get volume() {
    return _classPrivateFieldGet(this, _target).volume;
  }

  set volume(value) {
    const clamped = _classPrivateMethodGet(this, _clamp, _clamp2).call(this, parseFloat(value.toPrecision(2)), this.volumeMin, this.volumeMax);

    if (!Number.isNaN(clamped)) {
      _classPrivateMethodGet(this, _dispatchVolume, _dispatchVolume2).call(this, clamped);

      _classPrivateFieldGet(this, _target).volume = clamped;
    }
  }

  get preservesPitch() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      return _classPrivateFieldGet(this, _synthesizer).preservesPitch;
    }

    return false;
  }

  set preservesPitch(value) {
    /**
     * `preservesPitch` requires vendor-prefix on some browsers (Safari).
     * @see https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1300
     */
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;
      _classPrivateFieldGet(this, _synthesizer).preservesPitch = value;
    }
  }

  get lang() {
    return _classPrivateFieldGet(this, _lang);
  }

  set lang(value) {
    if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
      _classPrivateFieldSet(this, _lang, value);

      _classPrivateFieldGet(this, _target).lang = value;
      _classPrivateFieldGet(this, _target).voice = null;

      _classPrivateMethodGet(this, _initWebSpeechVoice, _initWebSpeechVoice2).call(this);
    }
  }
  /**
   * Allows listeners for controller events to be registered
   * before instances start firing events related to underlying API's,
   * for instance in a useEffect block.
   *
   * Run it as async to allow for the fetchAudioData call to be awaited.
   */


  async init() {
    if (!_classPrivateFieldGet(this, _initialized)) {
      if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
        _classPrivateMethodGet(this, _utteranceInit, _utteranceInit2).call(this);
      }

      if (_classPrivateFieldGet(this, _target) instanceof HTMLAudioElement) {
        await _classPrivateMethodGet(this, _htmlAudioInit, _htmlAudioInit2).call(this);
      }

      _classPrivateFieldSet(this, _initialized, true);
    }
  }

  async play() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      await _classPrivateMethodGet(this, _playHtmlAudio, _playHtmlAudio2).call(this);
    } else {
      _classPrivateFieldGet(this, _synthesizer).speak(_classPrivateFieldGet(this, _target));
    }
  }

  pause() {
    _classPrivateFieldGet(this, _synthesizer).pause();
  }

  async resume() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      await _classPrivateMethodGet(this, _playHtmlAudio, _playHtmlAudio2).call(this);
    } else {
      _classPrivateFieldGet(this, _synthesizer).resume();
    }
  }

  async replay() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      _classPrivateFieldGet(this, _synthesizer).load();

      await _classPrivateMethodGet(this, _playHtmlAudio, _playHtmlAudio2).call(this);
    } else {
      // Take out of any paused state
      _classPrivateFieldGet(this, _synthesizer).resume(); // Drop all utterances in the queue


      _classPrivateFieldGet(this, _synthesizer).cancel(); // Start speaking from the beginning


      _classPrivateFieldGet(this, _synthesizer).speak(_classPrivateFieldGet(this, _target));
    }
  }

  cancel() {
    if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
      _classPrivateFieldGet(this, _synthesizer).load();
    } else {
      _classPrivateFieldGet(this, _synthesizer).cancel();
    }
  }

  mute() {
    this.volume = 0;
    /**
     * There is no way to effectively mute an ongoing utterance for SpeechSynthesis.
     * If there is currently an utterance being spoken, replay to activate the muting instantly.
     */

    if (!(_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) && !this.paused && _classPrivateFieldGet(this, _synthesizer).speaking) {
      this.replay();
    }
  }

  unmute(volume) {
    this.volume = volume ?? 1;
    /**
     * Same as muting, for SpeechSynthesis have to replay to activate the volume change instantly.
     */

    if (!(_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) && !this.paused && _classPrivateFieldGet(this, _synthesizer).speaking) {
      this.replay();
    }
  }

}

function _initWebSpeechVoice2(voice) {
  if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
    let voices = window.speechSynthesis.getVoices();

    if (voice) {
      _classPrivateFieldGet(this, _target).voice = voice;
    }

    if (_classPrivateFieldGet(this, _lang)) {
      voices = voices.filter(voice => voice.lang === _classPrivateFieldGet(this, _lang));
      _classPrivateFieldGet(this, _target).voice = voices[0] ?? null;

      if (voice && voice.lang === _classPrivateFieldGet(this, _lang)) {
        _classPrivateFieldGet(this, _target).voice = voice;
      }
    }
  }
}

async function _attachAudioSource2() {
  if (_classPrivateFieldGet(this, _synthesizer) instanceof HTMLAudioElement) {
    let data = null;

    try {
      data = await _classPrivateFieldGet(this, _fetchAudioData).call(this, _classPrivateFieldGet(this, _text));
    } catch (err) {
      if (err instanceof Error) {
        _classPrivateMethodGet(this, _dispatchError, _dispatchError2).call(this, err.message);
      }
    } finally {
      var _data;

      if ((_data = data) !== null && _data !== void 0 && _data.audio) {
        _classPrivateFieldGet(this, _synthesizer).src = data.audio;

        _classPrivateFieldSet(this, _marks, data.marks ?? _classPrivateFieldGet(this, _marks));
      }
    }
  }
}

function _dispatchEnd2(evt) {
  this.dispatchEvent(new CustomEvent(Events.END, {
    detail: evt
  }));
}

function _dispatchError2(msg) {
  this.dispatchEvent(new CustomEvent(Events.ERROR, {
    detail: msg
  }));
}

function _dispatchReady2() {
  this.dispatchEvent(new Event(Events.READY));
}

function _dispatchPlaying2(evt) {
  this.dispatchEvent(new CustomEvent(Events.PLAYING, {
    detail: evt
  }));
}

function _dispatchPaused2(evt) {
  this.dispatchEvent(new CustomEvent(Events.PAUSED, {
    detail: evt
  }));
}

function _dispatchBoundary2(evt, boundary) {
  this.dispatchEvent(new CustomEvent(Events.BOUNDARY, {
    detail: {
      evt,
      boundary
    }
  }));
}

function _dispatchVolume2(volume) {
  this.dispatchEvent(new CustomEvent(Events.VOLUME, {
    detail: volume
  }));
}

function _dispatchRate2(rate) {
  this.dispatchEvent(new CustomEvent(Events.RATE, {
    detail: rate
  }));
}

function _dispatchPitch2(pitch) {
  this.dispatchEvent(new CustomEvent(Events.PITCH, {
    detail: pitch
  }));
}

async function _playHtmlAudio2() {
  const audio = _classPrivateFieldGet(this, _synthesizer);

  try {
    await audio.play();
  } catch (err) {
    if (err instanceof Error) {
      _classPrivateMethodGet(this, _dispatchError, _dispatchError2).call(this, err.message);
    }
  }
}

function _getPollySpeechMarkForAudioTime2(time) {
  const length = _classPrivateFieldGet(this, _marks).length;

  let bestMatch = _classPrivateFieldGet(this, _marks)[0];

  let found = false;
  let i = 1;

  while (i < length && !found) {
    if (_classPrivateFieldGet(this, _marks)[i].time <= time) {
      bestMatch = _classPrivateFieldGet(this, _marks)[i];
    } else {
      found = true;
    }

    i++;
  }

  return bestMatch;
}

function _getBoundaryWordCharLength2(startIndex) {
  const match = _classPrivateFieldGet(this, _text).substring(startIndex).match(/.+?\b/);

  return match ? match[0].length : 0;
}

function _clamp2(value) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.max(min, Math.min(value, max));
}

function _recycle2() {
  _classPrivateFieldGet(this, _aborter).abort();

  _classPrivateFieldSet(this, _aborter, new AbortController());

  return _classPrivateFieldGet(this, _aborter).signal;
}

function _utteranceInit2() {
  if (_classPrivateFieldGet(this, _target) instanceof SpeechSynthesisUtterance) {
    const signal = _classPrivateMethodGet(this, _recycle, _recycle2).call(this);

    _classPrivateFieldGet(this, _target).addEventListener('end', _classPrivateMethodGet(this, _dispatchEnd, _dispatchEnd2).bind(this), {
      signal
    });

    _classPrivateFieldGet(this, _target).addEventListener('start', _classPrivateMethodGet(this, _dispatchPlaying, _dispatchPlaying2).bind(this), {
      signal
    });

    _classPrivateFieldGet(this, _target).addEventListener('resume', _classPrivateMethodGet(this, _dispatchPlaying, _dispatchPlaying2).bind(this), {
      signal
    });

    _classPrivateFieldGet(this, _target).addEventListener('pause', _classPrivateMethodGet(this, _dispatchPaused, _dispatchPaused2).bind(this), {
      signal
    });

    _classPrivateFieldGet(this, _target).addEventListener('error', evt => {
      _classPrivateMethodGet(this, _dispatchError, _dispatchError2).call(this, evt.error);
    }, {
      signal
    });

    if (_classPrivateFieldGet(this, _lang)) {
      _classPrivateFieldGet(this, _target).lang = _classPrivateFieldGet(this, _lang);
    }

    if (_classPrivateFieldGet(this, _dispatchBoundaries)) {
      _classPrivateFieldGet(this, _target).addEventListener('boundary', evt => {
        const {
          charIndex: startChar
        } = evt;

        const charLength = evt.charLength ?? _classPrivateMethodGet(this, _getBoundaryWordCharLength, _getBoundaryWordCharLength2).call(this, startChar);

        const endChar = startChar + charLength;

        const word = _classPrivateFieldGet(this, _text).substring(startChar, endChar);

        if (word && !isPunctuation(word)) {
          _classPrivateMethodGet(this, _dispatchBoundary, _dispatchBoundary2).call(this, evt, {
            word,
            startChar,
            endChar
          });
        }
      }, {
        signal
      });
    }

    _classPrivateMethodGet(this, _dispatchReady, _dispatchReady2).call(this);
  }
}

async function _htmlAudioInit2() {
  if (_classPrivateFieldGet(this, _target) instanceof HTMLAudioElement) {
    const target = _classPrivateFieldGet(this, _target);

    _classPrivateFieldGet(this, _target).addEventListener('canplay', _classPrivateMethodGet(this, _dispatchReady, _dispatchReady2).bind(this), {
      once: true
    });

    _classPrivateFieldGet(this, _target).addEventListener('playing', _classPrivateMethodGet(this, _dispatchPlaying, _dispatchPlaying2).bind(this));

    _classPrivateFieldGet(this, _target).addEventListener('pause', _classPrivateMethodGet(this, _dispatchPaused, _dispatchPaused2).bind(this));

    _classPrivateFieldGet(this, _target).addEventListener('ended', _classPrivateMethodGet(this, _dispatchEnd, _dispatchEnd2).bind(this));

    _classPrivateFieldGet(this, _target).addEventListener('error', () => {
      const error = target.error;

      _classPrivateMethodGet(this, _dispatchError, _dispatchError2).call(this, error === null || error === void 0 ? void 0 : error.message);
    });

    if (_classPrivateFieldGet(this, _dispatchBoundaries)) {
      _classPrivateFieldGet(this, _target).addEventListener('timeupdate', evt => {
        // Polly Speech Marks use milliseconds
        const currentTime = target.currentTime * 1000;

        const mark = _classPrivateMethodGet(this, _getPollySpeechMarkForAudioTime, _getPollySpeechMarkForAudioTime2).call(this, currentTime);

        if (mark && !this.paused) {
          _classPrivateMethodGet(this, _dispatchBoundary, _dispatchBoundary2).call(this, evt, {
            word: mark.value,
            startChar: mark.start,
            endChar: mark.end
          });
        }
      });
    }

    await _classPrivateMethodGet(this, _attachAudioSource, _attachAudioSource2).call(this);
  }
}

export { Controller, Events };