import React from 'react'
import {ProfileDetailsContent} from './ProfileDetailsContent'
export const ProfileDetails = (props) => {
    return (
        <div className="profile-details">
            <div className="profile-details-header">
                <h4><i className="fa fa-user-circle" aria-hidden="true"></i> Profile Details</h4>
            </div>
            <div className="profile-details-body">
                {props.profile && <ProfileDetailsContent profile={props.profile} /> }
            </div>
            <div className="profile-details-footer">
                <button type="button" className='btn  btn-sm' onClick={props.handleCloseModal}>Close</button>
            </div>
        </div>

    )
}