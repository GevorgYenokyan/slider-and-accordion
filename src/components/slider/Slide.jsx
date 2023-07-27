import classes from "../../styls/Slide.module.css";
import Data from "../../Data/Data";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Slide() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      Data.push(...Data);
    }
  }, []);

  const numItems = Data?.length;
  const itemWidth = 300;
  const windowWidth = 1728;
  const innerWidth = numItems * itemWidth;
  const startIndex = Math.floor(scrollLeft / itemWidth);
  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollLeft + windowWidth) / itemWidth) + 2
  );

  const renderedItems = [];

  for (let i = startIndex; i <= endIndex; i++) {
    renderedItems.push(
      <div
        key={Data[i]?.Id}
        style={{
          position: "absolute",
          transform: `translateX(${i * itemWidth}px)`,
          left: 0,
        }}
        className={classes["slider_iteam_container"]}
      >
        <ul className={classes.slide_list}>
          <li className={classes.list}>
            <img className={classes.img} src={Data[i]?.img} alt="" />
          </li>
          <li id={classes.list_head} className={classes.list}>
            {Data[i]?.head}
          </li>
          <li className={classes.list}>{Data[i]?.text}</li>
          <li>
            <a className={classes.list} href="#">
              {Data[i]?.learnMore} {Data[i]?.arrow}
            </a>
          </li>
        </ul>
      </div>
    );
  }

  useEffect(() => {
    setScrollLeft(scrollIndex * itemWidth);
  }, [scrollIndex]);

  const next = () => {
    if (scrollIndex < Data.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const prev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className={classes.slider}>
      <div className={classes["slider-iteams-div"]}>
        <div
          className={classes["slider-iteams"]}
          style={{
            width: `${innerWidth}px`,
            transform: `translateX(${-scrollIndex * itemWidth}px)`,
          }}
        >
          {renderedItems}
        </div>
      </div>
      <AiOutlineArrowRight className={classes.btn_next} onClick={next} />
      <AiOutlineArrowLeft className={classes.brn_prev} onClick={prev} />
    </div>
  );
}

export default Slide;
