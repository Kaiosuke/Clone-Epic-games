const footer = () => {
    const footer = document.createElement("footer");
    footer.className = "footer py-10 md:px-20 sm:px-10 px-5 bg-third mt-20";
    footer.innerHTML = `
      <div class="wrapper-footer flex justify-between">
        <div class="footer-left flex-[0_0_70%]">
          <div class="footer-media">
            <div class="footer-media-icon flex items-center gap-4">
              <a href="#!">
                <i
                  class="fa-brands fa-facebook lg:text-2xl text-xl hover:text-secondary transition-all duration-200 ease-in-out"
                ></i>
              </a>
              <a href="#!">
                <i
                  class="fa-brands fa-twitter lg:text-2xl text-xl hover:text-secondary transition-all duration-200 ease-in-out"
                ></i>
              </a>
              <a href="#!">
                <i
                  class="fa-brands fa-youtube lg:text-2xl text-xl hover:text-secondary transition-all duration-200 ease-in-out"
                ></i>
              </a>
            </div>
            <!-- End footer-media-icon -->
            <div
              class="footer-media-links pt-4 grid lg:grid-cols-4 grid-cols-2 gap-3"
            >
              <ul>
                <h4 class="opacity-25">Resources</h4>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Support-A-Creator</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Distribute on Epic Games</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Careers</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Company</a>
                </li>
              </ul>
              <ul>
                <h4 class="opacity-25">Design</h4>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Fan Art Policy</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">UX Research</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Store EULA</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Company</a>
                </li>
              </ul>
              <ul>
                <h4 class="opacity-25">Company</h4>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Fan Art Policy</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">UX Research</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Store EULA</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Company</a>
                </li>
              </ul>
              <ul>
                <h4 class="opacity-25">Made By Epic Games</h4>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Battle Breakers</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Fortnite</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Infinity Blade</a>
                </li>
                <li
                  class="hover:text-secondary transition-all duration-200 ease-in-out"
                >
                  <a href="#!">Robo Recall</a>
                </li>
              </ul>
            </div>
            <!-- End footer-media-links -->
          </div>
          <!-- End footer-media -->
          <div class="line-stretch"></div>
          <div class="footer-no-copyright">
            <p class="text-xs opacity-25">
              © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games,
              the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
              Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
              Tournament logo are trademarks or registered trademarks of Epic
              Games, Inc. in the United States of America and elsewhere. Other
              brands or product names are the trademarks of their respective
              owners.
            </p>
            <p class="text-xs opacity-25">
              Our websites may contain links to other sites and resources
              provided by third parties. These links are provided for your
              convenience only. Epic Games has no control over the contents of
              those sites or resources, and accepts no responsibility for them
              or for any loss or damage that may arise from your use of them.
            </p>
          </div>
          <!-- End footer-no-copyright -->
        </div>
        <!-- End footer-left -->
        <div class="scroll-to-top fixed bottom-16 right-10">
          <div class="cursor-pointer">
            <i
              class="fa-solid fa-circle-up md:text-4xl text-3xl hover:text-secondary transition-all duration-200 ease-in-out"
            ></i>
          </div>
        </div>
        <!-- End scroll to top -->
        <div class="footer-righ w-full flex justify-end">
          <div class="cursor-pointer">
            <i
              class="fa-solid fa-gamepad md:text-5xl sm:text-4xl text-3xl hover:text-secondary transition-all duration-200 ease-in-out"
            ></i>
          </div>
        </div>
        <!-- End footer-right -->
      </div>
      <div class="footer-more pt-6 flex items-center justify-between">
        <ul class="flex items-center gap-4">
          <li
            class="text-sm opacity-50 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <a href="#!">Terms of Service</a>
          </li>
          <li
            class="text-sm opacity-50 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <a href="#!">Privacy Policy</a>
          </li>
          <li
            class="text-sm opacity-50 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <a href="#!">Store Refund Policy</a>
          </li>
        </ul>
        <div class="flex items-center gap-4">
          <a href="#!">
            <i
              class="fa-solid fa-biohazard md:text-4xl text-3xl hover:text-secondary transition-all duration-200 ease-in-out"
            ></i>
          </a>
          <a href="#!">
            <i
              class="fa-brands fa-fantasy-flight-games md:text-4xl text-3xl hover:text-secondary transition-all duration-200 ease-in-out"
            ></i>
          </a>
        </div>
      </div>
    `;
    return footer;
};
export default footer;
