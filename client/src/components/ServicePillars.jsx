import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicePillars from "../data/servicePillars";

function ServicePillars() {
  return (
    <>
      {servicePillars.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="flex items-start justify-center gap-6">
            <div className="bg-white-400 mt-1.5 flex h-11 w-11 items-center justify-center rounded-xl text-black">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-black-100"
                size="xl"
              />
            </div>
            <div className="w-2/3">
              <h4 className="font-outfit text-h4 text-white-200 pb-2 font-medium">
                {item.heading}
              </h4>
              <p className="font-nunito text-white-300 text-base lg:text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicePillars;
