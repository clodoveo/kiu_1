import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import { ConfigContext } from "../contexts/ConfigContext";
import { AppContext } from "../contexts/AppContext";

const apiBaseUrl = "https://giomiapp.terotero.it/api/app/resource";

const defaultLangId = 1;

const defaultQueryOptions = {
  staleTime: 60000, // 1 minute
};

function queryOptions(customOptions) {
  return { ...defaultQueryOptions, ...customOptions };
}

export function useReservation() {
  const { reservationToken: token } = useContext(ConfigContext);
  const endpoint = "reservations/by_token";

  const { setError } = useContext(AppContext);

  const response = useQuery(
    "reservation",
    () => fetchData(endpoint, setError, { token }),
    queryOptions()
  );

  return response.data || null;
}

export function useUserAccount() {
  const reservation = useReservation();

  // avoid errors
  const emptyUser = { name: { first: "" } };

  return (reservation && reservation.userAccount) || emptyUser;
}

export function useCurrentLanguage() {
  const langId = getLangId();
  return useLanguages(langId);
}

export function useLanguages(id) {
  // TODO inglobare in useReservation
  const { data } = useQuery(
    "languages",
    () => {
      return [
        {
          id: 1,
          title: "it",
          image: "https://giomiapp.terotero.it/img/original/app/flag-it.png",
          label: "Italiano",
        },
        {
          id: 3,
          title: "en",
          image: "https://giomiapp.terotero.it/img/original/app/flag-en.png",
          label: "English",
        },
      ];
    },
    queryOptions()
  );

  if (!data) {
    return null;
  }

  if (id) {
    return data.find((item) => item.id == id);
  }

  return data;
}

/**
 * @example
 * const { guideById } = useGuides
 *
 * const guide = guideById(1)
 */

export function useGuides() {
  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const queryKey = "guides";

  const { data } = useQuery(
    queryKey,
    () => fetchData("guides/all", setError, { token }),
    queryOptions()
  );

  if (data && data.error) {
    return data;
  }

  return {
    list: () => {
      return data;
    },
    byId: (id) => {
      if (!data) {
        return null;
      }

      return data.find((item) => item.id == id);
    },
  };
}

/**
 * @return singolo metodo label(<name>)
 *
 * @example
 * const { labelByName as label } = useLabels()
 *
 * <h1>{label('name')}</h1>
 */

export function useLabel() {
  const langId = getLangId();
  const data = useLabels();

  return (name) => {
    if (!data || !langId) return "";

    return data[langId][name] || "";
  };
}

export function useLabels() {
  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const { data } = useQuery(
    "labels",
    () => fetchData("labels/all", setError, { token }),
    queryOptions()
  );

  return data || null;
}

const videoSections = {
  video: { id: 1 },
  beach: { id: 2 },
  pool: { id: 3 },
};

export function useVideoSections() {
  const { setError } = useContext(AppContext);

  const langId = getLangId();

  const queryKeys = ["videoSections", langId];

  const fetchVideoSections = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`video_sections/find`, setError, { langId });
  };

  const { data } = useQuery(queryKeys, fetchVideoSections, queryOptions());

  for (let name in videoSections) {
    if (data) {
      const sectionId = videoSections[name].id;
      const section = data.find((item) => item.id == sectionId);
      videoSections[name] = section;
    }
  }

  return videoSections;
}

export function useVideoSection(name) {
  const videoSections = useVideoSections();
  const section = videoSections[name];

  section.list = useVideos({ sectionId: section.id });
  return section;
}

export function useVideos({ sectionId }) {
  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const langId = getLangId();

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["playlist", aptId, langId, sectionId];

  const fetchVideos = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`videos/find`, setError, { token, langId, sectionId });
  };

  const { data } = useQuery(
    queryKeys,
    fetchVideos,
    queryOptions({ enabled: !!aptId })
  );

  return data;
}

export function useInfo() {
  const langId = getLangId();

  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["info", aptId, langId];

  const fetchInfo = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`info/by_token`, setError, { langId, token });
  };

  const { data } = useQuery(
    queryKeys,
    fetchInfo,
    queryOptions({ enabled: !!aptId })
  );

  return data;
}

export function useHouse({ sectionId }) {
  const langId = getLangId();

  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["house", aptId, langId, sectionId];

  const fetchHouse = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`house/by_token`, setError, { langId, token, sectionId });
  };

  const { data } = useQuery(
    queryKeys,
    fetchHouse,
    queryOptions({ enabled: !!aptId })
  );

  return data;
}

const houseSections = {
  info: { id: 1, path: "house/info" },
  services: { id: 2, path: "house/services" },
  equipment: { id: 3, path: "house/equipment" },
};

export function useHouseSections() {
  const { setError } = useContext(AppContext);

  const langId = getLangId();

  const queryKeys = ["houseSections", langId];

  const fetchVideoSections = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`house_sections/find`, setError, { langId });
  };

  const { data } = useQuery(queryKeys, fetchVideoSections, queryOptions());

  for (let name in houseSections) {
    if (data) {
      const sectionId = houseSections[name].id;
      const section = data.find((item) => item.id == sectionId);
      section.path = houseSections[name].path;
      houseSections[name] = section;
    }
  }

  return houseSections;
}

export function useHouseSection(name) {
  const houseSections = useHouseSections();
  const section = houseSections[name];

  section.list = useHouse({ sectionId: section.id });
  return section;
}

export function useServices(id) {
  const langId = getLangId();

  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["services", aptId, langId];

  const fetchServices = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`services/find`, setError, { langId, token });
  };

  const { data } = useQuery(
    queryKeys,
    fetchServices,
    queryOptions({ enabled: !!aptId })
  );

  if (data && id) {
    return data.find((item) => item.id == id);
  }

  return data;
}

async function fetchData(endpoint, setError, params) {
  let url = `${apiBaseUrl}/${endpoint}`;

  if (params) {
    let joinChar = "?";

    for (let key in params) {
      const value = params[key];

      url += joinChar + key + "=" + value;
      joinChar = "&";
    }
  }

  // console.log(url)
  const result = await fetch(url);
  const data = await result.json();

  if (result.status !== 200) {
    const error = data.error ? data.error : data;
    setError(error);
    throw error;
  }

  return data;
}

function getLangId() {
  let { langId } = useContext(ConfigContext);
  return langId;
}
