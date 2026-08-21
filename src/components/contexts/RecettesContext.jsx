import { createContext, useState, useEffect, useContext } from "react";

export const RecettesContext = createContext();
//Composant context gérant les données et la logique liée aux recette. 
//Le provider contient :  le state qui passera les données du fetch du JSON,

export default function RecettesProvider({children}){

    //Le state pour la liste des recettes
    const [recettes, setRecettes]= useState([]);
    
    //hook useEffect avec dépendance vide pour qu'il ne soit utilisé qu'une fois lors du montage (sauf en dev)
    useEffect(()=>{
        fetch("/data/recettes.json")
        .then(rep=>{return rep.json()})
        .then(recettes=>{
            console.log(recettes);
            //utilisation du setters pour l'enregistrer dans le state
            setRecettes(recettes);
        })
        .catch(error=>{
            console.log(error);
        })
    },[]);


    return(
        <RecettesContext.Provider value={{recettes}}>
            {children}
        </RecettesContext.Provider>
    )
};

//hook perso
export function useRecettes(){
    return useContext(RecettesContext);
}