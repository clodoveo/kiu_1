const apiUrl = "https://giomiapp.terotero.it/api/resource/info/list?langid=1";

export default {
  fetch: (langId) => {
    const url = apiUrl + "?langid=" + langId;

    return fetch(url).then((response) => response.json());
  }
};
