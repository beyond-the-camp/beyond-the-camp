import * as React from 'react';

import { ProjectTemplate } from '../../templates/project';
import { Layout } from '../../components/Layout';

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
    <Layout language="en">
      <ProjectTemplate
        title={entry.getIn(['data', 'title'])}
        cover={getAsset(entry.getIn(['data', 'cover']))}
        html={entry.getIn(['data', 'body'])}
        openingTimes={openingTimes}
        location={location}
      />
    </Layout>
  );
};

export default ProjectPagePreview;
