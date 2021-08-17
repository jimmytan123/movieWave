import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';


const PageFavourites = () => {
  useEffect(() => {
    document.title = `${appTitle} - Favourites`;
  }, []);

  return (
    <main className='favourites-main-section'>
      <p>This is the favourites page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae
        similique, veniam perferendis explicabo amet officia quasi dolor
        corrupti accusamus? Accusantium harum tempora officia alias totam rem
        quo nulla enim.
      </p>
    </main>
  );
};

export default PageFavourites;
