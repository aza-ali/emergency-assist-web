import type { ReactNode } from 'react';
declare const punctuationRgx: RegExp;
declare const isStringOrNumber: (value: ReactNode) => boolean;
declare const stripPunctuation: (text: string) => string;
declare const isPunctuation: (text: string) => boolean;
export { isStringOrNumber, stripPunctuation, isPunctuation, punctuationRgx };
