// document
//   .querySelector(".business-block-panel")
//   .addEventListener("click", (event) => {
//     console.log(event.target);
//   });

let isSliderMoving = false;
score = 0;

pixelScore = 0;
miniPixelScore = 0;
line0 = document.getElementById("0");
line1 = document.getElementById("1");
line2 = document.getElementById("2");
line3 = document.getElementById("3");
line4 = document.getElementById("4");
let lineArray = [line0, line1, line2, line3, line4];

let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".slider").addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchend", () => {
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX - touchStartX > 50) {
    console.log("свайп влево");

    miniPixelScore -= 280;

    if (score <= 0) {
      miniPixelScore = 0;
      score = 0;
    } else {
      document
        .querySelector(".slider")
        .animate([{ transform: "translateX(280px)" }], {
          duration: 300,
          iterations: 1,
        }).onfinish = function () {
        document.querySelector(".slider").style =
          "right:" + miniPixelScore + "px";
      };
      score--;
    }
    console.log(miniPixelScore);
    console.log("свайп влево");
    console.log(score);
  } else if (touchStartX - touchEndX > 50) {
    console.log("свайп вправо");

    miniPixelScore += 280;
    if (score == 4) {
      miniPixelScore = 280 * 4;
      score = 4;
    } else if (score <= 3) {
      document
        .querySelector(".slider")
        .animate([{ transform: "translateX(-280px)" }], {
          duration: 300,
          iterations: 1,
        }).onfinish = function () {
        document.querySelector(".slider").style =
          "right:" + miniPixelScore + "px";
      };
      score++;
    }
    console.log(miniPixelScore);
    console.log(score);
  }
}

function scoreLineLeft() {
  lineArray[score].classList.add("active-line");
  lineArray[score - 1].classList.remove("active-line");
}

function scoreLineRight() {
  lineArray[score].classList.add("active-line");
  lineArray[score + 1].classList.remove("active-line");
}

document.querySelector(".right").onclick = () => {
  if (isSliderMoving) {
    return;
  }
  isSliderMoving = true;
  pixelScore += 1115;
  if (score > 3) {
    pixelScore = 4460;
    score = 3;
    isSliderMoving = false;
  } else {
    document
      .querySelector(".slider")
      .animate([{ transform: "translateX(-1115px)" }], {
        duration: 300,
        iterations: 1,
      }).onfinish = function () {
      document.querySelector(".slider").style = "right:" + pixelScore + "px";
      isSliderMoving = false;
    };
  }
  score++;
  scoreLineLeft();
};

document.querySelector(".left").onclick = () => {
  if (isSliderMoving) {
    return;
  }
  isSliderMoving = true;
  pixelScore -= 1115;
  if (score >= 1) {
    document
      .querySelector(".slider")
      .animate([{ transform: "translateX(1115px)" }], {
        duration: 300,
        iterations: 1,
      }).onfinish = function () {
      document.querySelector(".slider").style = "right:" + pixelScore + "px";
      isSliderMoving = false;
    };
  }
  score--;
  if (score <= 0) {
    pixelScore = 0;
    score = 0;
    isSliderMoving = false;
  }

  scoreLineRight();
};

function removeActive() {
  document.querySelectorAll(".active-block").forEach((element) => {
    element.classList.remove("active-block");
  });
}

/////////////////// active line maps

let active = null;
let activeTag = document.getElementById("11");
activeTag.classList.add("active");

document
  .querySelector(".map-selection-switch-ul")
  .addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== "li") {
      return; // Если нажата <img>, выйти из функции
    }

    if (activeTag) {
      activeTag.classList.remove("active");
    }

    activeTag = event.target;
    console.log(event.target);
    activeTag.classList.add("active");
  });
///////// pizdec

// let voronej = {
//   name: "Воронеж",
//   style: "voronej",
//   fontSize: "1px",
//   left: "75px",
//   top: "256px",
// };
newCitiesElement = null;
let all, center, northwest, south, volga, ural, siberia, east;

let voronej = {
  name: "Воронеж",
  style: "voronej",
  fontSize: "12px",
  left: "70px",
  top: "245px",
};
let yaroslavl = {
  name: "Ярославль",
  style: "Yaroslavl",
  fontSize: "12px",
  left: "151px",
  top: "196px",
};

let belgorod = {
  name: "Белгород",
  style: "Belgorod",
  fontSize: "12px",
  left: "65px",
  top: "276px",
};
//////////// sever
let saintPetersburg = {
  name: "Санкт-петербург",
  style: "saintPetersburg",
  fontSize: "16px",
  left: "91px",
  top: "130px",
};

let kaliningrad = {
  name: "Калининград",
  style: "kaliningrad",
  fontSize: "12px",
  left: "3px",
  top: "123px",
};
//////////// юг
let rostov = {
  name: "Ростов-на-Дону",
  style: "rostov",
  fontSize: "14px",
  left: "34px",
  top: "320px",
};

let krasnodar = {
  name: "Краснодар",
  style: "krasnodar",
  fontSize: "14px",
  left: "17px",
  top: "380px",
};

let volgograd = {
  name: "Волгоград",
  style: "volgograd",
  fontSize: "12px",
  left: "81px",
  top: "360px",
};

///////// volga

let kazan = {
  name: "Казань",
  style: "kazan",
  fontSize: "12px",
  left: "230px",
  top: "298px",
};

let samara = {
  name: "Самара",
  style: "samara",
  fontSize: "12px",
  left: "167px",
  top: "306px",
};

let ufa = {
  name: "Уфа",
  style: "ufa",
  fontSize: "12px",
  left: "241px",
  top: "336px",
};

let orenburg = {
  name: "Оренбург",
  style: "orenburg",
  fontSize: "12px",
  left: "194px",
  top: "364px",
};

let novgorod = {
  name: "Н. Новгород",
  style: "novgorod",
  fontSize: "12px",
  left: "160px",
  top: "260px",
};

////////// УРАЛ
let ekaterinburg = {
  name: "Екатеринбург",
  style: "ekaterinburg",
  fontSize: "12px",
  left: "285px",
  top: "328px",
};
chelyabinsk = {
  name: "Челябинск",
  style: "chelyabinsk",
  fontSize: "14px",
  left: "286px",
  top: "362px",
};
perm = {
  name: "Пермь",
  style: "perm",
  fontSize: "14px",
  left: "359px",
  top: "299px",
};
surgut = {
  name: "Сургут",
  style: "surgut",
  fontSize: "12px",
  left: "415px",
  top: "311px",
};
tuymen = {
  name: "Тюмень",
  style: "tuymen",
  fontSize: "12px",
  left: "387px",
  top: "362px",
};
ijevsk = {
  name: "Ижевск",
  style: "ijevsk",
  fontSize: "12px",
  left: "306px",
  top: "289px",
};

////// СИБИРЬ

novosibirsk = {
  name: "Новосибирск",
  style: "novosibirsk",
  fontSize: "12px",
  left: "477px",
  top: "453px",
};
omsk = {
  name: "Омск",
  style: "omsk",
  fontSize: "14px",
  left: "441px",
  top: "473px",
};
tomsk = {
  name: "Томск",
  style: "tomsk",
  fontSize: "14px",
  left: "559px",
  top: "437px",
  flexDirection: "column-reverse",
};
krasnoyarsk = {
  name: "Красноярск",
  style: "krasnoyarsk",
  fontSize: "12px",
  left: "604px",
  top: "455px",
};
irkutsk = {
  name: "Иркутск",
  style: "irkutsk",
  fontSize: "14px",
  left: "666px",
  top: "488px",
};

////// Дальний восток
habarovsk = {
  name: "Хабаровск",
  style: "habarovsk",
  fontSize: "16px",
  left: "948px",
  top: "474px",
  flexDirection: "column-reverse",
};
vladivostok = {
  name: "Владивосток",
  style: "vladivostok",
  fontSize: "16px",
  left: "928px",
  top: "574px",
};

//// moskva
let moskva = {
  name: "Москва",
  style: "moskva",
  fontSize: "14px",
  left: "118px",
  top: "223px",
};

moscow = [moskva];
center = [voronej, yaroslavl, belgorod];
northwest = [saintPetersburg, kaliningrad];
south = [rostov, krasnodar, volgograd];
volga = [kazan, samara, ufa, orenburg, novgorod];
yral = [ekaterinburg, chelyabinsk, perm, surgut, tuymen, ijevsk];
siberia = [novosibirsk, omsk, tomsk, krasnoyarsk, irkutsk];
east = [habarovsk, vladivostok];

let regionArray = [
  moscow,
  center,
  northwest,
  south,
  volga,
  yral,
  siberia,
  east,
];

let centerScore = 0;
//// creat all
let allScore = 0;
function createCitiesAll(citiId) {
  if (allScore == regionArray.length || centerScore !== 0) {
    console.log("УДАЛЯЕМ");
    document.querySelectorAll(".divWrapper").forEach(function (element) {
      element.remove();
      allScore = 0;
      centerScore = 0;
    });
  }

  let totalLength = 0;
  regionArray.forEach(function (arr) {
    totalLength += arr.length;
  });

  if (allScore < totalLength) {
    for (let i = 0; i < regionArray[citiId].length; i++) {
      console.log(regionArray[citiId][i]);
      howToBild(regionArray[citiId][i]);
      console.log(allScore);
      allScore++;
    }
    console.log("ВЫШли");
    return;
  }
}

for (let citiId = 0; citiId < regionArray.length; citiId++) {
  createCitiesAll(citiId);
}

document.getElementById("11").onclick = function () {
  for (let citiId = 0; citiId < regionArray.length; citiId++) {
    createCitiesAll(citiId);
  }
}; ////////////// create moskow

document.querySelectorAll(".moskow1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 0;
    createCities(citiId);
  });
});
////////////// create center

document.querySelectorAll(".center1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 1;
    createCities(citiId);
  });
});

////// северо-запад
document.querySelectorAll(".northwest1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 2;
    createCities(citiId);
  });
});
//////ЮГ

document.querySelectorAll(".south1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 3;
    createCities(citiId);
  });
});

//////Волга

document.querySelectorAll(".volga1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 4;
    createCities(citiId);
  });
});
//////Урал

document.querySelectorAll(".ural1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 5;
    createCities(citiId);
  });
});

//////Сибирь

document.querySelectorAll(".siberia1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 6;
    createCities(citiId);
  });
});

//////Дальний Восток

document.querySelectorAll(".east1").forEach(function (element) {
  element.addEventListener("click", function () {
    let citiId = 7;
    createCities(citiId);
  });
});

function createCities(citiId) {
  if (centerScore >= 1 || allScore > 0) {
    document.querySelectorAll(".divWrapper").forEach(function (element) {
      element.remove();
      centerScore = 0;
      allScore = 0;
    });
  }
  if (centerScore === 0) {
    for (let i = 0; i < regionArray[citiId].length; i++) {
      console.log(regionArray[citiId][i]);
      howToBild(regionArray[citiId][i]);
      console.log("ЧЕта построили)");
      centerScore++;
    }
  } else {
    return;
  }
}

////////////// create severo-zapad

function howToBild(citi) {
  console.log(citi + "то, что строю");
  const map = document.querySelector(".map-block-wrapper");
  const divWrapper = document.createElement("div");
  const div = document.createElement("div");
  const cities = document.createElement("p");
  cities.innerHTML = citi.name; // Используем citi.name, чтобы получить имя
  divWrapper.classList.add("divWrapper", citi.style);
  citi.style.fontSize = citi.fontSize;
  citi.style.backgroundColor = "#a30c33";
  div.className = "cities-ellipse";
  cities.className = "cities";
  //// dom структура
  divWrapper.prepend(div);
  divWrapper.append(cities);
  map.appendChild(divWrapper);
  newCitiesElement = citi.style;

  let styleChange = document.querySelector(`.${newCitiesElement}`);
  styleChange.style.left = citi.left;
  styleChange.style.top = citi.top;
  styleChange.querySelector("p").style.fontSize = citi.fontSize;
  styleChange.style.flexDirection = citi.flexDirection;

  /// ищем класс чтобы по нему автоматизировать позиционирование

  console.log(newCitiesElement);
  console.log(document.querySelector(`.${newCitiesElement}`));
}

let mapSectionScore = 0;
mapSectionScoreMobile = 0;
//// селектор городов на пк
document.querySelector(".map-selection-header").onclick = () => {
  if (mapSectionScore == 1) {
    document.getElementById("arrow-map").style.transform = "rotate(0deg)";
    mapSectionScore = 0;
    document.querySelector(".hidden-map").style.display = "none";
  } else if (mapSectionScore == 0) {
    document.getElementById("arrow-map").style.transform = "rotate(180deg)";
    mapSectionScore = 1;
    document.querySelector(".hidden-map").style.display = "flex";
    /////////////////// добавляю ширину регионам, чтобы не переверстывать
  }
};
