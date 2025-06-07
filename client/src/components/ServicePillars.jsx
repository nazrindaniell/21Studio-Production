import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicePillars from "../data/servicePillars";

function ServicePillars() {
  return (
    <>
      {servicePillars.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="flex items-center justify-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-black-100"
                size="xl"
              />
            </div>
            <div className="w-2/3">
              <h3 className="font-outfit lg:text-h4 text-lg font-medium text-white">
                {item.heading}
              </h3>
              <p className="font-nunito text-white-300">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicePillars;
