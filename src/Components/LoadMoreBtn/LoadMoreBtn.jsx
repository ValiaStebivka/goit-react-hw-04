import { AiOutlineReload } from "react-icons/ai";
import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper} onClick={loadMore}>
          <AiOutlineReload className={css.icon} />
          <span>Show more</span>
        </div>
      </div>
    </>
  );
};
