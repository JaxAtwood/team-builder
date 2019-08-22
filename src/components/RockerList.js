import React from "react";


const RockerList = props => {
    return (
    <div className= "theList"> 
    {props.theList.map (item => {
        return (
            <div className= "rocker" key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.email}</h3>
                <p>{item.role}</p>
                <p>{item.age}</p>
                <p>{item.birthplace}</p>
                <p>{item.acts}</p>
            </div>
        );
    })}
    </div>
    );
};
export default RockerList;