/// <reference types="react" />
import type { TTSHookProps } from './hook';
import type { SvgProps } from './icons';
declare enum Positions {
    TL = "topLeft",
    TR = "topRight",
    BL = "bottomLeft",
    BR = "bottomRight",
    TC = "topCenter",
    RC = "rightCenter",
    BC = "bottomCenter",
    LC = "leftCenter"
}
interface TTSProps extends TTSHookProps {
    /** How the controls are aligned within the `TextToSpeech` component. */
    align?: 'vertical' | 'horizontal';
    /** The relative size of the controls within the `TextToSpeech` component. */
    size?: SvgProps['size'];
    /** The relative position of the controls within the `TextToSpeech` component. */
    position?: `${Positions}`;
    /** Whether the `TextToSpeech` component should render the audio toggling control. */
    allowMuting?: boolean;
    /** Callback when the `TextToSpeech` component's audio toggling control is clicked. */
    onMuteToggled?: (wasMuted: boolean) => void;
    /** Whether the `TextToSpeech` component should render a stop control instead of pause. */
    useStopOverPause?: boolean;
}
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
declare const TextToSpeech: ({ size, lang, rate, voice, volume, children, position, onStart, onPause, onBoundary, onEnd, onError, onMuteToggled, onVolumeChange, onPitchChange, onRateChange, fetchAudioData, markColor, markBackgroundColor, autoPlay, allowMuting, align, markTextAsSpoken, useStopOverPause }: TTSProps) => JSX.Element;
export { Sizes } from './icons';
export { TextToSpeech, Positions };
export type { TTSProps };
