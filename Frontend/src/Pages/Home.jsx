// Importation du composant Link depuis react-router-dom
import { Link } from 'react-router-dom';

// Importation de l'image du logo depuis le répertoire Assets
import Logo from '../Assets/logo.png';

// Définition du composant Home
function Home() {
  return (
    // Début du conteneur principal avec la classe "home"
    <div className="home">
      {/* Section pour afficher le logo */}
      <div className='home__logo'>
        {/* Balise img pour afficher le logo avec la classe "home__logo__img" */}
        <img
          className='home__logo__img'
          src={Logo}  // Utilisation de l'image importée
          alt="Logo" // Texte alternatif pour l'accessibilité
        />
      </div>

      {/* Section contenant le titre et les liens vers les utilisateurs */}
      <div className='home__box'>
        {/* Titre */}
        <h2 className='home__box__title'>Select user to begin</h2>

        {/* Liens vers les pages des utilisateurs avec des paramètres dans les URL */}
        <Link className='home__box__link' to={"user/18"}>User 18 Cecilia</Link>
        <Link className='home__box__link' to={"user/12"}>User 12 Karl</Link>
      </div>
    </div> // Fin du conteneur principal
  );
}

// Exportation du composant Home comme composant par défaut
export default Home;
