const Title = ({ title, description, community }) => {
  return (
    <>
      <div className="md:p-10 p-5 pt-20 flex flex-col md:flex-row max-w-6xl m-auto md:mb-10">
        <div className="md:w-1/2">
          <h2 className=" pb-5">{title}</h2>
          <div
            className={`gradient-bg h-0.5 ${community ? "w-auto" : "inherit"}`}
          ></div>
        </div>
        <div className="md:w-1/2">
          <br />
          <br />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Title;
