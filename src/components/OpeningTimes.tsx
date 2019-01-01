import * as React from 'react';

import { FormattedMessage } from 'react-intl';

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

const sampleDays: Array<{ day: string; times: OpeningTimes }> = [
  { day: 'Monday', times: { open: '', close: '' } },
  { day: 'Tuesday', times: { open: '', close: '' } },
  { day: 'Wednesday', times: { open: '', close: '' } },
  { day: 'Thursday', times: { open: '', close: '' } },
  { day: 'Friday', times: { open: '', close: '' } },
  { day: 'Saturday', times: { open: '', close: '' } },
  { day: 'Sunday', times: { open: '', close: '' } }
];

const getDayElement = (day: string, times?: OpeningTimes) => {
  return {
    day,
    times: times
      ? {
          open: times.open,
          close: times.close
        }
      : { open: '', close: '' }
  };
};

const getOpeningTimeData = (
  days: OpeningDays
): Array<{ day: string; times: OpeningTimes }> => {
  // return [
  //   getDayElement('Monday', days.monday),
  //   getDayElement('Tuesday', days.tuesday),
  //   getDayElement('Wednesday', days.wednesday),
  //   getDayElement('Thursday', days.thursday),
  //   getDayElement('Friday', days.friday),
  //   getDayElement('Saturday', days.saturday),
  //   getDayElement('Sunday', days.sunday)
  // ];
  return sampleDays;
};

interface Props {
  days: OpeningDays;
}

const OpeningTimes = ({ days }: Props) => (
  <div>
    {' '}
    <p className="title is-5">
      <FormattedMessage id="OPENING_TIMES" />
    </p>
    {getOpeningTimeData(days).map(day => (
      <p key={day.day}>{`${day.day}: ${day.times.open} - ${
        day.times.close
      }`}</p>
    ))}
  </div>
);

export default OpeningTimes;
