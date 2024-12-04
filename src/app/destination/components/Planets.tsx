"use client";
import { useState, useEffect } from "react";
import { DestinationInfoProps } from "../page";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Fragment } from "react";
import { imageSize } from "../../../utilities";

type Dest = {
    destination: DestinationInfoProps[];
};

export default function Planets({ destination }: Dest) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    return (
        <>
            {destination.map((destination: DestinationInfoProps) => {
                return (
                    <Fragment key={uuidv4()}>
                        <div className="planet-img">
                            <Image
                                src={destination.images.png}
                                alt=""
                                width={imageSize()}
                                height={imageSize()}
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
