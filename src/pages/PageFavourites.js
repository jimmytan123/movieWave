import { useEffect } from 'react';

const PageFavourites = () => {
  useEffect(() => {
    document.title = 'MovieWave - Favourites';
  }, []);

  return (
    <section className='favourites-section'>
      <p>This is the favourites page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae
        similique, veniam perferendis explicabo amet officia quasi dolor
        corrupti accusamus? Accusantium harum tempora officia alias totam rem
        quo nulla enim.
      </p>
    </section>
  );
};

export default PageFavourites;
