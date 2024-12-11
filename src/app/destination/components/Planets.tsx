"use client";

import { useState, useEffect } from "react";
import { DestinationInfoProps } from "../page";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Fragment } from "react";

type Dest = {
    destination: DestinationInfoProps[];
};

export default function Planets({ destination }: Dest) {
    const [size, setSize] = useState<number>(150);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setSize(150);
            } else if (window.innerWidth > 676 && window.innerWidth <= 1092) {
                setSize(300);
            } else if (window.innerWidth > 1092) {
                setSize(480);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [size]);

    return (
        <>
            {destination.map((destination: DestinationInfoProps) => {
                return (
                    <Fragment key={uuidv4()}>
                        <div className="planet-img">
                            <Image
                                src={destination.images.png}
                                alt=""
                                width={size}
                                height={size}
                            />
                        </div>
                        <div className="planet-details">
                            <h2 className="planet-name">{destination.name}</h2>
                            <p>{destination.description}</p>
                            <div className="planet-averages-container">
                                <div className="planet-averages">
                                    <span>Avg. distance</span>
                                    <span className="planet-average-value">
                                        {destination.distance}
                                    </span>
                                </div>
                                <div className="planet-averages">
                                    <span>Est. travel time</span>
                                    <span className="planet-average-value">
                                        {destination.travel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </>
    );
}
