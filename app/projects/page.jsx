"use client";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState("all project");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "projects"]  | order(_createdAt desc){
        _id,
        title,
        description,
        projectLink,
        file{asset -> {url}},
        codeLink,
        tags,
        category,
        imgUrl{asset ->{url}},
    }`
      )
      .then((data) => {
        const uniqueCategories = [
          "all project",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(data.map((item) => item.category));
        setData(data);
        
        setTimeout(() => {
          setLoading(false)
        }, 500)
        setCategories(uniqueCategories);
      });
  }, []);

  if (loading) return <LoadingScreen/>
  if (!data) return <p>No Projects</p>

  const filteredProjects = data.filter((project) => {
    return category === "all project" ? project : project.category === category;
  });
  return (
    <section className=" min-h-screen pt-12">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue="all project" className=" mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className=" text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
