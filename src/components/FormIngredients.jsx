import { useState, useEffect } from "react"
import { useRecettes } from "./contexts/RecettesContext";
import Message from "./Message";

export default function FormIngredients(){
    //Composant contenant le formulaire permettant à l’user d’ajouter un ingrédient présent dans son frigo. L’ingrédient ajouté sera ensuite enregistré dans la liste des ingrédients recherchés


    //state de l'ingredient à ajouter
    const [ingredient, setIngredient] = useState("");
    //import des values nécessaires depuis le hook Recette
    const {ingredientsFrigo,ajouterIngredient} =useRecettes();
    //states nécessaires pour les props de message
    const [msg, setMsg]= useState("");
    const [typeMsg, setTypemsg] = useState("");

    
    function lockSubmit(e){
        //fonction qui bloque l'envoi du formulaire, l'ajoute l'ingredient à la liste et reset le state d'ingredient
        //paramétre : l'evenement déclenché par l'écouteur
        e.preventDefault()
        //Verif si ingredient déjà ajouté
        if(ingredientsFrigo.includes(ingredient.trim())){
            setMsg("l'ingredient : "+ ingredient +" est déjà dans la liste")
            setTypemsg("echec");
            return;
        }
        //verif si ingredient saisi est vide
        if(ingredient.trim === ""){
            setMsg("pas d'ingredient saisi")
            setTypemsg("echec");
            return;
        }
        ajouterIngredient(ingredient.trim());
        setMsg("L'ingredient : " +ingredient + " a été ajouté à la liste")
        setTypemsg("ok");
        setIngredient("");
    }

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
        <div className="add-ingredients">
            {msg && (
                <Message type={typeMsg} msg={msg}/>
            )}
            <form action="" onSubmit={lockSubmit}>
                <input type="text" name="ingredients" id="ingredient" onChange={(e)=>setIngredient(e.target.value)} value={ingredient} placeholder="Un seul ajout par ingredient" />
                <button type="submit">Ajouter l'ingredient</button>
            </form>
        </div>
    )
}