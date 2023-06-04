const url = "../data.json";

const getPost = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // A partir daqui, você irá extrair as informações para cada jogo e atualizar os elementos HTML correspondentes

    // Exemplo para o primeiro jogo
    const game3 = data.games[3]; // Acessando o primeiro jogo no array
    const title3 = document.querySelector("#title3");
    const price3 = document.querySelector("#price3");
    const img3 = document.querySelector("#img3");
    title3.textContent = game3.title;
    price3.textContent = game3.price;
    img3.src = game3.img;

    const game4 = data.games[4];
    const title4 = document.querySelector("#title4");
    const price4 = document.querySelector("#price4");
    const img4 = document.querySelector("#img4");
    title4.textContent = game4.title;
    price4.textContent = game4.price;
    img4.src = game4.img;

    const game5 = data.games[5];
    const title5 = document.querySelector("#title5");
    const price5 = document.querySelector("#price5");
    const img5 = document.querySelector("#img5");
    title5.textContent = game5.title;
    price5.textContent = game5.price;
    img5.src = game5.img;

    const game6 = data.games[6];
    const title6 = document.querySelector("#title6");
    const price6 = document.querySelector("#price6");
    const img6 = document.querySelector("#img6");
    title6.textContent = game6.title;
    price6.textContent = game6.price;
    img6.src = game6.img;

    const game7 = data.games[7];
    const title7 = document.querySelector("#title7");
    const price7 = document.querySelector("#price7");
    const img7 = document.querySelector("#img7");
    title7.textContent = game7.title;
    price7.textContent = game7.price;
    img7.src = game7.img;

    const game8 = data.games[8];
    const title8 = document.querySelector("#title8");
    const price8 = document.querySelector("#price8");
    const img8 = document.querySelector("#img8");
    title8.textContent = game8.title;
    price8.textContent = game8.price;
    img8.src = game8.img;

    const game9 = data.games[9];
    const title9 = document.querySelector("#title9");
    const price9 = document.querySelector("#price9");
    const img9 = document.querySelector("#img9");
    title9.textContent = game9.title;
    price9.textContent = game9.price;
    img9.src = game9.img;

    const game10 = data.games[10];
    const title10 = document.querySelector("#title10");
    const price10 = document.querySelector("#price10");
    const img10 = document.querySelector("#img10");
    title10.textContent = game10.title;
    price10.textContent = game10.price;
    img10.src = game10.img;

    const game11 = data.games[11];
    const title11 = document.querySelector("#title11");
    const price11 = document.querySelector("#price11");
    const img11 = document.querySelector("#img11");
    title11.textContent = game11.title;
    price11.textContent = game11.price;
    img11.src = game11.img;
  } catch (error) {
    console.log("Error:", error);
  }
};

// Chame a função getPost para buscar e exibir as informações dos jogos
getPost();
