import React from "react";
import { useQuery } from "react-query";

const apiUrl = "https://giomiapp.terotero.it/api/resource/labels/all";
// const apiUrl = "http://localhost:3000/labels"

export default function useLabels(language) {
  const { status, data } = useQuery('labels', async () => {
    const res = await fetch(apiUrl);
    return await res.json();
  })

  return (name) => {
    if (! data) {
      return ''
    }

    return data[language][name] || name
  }
}
