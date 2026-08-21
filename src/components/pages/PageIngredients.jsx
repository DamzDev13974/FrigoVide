import FormIngredients from "../FormIngredients";
import ListeIngredients from "../ListeIngredients";
import NavBottom from "../NavBottom";

export default function PageIngredients(){
    //Composant retournant la page permettant de rajouter/enlever des ingrédients à la liste de recherche filtrée pour les recettes 
    //Utilise les composants : FormIngredients, ListeIngredients,Message et NavBottom
    

    return(
        <div className="ingredients-page">
           <h2>Ajouter vos ingrédients</h2>
            <FormIngredients/>
            <ListeIngredients/>
            <NavBottom/>
        </div>
    )
}