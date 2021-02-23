export const fetcher = (url: string) => {
    console.log("---fetching")
    return fetch(url).then(r => r.json());
}

const randomNumber = () => 
     Math.floor((Math.random() * 9999) + 1000)

export const updateCodes = async() => { 
    await fetch('http://localhost:3000/codes/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": "Vue App Auth",
        "code": `${randomNumber()} ${randomNumber()}`,
      })
    })

    await fetch('http://localhost:3000/codes/2', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": "React App Auth",
          "code": `${randomNumber()} ${randomNumber()}`,
        })
      })
}