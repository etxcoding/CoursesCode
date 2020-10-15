function doSum() {

    var inputSum1 = document.getElementById('inputSum1');
    var inputSum2 = document.getElementById('inputSum2');

    var resultSum = document.getElementById('resultSum');

    //return console.log(Number(inputSum1.value) + Number(inputSum2.value));

    resultSum.innerHTML = `Resultado: ${Number(inputSum1.value) + Number(inputSum2.value)}`;
}

function saveArticle() {
    var article = document.getElementById('inputArticle');
    var ulList = document.getElementById('ulList');

    ulList.innerHTML += `<li>${article.value}</li>`;

    article.value = '';
    article.focus();
}