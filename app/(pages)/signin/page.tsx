const Signin = () => {
  return (
    <>
      <div className="mx-auto my-10 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>
        <div className="my-5">
          <button className="my-3 flex w-full items-center justify-center space-x-2 rounded-lg border border-slate-200 py-3 text-center text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="h-6 w-6" alt="" />
            <span>Login with Google</span>
          </button>
        </div>
        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="pb-2 font-medium text-slate-700">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="password">
              <p className="pb-2 font-medium text-slate-700">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <input type="checkbox" id="remember" className="h-4 w-4 border-slate-200 focus:bg-primary-600" />
                <label htmlFor="remember" className="">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="font-medium text-primary-600">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-primary-500 bg-primary-600 py-3 font-medium text-white hover:bg-primary-500 hover:shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center">
              Not registered yet? &nbsp;&nbsp; &nbsp;{' '}
              <a href="/signup" className="inline-flex items-center space-x-1 font-medium text-primary-600">
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
