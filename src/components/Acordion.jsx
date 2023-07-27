import { useState, memo } from "react";

const Acordion = ({ element }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{element.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div
        className={isActive ? "accordion-content" : "accordion-content_fals"}
      >
        <ul className="acordion_content_ul">
          {element.content.map((el, i) => {
            return (
              <li className="acordion_list" key={i}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Acordion);
