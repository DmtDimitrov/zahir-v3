export default function ViewTitle({
    title,
    subtitle,
}) {
    return (
        <div className="col-md-12 col-sm-12">
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>{title}</h2>
                {subtitle && <h4>{subtitle}</h4>}
            </div>
        </div>
    );
}