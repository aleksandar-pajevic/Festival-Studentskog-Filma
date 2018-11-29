let template = document.querySelector('#template').innerHTML;
let cardsHolder = document.getElementById('cards-holder');

var req = new XMLHttpRequest();

req.overrideMimeType('application/json');

req.open('GET', 'team.json', true);

req.onload = function() {
  var jsonResponse = JSON.parse(req.responseText);

  let text = '';

  for (let i = 0; i < jsonResponse.length; i++) {
    let team = jsonResponse[i];

    text += template
      .replace('{{imgSrc}}', team.imgSrc)
      .replace('{{name}}', team.name)
      .replace('{{job}}', team.job);
  }

  cardsHolder.innerHTML = text;
};

req.send(null);
