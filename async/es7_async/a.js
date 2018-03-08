const p = console;

async(() => {
    const a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(100)
        }, 100);
    });
    const b = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(200)
        }, 100);
    });

    p.log(a)
    p.log(b)
});