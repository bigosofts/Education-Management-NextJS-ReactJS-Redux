exports.selectData = async(query, projection) => {

    const payloaddata ={
        query:query,
        projection:projection
    };
    const res = await fetch('/apis/v1/select-abouts', {
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



    const res = await fetch(`/apis/v1/delete-about/${id}`, {
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


exports.createData = async(image,titleen,titlebn,desen,desbn,status) => {

  

  const aboutdata={
    aboutImageLink:image,
    aboutTitle:{
       en:titleen,
       bn:titlebn
    },
    aboutDescription:{
       en:desen,
       bn:desbn
    },
    activeStatus:status
 }

  const res = await fetch(`/apis/v1/create-about`, {
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


exports.updateData = async(image,titleen,titlebn,desen,desbn,status,idValue) => {

  

  const aboutdata={
    _id: idValue,
    aboutImageLink:image,
    aboutTitle:{
       en:titleen,
       bn:titlebn
    },
    aboutDescription:{
       en:desen,
       bn:desbn
    },
    activeStatus:status,
 }

  const res = await fetch(`/apis/v1/update-about`, {
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