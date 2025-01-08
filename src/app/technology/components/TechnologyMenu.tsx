interface TechnologyMenuProps {
    technology: string;
    handleTechnology: (e: string) => void;
}

export default function TechnologyMenu({
    handleTechnology,
    technology,
}: TechnologyMenuProps) {
    return (
        <div className="technology-select">
            <button
                onClick={() => handleTechnology("Launch vehicle")}
                className={`${technology === "Launch vehicle" ? "active" : ""}`}
            >
                1
            </button>
            <button
                onClick={() => handleTechnology("Spaceport")}
                className={`${technology === "Spaceport" ? "active" : ""}`}
            >
                2
            </button>
            <button
                onClick={() => handleTechnology("Space capsule")}
                className={`${technology === "Space capsule" ? "active" : ""}`}
            >
                3
            </button>
        </div>
    );
}
