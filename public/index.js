// Your code here
let getImage = async () => {
  try {
    let fetchUrl = 'https://api.thecatapi.com/v1/images/search';
    let response = await fetch(fetchUrl);
    let data = await response.json();
    let { url, height, width } = data[0];
    return [url, height, width];
  } catch (err) {
    console.log('not working');
  }
};
let loadPage = async () => {
  console.log('loaded');

  let body = document.querySelector('body');
  let h1 = document.createElement('h1');
  h1.className = 'title';
  h1.textContent = 'Cat pic';
  body.appendChild(h1);

  let catImg = document.createElement('img');
  catImg.className = 'catImage';
  let [url, height, width] = await getImage();
  catImg.src = url;
  catImg.style.width = width;
  catImg.style.height = height;
  body.appendChild(catImg);
};
window.onload = async () => {
  await loadPage();
};
