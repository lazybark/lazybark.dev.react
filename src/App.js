import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {NotFound} from "./pages/notFound";
import {MainPage} from './pages/main';
import {Lazycloud} from "./pages/lazycloud";
import {SyncAppsProtocol} from "./pages/syncAppsProtocol";
import {Lazyevent} from "./pages/lazyevent";
import {GoJWT} from "./pages/goJWT";
import {GoTLS} from "./pages/goTLS";
import {GoPEMGenerator} from "./pages/goPEMGenerator";
import {MenuMain} from "./components/menuMain";
import {GoHelpers} from "./pages/goHelpers";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <header className="fixed-top">
                <MenuMain />
            </header>
            <div className={"page"}>
              <Routes>
                <Route path="/" element={<MainPage />} />

                  <Route path="/lazycloud-sync-app" element={<Lazycloud />} />
                  <Route path="/sync-apps-protocol" element={<SyncAppsProtocol />} />
                  <Route path="/lazyevent" element={<Lazyevent />} />
                  <Route path="/go-jwt" element={<GoJWT />} />
                  <Route path="/go-tls-client-server" element={<GoTLS />} />
                  <Route path="/go-cert-generator" element={<GoPEMGenerator />} />
                  <Route path="/go-helpers" element={<GoHelpers />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>Lazybark.dev</strong>. All Rights
                                    Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>


        </BrowserRouter>
      </div>
  );
}

export default App;
