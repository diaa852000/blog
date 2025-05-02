import { useEffect, useRef } from "react";

type Callback = (e?:MouseEvent, ...props: any[]) => void;

export default function useOutSideClick<T extends HTMLElement = HTMLElement>(
    callback: Callback
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClick(e?: MouseEvent ) {
            if (ref.current && !ref.current.contains(e?.target as Node)) {
                callback(e);
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [callback]);

    return ref;
}
