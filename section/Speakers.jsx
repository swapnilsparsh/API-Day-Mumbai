import Speaker from "@/components/Speaker";
import Title from "@/components/Title";

const Speakers = () => {
  return (
    <>
      <section className="speakers">
        <Title
          title={"Speakers"}
        />

        <Speaker/>

        <Speaker reverse={true}/>

        

      </section>
    </>
  );
};

export default Speakers;
