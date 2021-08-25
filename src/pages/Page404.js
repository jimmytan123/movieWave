import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import { Link } from 'react-router-dom';

const Page404 = () => {
  //change tab title when rendering
  useEffect(() => {
    document.title = `Page Not Found - ${appTitle}`;
  }, []);

  return (
    <main className="notFound-main-section">
      <div>
        <h2>Page Not Found</h2>
        <Link to={'/'}>Back to Home</Link>
      </div>
    </main>
  );
};

export default Page404;
