import Nav from './components/Navigation'
import './index.scss'

function Header() {
    return (
        <Nav />
    )
}

function Main() {
    return(
        <main>
            <div className="react-facts">
                <div className="header">
                    <h1>Fun facts about React</h1>
                </div>
                <div className="body">
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Meta</li>
                        <li>Powers thousands of enterprise apps, inclusing mobile apps</li>
                </ul>
                </div>
                
            </div>
        </main>
    )
}

export function Page() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
