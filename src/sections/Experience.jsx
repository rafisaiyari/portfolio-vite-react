import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experience = ({id}) => {
  return (
    <div id={id} className="w-full">
        <Timeline data = {experiences} />
    </div>
  )
}

export default Experience