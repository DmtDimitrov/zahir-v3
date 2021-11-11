export default function Button({
    type,
    className,
    id,
    name,
    text,
    onClick
}) {

    return (

        <button onClick={() => onClick} type={type} className={className} id={id} name={name}>{text}</button>

    );
}