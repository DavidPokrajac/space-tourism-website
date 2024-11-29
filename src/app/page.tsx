import Header from "@/components/Header";
import "./main.css";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <p>
                    So, you want to travel to <strong>Space</strong>
                </p>
                <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
                <button>Explore</button>
            </main>
        </>
    );
}
