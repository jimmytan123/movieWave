import { useEffect } from "react";

const PageAbout = () => {

  useEffect(() => {
    document.title = 'MovieWave - About';
}, []);

  return (
    <section className='about-section'>
      <p>This is the about page</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta officia
        amet ipsam totam, ipsum neque voluptatibus! Maxime fugiat illum veniam,
        distinctio mollitia ut. Adipisci nobis iusto nisi facilis possimus
        tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        dolorem doloremque rerum minus exercitationem aut amet inventore,
        officiis tempora dolor recusandae esse laudantium a quibusdam pariatur
        quia minima cupiditate. Iusto?
      </p>
    </section>
  );
};

export default PageAbout;
