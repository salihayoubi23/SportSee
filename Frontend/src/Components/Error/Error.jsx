export default function Error({ buttonMock }){

    return(
        <div className="error">
            <h2 className="error__title">404 Not Found</h2>
            <p className="error__text">L'utilisateur que vous cherchez n'existe pas</p>
            <button onClick={buttonMock} className="error__link">Utilisez les données simulées ?</button>
        </div>
    )
}