const callACatInside = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Kitty")
    }, 300)
})

// callACatInside
//     .then(cat => console.log(cat))
//     .catch(error => console.error(error))

const waitForACat = async () => {
    const cat = await callACatInside;

    console.log(cat)
}

waitForACat()
