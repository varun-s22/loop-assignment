const loginHandler = async (username, password) => {
  const params = new URLSearchParams({
    view: "Grid view",
    filterByFormula: `username="${username}"`,
    filterByFormula: `password="${password}"`,
  });
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_LOGIN_ID}/credenitals?` +
      params,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    }
  );
  try {
    const data = await response.json();
    return data.records?.length > 0 ? data.records[0] : {};
  } catch (error) {
    console.log(error);
  }
};
export default loginHandler;
