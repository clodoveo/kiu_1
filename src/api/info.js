export default {
  fetch: (token) => {
    return new Promise((resolve, reject) => {
      if (token) {
        resolve(data);
      } else {
        reject("missing token");
      }
    });
  }
};

const data = [
  {
    title: "Giomi immobiliare",
    imgUrl: "https://giomiapp.terotero.it/img/original/appdemo/info-1.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in.",
    links: [
      {
        iconClass: "fas fa-phone-square",
        url: "tel:+39347666666"
      },
      {
        iconClass: "fas fa-envelope-square",
        url: "mailto:info@immobiliaregiomi.com"
      }
    ]
  },
  {
    title: "Informazioni turistiche",
    imgUrl: "https://giomiapp.terotero.it/img/original/appdemo/info-2.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in.",
    links: [
      {
        iconClass: "fas fa-phone-square",
        url: "tel:+39347666666"
      },
      {
        iconClass: "fas fa-envelope-square",
        url: "mailto:info@immobiliaregiomi.com"
      }
    ]
  },
  {
    title: "Stazione Autobus",
    imgUrl: "https://giomiapp.terotero.it/img/original/appdemo/info-3.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in.",
    links: [
      {
        iconClass: "fas fa-phone-square",
        url: "tel:+39347666666"
      },
      {
        iconClass: "fas fa-envelope-square",
        url: "mailto:info@immobiliaregiomi.com"
      }
    ]
  }
];
