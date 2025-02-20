interface LabelInterface {
    required?: boolean;
    text: string;
    id: string;
}
export default function Label({required, text, id} : LabelInterface) {
    return (
        <label htmlFor={id} className={required ? 'required' : ''}>{text}</label>
    )
}