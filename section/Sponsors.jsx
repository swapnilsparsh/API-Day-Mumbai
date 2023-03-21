import Title from "@/components/Title";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <section className="sponsorship">
        <Title
          title={"Sponsors"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque illo eaque optio quasi. Omnis porro temporibus neque? Adipisci consequatur"
          }
        />

        <div className="flex flex-wrap gap-5 max-w-6xl m-auto p-6 justify-around">
          <Image
            className="grey-img max-md:p-5 md:w-1/3 md:mb-10"
            src={"/postman-logo.png"}
            width={500}
            height={500}
            alt={"sponsors logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/3 md:mb-10"
            src={"/postman-logo.png"}
            width={500}
            height={500}
            alt={"sponsors logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/3 md:mb-10"
            src={"/postman-logo.png"}
            width={500}
            height={500}
            alt={"sponsors logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/3 md:mb-10"
            src={"/postman-logo.png"}
            width={500}
            height={500}
            alt={"sponsors logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/3 md:mb-10"
            src={"/postman-logo.png"}
            width={500}
            height={500}
            alt={"sponsors logo"}
          />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
