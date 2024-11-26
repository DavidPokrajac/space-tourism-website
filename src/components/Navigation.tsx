import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/destination">Moon</Link>
                </li>
                <li>
                    <Link href="/destination">Mars</Link>
                </li>
                <li>
                    <Link href="/destination">Europa</Link>
                </li>
                <li>
                    <Link href="/destination">Titan</Link>
                </li>
            </ul>
        </nav>
    );
}
