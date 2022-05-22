const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getTodayDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  if (day > 3 && day < 21) return `${month} ${day}th ${year}`;
  switch (day % 10) {
    case 1:
      return `${month} ${day}st ${year}`;
    case 2:
      return `${month} ${day}nd ${year}`;
    case 3:
      return `${month} ${day}rd ${year}`;
    default:
      return `${month} ${day}th ${year}`;
  }
};
