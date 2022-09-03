const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");

    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}


orderCoffee(coffee => {
    console.log(coffee);
});


/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/

const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

// checkStock().then(handleSuccess, handleFailure);
checkStock()
    .then(handleSuccess)
    .catch(handleFailure);

// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStock();
//         await Promise.all([boilWater(), grindCoffeeBeans()]);
//         const coffee = await brewCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }