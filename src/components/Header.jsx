import "../../assets/css/fontawesome.css";
import "../../assets/css/templatemo-lugx-gaming.css";
import "../../assets/css/owl.css";
import "../../assets/css/animate.css";
import logo from "../../assets/images/logo.png";
import "../../vendor/bootstrap/css/bootstrap.min.css";

const Header = ({ pageTab }) =>{
    return(
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="/" className="logo">
                            <img src={logo} alt="" style={{width: "158px"}}></img>
                        </a>
                        <ul className="nav">
                          <li><a href="/" className={pageTab==='home'?"active":null}>Home</a></li>
                          <li><a href="/shop" className={pageTab==='shop'?"active":null}>Our Shop</a></li>
                          <li><a href="/product-details" className={pageTab==='productdetails'?"active":null}>Product Details</a></li>
                          <li><a href="/contact" className={pageTab==='contact'?"active":null}>Contact Us</a></li>
                          <li><a href="/Login">Sign In</a></li>
                      </ul>   
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
      </header>
    )
}
export default Header;