import { getHeroesByPublisher } from "../helpers"
import { HeroList } from "./HeroList";

export const DcPage = () => {

    return (
        <>
            <h1>Hola desde DCPage</h1>
            <HeroList publisher={'DC Comics'}/>
        </>
    )
}