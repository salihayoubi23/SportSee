// Import du logo depuis le répertoire des ressources
import Logo from '../../Assets/logo.png';

// Import du composant Link depuis react-router-dom pour la navigation
import { Link } from 'react-router-dom';

// Composant fonctionnel Header
export default function Header(props) {
    return (
        // Conteneur principal du Header avec la classe 'header'
        <div className='header'>
            {/* Section du logo */}
            <div className='header__logo'>
                {/* Utilisation du composant Link pour créer un lien vers la page utilisateur avec l'ID en paramètre */}
                <Link to={`/user/${props.props}`}>
                    {/* Conteneur de l'image du logo avec la classe 'header__logo__img' */}
                    <div className='header__logo__img'>
                        {/* Image du logo */}
                        <img
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                </Link>
                {/* Nom de l'application */}
                <p className='header__logo__name'>SportSee</p>
            </div>

            {/* Section de la barre de navigation */}
            <div className='header__nav'>
                {/* Liens de navigation */}
                <p className='header__nav__text'>Accueil</p>
                <p className='header__nav__text'>Profil</p>
                <p className='header__nav__text'>Réglages</p>
                <p className='header__nav__text'>Communauté</p>
            </div>
        </div>
    );
}
