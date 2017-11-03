import React from 'react';

export const NavTop = (props) => {

    return (
        <div className="navtop">
            <div className='container'>
                <div className="icon-bar">
                    <a href="#" onClick={props.handleRefresh}>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x fa-toolbar-buttons"></i>
                          <i className="fa fa-refresh fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}