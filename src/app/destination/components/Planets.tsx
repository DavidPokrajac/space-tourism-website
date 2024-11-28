import { DestinationInfoProps } from "../page";
import { v4 as uuidv4 } from "uuid";

type Dest = {
    destination: DestinationInfoProps[];
};

export default function Planets({ destination }: Dest) {
    return (
        <>
            {destination.map((destination: DestinationInfoProps) => {
                return (
                    <div key={uuidv4()}>
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                        <div>
                            <span>Avg. distance</span>
                            <span>{destination.distance}</span>
                        </div>
                        <div>
                            <span>Est. travel time</span>
                            <span>{destination.travel}</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
