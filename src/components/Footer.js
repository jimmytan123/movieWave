import { getYear } from '../utilities/date';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {getYear()} <a href="https://ztan.ca/" target="_blank" rel="noreferrer">Jimmy Tan</a> | For Educational Purposes Only</p>
    </footer>
  );
};

export default Footer;
