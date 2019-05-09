import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import { ProjectTemplate } from '../../templates/project';
import { NavBar } from '../../components/NavBar';

import * as enData from 'react-intl/locale-data/en';
import en from '../../i18n/en';

addLocaleData([...enData]);

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAsset: any;
}

const ProjectPagePreview = ({ entry, getAsset }: Props) => {
  const openingTimesData = entry.getIn(['data', 'openingTimes']);
  const openingTimes = openingTimesData ? openingTimesData.toJS() : [];
  const locationData = entry.getIn(['data', 'location']);
  const location = locationData && locationData.toJS();

  return (
    <IntlProvider locale="en" messages={en}>
      <div className="bg-grey-lighter min-h-screen overflow-x-hidden">
        <NavBar language="en" />
        <main className="pb-4">
          <ProjectTemplate
            title={entry.getIn(['data', 'title'])}
            cover={getAsset(entry.getIn(['data', 'cover']))}
            html={entry.getIn(['data', 'body'])}
            openingTimes={openingTimes}
            location={location}
          />
        </main>
      </div>
    </IntlProvider>
  );
};

export default ProjectPagePreview;
