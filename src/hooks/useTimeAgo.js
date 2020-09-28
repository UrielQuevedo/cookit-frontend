import { useEffect, useState } from 'react';

const MILISECONDS = 1000;
const DAY_SECONDS = 86400;
const HOUR_SECONDS = 3600;
const MINUTE_SECONDS = 60;
const SECOND = 1;

const DATA_UNITS = [
  {
    unit: 'day',
    secondsInUnit: DAY_SECONDS
  },
  {
    unit: 'hour',
    secondsInUnit: HOUR_SECONDS
  },
  {
    unit: 'minute',
    secondsInUnit: MINUTE_SECONDS
  },
  {
    unit: 'second',
    secondsInUnit: SECOND
  }
];

const getDateDiffs = timestamp => {
  const now = Date.now();
  const number_to_remove_miliseconds = 1000;
  const elapsed = (timestamp - now) / number_to_remove_miliseconds;

  for (const { unit, secondsInUnit } of DATA_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
  return null;
};

const useTimeAgo = timestamp => {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));
  const { value, unit } = timeago;

  const perMiliseconds = value_ => value_ * MILISECONDS;

  const getTimeToInterval = () => {
    switch (unit) {
      case 'day':
        return perMiliseconds(DAY_SECONDS);
      case 'hour':
        return perMiliseconds(HOUR_SECONDS);
      case 'minute':
        return perMiliseconds(MINUTE_SECONDS);
      case 'second':
        return perMiliseconds(SECOND);
      default:
        break;
    }
    return null;
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, getTimeToInterval());

    return () => clearInterval(intervel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' });
  return rtf.format(value, unit);
};

export default useTimeAgo;
