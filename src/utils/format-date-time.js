const LOCAL = 'es-AR';

const TIME_CONFIG = {
  hour: '2-digit',
  minute: '2-digit'
};

const DATE_CONFIG = {
  month: 'short',
  day: '2-digit'
};

const customFormatter = (date, config) => {
  const dateParsed = new Date(date);
  const formatter = new Intl.DateTimeFormat(LOCAL, config);
  return formatter.format(dateParsed);
};

export const formatDateAndTime = date =>
  `${customFormatter(date, DATE_CONFIG)} ${customFormatter(date, TIME_CONFIG)}`;
