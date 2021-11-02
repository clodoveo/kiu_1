import { useContext, useEffect } from "react"
import { useQuery, useQueryClient } from "react-query"

import { ConfigContext } from "../contexts/ConfigContext"

const apiBaseUrl = "https://giomiapp.terotero.it/api/app/resource"

const defaultLangId = 1

const useQueryOptions = {
  staleTime: 60000 // 1 minute
}

export function useReservation() {
  const token = "f3493fr3928erhvt3v98j"
  const endpoint = "reservations/by_token/" + token

  const { status, data } = useQuery(
    "reservation",
    () => fetchData(endpoint),
    useQueryOptions
  )

  return data || null
}

export function useUserAccount() {
  const reservation = useReservation()

  const emptyUser = { name: { first: "" } }
  return reservation && reservation.userAccount || emptyUser
}

export function useLanguages(id) {
  const { data } = useQuery(
    "languages",
    () => {
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
    },
    useQueryOptions
  )

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
export function useGuides() {
  const { data } = useQuery(
    "guides",
    () => fetchData("guides/all"),
    useQueryOptions
  )

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
  const langid = getLangId()

  const { data } = useQuery(
    "labels",
    () => fetchData("labels/all"),
    useQueryOptions
  )

  function label(name) {
    if (!data) return ""

    return data[langid][name] || name
  }

  return label
}

export function useVideos() {
  const langid = getLangId()

  const { data } = useQuery(
    "playlist" + langid,
    () => fetchData("videos/by_apt_id", { langid }),
    useQueryOptions
  )

  return data
}

export function useInfo() {
  const langid = getLangId()

  const { data } = useQuery(
    "info" + langid,
    () => fetchData("info/list", { langid }),
    useQueryOptions
  )

  return data
}

export function useServices(id) {
  const langid = getLangId()

  const { data } = useQuery(
    "services" + langid,
    () => fetchData("services/by_apt_id", { langid }),
    useQueryOptions
  )

  if (data && id) {
    return data.find(item => item.id == id)
  }

  return data
}

async function fetchData(endpoint, params) {
  let url = `${apiBaseUrl}/${endpoint}`

  if (params) {
    url += "?"

    for (let key in params) {
      const value = params[key]

      url += key + "=" + value
    }
  }

  // console.log(url)
  const result = await fetch(url)
  return result.json()
}

function getLangId() {
  let { langId } = useContext(ConfigContext)
  return langId || defaultLangId
}