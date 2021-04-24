Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function deliveryMethod() {
    // TODO
    return 'overnight';
}

function shipWeight() {
    const el = document.getElementById('weight') as HTMLElement;
    // if (!el) {
    //     return 0;
    // }
    return parseInt(el.innerHTML);
}

/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr: string | string[]) {
    /**
     * @param {string} addr
     */
    function sendEmail(addr: string) {
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

// let input = document.querySelector('input') as HTMLInputElement
// input.addEventListener('input', (e) => {
//     const el = e.target as HTMLInputElement;
//     // el.value
// })


// function controller(_: any, res: any) {
//     return res;
// }


const myValue = 1;
