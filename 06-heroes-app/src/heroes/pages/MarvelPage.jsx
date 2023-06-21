import { getHeroesByPublisher } from "../helpers"
import { HeroList } from "./HeroList";

export const MarvelPage = () => {

    return (
        <>
            <h1>Hola desde MarvelPage</h1>
            <HeroList publisher={'Marvel Comics'}/>
        </>
    )
}