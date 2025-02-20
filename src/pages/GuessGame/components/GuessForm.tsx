import React, {SetStateAction} from "react";
import Label from "../../../components/Label.tsx";
import Input from "../../../components/Input.tsx";

interface GuessFormInterface {
    guess: number | undefined;
    setGuess: React.Dispatch<SetStateAction<number | undefined>>
    handleGuess: (e: React.FormEvent) => void;
}
export default function GuessForm({guess, setGuess, handleGuess} : GuessFormInterface) {
    return (
        <form onSubmit={handleGuess} className={"form"}>
            <Label text={"Spėjamasis skaičius"} required={true} id={"guess"} />
            <Input type={"number"} id={"guess"} className={"form__input"} name={"guess"} value={String(guess)} onChange={(e) => setGuess(Number(e.target.value))} />
            <button type={"submit"} className={"style-button form__button"}>Spėti</button>
        </form>
    )
}