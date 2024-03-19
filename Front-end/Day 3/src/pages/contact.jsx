import '../assets/css/contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Vaanga Palagalam</h3>
          <h2>contact us</h2>
         
          <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">+919363353923</span>
            </div>
            <div>
              <span><i className="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span className="text">sedhuram@anil.com</span>
            </div>
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">69 GOAT Street, Kovaipudhur , Coimbatore - 641042</span>
            </div>
            <div>
              <span><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Sunday (6:00 AM to 6:01 AM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows="5" placeholder="Message" className="form-control"></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src="image/contact-png.png" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4728881222486!2d76.92319257419145!3d10.927606756388684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1710771574717!5m2!1sen!2sin" width="100%" height="450"  style={{ border: 0 }} allowfullscreen="" aria-hidden="false"></iframe>
        </div>

        <div className="contact-footer">
          <h3>Follow Pannu</h3>
          <div className="social-links">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-youtube"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
