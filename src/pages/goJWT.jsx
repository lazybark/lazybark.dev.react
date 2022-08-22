export function GoJWT(){
    return(
        <>
            <div className="hero hero-single route bg-image" style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">GO JWT AUTH</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">JWT auth service</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle" style={{"marginTop":"1em"}}>
                <section id="general_idea" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-9">
                                <h2>Description</h2>
                                <div className="alert alert-primary" role="alert">
                                    <p><strong>IMPORTANT</strong></p>
                                    <p className="text-justify">This page is a draft. It will be released soon.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="portfolio-info bs island-block">
                                    <h3>Package info</h3>
                                    <ul>
                                        <li><strong>Language</strong>: Go</li>
                                        <li><strong>Repository</strong>: <a className="anc-link"
                                                                            href="https://github.com/lazybark/go-jwt">GitHub <i
                                            className="bi bi-github"></i></a></li>
                                        <li><strong>Current version</strong>: v1.0.0</li>
                                        <hr />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}