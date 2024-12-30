const text =
  "Dear Hari!!,<p>enikh ninne orupaad ishttaa...🥰🥰 enikh ninnodu eppola correct ayitt ishtam thonniye enn areela..😂😂 pashe melle melle korch thudangi...</p><img src='1.gif' alt='🥰'><p>ninnodu mothayitt ishtayath ONATHINTE timeil aarnu...athine sheesham aarnu njanum neeyum nallonam mindithudangiye...<img src='2.gif' alt='🥰'> .............pinne avidenn angott ninne kurich ariyan thudangi ishtapedanum thudangi...angane oru point ethiyapoo ijjinodu mindathe irikhunnath enikh nallonam veshamam aavan thudangi....<img src='3.gif' alt='🥰'></p><p>Athokhe kainj pineedu ijjinodu samsarikhane edakhe njn propose cheyth...😂😂...</p><p>Pashe ijj adiyam no paranj...🫥🫥🫥</p><p>Pashe pineedu athoke kainj nammal ishtathil ayi...😂😂ijjine rand divasam pidich ennodu ishtta pedan....HMMMMM sarilla enthakana...nammalodu crush onnullallooo😒😒😒😒</p><p> pinnedu nammal orumichu....ummakal vechu koree thott arinju...ellam nalla ormakala enikh...</p><p>Ijj orikhillum enne vishamipichitilla eppolum ente koode nikhane nokheett ullu...enne thodumbolum enne snehikhumbolum vallare melle ...pathiye ennodu choichitte enne thodarullu ..snehikharullu...ennodu nalla gentle anu...🥹🥹🥹🥹...enne orikal pollum mosham ayitt ijj perumaritilla eppollum snehathoode pathiye anu enne eppolum snehichekhane...........<img src='load.gif' alt='🥰'><p><p>Enne sherikum ishtam ano?? enn ethra vattam njn choich shalyam cheythitt ind ennalum eppolum ennodu ishatnn enne parayarullu...😂😂😂</p><p>ente ella kurumbinum ..avishyangalkum ...overthinking cheyyumbolum ente koode eppolum kootu ninnte ullu...🥹🥹</p><p>Enikh ijjine athrakum ishtam anu...ijj illante inni avoola...enne eppolum snehikoole..njn edakhe oro ith kanichalum ente koode ijj indavoole...njnn ijjine eppolelum veshamapichitt indegil ennodu shemikoo...njn arinjodd cheyyanath alla...😖😖😖</p><p> ijj ente jeevana...inniyum ulla ella varshavum enikh ijjinte koode jeevikhanam...snehikhanam..kudumbam indakhanam...happy ayitt melle santhoshathode jeevikhanam...</p><p>Ente koode indavoole??</p><p> enikh ijjine othiri ishttaa...oruppad orupaad ishtta...vitt povan avoola...athrakum ishttaa...eniyum varunna puthu varshangal enikh ijjinodu oppam aghoshikhanam.... eppolum ijjinte koode time spend cheyyanam ...</p><p> Happy New Year !! Harii...enni verunna ella varshavum namukh orumich nikhamm...njn eppolum koode ijjine snehikhanum support cheyyanum koode indavum..eppolum🤗🤗🤗</p><p>I LUB YOU!!❤️❤️❤️</p><p><img src='loveyou.gif' alt='🥰'></p><p>HAPPY NEW YEAR!!!</p>";

const paragraph = text.split(/(<[^>]+>|\s+)/); // Split on HTML tags and spaces, keeping the tags

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").innerHTML += arr[i]; // Use innerHTML to handle HTML tags

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
