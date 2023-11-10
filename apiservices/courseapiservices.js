exports.selectData = async(query, projection) => {

   

    const payloaddata ={
        query:query,
        projection:projection
    };
    const res = await fetch('/apis/v1/select-courses', {
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



    const res = await fetch(`/apis/v1/delete-course/${id}`, {
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


exports.createData = async(imageLink,courseCode,titleen,titlebn,descriptionen,descriptionbn,categoriesen, categoriesbn,startingDateen, startingDatebn,popularityen, popularitybn,jamatName,activeStatus) => {

 

  const aboutdata={
    imageLink:imageLink,
    courseCode:courseCode,
    title:{
        en:titleen,
        bn:titlebn
    },
    description:{
        en:descriptionen,
        bn:descriptionbn
    },
    categories:{
        en:categoriesen,
        bn:categoriesbn
    },
    startingDate:{
        en:startingDateen,
        bn:startingDatebn
    },
    popularity:{
        en:popularityen,
        bn:popularitybn
    },
    jamatName: jamatName,
    activeStatus: activeStatus
 }

  const res = await fetch(`/apis/v1/create-course`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aboutdata)
  })

  if(!res.ok) {
    console.log(res.json());
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json()
}


exports.updateData = async(imageLink,courseCode,titleen,titlebn,descriptionen,descriptionbn,categoriesen, categoriesbn,startingDateen, startingDatebn,popularityen, popularitybn,jamatName,activeStatus,idValue) => {



  const aboutdata={
    _id: idValue,
    imageLink:imageLink,
    courseCode:courseCode,
    title:{
        en:titleen,
        bn:titlebn
    },
    description:{
        en:descriptionen,
        bn:descriptionbn
    },
    categories:{
        en:categoriesen,
        bn:categoriesbn
    },
    startingDate:{
        en:startingDateen,
        bn:startingDatebn
    },
    popularity:{
        en:popularityen,
        bn:popularitybn
    },
    jamatName: jamatName,
    activeStatus: activeStatus
 }

  const res = await fetch(`/apis/v1/update-course`, {
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