import type { MouseEventHandler } from 'react';
import { Sizes } from './icons';
interface ControlProps {
    title: string;
    size?: `${Sizes}`;
    align?: 'vertical' | 'horizontal';
    type: 'play' | 'stop' | 'pause' | 'replay' | 'volumeDown' | 'volumeOff' | 'volumeUp';
    onClick: MouseEventHandler<HTMLButtonElement>;
}
declare const padding: {
    small: number;
    medium: number;
    large: number;
};
declare const Control: ({ title, type, onClick, size, align, ...rest }: ControlProps) => JSX.Element;
export { Control, padding };
export type { ControlProps };
