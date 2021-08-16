import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const PageHome = () => {
  useEffect(() => {
    document.title = 'MovieWave - Home';
  }, []);

  return (
    <section className='home-section'>

      <nav className='movie-sort-nav'>
        <ul>
          <li><NavLink to=''>Popular</NavLink></li>
          <li><NavLink to=''>Top Rated</NavLink></li>
          <li><NavLink to=''>Now Playing</NavLink></li>
          <li><NavLink to=''>Upcoming</NavLink></li>
        </ul>
      </nav>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta officia
        amet ipsam totam, ipsum neque voluptatibus! Maxime fugiat illum veniam,
        distinctio mollitia ut. Adipisci nobis iusto nisi facilis possimus
        tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        aperiam soluta, recusandae sapiente ipsa cupiditate placeat incidunt,
        ratione cumque, doloribus hic perspiciatis a asperiores fuga quidem
        corrupti facilis totam dolorem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum accusamus quas doloribus a sint quo nesciunt.
        Magni nostrum rem sunt quae commodi! Quibusdam, voluptatem. Nam odio
        blanditiis ad commodi id? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Sit numquam eveniet rem esse quas soluta facere ab
        rerum nemo ipsa corrupti hic quo, est laudantium laborum molestiae.
        Doloremque, soluta dolores.
      </p>
    </section>
  );
};

export default PageHome;
