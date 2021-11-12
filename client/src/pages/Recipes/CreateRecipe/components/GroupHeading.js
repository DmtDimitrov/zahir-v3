import { useEffect } from "react";

export default function GroupHeading({
    name,
    headingId,
    onDelete
}) {
    useEffect(() => {
        console.log((`${headingId} - mounted`));
        return () => {
            console.log(`${headingId} - unmounted`);
        }
    }, []);
    return (
        <div className="col-md-12 col-sm-12">
            <input type="text" className="form-control" id={headingId} name={name} placeholder="For the cream" />
            <button onClick={() => onDelete(headingId)}>x</button>
        </div>
    );
}