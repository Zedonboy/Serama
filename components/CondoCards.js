import Property from "./Property"
import Link from "./Link"
export default function CondoCards() {
  return (
    <section className="flex mt-12 px-2 md:px-12 flex-col items-center">
      <p className="text-4xl text-gray-600">Featured Developers</p>
      <section className="flex space-x-4">
        <Link label="Rent" active={true} />
        <Link label="Buy" />
      </section>
      <section
        style={{ scrollbarWidth: "none" }}
        className="py-6 px-4 space-x-12 overflow-x-auto flex w-full"
      >
        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>
        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>

        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>
        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>
        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>
        <section className="md:w-[22rem] flex-shrink-0">
          <Property />
        </section>
      </section>
    </section>
  );
}
