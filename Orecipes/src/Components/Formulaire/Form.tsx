import { Button } from "react-bootstrap";
import axios, { AxiosError } from 'axios';
import { useEffect } from "react";

interface FormProps {
    setUserMessage: React.Dispatch<React.SetStateAction<string>>;
    setFetchError: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ setUserMessage, setFetchError }: FormProps) {

    // récupération des datas du fomulaire

    const checkUserCredentials = async (credentials: {}) => {
        try {
            const httpResponse = await fetch('https://orecipesapi.onrender.com/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials)
            })
            const data = await httpResponse.json()
            console.log("data = ", data)
            if (data.logged) {
                return data.pseudo
            } else {
                return ("user not authorized")
            }

        } catch (e) {
            if (e instanceof AxiosError) {
                console.log(e.message);
                setFetchError(e.message)
            }
        }
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const data = new FormData(form)
        const courriel = data.get('email')
        const mdp = data.get('mdp')
        const credentials = {
            email: courriel,
            password: mdp
        }
        console.log("data récupérées : ", courriel, mdp)
        const message = await checkUserCredentials(credentials)
        console.log("le message est :", message)
        setUserMessage(message)
    }

    return (
        <div id="header">
            <header>
                <form onSubmit={handleSubmit}>
                    <img src="../front_docs/logo.png" alt="logo Orecipes" className='logo' />
                    <input type="text" name="email" placeholder='Adresse email' value="bob@mail.io" />
                    <input type="text" name="mdp" placeholder='Mot de passe' value="bobo" />
                    <Button variant="primary" type="submit" >OK</Button>
                </form>
            </header>
        </div>
    )
}