import { ReactNode, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactNode;
    className?: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, className }: ModalProps, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) return null;

    const portalRoot = document.getElementById("portal-root");

    if (!portalRoot) return null;

    return createPortal(
        <div ref={ref} className={`portal-root ${className}`}>
            {children}
        </div>,
        portalRoot
    );
});

export default Modal;
