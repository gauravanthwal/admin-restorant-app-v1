export const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getStorage("user")?.token}`,
      ContentType: "application/json",
    },
  };
};
