import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ReactChildrenPropsType } from "types/global";

type ComponentProps = {
  selector: string;
  children: ReactChildrenPropsType;
};
export default function Portal({ children, selector }: ComponentProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (selector) {
      ref.current = document.querySelector(selector);
      setMounted(true);
    }
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
