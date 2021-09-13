//handle change page, and generating page dots
import { rightArrowIcon, leftArrowIcon } from '../globals/icon';

const ChangePageBtn = ({
  pages,
  handlePreviousPage,
  handleNextPage,
  handleChoosePage,
  maxPages,
}) => {
  //function to return left arrow button, if current page is 1, disabled it
  const previousBtn = () => {
    if (pages === 1) {
      return (
        <button className="page-btn disabled" disabled>
          {leftArrowIcon}
        </button>
      );
    } else {
      return (
        <button className="page-btn" onClick={handlePreviousPage}>
          {leftArrowIcon}
        </button>
      );
    }
  };
  //function to return next page(right arrow) button, if reaches the maximum pre-definded page, disabled it
  const nextBtn = () => {
    if (pages < maxPages) {
      return (
        <button className="page-btn" onClick={handleNextPage}>
          {rightArrowIcon}
        </button>
      );
    } else {
      return (
        <button className="page-btn disabled" disabled>
          {rightArrowIcon}
        </button>
      );
    }
  };

  //function to return page dot(indicator), add active class to the current pages
  //add event listener to every dot to let user to click dot to go to certain pages they want
  const pageDots = () => {
    let dots = [];
    for (let i = 1; i <= maxPages; i++) {
      dots.push(
        <div
          className={pages === i ? 'dot active' : 'dot'}
          key={i}
          id={i}
          onClick={() => handleChoosePage(i)}
        ></div>
      );
    }
    return dots;
  };

  return (
    <section className="changePageBtn-section">
      {previousBtn()}
      <div className="page-indicator">{pageDots()}</div>
      {nextBtn()}
    </section>
  );
};

ChangePageBtn.defaultProps = {
  maxPages: 5,
};

export default ChangePageBtn;
