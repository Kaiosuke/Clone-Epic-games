import search from "../js/search.js";

const renderNews = (): any => {
  const root = document.querySelector(".root");
  const main = document.createElement("main");
  main.innerHTML = `
   <main>
      <section class="section-search fixed bg-primary w-full z-[99999]">
     
      </section>
      <!-- End section-search -->

      <section class="news-outstanding pt-20">
        <div class="container m-auto">
          <h1 class="lg:text-2xl text-xl">Epic Games News</h1>
          <div
            class="wrapper-news-outstanding grid sm:grid-cols-2 gap-4 grid-cols-1 pt-4"
          >
            <div class="">
              <div class="news-outstanding-img">
                <a class="recommender-img" href="#!">
                  <img
                    class="rounded-lg"
                    src="https://cdn2.unrealengine.com/until-dawn-1920x1080-1abb466644ee.jpg?resize=1&w=854&h=480&quality=medium"
                    alt="scary-video"
                  />
                </a>
              </div>

              <!-- End news-outstanding-img-->
              <div class="news-outstanding-detail pt-2">
                <span class="opacity-70 text-xs">6D AGO</span>
                <h2 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h2>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <!-- End news-outstanding-detail-->
            </div>
            <div class="">
              <div class="news-outstanding-img">
                <a class="recommender-img" href="#!">
                  <img
                    class="rounded-lg"
                    src="https://cdn2.unrealengine.com/until-dawn-1920x1080-1abb466644ee.jpg?resize=1&w=854&h=480&quality=medium"
                    alt="scary-video"
                  />
                </a>
              </div>

              <!-- End news-outstanding-img-->
              <div class="news-outstanding-detail pt-2">
                <span class="opacity-70 text-xs">6D AGO</span>
                <h3 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h3>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <!-- End news-outstanding-detail-->
            </div>
          </div>
        </div>
      </section>
      <!-- End news-outstanding -->
      <div class="section-news">
        <div class="container m-auto">
          <div class="wrapper-news">
            <div class="line-stretch"></div>
            <div class="flex md:flex-row flex-col gap-4">
              <a class="recommender-img" href="#!">
                <img
                  class="lg:w-full md:w-320px w-full"
                  src="https://cdn2.unrealengine.com/redacted-guide-the-best-skills-weapons-and-suits-for-escaping-black-iron-prison-1920x1080-dfecbfa48494.png?resize=1&w=480&h=270&quality=medium"
                  alt="Redacted"
                />
              </a>
              <div>
                <span class="opacity-70 text-xs">2D AGO</span>
                <h3 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h3>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <div class=""></div>
            </div>
            <div class="line-stretch"></div>
            <div class="flex md:flex-row flex-col gap-4">
              <a class="recommender-img" href="#!">
                <img
                  class="lg:w-full md:w-320px w-full"
                  src="https://cdn2.unrealengine.com/redacted-guide-the-best-skills-weapons-and-suits-for-escaping-black-iron-prison-1920x1080-dfecbfa48494.png?resize=1&w=480&h=270&quality=medium"
                  alt="Redacted"
                />
              </a>
              <div>
                <span class="opacity-70 text-xs">2D AGO</span>
                <h3 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h3>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <div class=""></div>
            </div>
            <div class="line-stretch"></div>
            <div class="flex md:flex-row flex-col gap-4">
              <a class="recommender-img" href="#!">
                <img
                  class="lg:w-full md:w-320px w-full"
                  src="https://cdn2.unrealengine.com/redacted-guide-the-best-skills-weapons-and-suits-for-escaping-black-iron-prison-1920x1080-dfecbfa48494.png?resize=1&w=480&h=270&quality=medium"
                  alt="Redacted"
                />
              </a>
              <div>
                <span class="opacity-70 text-xs">2D AGO</span>
                <h3 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h3>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <div class=""></div>
            </div>
            <div class="line-stretch"></div>
            <div class="flex md:flex-row flex-col gap-4">
              <a class="recommender-img" href="#!">
                <img
                  class="lg:w-full md:w-320px w-full"
                  src="https://cdn2.unrealengine.com/redacted-guide-the-best-skills-weapons-and-suits-for-escaping-black-iron-prison-1920x1080-dfecbfa48494.png?resize=1&w=480&h=270&quality=medium"
                  alt="Redacted"
                />
              </a>
              <div>
                <span class="opacity-70 text-xs">2D AGO</span>
                <h3 class="pt-6 font-bold lg:text-xl text-lg">
                  <a href="#!">
                    10 scary video games and 20 amazing horror flicks to watch
                    after playing them
                  </a>
                </h3>
                <p class="pt-6 opacity-70">
                  From a gruesome Ryan Reynolds death to classic
                  spaghetti-slashers to a space trip to hell, we’ve got the
                  perfect haunters for you.
                </p>
                <a
                  class="block pt-6 underline lg:text-lg text-base hover-primary"
                  href="#!"
                >
                  Read more
                </a>
              </div>
              <div class=""></div>
            </div>
          </div>
          <!-- End wrapper -->
        </div>
      </div>
      <!-- End section news -->
    </main>    
    `;
  root?.appendChild(main);
  main.querySelector(".section-search")?.appendChild(search());
};

renderNews();
