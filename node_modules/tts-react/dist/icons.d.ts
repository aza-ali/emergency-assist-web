declare enum Sizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
interface SvgProps {
    size?: `${Sizes}`;
}
declare const iconSizes: {
    small: number;
    medium: number;
    large: number;
};
declare const icons: {
    play({ size }: SvgProps): string;
    pause({ size }: SvgProps): string;
    stop({ size }: SvgProps): string;
    replay({ size }: SvgProps): string;
    volumeDown({ size }: SvgProps): string;
    volumeOff({ size }: SvgProps): string;
    volumeUp({ size }: SvgProps): string;
};
export { Sizes, iconSizes, icons };
export type { SvgProps };
