/**let/const*/
// eslint-disable-next-line prefer-const
let period = 60;
const baseUrl = 'http://localhost:8080';

/**object*/
const firstName = 'Igor';

const account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/**spread*/
const person = {...account};
const dates = [...[11, 12, 13]];


/**destructoring */
const {firstName: myName} = account;
const [firstDate] = dates;

/**template string */

function userMessage([start, end]: TemplateStringsArray, myPerson: typeof account) {
    return `${start}${myPerson.firstName}${end}`;
}

console.log(userMessage`Good day, ${person} !!`)

/**template string */

for (const date of dates) {
    console.log(date);
}


/**arrow fn */
const sum = (a: number, b: number) => a + b;


/**class */

class Point {
    public x = 1;
    public y = 1;

    sum() {
        return 1;
    }
}

/** optional chaining**/
const user: any = {};
const male = user?.info?.male


/** ?? **/
let admin;
const u = admin ?? account;
