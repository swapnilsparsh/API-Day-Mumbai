import Title from "@/components/Title";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <section className="sponsorship">
        <Title title={"Sponsors"} />

        <div className="flex flex-col gap-5 max-w-6xl m-auto p-6 justify-around">
          <div className="w-full flex flex-col justify-center items-center">
            <h4 className="" >Powered By</h4>
            <br />
            <Image
              className=" max-md:p-5 md:w-2/5 md:mb-10 m"
              src={"/sponsor/postman.png"}
              width={500}
              height={500}
              alt={"sponsors logo"}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h4 className="" >Gold Sponsor</h4>
            <br />
            <Image
              className=" max-md:p-5 md:w-1/3 md:mb-10 m"
              src={"/sponsor/elastic-logo.png"}
              width={500}
              height={500}
              alt={"sponsors logo"}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h4 className="" >Base Sponsor</h4>
            <br />
            <Image
              className=" max-md:p-5 md:w-1/4 md:mb-10 m"
              src={"/sponsor/GitHub-logo.png"}
              width={500}
              height={500}
              alt={"sponsors logo"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
