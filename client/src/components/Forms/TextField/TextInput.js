export default function TextInput({
    type,
    inputClassName,
    id,
    name,
    placeholder
}) {
    // useEffect(() => {
    //     console.log((`${headingId} - mounted`));
    //     return () => {
    //         console.log(`${headingId} - unmounted`);
    //     }
    // }, []);
    return (

        <input type={type} className={inputClassName} id={id} name={name} placeholder={placeholder} />

    );
}