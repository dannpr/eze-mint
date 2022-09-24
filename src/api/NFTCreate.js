
const axios = require("axios");

export async function createContract(nameNFT, SymbolNFT) {
    const createNFT = {
        "key": process.env.THENTIC_API,
        "chain_id": 97,
        "name": nameNFT,
        "short_name": SymbolNFT
    }

    const createNFTJson = JSON.stringify(createNFT);

    console.log(createNFT);
    console.log(createNFTJson);

    const options = {
        method: 'POST',
        url: 'https://thentic.p.rapidapi.com/nfts/contract',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API,
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        data: createNFTJson
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        const data = JSON.stringify(response.data);
        const d = JSON.parse(data);
        console.log(data);
        console.log(d.transaction_url);

        const wnd = window.open(d.transaction_url);
        setTimeout(function () {
            wnd.close();
        }, 10000);

    }).catch(function (error) {
        console.error(error);
    });

}


