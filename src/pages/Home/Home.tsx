import Wrapper from "../../components/Wrapper.tsx";
import {Link} from "react-router";

export default function Home() {
    return (
        <main className={"page-home"}>
            <Wrapper>
                <h1 className={"style-heading"}>Pasirinkite įrankį</h1>
                <div className={"grid"}>
                    <Link to={"/to-do-list"} className={"style-button purple"}>Užduočių sąrašas</Link>
                    <Link to={"/cart"} className={"style-button pink"}>Krepšelio sistema</Link>
                    <Link to={"/word-guessing-game"} className={"style-button orange"}>Skaičių spėjimo žaidimas</Link>
                </div>

            </Wrapper>
        </main>
    )
}