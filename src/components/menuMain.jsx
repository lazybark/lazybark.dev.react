export function MenuMain(){
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><a href="/">Lazybark.dev</a></h1>
                    <h2 className="logo"><a target="_blank" href="https://t.me/lazybark" className="facebook"><i
                        className="bx bxl-telegram"></i></a></h2>
                    <h2 className="logo"><a target="_blank" href="https://github.com/lazybark"
                                            className="google-plus"><i className="bx bxl-github"></i></a></h2>
                    <h2 className="logo"><a target="_blank" href="https://www.linkedin.com/in/lazybark/"
                                            className="linkedin"><i className="bx bxl-linkedin"></i></a></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                        <ul className="navbar-nav nav-main-list">
                            <li className="nav-item color-white">
                                <a className="nav-link color-white" aria-current="page" href="/#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/#interested">INTERESTED</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/#work">WORKS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/lazyevent/">LAZYEVENT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/lazycloud-sync-app/">LAZYCLOUD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-white" href="/go-helpers">GO HELPERS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle color-white" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    OTHER PROJECTS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/sync-apps-protocol">Sync protocol</a></li>
                                    <li><a className="dropdown-item" href="/go-jwt">Go JWT-auth</a></li>
                                    <li><a className="dropdown-item" href="/go-tls-client-server">Go tls client & server lib</a></li>
                                    <li><a className="dropdown-item" href="/go-cert-generator">PEM cert generator</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}