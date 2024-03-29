import Speaker from "@/components/Speaker";
import Title from "@/components/Title";

const Speakers = () => {
  return (
    <>
      <section className="speakers">
        <Title title={"Speakers"} />

        <Speaker
          image={"/speaker/Ali-Mustafa.webp"}
          name={"Ali Mustafa"}
          designetion={"Senior Developer Advocate @Postman"}
          desc={
            "I am a 25yr old with a vision to make the student developers realize their potential and rise above the bar of college curriculum and experiment while they study so that they dont waste their professional years doing so! The Idea is to make more Leaders and not merely followers! and to keep that alive I regularly interact with a lot of students & developers who have the potential, who are doing exceptional things and I feel big companies can enable them to do more!"
          }
        />

        <Speaker
          reverse={true}
          image={"/speaker/anchal-mishra.jpeg"}
          name={"Anchal Mishra"}
          designetion={"Developer Advocate, Postman"}
          desc={
            "I am Aanchal Mishra. Communities have a very special place in my heart because I am passionate about helping students rise above the bar of the college curriculum. I love helping and creating opportunities for them via community events, giving talks, and providing mentorship."
          }
        />
        <Speaker
          reverse={false}
          image={"/speaker/ashish.jpeg"}
          name={"Ashish Tiwari"}
          designetion={"Senior Developer Advocate, Elastic"}
          desc={
            "Started journey with Software Engineer. Throughout the journey, I got the opportunity to work with great minds on various stacks, databases & programming languages. Worked with various types of use cases and contributed to solutions. I am an Open Source fan & Love to contribute to the community. I like to speak about tech."
          }
        />
        <Speaker
          reverse={true}
          image={"/speaker/romin-irani.jpeg"}
          name={"Romin Irani"}
          designetion={"Developer Advocate, Google Cloud"}
          desc={
            "My passion is to help developers succeed. I enjoy learning, writing and talking about technologies that matter to developers."
          }
        />
      </section>
    </>
  );
};

export default Speakers;
