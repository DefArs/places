const tab_1 = document.querySelector(".tabs__content-1");
const tab_2 = document.querySelector(".tabs__content-2");
const tab_content1 = document.querySelector(".content__tab-1");
const tab_content2 = document.querySelector(".content__tab-2");

document.querySelector(".tabs-container").addEventListener("click", (e) => {
  const tabs = e.target;

  if (tabs.matches(".tabs__content-1")) {
    tab_1.classList.toggle("tabs__content-1"); // remove class
    tab_1.classList.toggle("tabs__content-2"); // add class
    tab_2.classList.toggle("tabs__content-2"); // remove class
    tab_2.classList.toggle("tabs__content-1"); // add class

    tab_content1.classList.toggle("tab__hidden");
    tab_content2.classList.toggle("tab__hidden");
  }

  if (tabs.matches(".tabs__content-2")) {
    tab_2.classList.toggle("tabs__content-2"); // remove class
    tab_2.classList.toggle("tabs__content-1"); // add class
    tab_1.classList.toggle("tabs__content-1"); // remove class
    tab_1.classList.toggle("tabs__content-2"); // add class

    tab_content1.classList.toggle("tab__hidden");
    tab_content2.classList.toggle("tab__hidden");
  }
});
