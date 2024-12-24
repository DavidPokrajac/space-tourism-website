interface ButtonsMenuProps {
    destination: string;
    handleDestination: (value: string) => void;
}

export default function ButtonsMenu({
    destination,
    handleDestination,
}: ButtonsMenuProps) {
    return (
        <div className="buttons-menu">
            <button
                onClick={() => handleDestination("Moon")}
                className={`btn-secondary ${
                    destination === "Moon" ? "destination-btn-active" : ""
                }`}
            >
                Moon
            </button>
            <button
                onClick={() => handleDestination("Mars")}
                className={`btn-secondary ${
                    destination === "Mars" ? "destination-btn-active" : ""
                }`}
            >
                Mars
            </button>
            <button
                onClick={() => handleDestination("Europa")}
                className={`btn-secondary ${
                    destination === "Europa" ? "destination-btn-active" : ""
                }`}
            >
                Europa
            </button>
            <button
                onClick={() => handleDestination("Titan")}
                className={`btn-secondary ${
                    destination === "Titan" ? "destination-btn-active" : ""
                }`}
            >
                Titan
            </button>
        </div>
    );
}
