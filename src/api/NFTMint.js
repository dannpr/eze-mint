
const axios = require("axios");

export async function MintNFT(nftData, Address, contract) {
    let id = 0;

    const mintNFT = {
        "key": process.env.THENTIC_API,
        "chain_id": 97,
        // should be contract 
        "contract": "0xca0926b2691e4e3d955a51e76f9e2ffb6ab554f1",
        "nft_id": id,
        // nft metadata means a url on ipfs
        "nft_data": nftData,
        "to": Address
    }
    id++;
    const mintNFTJson = JSON.stringify(mintNFT);

    console.log(mintNFT);
    console.log(mintNFTJson);

    const options = {
        method: 'POST',
        url: 'https://thentic.p.rapidapi.com/nfts/mint',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API,
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        data: mintNFTJson
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
