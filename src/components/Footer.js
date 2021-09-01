import { getYear } from '../utilities/date';

const Footer = ({ toggleMode }) => {
  return (
    <footer>
      <p>&copy; {getYear()} Jimmy Tan | For Educational Purposes Only</p>
      <button onClick={toggleMode}>change mode</button>
    </footer>
  );
};

export default Footer;
