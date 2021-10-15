export default {
  all: () => {
    return data;
  },

  byId: (id) => {
    for (let index = 0; index < data.length; index++) {
      const service = data[index];

      if (service.id === id) {
        return service;
      }
    }
  }
};

const data = [
  {
    id: "beach",
    linkTo: "/services/beach",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-spiaggia.jpg",
    title: "La spiaggia",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed.",
    picture:
      "https://giomiapp.terotero.it/img/original/appdemo/article-spiaggia.jpg",
    content:
      "<h2 class='title'>La spiaggia</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><p>Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Le strutture</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Info e contatti</h2><strong>Gli orari sono</strong><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p><strong>Numeri</strong><br><p>tel 8r7483884<br>mail djdj@sjksjsjs.ckjsjkskj<br>whatsap 857473873</p>"
  },
  {
    id: "gym",
    linkTo: "/services/gym",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-palestra.jpg",
    title: "La palestra",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "spa",
    linkTo: "/services/spa",
    thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-spa.jpg",
    title: "Spa",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "pool",
    linkTo: "/services/pool",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-piscina.jpg",
    title: "Piscina",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  },
  {
    id: "bazar",
    linkTo: "/services/bazar",
    thumb:
      "https://giomiapp.terotero.it/img/original/appdemo/services-bazar.jpg",
    title: "Bazar",
    abstract: "Pulvinar lorem semper augue eleifend viverra sed."
  }
];
