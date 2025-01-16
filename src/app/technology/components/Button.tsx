interface ButtonProps {
    children: string | JSX.Element;
    onClick: () => void;
    className: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
