import React from 'react'

export const ProfileDetailsContent = (props) => {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" className="form-control" id="inputEmail4" value={props.profile.name.first}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" className="form-control" id="inputPassword4" value={props.profile.name.last}/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" value={props.profile.location.street}/>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" value={props.profile.location.city}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input type="text" className="form-control" id="inputCity" value={props.profile.location.state}/>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={props.profile.location.postcode}/>
                </div>
            </div>

        </form>
    )
}