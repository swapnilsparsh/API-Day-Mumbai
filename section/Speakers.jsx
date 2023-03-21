import Speaker from "@/components/Speaker";
import Title from "@/components/Title";

const Speakers = () => {
  return (
    <>
      <section className="speakers">
        <Title
          title={"Speakers"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque illo eaque optio quasi. Omnis porro temporibus neque? Adipisci consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa sunt temporibus culpa ipsum cum eaque adipisci! Tempore minima perspiciatis id nesciunt perferendis incidunt optio veniam, quas alias ullam nostrum."
          }
        />

        <Speaker/>

        <Speaker reverse={true}/>

        

      </section>
    </>
  );
};

export default Speakers;
