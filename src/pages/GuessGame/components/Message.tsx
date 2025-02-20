import {MessageInterface} from "../GuessGame.tsx";

interface MessagePropsInterface {
    message: MessageInterface
}
export default function Message({message} : MessagePropsInterface) {
    return (
        <>
            {message.text ?
                <div className={`message ${message.correct ? 'correct': ''}`}>{message.text}</div>
                : null
            }
        </>
    )
}