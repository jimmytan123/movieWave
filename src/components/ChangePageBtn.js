import { rightArrowIcon, leftArrowIcon } from '../globals/icon';

const ChangePageBtn = ({ pages, handlePreviousPage, handleNextPage, maxPages }) => {
  const previousBtn = () => {
    if (pages === 1) {
      return (
        <button className="page-btn" disabled>
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

  const nextBtn = () => {
    if (pages < maxPages) {
      return (
        <button className="page-btn" onClick={handleNextPage}>
          {rightArrowIcon}
        </button>
      );
    } else {
      return (
        <button className="page-btn" disabled>
          {rightArrowIcon}
        </button>
      );
    }
  };

  const indicator = () => {
    let dots = [];
    for (let i = 1; i <= maxPages; i++) {
      dots.push(
        <div className={pages === i ? 'dot active' : 'dot'} key={i}></div>
      );
    }
    return dots;
  };

  return (
    <div className="changePageBtn-section">
      {previousBtn()}
      <div className="page-indicator">{indicator()}</div>
      {nextBtn()}
    </div>
  );
};

export default ChangePageBtn;
