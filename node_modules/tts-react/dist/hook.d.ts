import type { ReactNode } from 'react';
import type { ControllerOptions, TTSBoundaryUpdate } from './controller';
/**
 * Event handler for a TTS event:
 * - `onStart`
 * - `onPause`
 * - `onEnd`
 *
 * If not using `fetchAudioData` then the event will be `SpeechSynthesisEvent`.
 * Otherwise, the event will be the generic `Event` type used by `HTMLAudioElement`.
 */
declare type TTSEventHandler = (evt: SpeechSynthesisEvent | Event) => void;
/**
 * Event handler for a TTS error event.
 * `tts-react` wraps both `SpeechSynthesis` and `HTMLAudioElement` API's
 * which return the error information in diferrent ways. `tts-react` will
 * return the error message from to the handler if one is found.
 */
declare type TTSErrorHandler = (msg: string) => void;
/**
 * Event handler if an attribute of speaking has changed:
 * - volume
 * - rate
 * - pitch
 */
declare type TTSAudioChangeHandler = (newValue: number) => void;
/**
 * Event handler for TTS boundary events.
 *
 * If yousing `fetchAudioData` these events correspond to `timeupdate` events
 * for `HTMLAudioElement` where a `PollySpeechMark` could be found for the event's `currentTime`.
 *
 * Otherwise, these correspond to `boundary` events for `SpeechSynthesisUtterance`.
 */
declare type TTSBoundaryHandler = (boundary: TTSBoundaryUpdate, evt: SpeechSynthesisEvent | Event) => void;
interface MarkStyles {
    /** Text color of the currently marked word. */
    markColor?: string;
    /** Background color of the currently marked word. */
    markBackgroundColor?: string;
}
interface TTSHookProps extends MarkStyles {
    /** The spoken text is extracted from here. */
    children: ReactNode;
    /** The `SpeechSynthesisUtterance.lang` to use. */
    lang?: ControllerOptions['lang'];
    /** The `SpeechSynthesisUtterance.voice` to use. */
    voice?: ControllerOptions['voice'];
    /** The initial rate of the speaking audio. */
    rate?: number;
    /** The initial volume of the speaking audio. */
    volume?: number;
    /** Whether the text should be spoken automatically, i.e. on render. */
    autoPlay?: boolean;
    /** Whether the spoken word should be wrapped in a `<mark>` element. */
    markTextAsSpoken?: boolean;
    /** Callback when the volume is changed.  */
    onVolumeChange?: TTSAudioChangeHandler;
    /** Callback when the rate is changed.  */
    onRateChange?: TTSAudioChangeHandler;
    /** Callback when the pitch is changed.  */
    onPitchChange?: TTSAudioChangeHandler;
    /** Callback when there is an error of any kind. */
    onError?: TTSErrorHandler;
    /** Callback when speaking/audio starts playing. */
    onStart?: TTSEventHandler;
    /** Callback when the speaking/audio is paused. */
    onPause?: TTSEventHandler;
    /** Callback when a word boundary/mark has been reached. */
    onBoundary?: TTSBoundaryHandler;
    /** Calback when the current utterance/audio has ended. */
    onEnd?: TTSEventHandler;
    /** Function to fetch audio and speech marks for the spoken text. */
    fetchAudioData?: ControllerOptions['fetchAudioData'];
}
interface TTSHookState {
    voices: SpeechSynthesisVoice[];
    boundary: TTSBoundaryUpdate;
    isPlaying: boolean;
    isPaused: boolean;
    isMuted: boolean;
    isError: boolean;
    isReady: boolean;
}
interface TTSHookResponse {
    set: {
        lang: (value: string) => void;
        rate: (value: number) => void;
        pitch: (value: number) => void;
        volume: (value: number) => void;
        preservesPitch: (value: boolean) => void;
    };
    get: {
        lang: () => string;
        rate: () => number;
        pitch: () => number;
        volume: () => number;
        preservesPitch: () => boolean;
    };
    /** State of the current speaking/audio. */
    state: TTSHookState;
    /** The text extracted from the children elements and used to synthesize speech. */
    spokenText: string;
    play: () => void;
    stop: () => void;
    pause: () => void;
    replay: () => void;
    /** Toggles between muted/unmuted, i.e. volume is zero or non-zero. */
    toggleMute: (callback?: (wasMuted: boolean) => void) => void;
    /** Toggles between play/stop. */
    playOrStop: () => void;
    /** Toggles between play/pause. */
    playOrPause: () => void;
    /** The original children with a possible <mark> included if using `markTextAsSpoken`. */
    ttsChildren: ReactNode;
}
declare const useTts: ({ lang, rate, volume, voice, children, markColor, markBackgroundColor, onStart, onPause, onBoundary, onEnd, onError, onVolumeChange, onPitchChange, onRateChange, fetchAudioData, autoPlay, markTextAsSpoken }: TTSHookProps) => TTSHookResponse;
export { useTts };
export type { TTSHookProps, TTSHookResponse, TTSHookState, TTSEventHandler, TTSErrorHandler, TTSBoundaryHandler, TTSAudioChangeHandler };
