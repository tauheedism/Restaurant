import React from "react";

const navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {props.item?.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => props.filter(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
