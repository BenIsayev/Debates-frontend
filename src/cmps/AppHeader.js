import { NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="header-container">

                <div className="logo">
                    <h1>
                        Debates
                    </h1>
                </div>
                <nav className="main-nav">
                    <ul className="clean-list">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/debate">Debates</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default AppHeader