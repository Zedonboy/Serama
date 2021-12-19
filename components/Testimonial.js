export default function Testimonial() {
    return (
        <section className="shadow w-full rounded p-6 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <figure className="w-12 h-12 bg-blue-300 rounded-full"></figure>
                <div>
                  <p className="font-bold text-xl">Ademola Olaniyi</p>
                  <p className="text-sm font-light text-gray-500">Designer</p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="font-bold text-sm">4.5</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="line-clamp-4 leading-relaxed text-gray-500 italic">
              I love the product!!
            </p>
          </section>
    )
}