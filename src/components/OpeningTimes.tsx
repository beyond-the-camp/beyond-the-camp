import * as React from 'react';

import { FormattedMessage, FormattedTime } from 'react-intl';

interface OpeningTimes {
  day: string;
  open: string;
  close: string;
}

interface Props {
  days: OpeningTimes[];
}

export const OpeningTimes = ({ days }: Props) => (
  <div className="bg-white border p-4">
    <h3>
      <FormattedMessage id="OPENING_TIMES" />
    </h3>
    {days &&
      days
        .filter(day => day.day && day.open && day.close)
        .map((day, index, days) => {
          const prevDay = index > 0 ? days[index - 1].day : undefined;
          const isSameDay = day.day === prevDay;
          return (
            <div key={day.day} className="flex justify-start">
              <div className="flex-1">{isSameDay ? '' : day.day}</div>
              <div className="flex-1">
                <FormattedTime value={day.open} />
                {' - '}
                <FormattedTime value={day.close} />
              </div>
            </div>
          );
        })}
  </div>
);
