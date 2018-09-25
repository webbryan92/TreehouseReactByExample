import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName'

const GuestName = props => {
    if (props.isEditing) {
        return (
            <input type="text" value={props.children} />
        );
    }
    return (
        <span>{props.children}</span>
    );
};

Guest.propTypes = {
    isEditing: PropTypes.bool.isRequired
}
export default Guest;