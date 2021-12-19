import Testimonial from "./Testimonial"
export default function TestimonialSection () {
    return (
        <section className="flex flex-col px-4 py-10 items-center">
        <p className="text-center text-4xl text-gray-600">
          Trusted by Thousands of
          <br />
          Happy Customers
        </p>
        <p className="text-center mt-4 text-gray-600">
          These are the stories of our customers who have joined us with great
          <br /> pleasure when using our product
        </p>
        <section className="w-full mt-12 flex flex-wrap justify-evenly">
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
        </section>
      </section>
    )
}