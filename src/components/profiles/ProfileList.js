import React from 'react';
import PropTypes from 'prop-types';
import {Profile} from './Profile';
import _ from 'lodash';

export const ProfileList = (props) => {

    const renderGroupedProfiles = (profiles) => {
        return _.chunk(profiles, 3);

    }

    return (
        <div className='profile-list'>
            {renderGroupedProfiles(props.pictures).map((chunkProfile, groupIndex) => {
                return (<div key={groupIndex} className="row">
                    {chunkProfile.map((profile, index) => <Profile handleSelectProfile={props.handleSelectProfile} key={profile.id.value + index} profile={profile} />)}
                </div>)
            })}
        </div>
    )
}
ProfileList.propTypes = {
    pictures: PropTypes.array.isRequired,
    handleSelectProfile: PropTypes.func.isRequired
}


