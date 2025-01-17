import { forwardRef } from "react";

interface DestinationButtonProps {
    onClick: () => void;
    className: string;
    children: string | JSX.Element;
}

function Button(
    { onClick, className, children }: DestinationButtonProps,
    ref: React.Ref<HTMLButtonElement>
) {
    return (
        <button ref={ref} onClick={onClick} className={className}>
            {children}
        </button>
    );
}

const ForwardedButton = forwardRef(Button);

export default ForwardedButton;
