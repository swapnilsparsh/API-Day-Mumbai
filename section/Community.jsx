import Title from "@/components/Title";
import Image from "next/image";

const Community = () => {
  return (
    <>
      <section className="community">
        <Title title={"Community Partner"} />

        <div className="flex blur flex-wrap gap-5 max-w-6xl m-auto p-6 justify-around cursor-not-allowed pointer-events-none select-none">
          <Image
            className="grey-img max-md:p-5 md:w-1/6 md:mb-10"
            src={"/community/gdgCloudMumbai.jpg"}
            width={250}
            height={250}
            alt={"community logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/6 md:mb-10"
            src={"/community/gdgCloudMumbai.jpg"}
            width={250}
            height={250}
            alt={"community logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/6 md:mb-10"
            src={"/community/gdgCloudMumbai.jpg"}
            width={250}
            height={250}
            alt={"community logo"}
          />
          <Image
            className="grey-img max-md:p-5 md:w-1/6 md:mb-10"
            src={"/community/gdgCloudMumbai.jpg"}
            width={250}
            height={250}
            alt={"community logo"}
          />
        </div>
      </section>
    </>
  );
};

export default Community;
