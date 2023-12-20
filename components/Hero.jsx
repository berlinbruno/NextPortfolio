import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badges from "./Badges";
import Socials from "./Socials";
import { urlForImage } from "@/sanity/lib/image";

const Hero = ({ details, projects, testimonials, socials }) => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className=" flex justify-between gap-x-8">
          {/* text */}
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              {details[0].title}
            </div>
            <h1 className="h1 mb-4">Hello, my name is {details[0].name}</h1>
            <p className=" subtitle max-w-[490px] mx-auto xl:mx-0">
              {details[0].description}
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href={details[0].resume.asset.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download Resume <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyle="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              social={socials}
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative mr-24">
            {/* badge-1 */}
            {details[0].yearsofexperience > 0 && (
              <Badges
                containerStyles="absolute top-[5%] -left-[8rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={details[0].yearsofexperience}
                badgeText="Years of Experience"
              />
            )}
            {/* badge-2 */}
            {projects.length > 0 && (
              <Badges
                containerStyles="absolute top-[55%] -right-[6rem]"
                icon={<RiTeamFill />}
                endCountNum={projects.length}
                endCountText=""
                badgeText="Finished Projects"
              />
            )}
            {/* badge-3 */}
            {testimonials.length > 0 && (
              <Badges
                containerStyles="absolute top-[90%] -left-[3rem]"
                icon={<RiTodoFill />}
                endCountNum={testimonials.length}
                endCountText=""
                badgeText="Happy Clients"
              />
            )}
            {/* image */}
            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[560px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[510px] bg-no-repeat relative bg-bottom"
              imgSrc={urlForImage(details[0].image)}
              imgStyles={"rounded-full p-5 pt-20"}
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-[49%] bottom-24 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
