import classes from ".././styls/Slide.module.css";
import Data from "../Data/Data";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Slide() {
  const useSlideRef = useRef();
  const [index, setIndex] = useState(0);
  const [bull, setBull] = useState(true);
  const [getData, setGetData] = useState(Data);

  useEffect(() => {
    slider();
  }, [index]);

  const next = () => {
    setIndex(index + 1);

    setBull(!bull);
    chandData();
  };

  const prev = () => {
    setIndex(index === 0 ? index - 0 : index - 1);
    setBull(!bull);
  };

  const slider = () => {
    useSlideRef.current.style.transform = `translate(-${index * 340}px)`;
    setBull(!bull);
  };

  const chandData = () => {
    let newData = Data;
    for (let i = 1; i < index; i++) {
      newData = newData.slice(0, index + 1).concat(Data.slice(0, index + 1));
      setGetData(Data.concat(newData));
    }
  };

  const SlideJsx = getData.map((el) => {
    return (
      <div key={el.Id}>
        <ul className={classes.slide_list}>
          <li className={classes.list}>
            <img className={classes.img} src={el.img} alt="" />
          </li>
          <li id={classes.list_head} className={classes.list}>
            {el.head}
          </li>
          <li className={classes.list}>{el.text}</li>
          <li>
            <a className={classes.list} href="#">
              {el.learnMore} {el.arrow}
            </a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className={classes.slider}>
      <div ref={useSlideRef} className={classes.slider_contener}>
        {SlideJsx}
      </div>
      <AiOutlineArrowRight className={classes.btn_next} onClick={next} />
      <AiOutlineArrowLeft className={classes.brn_prev} onClick={prev} />
    </div>
  );
}

export default Slide;
