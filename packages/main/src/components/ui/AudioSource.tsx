import type { ComponentProps } from "react";

export type AudioSourceProps = ComponentProps<"source"> & {
  src?: string;
  type?: string;
};

export const AudioSource = ({ src, type, ...props }: AudioSourceProps) => {
  const derivedType = type ?? (src ? `audio/${src.split(".").pop()}` : "audio/*");
  return <source src={src} type={derivedType} {...props} />;
};
