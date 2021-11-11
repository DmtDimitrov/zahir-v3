import ViewTitle from '../../components/Layout/ViewTitle';
import './About.css';



export default function About() {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <div className="about-info">

                            <ViewTitle
                                title="About Us"
                            />

                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <h4>Our motto is also our name, namely "Zahir - something we have touched or seen once and can never forget again, filling our thoughts to such an extent that it drives us crazy."</h4>
                                <p>We are a small cozy confectionery in the heart of Sofia, where you can try our handmade sweet and savory creations, created with a lot of love and attention to the smallest detail. The recipes we use are very carefully selected, some of them inspired by our grandmothers, others original, but all inspired by the aromas around us, flavors, tastes, travels, memories and meetings…</p>
                                <p>We make everything from start to finish, only with carefully selected raw materials, without any imitation products and enhancers… We prepare our products the way we would for our family, because we hold on to quality and believe that in order to convey your idea, you should all feel at home from the first bite !</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                            <img src="/images/about-zahir-interior.jpg" className="img-responsive" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}