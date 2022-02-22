/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "aj";

const CARDS = [
  {
    name: "Netflix",
    icon: "ri-netflix-fill",
    link: "https://www.netflix.com",
  },
  {
    name: "YouTube",
    icon: "ri-youtube-fill",
    link: "https://www.youtube.com/",
  },
  {
    name: "Disney+",
    icon: "",
    link: "https://www.disneyplus.com/",
    svg: "/assets/disney-plus.svg"
  },
  {
    name: "Hulu",
    icon: "",
    link: "https://www.hulu.com/",
    svg: "/assets/hulu.svg"
  },
  {
    name: "Plex",
    icon: "",
    link: "https://app.plex.tv/desktop",
    svg: "/assets/plex.svg"
  },
  {
    name: "HBO Max",
    icon: "",
    link: "https://www.hbomax.com/",
    svg: "/assets/hbo-max.svg"
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "pm" : "am"}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${MONTHS[currentMonth]} ${currentNumber},  ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon;

    if (card.icon === "") {
      currentCardIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
      useElem.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", card.svg + "#Layer_1");

      currentCardIcon.appendChild(useElem);     
    } else {
      currentCardIcon = document.createElement("i");
      currentCardIcon.classList.add(card.icon);
    }


    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
