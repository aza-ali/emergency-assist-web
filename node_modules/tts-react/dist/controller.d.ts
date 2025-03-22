declare enum Events {
    BOUNDARY = "boundary",
    END = "end",
    ERROR = "error",
    PAUSED = "paused",
    PITCH = "pitch",
    PLAYING = "playing",
    RATE = "rate",
    READY = "ready",
    VOLUME = "volume"
}
interface PollySpeechMark {
    end: number;
    start: number;
    time: number;
    type: string;
    value: string;
}
interface TTSBoundaryUpdate {
    word: string;
    startChar: number;
    endChar: number;
}
interface TTSAudioData {
    audio: string;
    marks?: PollySpeechMark[];
}
interface FetchAudioData {
    (text: string): Promise<TTSAudioData>;
}
interface ControllerOptions {
    lang?: string;
    voice?: SpeechSynthesisVoice;
    dispatchBoundaries?: boolean;
    fetchAudioData?: FetchAudioData;
}
declare type Target = HTMLAudioElement | SpeechSynthesisUtterance;
declare type Synthesizer = HTMLAudioElement | SpeechSynthesis;
declare type TTSEvent = SpeechSynthesisEvent | Event;
declare class Controller extends EventTarget {
    #private;
    constructor(options?: ControllerOptions);
    get synthesizer(): Synthesizer;
    get target(): Target;
    set text(value: string);
    get paused(): boolean;
    get rate(): number;
    set rate(value: number);
    get pitch(): number;
    set pitch(value: number);
    /**
     * Edge on Android was not working with toggling
     * between volumes of zero and one. This sets a
     * different lower and upper bound on the volume.
     */
    get volumeMin(): number;
    get volumeMax(): number;
    get volume(): number;
    set volume(value: number);
    get preservesPitch(): boolean;
    set preservesPitch(value: boolean);
    get lang(): string;
    set lang(value: string);
    /**
     * Allows listeners for controller events to be registered
     * before instances start firing events related to underlying API's,
     * for instance in a useEffect block.
     *
     * Run it as async to allow for the fetchAudioData call to be awaited.
     */
    init(): Promise<void>;
    play(): Promise<void>;
    pause(): void;
    resume(): Promise<void>;
    replay(): Promise<void>;
    cancel(): void;
    mute(): void;
    unmute(volume?: number): void;
}
export { Controller, Events };
export type { TTSAudioData, PollySpeechMark, ControllerOptions, TTSBoundaryUpdate, TTSEvent };
