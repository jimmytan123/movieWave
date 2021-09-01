import { getYear } from '../utilities/date';
import DarkModeToggle from 'react-dark-mode-toggle';

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <footer>
      <p>&copy; {getYear()} Jimmy Tan | For Educational Purposes Only</p>
      <DarkModeToggle
        onChange={setIsDarkMode}
        size={63}
        checked={isDarkMode}
        speed={1.2}
        className="dark-mode-toggle-btn"
      />
    </footer>
  );
};

export default Footer;
