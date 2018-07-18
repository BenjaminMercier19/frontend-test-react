import React from 'react';
import PropTypes from 'prop-types';
import { MdInfo } from 'react-icons/lib/md';

import './activity.css';
import ActivityDirection from './ActivityDirection';

const propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    via: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    callType: PropTypes.string.isRequired,
  }).isRequired,
};

class Activity extends React.Component {
  componentDidMount() {

  }

  render() {
    const { activity } = this.props;

    return (
      <div className="activity">
        <ActivityDirection
          direction={activity.direction}
          callType={activity.callType}
        />
        <div className="activity_details">
          <span className="acitvity_from">
            {activity.from}
          </span>
          <span className="acitvity_to">
            {`Tried to call ${activity.to}`}
          </span>
          <span className="acitvity_duration">
            {`during ${activity.duration} s`}
          </span>
        </div>
        <div className="activity_more-action">
          <MdInfo />
        </div>
      </div>
    );
  }
}

Activity.propTypes = propTypes;

export default Activity;
