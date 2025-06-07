import teamMembers from "../data/teamProfile";

function TeamProfile({ members = teamMembers }) {
  return members.map((member) => (
    <div key={member.id} className="flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="mb-4 h-48 w-48 rounded-full object-cover object-center lg:h-56 lg:w-56"
      />
      <h3 className="text-h4 font-outfit text-white-200 lg:text-h3 font-medium">
        {member.name}
      </h3>
      <p className="font-nunito text-white-300 text-base lg:text-lg">
        {member.role}
      </p>
    </div>
  ));
}

export default TeamProfile;
