export function Lazycloud(){
    return(
        <>
            <div className="hero hero-single route bg-image" style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">Lazycloud</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Lazycloud sync app</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle" style={{"marginTop":"1em"}}>
                <div className="container">
                    <div className="alert alert-primary" role="alert">
                        <p><strong>IMPORTANT</strong></p>
                        <p className="text-justify">This page is a draft. It will be released soon.</p>
                    </div>
                </div>
            </div>
        </>
    )
}