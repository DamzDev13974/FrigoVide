import { useRecettes } from "../contexts/RecettesContext";
import NavBottom from "../NavBottom";

export default function PageRecettes(){
    //Composant retournant la page des recettes trouvées via la recherche filtrée par les ingrédients ajoutés par l'user
    //Utilise le composant CardRecette et NavBottom

    const {recettes} = useRecettes();
    
    return(
        <div className="recettes-page">
            {recettes.map((recette)=>{
                return(
                    <div key={recette.id}>
                        <p>{recette.nom}</p>
                        {recette.ingredients.map((ingredient)=>{
                            return(
                                <p key={ingredient.nom}>
                                    {ingredient.illustration}
                                </p>
                            )
                        })}
                    </div>
                    
                )
            })}
            <NavBottom/>
        </div>
    )
}