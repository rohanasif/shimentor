const Feature = ({ icon, title }) => {
  return (
    <div className="bg-[#F8F9FA] rounded-lg pl-8 pt-8 pb-8 w-[250px]">
      <img src={icon} alt="icon" />
      <br />
      <h2 className="text-[#3A3A3A] text-2xl font-semibold">{title}</h2>
      <br />
      <p className="text-[#515A60] text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
        facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl
        sodales rhoncus felis.
      </p>
    </div>
  );
};

export default Feature;
