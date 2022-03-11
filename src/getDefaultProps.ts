import React from "react";

type FIXME<T> = React.ComponentType<T> extends { defaultProps?: infer P }
  ? P | undefined
  : never;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<T> => component.defaultProps;
