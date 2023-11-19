import * as React from 'react';

import { FormattedMessage, FormattedTime } from 'react-intl';

interface OpeningTimesData {
  day: string;
  open: string;
  close: string;
}

interface Props {
  days: OpeningTimesData[];
}

export const OpeningTimes = ({ days }: Props) => (
  <div className="bg-white border p-4">
    <h3>
      <FormattedMessage id="OPENING_TIMES" />
    </h3>
    {days &&
      days
        .filter((day) => day.day && day.open && day.close)
        .map((day, index, days) => {
          const prevDay = index > 0 ? days[index - 1].day : undefined;
          const isSameDay = day.day === prevDay;
          return (
            <div key={day.day} className="flex sm:px-5">
              <div className="flex flex-2 sm:flex-1">
                {isSameDay ? '' : day.day}
              </div>
              <div className="flex flex-3 sm:flex-1">
                <span>
                  <FormattedTime value={new Date(day.open)} />
                  <span>{' - '}</span>
                  <FormattedTime value={new Date(day.close)} />
                </span>
              </div>
            </div>
          );
        })}
  </div>
);
