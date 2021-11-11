import ViewTitle from '../../components/Layout/ViewTitle';


export default function Login() {
    return (
        <section id="login" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">

                        <ViewTitle
                            title="Login"
                        />


                        <form action="#" method="post" className="wow fadeInUp" id="login-form" role="form" data-wow-delay="0.8s">

                            <div className="col-md-12 col-sm-12">
                                <input type="email" className="form-control" id="lf-email" name="email" placeholder="Email address" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="password" className="form-control" id="lf-password" name="password" placeholder="Password" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <button type="submit" className="form-control" id="lf-submit" name="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}