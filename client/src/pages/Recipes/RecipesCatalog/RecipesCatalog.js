import { useState, useEffect } from 'react';

import './RecipesCatalog.css';
import Recipe from './components/Recipe';
import recipes from '../../../db/recipes';


export default function RecipesCatalog() {

    const [recipeState, setRecipe] = useState(recipes);

    useEffect(() => { }, []);

    let recipesElements = recipeState.map(x => {
        return <Recipe
            key={x.id}
            title={x.title}
            description={x.description}
            imageUrl={x.imageUrl}
        />;
    })

    return (
        <section id="recipes" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                            <h2>Recipes</h2>
                            <h4>Sweet &amp; More</h4>
                            <form action="#" method="post" className="wow fadeInUp" id="search-recipe-form" role="form" data-wow-delay="0.8s">

                                <div className="col-md-6 col-sm-6">
                                    <input type="text" className="form-control" id="search-recipes-input" name="search-recipes" placeholder="Search for Recipe" />
                                </div>

                                <div className="col-md-1 col-sm-1">
                                    <button type="submit" className="form-control" id="rf-submit" name="search-recipes">Search</button>
                                </div>


                            </form>
                        </div>
                    </div>

                    {recipesElements}

                    {/* {recipes.map(x => {
                        return <Recipe
                            title={x.title}
                            description={x.description}
                            imageUrl={x.imageUrl}
                        />;
                    })} */}




                </div>
            </div>
        </section>
    );
}