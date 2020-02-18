const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Tam',
        //     age: 30
        // });
        reject('Something went wrong');
    }, 1500);

});


promise.then((data) => {
    console.log('1', data);
});

promise.then((data) => {
    console.log('2', data);
});


