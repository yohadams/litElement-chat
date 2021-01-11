export const sendGet = async (url, headers) => {
  return await fetch(url, { method: "GET" })
  .then(res => res.json())
  .catch(error => console.error(`Error on endpoint ${url} \n ${error}`));
};
