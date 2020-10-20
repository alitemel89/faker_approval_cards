import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments" >

            <ApprovalCard >
                <CommentDetail author="Sam" timeAgo="Today at 3:47am" post="Nice blog post" avatar={faker.image.avatar()}  />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="John" timeAgo="Today at 3:47am" post="Wow it is really helpful!" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jack" timeAgo="Today at 3:47am" post="Totally agree :)" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)