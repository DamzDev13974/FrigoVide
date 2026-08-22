import { Link } from "react-router";
import CardRecette from "../CardRecette";
import { useRecettes } from "../contexts/RecettesContext";
import Message from "../Message";
import NavBottom from "../NavBottom";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function PageRecettes(){
    //Composant retournant la page des recettes trouvées via la recherche filtrée par les ingrédients ajoutés par l'user


    const {recettesTrouvees, rechercheLancee, ingredientsFrigo} = useRecettes();
    
    return(
        <div className="recettes-page">
            <div className="top-page">
                <Link to="/ingredients">
                    <ArrowLeftIcon size={32} />
                </Link>
                <h2 className="secondary-title">Recettes suggérées</h2>
            </div>
            
            {/*Si pas de recherche  */}
            {!rechercheLancee &&(
                <Message type="info" msg="Veuillez lancer une recherche via la page d'accueil en ajoutant des ingrédients"/>
                )
            }

            {/* Si aucun resultat de recherche */}
            {rechercheLancee && recettesTrouvees.length===0 &&(
                <Message type="echec" msg={"Aucune recette trouvée avec ces ingrédients : "+ ingredientsFrigo}/>
            )}


            {/* Si au moin un resultat */}
            {recettesTrouvees.map((recette)=>{
                return(
                    <CardRecette key={recette.id} recette={recette}/>
                )
            })}
            <NavBottom/>
        </div>
    )
}