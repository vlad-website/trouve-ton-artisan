export default function Footer() {
    return (
        <footer className="tta-footer py-5 mt-5">
            <div className="container">
                <div  className="row">

                    {/* Colonne gauche */}
                    <div className="col-md-6 mb-4 mb-md-0 footer-left">
                        <h5 className="footer-title">Information légales</h5>
                        <ul className="footer-list">
                            <li><a href="/mentions-legales">Mentions légales</a></li>
                            <li><a href="/donnees-personnelles">Données personnelles</a></li>
                            <li><a href="/accessibilite">Accessibilité</a></li>
                            <li><a href="/cookies">Cookies</a></li>
                        </ul>
                    </div>

                    {/* Colonne droite */}
                    <div className="col-md-6 footer-right">
                        <h5 className="footer-title">Contact</h5>
                        <p className="footer-contact">
                            101 cours Charlemagne<br />
                            CS 20033<br />
                            69269 LYON CEDEX 02<br />
                            France<br />
                            <strong>+33 (0)4 26 73 40 00</strong>
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom text-center mt-4">
                    © Région Auvergne-Rhône-Alpes 2025
                </div>
            </div>
        </footer>
    );
}