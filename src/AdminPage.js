import React from "react";
import {Block} from "jsxstyle";

class AdminPage extends React.Component{
constructor(props){
    super(props);
}


render(){

    return (
        <>
            <Block backgroundColor="blue">
                Admin Page
            </Block>
            <button>Add</button>
            <button>Edit</button>
            <button>Delete</button>
        </>

    );
}
}

export default AdminPage;