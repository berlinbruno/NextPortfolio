import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { urlForImage } from "@/sanity/lib/image";

export const ReviewCard = ({ review }) => {
  return (
    <Card className=" bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px]">
      <CardHeader className="p-0 mb-10">
        <div className="flex items-center gap-x-4">
          {/* image */}
          <Image
            className=" rounded-lg"
            src={urlForImage(review.imgUrl)}
            width={70}
            height={70}
            alt=""
            priority
          />
          {/* name */}
          <div className="flex flex-col">
            <CardTitle className="text-accent-foreground">
              {review.name}
            </CardTitle>
            <p className="text-accent-foreground">{review.company}</p>
          </div>
        </div>
      </CardHeader>
      {/* feedback */}
      <CardDescription className="text-lg text-muted-foreground">
        {review.feedback}
      </CardDescription>
    </Card>
  );
};
