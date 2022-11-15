
function Error(){
    return (
        <main className='errorMain'>
            <h1 className='errorTitle'>404</h1>
            <h2 className='errorSubstitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <a className='errorLink' href="/">Retourner sur la page d’accueil</a>
        </main>
    )
}

export default Error;