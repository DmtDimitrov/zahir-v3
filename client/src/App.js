import Preloader from './components/Layout/Preloader';
import Navbar from './components/Layout/Navigation/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ChefsView from './pages/Chefs/Chefs';
import RecipesCatalog from './pages/Recipes/RecipesCatalog/RecipesCatalog';
import Reviews from './pages/Reviews/Reviews';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRecipe from './pages/Recipes/CreateRecipe/CreateRecipe';
import Details from './pages/Recipes/RecipeDetails/RecipeDetails';

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
