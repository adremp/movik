import { useEffect, useRef } from "react";

export default <E extends HTMLElement>(params: Partial<E>) => {
  const ref = useRef<E | null>(null);

  useEffect(() => {
    if (ref.current) {
      for (const param in params) {
        // @ts-ignore
        ref.current[param] = params[param];
      }
    }
  }, []);
  return ref;
};
