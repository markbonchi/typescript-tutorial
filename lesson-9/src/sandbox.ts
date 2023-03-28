type strOrNum = string|number;
type objWithName = { name: string, uid: strOrNum }

const logDetails = (uid: strOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
    console.log(`${user} says hello`);
};