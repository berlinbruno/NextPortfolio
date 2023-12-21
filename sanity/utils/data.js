import { client } from "../lib/client";
import { groq } from "next-sanity";

export const detailsquery = () => {
  return client.fetch(
    groq`*[_type == "details"]{
        name,
        title,
        description,
        detaileddescription,
        mail,
        dob,
        graduation,
        address,
        image{asset -> {url}},
        yearsofexperience,
        resume{asset -> {url}},
        education,
        experience,
        skills,
    }`
  );
};

export const servicesquery = () => {
  return client.fetch(
    groq`*[_type == "services"]{
        icon,
        title,
        description,
    }`
  );
};

export const projectsquery = () => {
  return client.fetch(
    groq`*[_type == "projects"]  | order(_createdAt desc){
        title,
        description,
        projectLink,
        file{asset -> {url}},
        codeLink,
        tags,
        category,
        imgUrl{asset -> {url}},
    }`
  );
};

export const testimonialsquery = () => {
  return client.fetch(
    groq`*[_type == "testimonials"]{
        name,
        company,
        feedback,
        imgUrl{asset -> {url}},
    }`
  );
};

export const socialsquery = () => {
  return client.fetch(
    groq`*[_type == "socials"]{
        icon,
        path,
    }`
  );
};
