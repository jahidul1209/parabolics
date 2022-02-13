import React from 'react';
import { Container } from "react-bootstrap";
import styles from "../../fontend/Components/Styles/Widget.module.css"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
                {/* <!-- Page Footer--> */}
              <footer class="position-absolute bottom-0 bg-dash-dark-2 text-white text-center py-1 w-100 text-xs" id="footer">
                    <section className={styles.footer__bottom__wrapper}>
                      <Container>
                        <div className={styles.footer__legal}>
                            <h6>Copyright © 2022 Parabolics All rights reserved.</h6>
                            <div className={styles.legal__pages}>
                                <Link to="/disclaimer">Disclaimer</Link>
                                <Link to="/disclaimer">Privacy Policy</Link>
                                <Link to="/disclaimer">Terms Of Use</Link>
                            </div>
                        </div>
                       </Container>
                    </section>
                </footer>
                
        </div>
    );
}

export default Footer;