import './RecipeDetails.css';

export default function Details({
    chef,
    title,
    description,
    imageUrl
}) {
    return (
        <section id="details" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-6">
                        <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                            <img src={imageUrl} className="img-responsive" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="details-info">
                            <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                                <h4>Recipe Name</h4>
                                <h2>{title}</h2>
                                <a className="wow fadeInUp" href="">By {chef}</a>
                            </div>

                            <div className="wow fadeInUp" data-wow-delay="0.4s">

                                <div className="details-btn">

                                    <a href="#edit-recipe" className="section-btn">Edit</a>
                                    <a href="#delete-recipe" className="section-btn">Delete</a>
                                </div>




                                <h4>Something</h4>
                                <p>Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac, posuere tristique magna. You can use this template for your cafe or restaurant website. Please tell your friends about <a href="https://plus.google.com/+templatemo" target="_parent">templatemo</a>. Thank you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="details-info">


                            <div className="wow fadeInUp" data-wow-delay="0.4s">

                                <h4>Ingredients</h4>
                                <div className="col-md-5 col-sm-5">
                                    <input type="text" className="form-control" id="crf-ingredient" name="ingredient:0" placeholder="Ingredient Name" />
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <input type="text" className="form-control" id="crf-unit" name="unit" placeholder="Unit" />
                                </div>

                                <div className="col-md-3 col-sm-3">
                                    <input type="text" className="form-control" id="crf-quantity" name="quantity:0" placeholder="Quantity" />
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="details-info">


                            <div className="wow fadeInUp" data-wow-delay="0.4s">


                                <h4>Method</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi non ullam quis doloremque tempora? Alias, reiciendis totam repellendus minus facilis, a voluptate cupiditate, consectetur ea eveniet est ad ipsam consequuntur vitae? Quis error ipsam, dolorum rerum et officia laboriosam in sed quaerat esse quidem illum temporibus nemo? Molestias, minus. Doloremque.</p>
                                <p>Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac, posuere tristique magna. You can use this template for your cafe or restaurant website. Please tell your friends about <a href="https://plus.google.com/+templatemo" target="_parent">templatemo</a>. Thank you.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}