export function GoPEMGenerator(){
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
                                <img style={{"height": "3em"}} src="/assets/img/golang-ar21.svg" alt="" />
                                <img style={{"height": "3em"}} src="/assets/img/terminal-fill.svg" alt="" />
                                        <h2>Description</h2>
                                        <p className="text-justify">
                                            It's an easy-to-use CLI tool to create self-signed certs in PEM-files.
                                            Useful for testing stuff or making little server-client apps. For example
                                            - <a className="anc-link" href="/go-tls-server-client">Go TLS server</a>.
                                        </p>
                                        <p className="text-justify">
                                            Use is quite simple: just follow app's instructions in console and
                                            provide <code>Org name</code>, <code>host</code>, <code>cert
                                            lifetime</code> in days, <code>key usage types</code> and exported <code>file
                                            names</code>.
                                        </p>
                                        <p className="text-justify">
                                        </p>
                                        <div className="work-img"><img src="/assets/img/articles/cert-generator/scr1.png" alt="" className="img-fluid" />
                                        </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="portfolio-info bs island-block">
                                    <h3>App info</h3>
                                    <ul>
                                        <li><strong>Language</strong>: Go</li>
                                        <li><strong>Repository</strong>: <a className="anc-link"
                                                                            href="https://github.com/lazybark/cert-generator">GitHub <i
                                            className="fa-brands fa-github"></i></a></li>
                                        <li><strong>Current version</strong>: v1.0</li>
                                        <hr />
                                            <li><strong>Download latest</strong>:</li>
                                    </ul>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/cert-generator/releases/download/v1.0/cert-generator-windows.exe">Windows <i
                                            className="fa-brands fa-windows"></i></a>
                                        <hr />
                                            <a className="btn btn-primary"
                                               href="https://github.com/lazybark/cert-generator/archive/refs/tags/v1.0.zip">ZIP <i
                                                className="fa-solid fa-box-archive"></i></a>
                                            <a className="btn btn-primary"
                                               href="https://github.com/lazybark/cert-generator/archive/refs/tags/v1.0.tar.gz">TAR.GZ <i
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