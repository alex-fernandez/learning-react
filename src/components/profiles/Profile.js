import React, {Component} from 'react';
import {partial} from "../../lib/utils";

export const Profile = (props) => {

    const handleSelectProfile = partial(props.handleSelectProfile, props.profile)


    return (
        <div className="col-md-4">
            <div className="card profile-card">
                <div className="card-body">
                    <div className="media card-header">
                        <img className="mr-3 rounded-circle" src={props.profile.picture.medium}/>
                        <div className="media-body">
                            <h5 className="mt-0">{props.profile.name.title} {props.profile.name.first}</h5>
                            <p className="mt-0">{props.profile.email}</p>
                            <p className="mt-0">{props.profile.location.city}, {props.profile.location.state}</p>
                        </div>
                    </div>
                    <div className="profile-body">

                    </div>
                    <div className="profile-details">
                        <a className='view-details' onClick={handleSelectProfile}>View Details</a>
                    </div>
                </div>

            </div>
        </div>
    )

}
