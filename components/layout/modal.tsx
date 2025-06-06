import { ReactNode, useEffect, useState, forwardRef, FragmentProps } from "react";
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
        <div className={`portal-root ${className}`}>
            <div
                ref={ref}
                className="w-fit bg-red-200"
                onMouseDown={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        portalRoot
    );
});

export default Modal;
