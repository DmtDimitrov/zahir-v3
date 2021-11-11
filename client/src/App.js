import Preloader from './components/Layout/Preloader';
import Navbar from './components/Layout/Navigation/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import ChefsView from './views/Chefs/Chefs';
import RecipesCatalog from './views/Recipes/RecipesCatalog/RecipesCatalog';
import Reviews from './views/Reviews/Reviews';
import Contact from './views/Contact/Contact';
import Footer from './views/Home/Footer';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import CreateRecipe from './views/Recipes/CreateRecipe/CreateRecipe';
import Details from './views/Recipes/RecipeDetails/Details';

function App() {
    return (
        <div className="App">

            <Preloader />

            <Navbar />

            <Home />

            <About />

            <ChefsView />

            <RecipesCatalog />

            <Details
                chef="Tsvetomira Kissyova"
                title="Raspberry Velvet"
                description="Raspberries / Mascarpone"
                imageUrl="/images/raspberry-velvet3.jpg"
            />

            <Reviews />

            <Contact />

            <Login />

            <Register />

            <CreateRecipe />

            <Footer />

        </div>

    );
}

export default App;
