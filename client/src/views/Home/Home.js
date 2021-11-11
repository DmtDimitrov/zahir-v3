export default function Home() {
    return (
        <section id="home" className="slider" data-stellar-background-ratio="0.5">
            <div className="row">

                <div className="owl-carousel owl-theme">
                    <div className="item item-first">
                        <div className="caption">
                            <div className="container">
                                <div className="col-md-8 col-sm-12">
                                    <h3>Eatery Cafe &amp; Restaurant</h3>
                                    <h1>Our mission is to provide an unforgettable experience</h1>
                                    <a href="#team" className="section-btn btn btn-default smoothScroll">Meet our chef</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item item-second">
                        <div className="caption">
                            <div className="container">
                                <div className="col-md-8 col-sm-12">
                                    <h3>Your Perfect Breakfast</h3>
                                    <h1>The best dinning quality can be here too!</h1>
                                    <a href="#menu" className="section-btn btn btn-default smoothScroll">Discover menu</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item item-third">
                        <div className="caption">
                            <div className="container">
                                <div className="col-md-8 col-sm-12">
                                    <h3>New Restaurant in Town</h3>
                                    <h1>Enjoy our special menus every Sunday and Friday</h1>
                                    <a href="#contact" className="section-btn btn btn-default smoothScroll">Reservation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}