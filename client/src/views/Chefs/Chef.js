export default function Chef({
    name,
    position,
    description,
    imageUrl
}) {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                <img src={imageUrl} className="img-responsive" alt="" />
                <div className="team-hover">
                    <div className="team-item">
                        <h4>{description}</h4>
                        <ul className="social-icon">
                            <li><a href="#" className="fa fa-linkedin-square"> </a></li>
                            <li><a href="#" className="fa fa-envelope-o"> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="team-info">
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </div>
    );
}