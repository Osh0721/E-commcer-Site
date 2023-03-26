function displayXML() 
{
    var txt, parser, xmlDoc;
    txt = "<OrderList><item><details>00010</details><details>2021-05-25 00:12</details><details>leather belt</details><details>Rs.5000</details><details>1</details><details>Rs.5000</details></item>"+
        "<item><details>10017</details><details>2020-08-25 10:12</details><details>blue Trouser</details><details>Rs.10,000</details><details>2</details><details>Rs.10,000</details></item>"+
        "<item><details>23045</details><details>2021-08-21 05:31</details><details>levis denim shirt</details><details>Rs.15,000</details><details>1</details><details>Rs.15,000</details></item>"+
        "<item><details>05019</details><details>2021-05-02 03:12</details><details> Hershey t shirt</details><details>Rs.4,000</details><details>2</details><details>Rs.8,000</details></item>"+
        "<item><details>60417</details><details>2020-12-23 08:42</details><details>levis slim fit denim</details><details>Rs.12,000</details><details>1</details><details>Rs.12,000</details></item>"+
        "<item><details>32010</details><details>2021-05-25 05:12</details><details>adidas sweatpant</details><details>Rs.15,000</details><details>1</details><details>Rs.15,000</details></item>"+
        "<item><details>45310</details><details>2019-08-12 05:12</details><details>ladys skirt</details><details>Rs.5,000</details><details>1</details><details>Rs.5,000</details></item>"+
        "<item><details>56111</details><details>2020-11-16 09:19</details><details>orange regular fit denim</details><details>Rs.10,000</details><details>1</details><details>Rs.10,000</details></item>"+
        "<item><details>00810</details><details>2021-10-23 12:07</details><details>men long sleeves tshirt</details><details>Rs.5,500</details><details>2</details><details>Rs.11,000</details></item>"+
        "<item><details>92010</details><details>2021-01-24 01:50</details><details>Apple iwatch series 7</details><details>Rs.219,000</details><details>1</details><details>Rs.219,000</details></item></OrderList>";
        




    parser = new DOMParser();
    xmlDoc = parser.parseFromString(txt,"text/xml");
    for(var i = 0; i <68; i++)
    {
        document.getElementsByTagName("p")[i+0].innerHTML = xmlDoc.getElementsByTagName("details")[i].childNodes[0].nodeValue;

    }

}

function color(value)
{
    document.body.style.backgroundColor=value;
}



function changeFontColor(getFontColor){
    let leaderboard = document.querySelector('#font_cl');
    let selectFontColor = getFontColor.value;
    leaderboard.style.color = selectFontColor;
}
