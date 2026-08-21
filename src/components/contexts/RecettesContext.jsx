import { createContext, useState, useEffect, useContext } from "react";

export const RecettesContext = createContext();
//Composant context gérant les données et la logique liée aux recette. 
//Le provider contient :  le state qui passera les données du fetch du JSON, la fonction pour ajouter un ingredient à la liste et une autre pour supprimer 

export default function RecettesProvider({children}){

    //Le state pour la liste des recettes
    const [recettes, setRecettes]= useState([]);
    //celui pour les ingrédient du frigo ajoutés qui serviront à la recherche
    const [ingredientsFrigo, setIngredientsFrigo] = useState([]);
    
    //hook useEffect avec dépendance vide pour qu'il ne soit utilisé qu'une fois lors du montage (sauf en dev)
    useEffect(()=>{
        fetch("/data/recettes.json")
        .then(rep=>{return rep.json()})
        .then(recettes=>{
            console.log(recettes);
            setRecettes(recettes);
        })
        .catch(error=>{
            console.log(error);
        })
    },[]);

    
    function ajouterIngredient(ingredient){
        //ajouter un ingredient à la liste ingredientsFrigo(un ajout possible par ingredient)
        //param : l'ingredient à ajouter
        if(!ingredientsFrigo.includes(ingredient)){
            setIngredientsFrigo([...ingredientsFrigo,ingredient]);
        }
    }


    return(
        <RecettesContext.Provider value={{recettes,ingredientsFrigo, ajouterIngredient}}>
            {children}
        </RecettesContext.Provider>
    )
};

//hook perso à transmettre aux composant qui en ont besoin
export function useRecettes(){
    return useContext(RecettesContext);
}