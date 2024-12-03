import Header from "@/components/Header";
import "./css/main.css";
import "./css/header.css";
import "./css/home.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="main-content">
                    <div className="text-content">
                        <p className="introduction">
                            So, you want to travel to{" "}
                        </p>
                        <strong className="space-strong">Space</strong>
                        <p>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <button className="btn-explore">Explore</button>
                </section>
            </main>
        </>
    );
}
