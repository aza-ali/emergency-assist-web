/// <reference types="react" />
interface HighliterProps {
    text: string;
    mark: string;
    color?: string;
    backgroundColor?: string;
}
declare const Highlighter: ({ text, mark, color, backgroundColor }: HighliterProps) => JSX.Element;
export { Highlighter };
