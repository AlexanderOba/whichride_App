import React,{ useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './footer.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const Footer = ()=>{

    useEffect( () => {

        AOS.init({
           duration:1500,
        });
        AOS.refresh();
      }, []);

    return(
        <div className="section-6">
            <Container>
                <div data-aos='fade-up'>
                  <Row>
                    <Col md={4}>
                    <div className="footer-content">
                       <h2 className="footer-header">Toptutors</h2>
                       <p>Toptutors.com is one of Nigeria's most trusted leading online platform for tutors & students. It 
                    helps student/parents to find verified & skilled tutors in-person </p>
                    </div>
                    </Col>
                    <Col md={3}>
                      <div className="footer-content">
                         <h2 className="footer-header">Useful Links</h2>
                         <ul className="footer-list">
                             <li><Link to="/">Terms & Conditions</Link></li>
                             <li><Link to="/">Become a Tutor</Link></li>
                             <li><Link to="/">Hire a Tutor</Link></li>
                             <li><Link to="/">FAQs</Link></li>
                         </ul>
                      </div>
                    </Col>
                    <Col md={3}>
                    <div className="footer-content">
                         <h2 className="footer-header">Connect</h2>
                         <ul className="footer-list">
                             <li><Link to="/"><i className="logo-social fa fa-facebook"/> Facebook</Link></li>
                             <li><Link to="/"><i className="logo-social fa fa-youtube-play"/>Youtube</Link></li>
                             <li><Link to="/"><i className="logo-social fa fa-linkedin"/>Linkedin</Link></li>
                             <li><Link to="/"><i className="logo-social fa fa-instagram"/>Instagram</Link></li>
                         </ul>
                      </div>   
                    </Col>
                    <Col md={2}>
                      <div className="footer-content">
                         <h2 className="footer-header">Office Address</h2>
                         <p>5 Temitayo Ayodeji street,<br/>graceland Estate <br/> Isheri Lagos. </p>
                      </div>
                    </Col>
                 </Row>
                 <Row>
                    <Col md={12}>
                        <div  className="copyright-section">
                          <p>Copyright &copy; 2021. Toptutors.com All rights reserved</p>
                        </div>
                    </Col>
                 </Row>
              </div>
            </Container>

        </div>
    )   
}
export default Footer;
