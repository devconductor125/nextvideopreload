const CoachBoard = () => {
  return (
    <>
      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-4 lg:px-8 lg:py-2">
          <div className="mb-0 grid grid-cols-1 items-start gap-2 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}
                <video  preload="metadata" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}
                <video  preload="metadata" controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}
                <video  preload="metadata" controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}

<video  preload="metadata" controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4
"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}
                <video  preload="metadata" controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4
"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
            {/* Card */}
            <div className="h-90 w-90 m-auto my-4 transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:w-80">
              <div className="max-h-40 w-full">
                {/* <img
                  alt="blog photo"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                /> */}
                 <video  preload="metadata" controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4
"></video>
              </div>
              <div className="mt-2 flex items-center">
                <div className="pl-3">
                  <div className="text-large font-bold">Jean Marc</div>
                  <div className="text-sm text-gray-600">CTO of Supercars</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-3">
                <div className="flex">
                  <p className="font-base font-bold">USD &nbsp;&nbsp; </p>
                  <p className="price font-base pr-2 font-bold">30</p>
                </div>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Music</span>
                  <span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Sports</span>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae sit suscipit nisi, deserunt
                </p>
              </div>
              <div className="w-full p-3">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                >
                  Book Trial
                </button>
              </div>
            </div>
            {/* Card-End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachBoard;
