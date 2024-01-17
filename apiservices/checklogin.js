const axios = require("axios");

exports.isAdmin = async() => {

    
    const response = await axios.get(`${process.env.URL}/apis/v1/isAdmin`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.status === 200) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return response.data;
}


exports.studentLogin = async(userName, password) => {

    const payloaddata ={
        userName,
        password
    };
    const res = await fetch(`${process.env.URL}/apis/v1/student-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payloaddata),
    })

    if(!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

exports.teacherLogin = async(userName, password) => {

    const payloaddata ={
        userName,
        password
    };
    const res = await fetch(`${process.env.URL}/apis/v1/teacher-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payloaddata),
    })

    if(!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


exports.logout = async() => {


    const res = await fetch(`${process.env.URL}/apis/v1/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


