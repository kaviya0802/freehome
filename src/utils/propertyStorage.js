export const getAgentProperties = () => {
  const properties =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  return properties;
};

export const saveAgentProperty = (property) => {
  const existing =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  localStorage.setItem(
    "agentProperties",
    JSON.stringify([...existing, property])
  );
};