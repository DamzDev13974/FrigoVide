import { useRecettes } from "./contexts/RecettesContext"
import { useState,useEffect } from "react";
import Message from "./Message";
import { Link } from "react-router";

export default function ListeIngredients(){
    //Composant chargé d’afficher les ingrédients déjà ajoutés par l’utilisateur. Chaque ingrédient sera affiché dans une liste et pourra être supprimé.

    //Recup de la liste depuis le hook perso Recette
    const {ingredientsFrigo, supprimerIngredient, rechercherRecette}= useRecettes();
    //states nécessaires pour les props de message
    const [msg, setMsg]= useState("");
    const [typeMsg, setTypemsg] = useState("");

    //useEffect pour que le timer se déclenche lorsque le message change 
    useEffect(() => {
        if (msg) {
            const timer = setTimeout(() => {
                setMsg("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [msg]);//dépendence qui déclenche l'effect

    return(
        <div className="liste-ingredients">
            {msg && (
                <Message type={typeMsg} msg={msg}/>
            )}
            <ul>
                {ingredientsFrigo.map((ingredient)=>{
                    return(
                        <li key={ingredient}>
                            {ingredient}
                            <button onClick={()=>{
                                supprimerIngredient(ingredient);
                                setTypemsg("ok");
                                setMsg("L'ingredient : " + ingredient + " a été supprimé de la liste");
                            }}>X</button>
                        </li>
                    )
                })}
            </ul>
            <Link to="/recettes" onClick={()=>rechercherRecette(ingredientsFrigo)}>Go</Link>
        </div>
    )
}