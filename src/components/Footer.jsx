function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content__1">
                <li>
                  <span>CAR</span> Rental
                </li>
                <li>
                  We offers a big range of vehicles for all your driving needs. We
                  have the perfect car to meet your needs.
                </li>
                <li>
                  <a href="tel:7689903145">
                    <i className="fa-solid fa-phone"></i> &nbsp; (+91) 768-990-3145
                  </a>
                </li>
  
                
                <li>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/G-Anubhav/"
                  >
                    Design by Anubhav Goyal
                  </a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Company</li>
                <li>
                  <a href="#home">New Delhi</a>
                </li>
                <li>
                  <a href="#home">Careers</a>
                </li>
                <li>
                  <a href="#home">Mobile</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">How we work</a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Working Hours</li>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Subscription</li>
                <li>
                  <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Email Address"></input>
                </li>
                <li>
                  <button className="submit-email">Submit</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;