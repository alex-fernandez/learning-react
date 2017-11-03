import React, {Component} from 'react';
import {ProfileList} from '../components/profiles/ProfileList';
import {ProfileDetails} from '../components/profiles/ProfileDetails';
import {API_ROOT} from "../config/api";
import {NavTop} from "../components/header/NavTop";
import ReactModal from 'react-modal';

class Profile extends Component {

    state = {
        profiles: [],
        isLoading: false,
        error: null,
        showModal: false,
        profile: null,
    }

    componentDidMount() {
        this.requestProfiles();
    }

    requestProfiles = () => {
        this.setState({
            isLoading: true
        });
        fetch(`${API_ROOT}/api?results=15`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState(
                    {
                        profiles: data.results,
                        isLoading: false
                    }
                );
            }).catch(error => {
                this.setState({
                    error: error,
                    isLoading: false
                });
            }
        );

    }
    handleRequest = (evt) => {
        evt.preventDefault();
        this.requestProfiles();
    }

    renderImages = (pictures) => {
        return <ProfileList pictures={pictures} handleSelectProfile={this.handleOpenModal}/>
    }

    handleOpenModal = (profile) => {
        this.setState({
            showModal: true,
            profile: profile
        })
    }

    handleCloseModal = (evt) => {
        evt.preventDefault()
        this.setState({
            showModal: false
        })
    }


    render() {

        return (
            <div>
                <NavTop handleRefresh={this.handleRequest}/>
                <div className='container'>
                    {this.state.isLoading && <div className='refresh-loading'> Loading </div>}
                    {!this.state.isLoading && this.renderImages(this.state.profiles)}
                </div>
                <ReactModal isOpen={this.state.showModal} contentLabel="Profile" className="Modal" overlayClassName="Overlay">
                    <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.handleCloseModal}>&times;</a>
                    <ProfileDetails profile={this.state.profile} handleCloseModal={this.handleCloseModal} />
                </ReactModal>
            </div>
        );
    }
}

export default Profile;
