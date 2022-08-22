export function GoTLS(){
    return(
        <>
            <div className="hero hero-single route bg-image" style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">GO CLIENT-SERVER PACKAGE</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">TLS client-server</li>
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
                                        <li><strong>Repositories</strong>: <a className="anc-link"
                                                                              href="https://github.com/lazybark/go-tls-client">Client
                                            GitHub <i className="fa-brands fa-github"></i></a>, <a className="anc-link"
                                                                                            href="https://github.com/lazybark/go-tls-server">Server
                                            GitHub <i className="fa-brands fa-github"></i></a></li>
                                        <li><strong>Client version</strong>: v1.0.1</li>
                                        <li><strong>Server version</strong>: v1.0.3</li>
                                        <hr />
                                            <li><strong>Download latest</strong>:</li>
                                    </ul>
                                    <div className="d-grid gap-2">
                                        <strong>Client</strong>
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/go-tls-client/archive/refs/tags/v1.0.1.zip">ZIP <i
                                            className="fa-solid fa-box-archive"></i></a>
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/go-tls-client/archive/refs/tags/v1.0.1.tar.gz">TAR.GZ <i
                                            className="fa-solid fa-file-zipper"></i></a>
                                    </div>
                                    <hr />
                                        <div className="d-grid gap-2">
                                            <strong>Server</strong>
                                            <a className="btn btn-primary"
                                               href="https://github.com/lazybark/go-tls-server/archive/refs/tags/v1.0.3.zip">ZIP <i
                                                className="fa-solid fa-box-archive"></i></a>
                                            <a className="btn btn-primary"
                                               href="https://github.com/lazybark/go-tls-server/archive/refs/tags/v1.0.3.tar.gz">TAR.GZ <i
                                                className="fa-solid fa-file-zipper"></i></a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}