import { ComponentProps } from "react";

export type AudioSourceProps = ComponentProps<"source">;

export const AudioSource = ({ ...props }: AudioSourceProps) => {
  return <source {...props} type={`audio/${props.src?.split(".").pop()}`} />;
};
