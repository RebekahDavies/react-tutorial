import {createRoot} from 'react-dom/client';

export function Header() {
    return (
        <section>
            <img src='src/assets/react.svg' width='40px'></img>
        </section>
    )
}

export function Main() {
    return(
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, inclusing mobile apps</li>
            </ul>
        </main>
    )
}
