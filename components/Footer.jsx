import { socialsquery } from "@/sanity/utils/data";
import Socials from "./Socials";

export default async function Footer() {
  const socials = await socialsquery();
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyle={"flex gap-x-6 mx-auto xl:mx-0 mb-4"}
            iconsStyles={
              "text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
            }
            social={socials}
          />
          {/* copyright */}
          <div className=" text-white dark:text-muted-foreground">
            Copyright &copy; Berlin Bruno. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
