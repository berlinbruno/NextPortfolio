import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  Monitor,
  CpuIcon,
  Database,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

const About = ({details}) => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className=" flex flex-col xl:flex-row">
          {/* image */}
          <div className=" hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={urlForImage(details[0].image)}
              imgStyles={'rounded-full p-5 absolute bottom-4 -right-1'}
            />
          </div>
          {/* tabs */}
          <div className=" flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal" className="w-[162px] xl:w-auto">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className=" w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className=" text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className=" h3 mb-4">{details[0].description}</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      {details[0].detaileddescription}
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      <div className=" flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className=" text-primary">
                          <User2 size={20} />
                        </div>
                        <div>{details[0].name}</div>
                      </div>
                      <div className=" flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className=" text-primary">
                          <MailIcon size={20} />
                        </div>
                        <div>{details[0].mail}</div>
                      </div>
                      <div className=" flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className=" text-primary">
                          <Calendar size={20} />
                        </div>
                        <div>Born on &nbsp;{details[0].dob}</div>
                      </div>
                      <div className=" flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className=" text-primary">
                          <GraduationCap size={20} />
                        </div>
                        <div>{details[0].graduation}</div>
                      </div>
                      {details[0].address !== null && (
                        <div className=" flex items-center gap-x-4 mx-auto xl:mx-0">
                          <div className=" text-primary">
                            <HomeIcon size={20} />
                          </div>
                          <div>{details[0].address}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className=" h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* education & experience wrapper */}
                    <div className=" grid md:grid-cols-2 gap-y-8">
                      {/* education */}
                      {details[0].education !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <GraduationCap size={28} />
                            <h4 className=" capitalize font-medium">
                              Education
                            </h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col gap-y-8">
                            {details[0].education.map((item, index) => {
                              const { institute, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {institute}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {/* experience */}
                      {details[0].experience !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase size={28} />
                            <h4 className=" capitalize font-medium">
                              Experience
                            </h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col gap-y-8">
                            {details[0].experience.map((item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className=" text-center xl:text-left">
                    <h3 className=" h3 mb-8 text-center xl:text-left">
                      What I Use Everyday
                    </h3>
                    {/* skills wrapper */}
                    <div className="grid md:grid-cols-2 xl:flex xl:justify-between gap-y-8">
                      {/* frontend */}
                      {details[0].skills[0].frontend !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <Monitor size={28} />
                            <h4 className=" capitalize font-medium">
                              FrontEnd
                            </h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col whitespace-nowrap gap-y-4">
                            {details[0].skills[0].frontend.map(
                              (item, index) => {
                                const skill = item;
                                return (
                                  <div
                                    className="w-2/4 mx-auto xl:mx-0"
                                    key={index}
                                  >
                                    <div className=" skill">
                                      <CheckCircle2 size={20} />
                                      <div className=" font-medium text-left ">
                                        {skill}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}
                      {/* backend */}
                      {details[0].skills[0].backend !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <CpuIcon size={28} />
                            <h4 className=" capitalize font-medium">BackEnd</h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col whitespace-nowrap gap-y-4">
                            {details[0].skills[0].backend.map((item, index) => {
                              const skill = item;
                              return (
                                <div
                                  className=" w-2/4 mx-auto xl:mx-0"
                                  key={index}
                                >
                                  <div className=" skill">
                                    <CheckCircle2 size={20} />
                                    <div className=" font-medium text-left">
                                      {skill}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {/* database */}
                      {details[0].skills[0].database !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <Database size={28} />
                            <h4 className=" capitalize font-medium">
                              DataBase
                            </h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col whitespace-nowrap gap-y-4">
                            {details[0].skills[0].database.map(
                              (item, index) => {
                                const skill = item;
                                return (
                                  <div
                                    className=" w-2/4 mx-auto xl:mx-0"
                                    key={index}
                                  >
                                    <div className=" skill">
                                      <CheckCircle2 size={20} />
                                      <div className=" font-medium text-left">
                                        {skill}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}
                      {/* others */}
                      {details[0].skills[0].others !== null && (
                        <div className=" flex flex-col gap-y-6">
                          <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                            <Code2 size={28} />
                            <h4 className=" capitalize font-medium">Others</h4>
                          </div>
                          {/* list */}
                          <div className=" flex flex-col whitespace-nowrap gap-y-4">
                            {details[0].skills[0].others.map((item, index) => {
                              const skill = item;
                              return (
                                <div
                                  className=" w-2/4 mx-auto xl:mx-0"
                                  key={index}
                                >
                                  <div className=" skill">
                                    <CheckCircle2 size={20} />
                                    <div className=" font-medium text-left">
                                      {skill}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;