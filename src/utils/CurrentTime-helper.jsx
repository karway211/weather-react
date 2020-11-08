export const currentDay = () => {
  const currentTime = new Date();
  let timeOfDay;
  if (currentTime.getHours() < 6) timeOfDay = 'night';
  if (currentTime.getHours() < 12) timeOfDay = 'morning';
  if (currentTime.getHours() < 18) timeOfDay = 'daytime';
  if (currentTime.getHours() <= 23) timeOfDay = 'evening';
  return timeOfDay;
}

export const currentMonth = () => {
  const currentTime = new Date();
  let timeOfYear;
  if (currentTime.getHours() === 11) timeOfYear = 'winter';
  if (currentTime.getMonth() < 11) timeOfYear = 'spring';
  if (currentTime.getMonth() < 8) timeOfYear = 'summer';
  if (currentTime.getMonth() < 5) timeOfYear = 'autumn';
  if (currentTime.getMonth() < 2) timeOfYear = 'winter';
  return timeOfYear;
}
