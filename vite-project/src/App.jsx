import './index.scss'

function Header() {
    return (
        <nav className='header'>
            <img className='react-logo' src='src/assets/react.svg'></img>
            <ul className="nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
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
