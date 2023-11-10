exports.selectData = async(query, projection) => {

  

    const payloaddata ={
        query:query,
        projection:projection
    };
    const res = await fetch('/apis/v1/select-students', {
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
exports.selectAllData = async(query, projection) => {

   

    const payloaddata ={
        query:query,
        projection:projection
    };
    const res = await fetch('/apis/v1/select-all-students', {
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


exports.deleteData = async(id) => {

   


    const res = await fetch(`/apis/v1/delete-student/${id}`, {
        method: 'DELETE',
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


exports.createData = async(firstNameen,firstNamebn,lastNameen, lastNamebn,nidNumber,birthRegNumber,fatherNameen,fatherNamebn,emailAddress,password,mobileNumber,occupation,studentCourseCode,studentJamatCode,gender,dateOfBirth,countryName,fullPresentAddress,fullPermanentAddress,admissionSession,studentMotive,paymentStatus,userRole,activeStatus) => {

  

  const aboutdata={
    firstName:{
        en:firstNameen,
        bn:firstNamebn
     },
     lastName:{
        en:lastNameen,
        bn:lastNamebn
     },
     nidNumber:nidNumber,
     birthRegNumber:birthRegNumber,
     fatherName:{
        en:fatherNameen,
        bn:fatherNamebn
     },
     emailAddress:emailAddress,
     password:password,
     mobileNumber:mobileNumber,
     occupation:occupation,
     studentCourseCode:studentCourseCode,
     studentJamatCode:studentJamatCode,
     gender:gender,
     dateOfBirth:dateOfBirth,
     countryName:countryName,
     fullPresentAddress:fullPresentAddress,
     fullPermanentAddress:fullPermanentAddress,
     admissionSession:admissionSession,
     studentMotive:studentMotive,
     paymentStatus:paymentStatus,
     activeStatus:activeStatus
 }

  const res = await fetch(`/apis/v1/create-student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aboutdata)
  })

  if(!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


exports.updateData = async(userName,firstNameen,firstNamebn,lastNameen, lastNamebn,nidNumber,birthRegNumber,fatherNameen,fatherNamebn,emailAddress,password,mobileNumber,occupation,studentCourseCode,studentJamatCode,gender,dateOfBirth,countryName,fullPresentAddress,fullPermanentAddress,admissionSession,admissionDate,studentMotive,paymentStatus,userRole,activeStatus,idValue) => {

 

  const aboutdata={
    _id: idValue,
    firstName:{
        en:firstNameen,
        bn:firstNamebn
     },
     lastName:{
        en:lastNameen,
        bn:lastNamebn
     },
     nidNumber:nidNumber,
     birthRegNumber:birthRegNumber,
     fatherName:{
        en:fatherNameen,
        bn:fatherNamebn
     },
     emailAddress:emailAddress,
     password:password,
     mobileNumber:mobileNumber,
     occupation:occupation,
     studentCourseCode:studentCourseCode,
     studentJamatCode:studentJamatCode,
     gender:gender,
     dateOfBirth:dateOfBirth,
     countryName:countryName,
     fullPresentAddress:fullPresentAddress,
     fullPermanentAddress:fullPermanentAddress,
     admissionSession:admissionSession,
     studentMotive:studentMotive,
     paymentStatus:paymentStatus,
     activeStatus:activeStatus,
     userRole:userRole,
     userName:userName,
     admissionDate:admissionDate
 }

  const res = await fetch(`/apis/v1/update-student`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aboutdata)
  })

  if(!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}