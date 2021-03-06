const getLang = () => {
  return 'en-US';
  // Code below would be used in a multi-language app
  // if (navigator.languages != undefined) return navigator.languages[0];
  // return navigator.language;
};

export const formatAge = (age: number) => {
  return age.toLocaleString(getLang(), {
    style: 'unit',
    unit: 'year',
    unitDisplay: 'short',
  });
};

export const formatHeight = (height: number) => {
  return (height / 100).toLocaleString(getLang(), {
    style: 'unit',
    unit: 'meter',
    unitDisplay: 'short',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatWeight = (weight: number) => {
  return (weight / 1000).toLocaleString(getLang(), {
    style: 'unit',
    unit: 'kilogram',
    unitDisplay: 'short',
    maximumFractionDigits: 0,
  });
};

export const formatNumber = (number: number) => {
  return number.toLocaleString(getLang());
};

export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat(getLang()).format(new Date(dateString));
};

export const formatDuration = (
  startDateString: string,
  endDateString: string
) => {
  const diffMs = Math.abs(
    new Date(endDateString).valueOf() - new Date(startDateString).valueOf()
  );
  const diffHours = diffMs / 36e5;
  const hours = Math.floor(diffHours);
  const minutes = Math.floor((diffHours - hours) * 60);
  return `${hours}h ${minutes}min`;
};
