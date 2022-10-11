let count = 52;
let deckID = null;

async function deskCard(type){
    if(type === 'shuffle'){
        count = 52;
    }

    document.getElementById('divRemainingCards').className = "";


    if(count === 52){
        document.getElementById("remainingCards").innerHTML = "New desk ! Remaining cards : "+count;
        const api_url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        deckID = json.deck_id;
    }
    else{
        document.getElementById("remainingCards").innerHTML = "Remaining cards : "+count;
    }
    const api_url2 = "https://www.deckofcardsapi.com/api/deck/"+deckID+"/draw/?count=1";
    const fetch_response2 = await fetch(api_url2);
    const json2 = await fetch_response2.json();
    console.log(json2);
    count -= 1;

    if(count === 0){
        count = 52;
    }



    let imgCard = document.getElementById("cardIMG");
    imgCard.src = json2.cards[0].image;
    imgCard.alt = "card "+json2.cards[0].code;
}