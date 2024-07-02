import Header from "./components/Header";
import {ways} from "./data.js";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button.jsx";


function App() {
    return (
        <div>
            <Header/>
            <main>
            <section>
                <h1>Hello React</h1>
                <ul>
                    {ways.map(way => (
                        <WayToTeach key={way.title} title={way.title} description={way.description} />
                    ))}
                    {/*<WayToTeach title={} description={}/>*/}
                </ul>
            </section>
            <section>
                <h3></h3>
                <Button/>
            </section>
        </main>
        </div>
    )
}

export default App
