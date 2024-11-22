import Image from "next/image";

export default function Home() {
    return (
        <>
            <header>
                <figure>
                    <Image
                        src="/assets/shared/logo.svg"
                        width={48}
                        height={48}
                        alt="A Company logo"
                    />
                </figure>
            </header>
        </>
    );
}
