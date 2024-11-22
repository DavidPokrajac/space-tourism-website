import Image from "next/image";

export default function Header() {
    return (
        <header>
            <figure>
                <Image
                    src="/assets/shared/logo.svg"
                    width={48}
                    height={48}
                    alt="A Company logo"
                />
            </figure>
            <nav>
                <ul>
                    <li>
                        <a href="#">00 Home</a>
                    </li>
                    <li>
                        <a href="#">01 Destination</a>
                    </li>
                    <li>
                        <a href="#">02 Crew</a>
                    </li>
                    <li>
                        <a href="#">03 Technology</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
