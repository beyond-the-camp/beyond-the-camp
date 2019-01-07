import * as React from 'react';

import { FormattedMessage, FormattedTime } from 'react-intl';

interface OpeningTimes {
  open: string;
  close: string;
}

export interface OpeningDays {
  monday?: OpeningTimes;
  tuesday?: OpeningTimes;
  wednesday?: OpeningTimes;
  thursday?: OpeningTimes;
  friday?: OpeningTimes;
  saturday?: OpeningTimes;
  sunday?: OpeningTimes;
}

const getDayElement = (day: string, times?: OpeningTimes) => {
  return {
    day,
    times
  };
};

const getOpeningTimeData = (
  days: OpeningDays
): Array<{ day: string; times?: OpeningTimes }> => {
  return [
    getDayElement('MONDAY', days.monday),
    getDayElement('TUESDAY', days.tuesday),
    getDayElement('WEDNESDAY', days.wednesday),
    getDayElement('THURSDAY', days.thursday),
    getDayElement('FRIDAY', days.friday),
    getDayElement('SATURDAY', days.saturday),
    getDayElement('SUNDAY', days.sunday)
  ];
};

interface Props {
  days: OpeningDays;
}

const OpeningTimes = ({ days }: Props) => (
  <div>
    <p>
      <FormattedMessage id="OPENING_TIMES" />
    </p>
    {getOpeningTimeData(days).map(day => (
      <p key={day.day}>
        <FormattedMessage id={day.day} />
        {': '}
        {day.times && day.times.open && (
          <FormattedTime value={`2018-01-01 ${day.times.open}`} />
        )}
        {' - '}
        {day.times && day.times.close && (
          <FormattedTime value={`2018-01-01 ${day.times.close}`} />
        )}
      </p>
    ))}
  </div>
);

export default OpeningTimes;
