interface ErrorMessageInterface {
    error: string;
}
export default function ErrorMessage({error} : ErrorMessageInterface) {
    return (
        <>
            {error ? <div className={"component-errorMessage"}>{error}</div> : null}
        </>
    )
}