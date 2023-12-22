import { Slider } from "./Slider";

const Reviews = ({ testimonials }) => {
  return (
    <section className=" mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className=" section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* swiper */}
        <div>
          <Slider
            slides={testimonials}
            sliderStyles="h-[450px]"
            slidesPerView="3"
            cardType="review"
          />
        </div>
      </div>
    </section>
  );
};
export default Reviews;
