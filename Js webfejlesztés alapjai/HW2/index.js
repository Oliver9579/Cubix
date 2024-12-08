const L1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully after 1 second!");
    }, 1000);
});

L1.then((response) => console.log(response));

const L2 = async () => {
    const delayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved successfully after 1 second!");
        }, 1000);
    });

    const response = await delayPromise;
    console.log(response);
}

L2();


const L3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5
            ? resolve("Promise resolved successfully!")
            : reject("Promise rejected!");
    }, 1000);
});

L3
    .then((response) => console.log(response))
    .catch((error) => console.error("Error:", error));

const randomAsyncPromise= async () => {
    const randomPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve("Promise resolved successfully!")
                : reject("Promise rejected!");
        }, 1000);
    });

    try {
        const response = await randomPromise;
        console.log(response);
    } catch (error) {
        console.error("Caught Error:", error);
    }
}

randomAsyncPromise();

const L5 = async () => {
    try {
        const response = await fetch("https://api.genderapi.io/api/?name=Oliver");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response Data:", data);
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

L5();
