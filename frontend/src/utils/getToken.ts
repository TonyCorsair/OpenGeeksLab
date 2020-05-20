export const getToken = () => {
  const result = localStorage.getItem("persist:root");
  if (result != null) {
    const jsonToken = JSON.parse(result).auth;
    const getToken = JSON.parse(jsonToken).accessToken;
    return getToken;
  }
};
