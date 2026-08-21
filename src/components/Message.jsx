export default function Message({type, msg}){
    //Composant qui permet d'afficher un message pour communiquer avec l'user
    //Si action reussie  => message affiché en vert
    //Si action en cours => message affiché en bleu
    //Si erreur => message affiché en rouge

    return (
        <p className={type + '-msg'}>{msg}</p>
    )
}