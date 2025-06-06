import { useEffect, useRef } from "react";

type Callback = (e?: MouseEvent, ...props: any[]) => void;

export default function useOutSideClick<T extends HTMLElement = HTMLElement>(
    callback: Callback
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const target = e.target as Node;
            if (ref.current && target && !ref.current.contains(target)) {
                callback(e);
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [callback]);

    return ref;
}
