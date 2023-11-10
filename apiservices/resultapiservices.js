exports.selectData = async(query, projection) => {

   

    const payloaddata ={
        query:query,
        projection:projection
    };
    const res = await fetch('/apis/v1/select-results', {
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

    


    const res = await fetch(`/apis/v1/delete-result/${id}`, {
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


exports.createData = async(resultRollNo,resultRegNo,studentUserId,studentExamMadrasha,studentExamCentre,studentSubMark,studentGrade,studentMerit,activeStatus) => {

 

  const aboutdata={
    resultRollNo:resultRollNo,
    resultRegNo:resultRegNo,
    studentUserId:studentUserId,
    studentExamMadrasha:studentExamMadrasha,
    studentExamCentre:studentExamCentre,
    studentSubMark:studentSubMark,
    studentGrade:studentGrade,
    studentMerit:studentMerit,
    activeStatus:activeStatus
 }

  const res = await fetch(`/apis/v1/create-result`, {
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


exports.updateData = async(resultRollNo,resultRegNo,studentUserId,studentExamMadrasha,studentExamCentre,studentSubMark,studentGrade,studentMerit,activeStatus,idValue) => {

 

  const aboutdata={
    _id: idValue,
    resultRollNo:resultRollNo,
    resultRegNo:resultRegNo,
    studentUserId:studentUserId,
    studentExamMadrasha:studentExamMadrasha,
    studentExamCentre:studentExamCentre,
    studentSubMark:studentSubMark,
    studentGrade:studentGrade,
    studentMerit:studentMerit,
    activeStatus:activeStatus
 }

  const res = await fetch(`/apis/v1/update-result`, {
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