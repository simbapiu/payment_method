function select(img) {
  let spei = document.querySelector('#white-spei');
  let oxxo = document.querySelector('#white-oxxo');
  let card = document.querySelector('#white-card');
  let purple_card = document.querySelector('#purple-card');
  let purple_oxxo = document.querySelector('#purple-oxxo');
  let purple_spei = document.querySelector('#purple-spei');
  let item = document.querySelector(`#${img.id}`);
  item.style.display = 'none';

  switch( item.id ){
    case 'white-card':
      purple_card.style.backgroundColor = `#bb91ff`;
      purple_card.style.display = "block";
      oxxo.style.display = "block";
      spei.style.display = "block";
      purple_spei.style.display = "none";
      purple_oxxo.style.display = "none";
      break;
    case 'white-oxxo':
      purple_oxxo.style.backgroundColor = '#bb91ff';
      purple_oxxo.style.display = "block";
      card.style.display = "block";
      spei.style.display = "block";
      purple_card.style.display = 'none';
      purple_spei.style.display = "none";
      break;
    case 'white-spei':
      purple_spei.style.backgroundColor = '#bb91ff';
      purple_spei.style.display = "block";
      card.style.display = "block";
      oxxo.style.display = "block";
      purple_card.style.display = "none";
      purple_oxxo.style.display = "none";
      break;
  }
}