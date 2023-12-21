import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon, Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { urlForImage, urlForProjectImage } from "@/sanity/lib/image";

export const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative min-h-[410px]">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[270px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light dark:xl:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className=" absolute bottom-0 shadow-2xl"
            src={urlForProjectImage(project.imgUrl)}
            width={250}
            height={250}
            alt=""
            priority
          />
          {/* buttons */}
          <div className=" flex gap-x-4">
            {project.file !== null && (

              <Link
                href={project.file.asset.url}
                className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Download className=" text-white" />
              </Link>
            )}
            {project.projectLink !== null && (
              <Link
                href={project.projectLink}
                className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Link2Icon className=" text-white" />
              </Link>
            )}

            <Link
              href={project.codeLink}
              className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Github className=" text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className=" h-full px-8 py-6">
        <div className="absolute top-4 left-5">
          {project.tags.map((tag, index) => {
            return (
              <Badge
                className=" uppercase text-sm font-medium mb-2 mr-1 "
                key={index}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        <h4 className="h4 mb-1">{project.title}</h4>
        <p className=" text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};
