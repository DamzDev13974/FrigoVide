import { createContext, useState, useEffect, useContext } from "react";

export const RecettesContext = createContext();
//Composant context gérant les données et la logique liée aux recette. 
//Le provider contient :  le state qui passera les données du fetch du JSON, la fonction pour ajouter un ingredient à la liste et une autre pour supprimer, le state booleen pour indiquer qu'une recheche est lancée

export default function RecettesProvider({children}){

    //Le state pour la liste des recettes
    const [recettes, setRecettes]= useState([]);
    //celui pour les ingrédient du frigo ajoutés qui serviront à la recherche
    const [ingredientsFrigo, setIngredientsFrigo] = useState([]);
    //celui pour les recettes trouvées
    const [recettesTrouvees, setRecetteTrouvee] = useState([]);
    //le booleen pour indiquer qu'une recherche a été lancée
    const [rechercheLancee, setRechercheLancee] = useState(false);
    
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

    function supprimerIngredient(ingredientASupp){
        //supprimer un ingredient de la liste ingredientFrigo
        //param : l'ingredient à supprimmer

        //Je crée un nouveau tableau vide, je parcours la liste des ingredients et ajoute dans le nouveau tableau,tout ingredient différent de celui à supp
        let nouveauTab =[]
        ingredientsFrigo.forEach((ingredient)=>{
            if(ingredient !== ingredientASupp){
                nouveauTab.push(ingredient);
            }
        });
        //je set ingredientsFrigo avec les données du nouveauTab
        setIngredientsFrigo(nouveauTab);
    }

    function rechercherRecette(ingredientsFrigo){
        //Chercher parmis la liste des recettes, les recettes contenant au moins un ingredients de la liste indiquée par l'user
        //param: la liste des ingrédients ajoutés par l'user

        //Je crée un nouveau tableau resultat, je parcous la liste de recettes dispo et ajoute toutes recettes ayant pour ingredients, un présent dans ingredientsFrigo
        const resultat = recettes.filter((recette) =>{
            return recette.ingredients.some((ingredientRecette) =>{
                return ingredientsFrigo.some((ingredientFrigo)=>{
                    return ingredientRecette.nom.toLowerCase().includes(ingredientFrigo.toLowerCase())
                });
            });
        });

        //Je set recetteTrouvees avec les données du tableau résultat
        setRecetteTrouvee(resultat);
        //J'indique qu'une recherche a été lancée
        setRechercheLancee(true);
    }


    return(
        <RecettesContext.Provider value={{recettes,ingredientsFrigo, ajouterIngredient, supprimerIngredient, rechercherRecette, recettesTrouvees, rechercheLancee}}>
            {children}
        </RecettesContext.Provider>
    )
};

//hook perso à transmettre aux composant qui en ont besoin
export function useRecettes(){
    return useContext(RecettesContext);
}