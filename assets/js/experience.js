AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Bio",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    desp: "June Dempsey is a stand up comic from Louisville, Kentucky. They put on a local monthly variety hour “The June Dempsey show”. They’ve been a part of the 2019 and 2021 Midwest Queer Festival and was named “Best of the Fest” in the 2022 Rubber City Comedy Festival. ",
  },
  {
    title: "Headshots",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Documents Folder",
    desp: "<a href="https://drive.google.com/drive/folders/1YvJNLnFByX_Q2XCmI6BeV2yRg3c5yO-0?usp=sharing"> Click here for Headshots </a>",
  },
  {
    title: "Headshots",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<a href="https://drive.google.com/drive/folders/1s_QCW_fS3txdW3dluGTaSr_7BBmoQOts?usp=sharing">Click here for a two 5 minute clips, and multiple short shareable one minute clips</a>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
