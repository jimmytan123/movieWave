import { getYear } from '../utilities/date';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {getYear()} Jimmy Tan | For Educational Purposes Only</p>
        </footer>
    )
}

export default Footer;
