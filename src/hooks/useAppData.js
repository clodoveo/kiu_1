import { useContext } from "react"
import { useQuery } from "react-query"

import { ConfigContext } from "../contexts/ConfigContext"

const apiBaseUrl = "https://giomiapp.terotero.it/api/app/resource"

export function useReservation() {
  const { data } = useQuery("reservation", () => {
    return {
      address: "Livorno via Garibaldi",
      mapUrl: "https://goo.gl/maps/1FPayuxigHEKo7ph7",
      dates: {
        arrival: {
          day: "27",
          month: "06"
        },
        departure: {
          day: "03",
          month: "07"
        }
      }
    }
  })

  return data || null
}

export function useLanguages(id) {
  const { data } = useQuery("languages", () => {
    return [{
        id: 1,
        image: "https://giomiapp.terotero.it/img/original/app/flag-it.png",
        title: "Italiano"
      },
      {
        id: 3,
        image: "https://giomiapp.terotero.it/img/original/app/flag-en.png",
        title: "English"
      }
    ]
  })

  if (!data) {
    return null
  }

  if (id) {
    return data.find(item => item.id == id)
  }

  return data
}

/**
 * @example
 * const { guideById } = useGuides
 * 
 * const guide = guideById(1)
 */
export function useGuides(id) {
  const { data } = useQuery("guides", () => fetchData("guides/all"))

  return {
    list: () => {
      return data
    },
    byId: (id) => {
      if (!data) {
        return null
      }

      return data.find(item => item.id == id)
    }
  }
}

/**
 * @return singolo metodo label(<name>)
 * 
 * @example
 * const { labelByName as label } = useLabels()
 * 
 * <h1>{label('name')}</h1>
 */
export function useLabels() {
  let { language } = useContext(ConfigContext)

  // lingua default
  language = language || 1

  const { data } = useQuery("labels", () => fetchData("labels/all"))
  // console.log("labels", data)

  return (name) => {
    if (!data) {
      return null
    }

    return data[language][name] || name
  }
}

export function useAccount() {
  const { data } = useQuery("account", () => {
    return {
      name: "Filippo"
    }
  })

  return {
    current: (key) => {
      if (!data) {
        return null
      }

      if (key) {
        return data[key]
      }
      return data
    }
  }
}

export function usePlaylist() {
  const { data } = useQuery("playlist", () => {
    return [{
        cloudName: "dlhsryof2",
        path: "keepitup/IMG_0644_mmnuds.mov",
        ratio: 9 / 16,
        title: "Video 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        cloudName: "dlhsryof2",
        path: "keepitup/IMG_0644_mmnuds.mov",
        ratio: 9 / 16,
        title: "Video 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
    ]
  })

  return data
}

export function useInfo() {
  const { language } = useContext(ConfigContext)

  if (!language) {
    throw ('missing language id')
  }

  const { data } = useQuery("info", async () => {
    return await fetchData("info/list", {
      langid: language
    })
  })

  return data
}

export function useServices(id) {
  const { data } = useQuery("services", () => {
    return [{
        id: "beach",
        linkTo: "/services/beach",
        thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-spiaggia.jpg",
        title: "La spiaggia",
        abstract: "Pulvinar lorem semper augue eleifend viverra sed.",
        picture: "https://giomiapp.terotero.it/img/original/appdemo/article-spiaggia.jpg",
        content: "<h2 class='title'>La spiaggia</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><p>Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Le strutture</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est a sed imperdiet elit tortor. Est eleifend fermentum, luctus porta venenatis in. </p><h2 class='title'>Info e contatti</h2><strong>Gli orari sono</strong><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p><strong>Numeri</strong><br><p>tel 8r7483884<br>mail djdj@sjksjsjs.ckjsjkskj<br>whatsap 857473873</p>"
      },
      {
        id: "gym",
        linkTo: "/services/gym",
        thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-palestra.jpg",
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
        thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-piscina.jpg",
        title: "Piscina",
        abstract: "Pulvinar lorem semper augue eleifend viverra sed."
      },
      {
        id: "bazar",
        linkTo: "/services/bazar",
        thumb: "https://giomiapp.terotero.it/img/original/appdemo/services-bazar.jpg",
        title: "Bazar",
        abstract: "Pulvinar lorem semper augue eleifend viverra sed."
      }
    ]
  })

  if (data && id) {
    return data.find(item => item.id == id)
  }

  return data
}

export function useFooterLinks() {
  const label = useLabels()

  return [{
      label: label("btnBottomNavigator"),
      iconClass: "fas fa-location-arrow",
      linkTo: "/video"
    },
    {
      label: label("btnBottomInfo"),
      iconClass: "fas fa-info-circle",
      linkTo: "/info"
    },
    {
      label: label("btnBottomServices"),
      iconClass: "fas fa-umbrella-beach",
      linkTo: "/services"
    },
    {
      label: label("btnBottomChat"),
      iconClass: "fas fa-comment",
      linkTo: "/chat"
    }
  ]
}

function fetchData(endpoint, params) {
  let url = `${apiBaseUrl}/${endpoint}`

  if (params) {
    url += "?"

    for (let key in params) {
      const value = params[key]

      url += key + "=" + value
    }
  }

  // console.log(url)
  return fetch(url).then((response) => response.json())
}