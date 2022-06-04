export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const now = new Date(date).toLocaleDateString("es-ES", options);

  return now;
};
