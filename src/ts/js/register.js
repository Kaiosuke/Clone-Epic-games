"use strict";
// Render register
const renderRegister = () => {
    const root = document.querySelector(".root");
    const main = document.createElement("main");
    main.innerHTML = `
   <div class="sign-in md:my-40">
        <div
          class="md:w-[470px] w-full h-full bg-cl-third md:p-12 p-6 m-auto flex flex-col items-center gap-4 rounded"
        >
          <img
            class="w-16"
            src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png"
            alt="logo"
          />

          <span class="font-bold md:text-xl text-lg">Sign Up</span>
          <form id="form-register" class="flex flex-col gap-3 w-full" action="">
            <div class="wrapper-input">
              <div class="form-sign-in border rounded-md relative">
                <select
                  class="bg-[#37373a] w-full px-4 py-4 border-none outline-none"
                  name="country"
                  id="country"
                >
                  <option class="bg-red-300" value="vn">Vietnam</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <span class="error-message"></span>
            </div>
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
            <div class="flex justify-between gap-2">
              <div class="wrapper-input">
                <div class="form-sign-in border rounded-md relative">
                  <input
                    class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                    type="text"
                    id="first-Name"
                    name="firstName"
                    placeholder
                  />
                  <label for="name">First Name</label>
                </div>
                <span class="error-message"></span>
              </div>
              <div class="wrapper-input">
                <div class="form-sign-in border rounded-md relative">
                  <input
                    class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                    type="text"
                    id="last-Name"
                    name="lastName"
                    placeholder
                  />
                  <label for="name">Last Name</label>
                </div>
                <span class="error-message"></span>
              </div>
            </div>
            <div class="wrapper-input">
              <div class="form-sign-in border rounded-md relative">
                <input
                  class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                  type="text"
                  id="display-name"
                  name="disPlayName"
                  placeholder
                />
                <label for="name">Display Name</label>
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
            <div class="wrapper-input">
              <div class="form-sign-in border rounded-md relative">
                <input
                  class="sign-input w-full px-4 py-4 border-none outline-none bg-third relative"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder
                />
                <label for="name">Confirm Password</label>
              </div>
              <span class="error-message"></span>
            </div>
            <div class="btn-sign-in w-full">
              <button
                class="w-full lg:h-16 md:h-14 h-12 bg-[#0074e4] flex items-center justify-center cursor-pointer recommender-img rounded"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div>
            <span class="opacity-70">Already have an account?</span>
            <a
              class="hover-primary underline md:text-base text-sm"
              href="/src/views/pages/auth/signIn/signIn.html"
            >
              Sign in
            </a>
          </div>
        </div>
      </div> 
  `;
    root?.appendChild(main);
};
renderRegister();
