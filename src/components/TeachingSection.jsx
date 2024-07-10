import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
    return (
        <section>
            <h1>Hello React</h1>
            <ul>
                {ways.map(way => (
                    <WayToTeach key={way.title} title={way.title} description={way.description}/>
                ))}
            </ul>
        </section>
    )
}