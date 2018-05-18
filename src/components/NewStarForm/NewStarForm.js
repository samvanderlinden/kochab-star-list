import React from 'react';

// this is now a function component
const NewStarForm = props => (
    <form onSubmit={props.handleSubmitForChild}>
        <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder="Star Name" />
        <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="Diameter" />
        <input type="submit" value="Click me to add new star" />
    </form>
);

export default NewStarForm;