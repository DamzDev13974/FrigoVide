import NavBottom from "../NavBottom";

export default function PageFavoris(){
    //Composant retournant la page des recettes mise en favoris
    //Utilise le composant CardRecette et NavBottom
    
    return(
        <div className="favoris-page">
            <p>test routage vers page favoris</p>
            <NavBottom/>
        </div>
    )
}