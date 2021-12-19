import Agent from "./Agent"
export default function AgentSection() {
  return (
    <>
      <section className="flex flex-col px-4 py-12 items-center">
        <p className="text-center text-4xl text-gray-600">Meet Our Agents</p>
        <p className="text-center mt-4 text-gray-600">
          Find and meet our featured agents
        </p>
        <section className="flex flex-wrap w-full justify-around">
          <div className="w-[20rem] ">
            <Agent />
          </div>
          <div className="w-[20rem] mt-0 md:mt-16">
            <Agent />
          </div>
          <div className="w-[20rem] mt-0 md:mt-32">
            <Agent />
          </div>
        </section>
      </section>
      <section className="mt-8">
        <section className="bg-yellow-200 max-h-[18rem] flex">
          <figure className="w-0 md:w-5/12 flex flex-col justify-end">
            <img src="/estate/images/coming_home.svg"></img>
          </figure>
          <section className="w-full md:w-7/12 flex flex-col space-y-2 p-6 md:p-12">
            <p className="text-gray-700 text-4xl">
              Simple, Cheap
              <br />
              Pricing
            </p>
            <p className="text-gray-700">
              Put Your email address and gey listed
            </p>
            <form className="w-full bg-white p-1 flex rounded-md">
              <input
                className="w-11/12 p-4 outline-none h-12"
                placeholder="Enter your Email"
              ></input>
              <button className="flex-shrink-0 bg-yellow-400 text-white py-3 px-6 rounded-md">
                Get listed
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
