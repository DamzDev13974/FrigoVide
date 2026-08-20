export default function Accueil(){
//Composant retournant la page d'accueil avec le frigo et le bouton permettant de démarrer l'ajout des ingrédients pour la recherche
//Utilise le composant : Button


    return (
        <div className="home-page">
            <h1 className="primary-title">Frigo Vide</h1>
            <img src="/img/frigo.png" alt="logo de l'application Frigo Vide" />
            <p>Cette application vous aide à mieux manger en utilisant les <span>restes</span> et evitant le <span>gaspillage</span>le plus possible !</p>
            <a href="" aria-label="Lien vers le formulaire pour démarrer la recherche de recette" title="Lien vers le formulaire pour démarrer la recherche de recette">Qu'il y a t'il dans le frigo ?</a>
        </div>
    )
}