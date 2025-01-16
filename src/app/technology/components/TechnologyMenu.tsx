import Button from "./Button";

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
            <Button
                onClick={() => handleTechnology("Launch vehicle")}
                className={`${technology === "Launch vehicle" ? "active" : ""}`}
            >
                1
            </Button>
            <Button
                onClick={() => handleTechnology("Spaceport")}
                className={`${technology === "Spaceport" ? "active" : ""}`}
            >
                2
            </Button>
            <Button
                onClick={() => handleTechnology("Space capsule")}
                className={`${technology === "Space capsule" ? "active" : ""}`}
            >
                3
            </Button>
        </div>
    );
}
