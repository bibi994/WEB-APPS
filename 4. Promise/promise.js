const init = () => {


    new Promise((resolve, rejected) => {
        resolve(new Date());
    }).then((currentTime) => {
        console.log(currentTime);
    })

    const promises = [];

    for (let i = 0; i < 100; i++) {

        const promise = new Promise((resolve) => {
            const id = i;
            const random = Math.random() * 2000;

            setTimeout(() => {
                resolve(id)
            }, random)
        })
            .then((id) => {
                console.log(id)
            })
        promises.push(promise);
    }

    Promise.all(promises).then((value) => {

        console.log("finished")
    })

}

export { init };