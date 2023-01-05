const tokenConfig = () => {
    // Get token from localstorage
    const authToken = localStorage.getItem('__AUTH_TOKEN')
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json',
        },
    }

    // If token, add to headers
    if (authToken) {
        config.headers['authorization'] = authToken
    }

    return config
}

export default tokenConfig;
