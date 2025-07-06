Notification = ({message, notificationType}) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (message === null) {
        return null
    }

    else if(notificationType === 'error'){
        return(
        <div style={errorStyle}>
            {message}
        </div>
    )
    }

    return(
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification