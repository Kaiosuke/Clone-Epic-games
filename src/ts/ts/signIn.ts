const renderSignIn = (): any => {
  const root = document.querySelector(".root");
  const main = document.createElement("main");
  main.innerHTML = `
      <div class="sign-in md:my-40">
        <div
          class="md:w-[470px] w-full h-full bg-cl-third p-6 m-auto flex flex-col items-center gap-4 rounded"
        >
          <img
            class="w-16"
            src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png"
            alt="logo"
          />

          <span class="font-bold md:text-xl text-lg">Sign In</span>
          <div class="group-sign-in">
            <div class="grid sm:grid-cols-4 grid-cols-3 gap-2">
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#027d00] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-xbox md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#003791] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-playstation md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#121212] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-github md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#145c8f] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-steam md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#1877f2] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-facebook md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#FF9900] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-google md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#FF66CC] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-apple md:text-2xl text-xl"></i>
              </a>
              <a
                href="#!"
                class="rounded-md px-8 py-3 bg-[#339966] cursor-pointer hover-primary text-center"
              >
                <i class="fa-brands fa-wordpress md:text-2xl text-xl"></i>
              </a>
            </div>
          </div>
          <div class="line-stretch"></div>
          <form id="form-signIn" class="flex flex-col gap-3 w-full" action="">
            <div class="wrapper-input">
              <div class="form-sign-in border rounded-md relative">
                <input
                  class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                  type="text"
                  id="email"
                  name="email"
                  placeholder
                />
                <label for="name">Email Address</label>
              </div>
              <span class="error-message"></span>
            </div>
            <div class="wrapper-input">
              <div class="form-sign-in border rounded-md relative">
                <input
                  class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                  type="password"
                  id="password"
                  name="password"
                  placeholder
                />
                <label for="name">Password</label>
                </div>
                <span class="error-message"></span>
            </div>
            <div class="btn-sign-in w-full">
              <button
                class="lg:h-16 w-full md:h-14 h-12 bg-[#0074e4] flex items-center justify-center cursor-pointer recommender-img rounded"
              >
                SIGN IN
              </button>
          </div>
          </form>
          <div class="w-full flex items-center justify-between">
            <a
              class="hover-primary underline md:text-base text-sm"
              href="/src/views/pages/auth/signUp/signUp.html"
            >
              Create account
            </a>
            <a class="hover-primary underline md:text-base text-sm" href="#!">
              Forgot password
            </a>
          </div>

        </div>
      </div>
  `;
  root?.appendChild(main);
};

renderSignIn();
