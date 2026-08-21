import NavBottom from "../NavBottom";

export default function PageDetailRecette(){
    //Composant retournant les détails de la recette sélectionnée et le bouton pour l'ajouter aux favoris
    //Utilise les composants : CardRecette et NavBottom

    return(
        <div className="detail-page">
            <p>test routage vers page détails</p>
            <NavBottom/>
        </div>
    )
}