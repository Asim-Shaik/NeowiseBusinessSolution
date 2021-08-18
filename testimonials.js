// ********* review js **************
// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dattaram Rajaram Mulik",
    job: "Time & Project management course",
    img: "./images/dattaram.jpeg",
    text: "This course changed my perspective and helped me to manage my time in myself and my goals with different techniques that I find effective in every day life",
  },
  {
    id: 2,
    name: "Gaurav Halankar",
    job: "Time & Project management course",
    img: "./images/gaurav.jpeg",
    text: "Time is the precious thing in the world and if you can learn how to manage your time then you can achieve the right success in your life with proper planning of time and initiative. During my academics, I had undergone lots of courses from time to time but after pursuing the Time and Project Management course conducted by Ms. Yashu Sharma, it has taught me the true value of time and thereby increasing my productivity level. The Project Management course is a most important course which the engineering student needs to pursue, which will help the students to plan and manage their projects quality during their academics. After pursuing the Project Management course, it has immensely helped me increasing the quality of my project.",
  },
  {
    id: 3,
    name: "Brandon Pimenta",
    job: "Time & Project management course",
    img: "./images/brandon.jpg",
    text: "It was a good live training course on time management, productivity improvement and basics of project management. The course overview was on time management techniques, how one can improve productivity and what are the different techniques and methods used in project management in industries. I came to know are the different methods that one can follow for controlling time like journaling. I feel this is the first and the most important activity that one should be engaged i.e., journalism. I got to know about the about few rules and techniques which can lead me for better and wonderful life in future. I got to know about circadian rhythm which helped me to know how it affects humans. I learnt about prioritizing tasks which saves time and also learnt about stress management. I came to know how stress affects human body and the ways to handle stress. Finally, the course highlighted the basics of project management like planning for the project, proper scheduling. The easy methods of arranging the matter, difference between the approaches that are used and their applications etc. The course has benefited me in all ways like for managing my time, feeling about my own self, scientific aspects, brief ideas of the easy ways available for project management. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
});
