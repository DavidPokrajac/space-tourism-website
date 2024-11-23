import Image from "next/image";
import Link from "next/link";

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
                        <Link href="/">00 Home</Link>
                    </li>
                    <li>
                        <Link href="/destination">01 Destination</Link>
                    </li>
                    <li>
                        <Link href="/crew">02 Crew</Link>
                    </li>
                    <li>
                        <Link href="/technology">03 Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
