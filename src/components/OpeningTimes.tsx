import * as React from 'react';

import { FormattedMessage, FormattedTime } from 'react-intl';

interface OpeningTimes {
  day: string;
  open: string;
  close: string;
}

type OpeningDays = OpeningTimes[];

interface Props {
  days: OpeningDays;
}

export const OpeningTimes = ({ days }: Props) => (
  <>
    <h3>
      <FormattedMessage id="OPENING_TIMES" />
    </h3>
    {days &&
      days
        .filter(day => day.day && day.open && day.close)
        .map(day => (
          <div key={day.day} className="flex justify-start">
            <div className="flex-1">{day.day}</div>
            <div className="flex-1">
              <FormattedTime value={day.open} />
              {' - '}
              <FormattedTime value={day.close} />
            </div>
          </div>
        ))}
  </>
);
