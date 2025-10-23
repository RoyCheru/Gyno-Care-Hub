import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footer.css';

function Footer() {
  return (
    
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} GynoCare Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;