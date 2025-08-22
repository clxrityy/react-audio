import type { ComponentProps, JSX } from "react";

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
  // Component props shape for documentation/controls. Not a runtime prop type.
  props: CustomProps & Partial<ComponentProps<T>>;
}

export interface BaseProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  color?: string;
  showProgress?: boolean;
  showVolume?: boolean;
}

export type FFTSize =
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
