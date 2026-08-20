import NavBottom from "../NavBottom";

export default function PageRecettes(){
    //Composant retournant la page des recettes trouvées via la recherche filtrée par les ingrédients ajoutés par l'user
    //Utilise le composant CardRecette et NavBottom

    return(
        <div className="recettes-page">
            <p>test routage vers la page Recettes</p>
            <NavBottom/>
        </div>
    )
}