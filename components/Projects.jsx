import Link from "next/link";
import { Button } from "./ui/button";
import { Slider } from "./Slider";

const Projects = ({projects}) => {
  return (
    <section className=" mb-12 xl:mb-32">
      <div className=" container mx-auto relative">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className=" section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque
            optio repudiandae temporibus expedita repellendus impedit molestiae
            maxime.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Slider
            slides={projects}
            sliderStyles="h-[500px]"
            slidesPerView="2"
            cardType="project"
          />
        </div>
      </div>
    </section>
  );
}
export default  Projects;