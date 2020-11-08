export const pictureAPI = async (ofYear, ofDay) => {
  try {
    const baseUrl = 'https://api.unsplash.com/photos/random';
    const queryString = `?query=month,${ofYear}?query=morning-noon-evening-night,${ofDay}`;
    const clientAssKey = '&client_id=bbc5dc295d7d923fda9957332f4e4cccfedaa9939bed0e4675659c2b704fa37c';
    const url = baseUrl + queryString + clientAssKey;
    const res = await fetch(url);
    const data = await res.json();
    const link = data.urls.small;
    return link;
  } catch (err) {
    throw err;
  }
}
