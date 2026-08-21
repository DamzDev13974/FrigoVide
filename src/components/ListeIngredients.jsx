import { useRecettes } from "./contexts/RecettesContext"
import { useState } from "react";

export default function ListeIngredients(){
    //Composant chargé d’afficher les ingrédients déjà ajoutés par l’utilisateur. Chaque ingrédient sera affiché dans une liste et pourra être supprimé.

    //Recup de la liste depuis le hook perso Recette
    const {ingredientsFrigo}= useRecettes();


    return(
        <div className="liste-ingredients">
            <ul>
                {ingredientsFrigo.map((ingredient)=>{
                    return(
                        <li key={ingredient}>{ingredient}</li>
                    )
                })}

            </ul>
        </div>
    )
}