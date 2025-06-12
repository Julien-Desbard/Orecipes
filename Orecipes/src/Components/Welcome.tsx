import type userMessageI from './@Types/recipe'


export default function Welcome({userMessage} : userMessageI) {
    return (
        <div id="header">
            <header>
                <img src="../front_docs/logo.png" alt="logo Orecipes" className='logo' />
                <p>Welcome {userMessage}</p>
            </header>
        </div>
    )
}