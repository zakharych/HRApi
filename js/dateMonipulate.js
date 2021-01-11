const dateElem = document.querySelectorAll(".date__post");
const dataNow = new Date();
const curentMount = dataNow.getMonth();
const curentYear = dataNow.getFullYear();

const copyData = document.querySelector('.footer-menu__copy--data');
copyData.innerText = curentYear;

const tableString = document.querySelectorAll(".price__table-row");

for (let i = 0; i < dateElem.length; i++) {
  const metaData = dateElem[i].getAttribute("date");
  const metaDataString = Date.parse(`${metaData}`);
  const metaMounth = new Date(metaDataString).getMonth();

  if (metaDataString > Date.now() && curentMount === metaMounth) {
    dateElem[i].classList.add("date__post--active");
    dateElem[i].nextElementSibling.classList.add("dot__active");
    for (let j = 0; j < tableString.length; j++) {
      tableString[j].children[i + 1].classList.add("price__table-col--active");
    }
  }
}
