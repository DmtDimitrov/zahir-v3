export default function Navbar() {
    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>

                    <a href="index.html" className="navbar-brand">Zahir <span>.</span> Recipes</a>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-nav-first">
                        <li><a href="#home" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About</a></li>
                        <li><a href="#team" className="smoothScroll">Chef</a></li>
                        <li><a href="#menu" className="smoothScroll">Recipes</a></li>
                        <li><a href="#contact" className="smoothScroll">Contact</a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#login" className="smoothScroll">Login</a></li>
                        <li><a href="#register" className="smoothScroll">Register</a></li>
                        <li><a href="#logout" className="smoothScroll">Logout</a></li>
                        <a href="#create-recipe" className="section-btn">Create а recipe</a>
                    </ul>
                </div>

            </div>
        </section>
    );
}