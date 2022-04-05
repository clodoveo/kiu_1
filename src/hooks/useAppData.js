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

    return data[langId][name] || name;
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

export function useVideos() {
  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const langId = getLangId();

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["playlist", aptId];

  const fetchVideos = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`videos/find`, setError, { token, langId });
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

  const queryKeys = ["info", aptId];

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

export function useHouse() {
  const langId = getLangId();

  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["house", aptId];

  const fetchHouse = ({ queryKey }) => {
    const [name, aptId] = queryKey;
    return fetchData(`alloggio/by_token`, setError, { langId, token });
  };

  const { data } = useQuery(
    queryKeys,
    fetchHouse,
    queryOptions({ enabled: !!aptId })
  );

  return data;
}

export function useServices(id) {
  const langId = getLangId();

  const { setError } = useContext(AppContext);
  const { reservationToken: token } = useContext(ConfigContext);

  const reservation = useReservation();
  const aptId = reservation ? reservation.apartment.id : null;

  const queryKeys = ["services", aptId];

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
