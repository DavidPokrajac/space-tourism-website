import { DestinationInfoProps } from "../page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Planets({ destination }: any) {
    return (
        <>
            {destination.map(
                (destination: DestinationInfoProps, index: number) => {
                    return (
                        <>
                            <h2 key={index}>{destination.name}</h2>
                            <p>{destination.description}</p>
                            <div>
                                <span>Avg. distance</span>
                                <span>{destination.distance}</span>
                            </div>
                            <div>
                                <span>Est. travel time</span>
                                <span>{destination.travel}</span>
                            </div>
                        </>
                    );
                }
            )}
        </>
    );
}
