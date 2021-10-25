import { useContext } from "react"
import { useQuery } from "react-query"

import { ConfigContext } from "../contexts/ConfigContext"

const apiBaseUrl = "https://giomiapp.terotero.it/api/resource"

export function useLanguages() {
  // const { data } = useQuery("languages", () => getData("languages/all"))

  const data = [
    {
      id: 1,
      image: "https://giomiapp.terotero.it/img/original/app/ita.png",
      title: "Italiano"
    },
    {
      id: 3,
      image: "https://giomiapp.terotero.it/img/original/app/en.png",
      title: "English"
    }
  ]

  return {
    list: () => data || null
  }
}

/**
 * @example
 * const { guideById } = useGuides
 * 
 * const guide = guideById(1)
 */
export function useGuides() {
  const { data } = useQuery("guides", () => getData("guides/all"))

  return {
    list: () => data || null,
    byId: (id) => data && data.find(
      guide => guide.id == id
    ) || null
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
  const { language } = useContext(ConfigContext)

  const { data } = useQuery("labels", () => getData("labels/all"))

  return {
    byName: (name) => {
      if (! data || ! language) {
        return ''
      }

      return data[language][name] || name
    }
  }
}

function getData(endpoint, params) {

  let url = `${apiBaseUrl}/${endpoint}`

  if (params) {
    url += "?"

    for (let key in params) {
      const value = params[key]

      url += key + "=" + params
    }
  }

  // console.log(url)
  return fetch(url).then((response) => response.json())
}

export function useAccount() {
  return {
    current: () => {
      return {
        name: "Filippo"
      }
    }
  }
}
