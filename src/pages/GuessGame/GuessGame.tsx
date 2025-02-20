import Wrapper from "../../components/Wrapper.tsx";
import GoBack from "../../components/GoBack.tsx";
import React, {useState} from "react";
import GuessForm from "./components/GuessForm.tsx";
import Message from "./components/Message.tsx";

export interface MessageInterface {
    text: string;
    correct: boolean;
}
export default function GuessGame() {
    const [number, setNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
    const [attempts, setAttempts] = useState(0);
    const [guess, setGuess] = useState<number | undefined>();
    const [message, setMessage] = useState<MessageInterface>({
        text: "",
        correct: false
    });
    const [gamePaused, setGamePaused] = useState(false);

    const handleGuess = (e: React.FormEvent) => {
        e.preventDefault();
        setAttempts(attempts + 1);
        if (guess === number) {
            setMessage({
                text: `Teisingai atspėjote! Skaičius buvo ${number}`,
                correct: true
            })
            setGamePaused(true);
            return;
        }

        let text = "Bandyk mažesnį";
        if (guess && guess < number ) {
            text = "Bandyk didesnį";
        }

        setMessage({
            text: text,
            correct: false
        })

    }


    const resetGame = () => {
        setNumber(Math.floor(Math.random() * 100) + 1);
        setAttempts(0);
        setGuess(undefined);
        setMessage({
            text: "",
            correct: false
        })
        setGamePaused(false);
    }


    return (
        <main className={"page-guessGame"}>
            <Wrapper>
                <GoBack />
                <h1 className={"style-heading"}>Atspėk žodį</h1>
                <div className={"attempts"}>Bandymų skaičius:<span> {attempts}</span></div>
                <Message message={message} />
                {gamePaused ?
                    <button type={"button"} className={"style-button form__button"} onClick={resetGame}>Pradėti naują žaidimą</button>
                    :
                    <GuessForm guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
                }
            </Wrapper>
        </main>
    )
}