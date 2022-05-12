import AcordionData from "../Data/AcordionData";
import Acordion from "./Acordion";

function PassPropsForAcorden() {
  return (
    <div>
      <div className="acordion">
        {AcordionData.map((element) => {
          return <Acordion element={element} />;
        })}
      </div>
    </div>
  );
}

export default PassPropsForAcorden;
