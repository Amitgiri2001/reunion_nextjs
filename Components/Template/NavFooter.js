
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NavFooter = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default NavFooter