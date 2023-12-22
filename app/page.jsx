import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import {
  detailsquery,
  projectsquery,
  servicesquery,
  socialsquery,
  testimonialsquery,
} from "@/sanity/utils/data";
import Projects from "@/components/Projects";

export default async function Home() {
  const services = await servicesquery();
  const details = await detailsquery();
  const projects = await projectsquery();
  const testimonials = await testimonialsquery();
  const socials = await socialsquery();

  return (
    <main>
        {/* hero */}
      <Hero
        details={details}
        projects={projects}
        testimonials={testimonials}
        socials={socials}
      />
      {/* about */}
      <About details={details} />
      {/* services */}
      {services.length > 0 && <Services services={services} />}
      {/* projects */}
      {projects.length > 0 && <Projects projects={projects} />}
      {/* review */}
      {testimonials.length > 0 && <Reviews testimonials={testimonials} />}
      {/* cta */}
      <Cta />
    </main>
  );
}
