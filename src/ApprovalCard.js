import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card" style={{marginTop: 10}}>
            <div className="content"> {props.children} </div>
            <div className="extra content">
                <div className="ui buttons">
                    <div className="ui basic green button">Aproval</div>
                    <div className="ui basic red button"> Reject </div>
                </div>
            </div>
        </div>
    )
}


export default ApprovalCard