import React, { useContext } from "react";
import { useQuery } from "react-query";

import { ConfigContext } from "../contexts/ConfigContext";

const apiUrl = "https://giomiapp.terotero.it/api/resource/labels/all";
// const apiUrl = "http://localhost:3000/labels"

export default function useLabels() {
  const { labels, setLabels } = useContext(ConfigContext);

  return useQuery("labels", () => {
    return async () => {
      if (labels) {
        return labels;
      }

      const res = await fetch(apiUrl);
      const data = await res.json();

      setLabels(data);
      return data;
    };
  });
}
