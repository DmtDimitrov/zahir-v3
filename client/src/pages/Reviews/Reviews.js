import ViewTitle from '../../components/Layout/ViewTitle';
import './Reviews.css';

export default function Reviews() {
    return (
        <section id="testimonial" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">

                    <ViewTitle
                        title="Reviews"
                    />


                    <div className="col-md-offset-2 col-md-8 col-sm-12">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum ullamcorper nulla non.</p>
                                <div className="tst-author">
                                    <h4>Digital Carlson</h4>
                                    <span>Pharetra quam sit amet</span>
                                </div>
                            </div>

                            <div className="item">
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam.</p>
                                <div className="tst-author">
                                    <h4>Johnny Stephen</h4>
                                    <span>Magna nisi porta ligula</span>
                                </div>
                            </div>

                            <div className="item">
                                <p>Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta quis dui elit habitant morbi.</p>
                                <div className="tst-author">
                                    <h4>Jessie White</h4>
                                    <span>Vitae lacinia augue urna quis</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}