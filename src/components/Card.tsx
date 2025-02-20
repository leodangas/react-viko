interface CardInterface {
    heading: string;
}
export default function Card({heading} : CardInterface) {
    return (
        <div className={"component-card"}>
            <div className={"component-card__heading"}>{heading}</div>
        </div>
    )
}