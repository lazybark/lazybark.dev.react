export function NotFound(){
    return(
        <>
            <div className="hero hero-single route bg-image" style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">Not found</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle" style={{"marginTop":"1em"}}>
                <div className="container">
                    <div className="alert alert-danger" role="alert">
                        <p><strong>404</strong></p>
                        <p>No such page :(</p>
                    </div>
                </div>
            </div>
        </>
    )
}