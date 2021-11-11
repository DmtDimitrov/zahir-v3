import ViewTitle from '../../components/Layout/ViewTitle';
import './Register.css';



export default function Register() {
    return (
        <section id="register" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">

                        <ViewTitle
                            title="Register"
                        />


                        <form action="#" method="post" className="wow fadeInUp" id="register-form" role="form" data-wow-delay="0.8s">

                            <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" id="rf-first-name" name="firstName" placeholder="First Name" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" id="rf-last-name" name="lastName" placeholder="Last Name" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="email" className="form-control" id="rf-email" name="email" placeholder="Email address" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="password" className="form-control" id="rf-password" name="password" placeholder="Password" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="password" className="form-control" id="rf-repeat-password" name="password" placeholder="Repeat Password" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <button type="submit" className="form-control" id="rf-submit" name="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}