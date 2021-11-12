export default function Recipe({
    title,
    description,
    imageUrl
}) {
    return (
        <div className="col-md-4 col-sm-6">

            <div className="recipes-thumb">
                <a href={imageUrl} className="image-popup" title={title}>
                    <img src={imageUrl} className="img-responsive" alt="" />

                    <div className="recipes-info">
                        <div className="recipes-item">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}