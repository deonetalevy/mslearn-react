import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import StepList from './StepList';

function App() {
    const recipe = {
        title: 'Mashed Potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { name: 'Add cut potatoes to a pot of heavily salted water.'},
            { name: 'Bring pot to a boil.' },
            { name: 'Boil the potatoes until fork tender, about 15-20 minutes.' },
            { name: 'Strain the potatoes.' },
            { name: 'Return potatoes to pot.' },
            { name: 'Add butter, cream, salt, and pepper to taste.' },
            { name: 'Mash potatoes.' },
            { name: 'Reseason and add butter and cream as desired.' },
        ],
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />

            {/* IngredientList component */}
            <IngredientList ingredients={recipe.ingredients}/>

            {/* Steps component */}
            <StepList steps={ recipe.steps} title={ recipe.title + ' Recipe Steps'}
            />

        </article>
    )
}

export default App;
