import { ComponentProps, JSX } from "react";

export interface CustomProps {
  [key: string]: {
    value: unknown;
    description?: string;
    required: boolean;
    default?: unknown;
  };
}

export interface Component<T extends keyof JSX.IntrinsicElements> {
  title: string;
  url: string;
  description: string;
  props: CustomProps extends ComponentProps<T> ? CustomProps : never;
}

export interface BaseProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  color?: string;
  showProgress?: boolean;
  showVolume?: boolean;
}

export type FFTSze =
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048
  | 4096
  | 8192
  | 16384
  | 32768;
