import AcordionData from "../Data/AcordionData";
import Acordion from "./Acordion";

function PassPropsForAcordeon() {
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

export default PassPropsForAcordeon;
