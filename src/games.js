const url = "http://localhost:3000/games";

const container = document.querySelector(".container-games");

const getGamersFromApi = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    /*

  Para inserir o elemento precisa busca-lo no document com o querySelector, após isso usar o apendChild para adiciona-lo
  na pagina
  
  */

    for (let i = 0; i < 3; i++) {
      console.log(data[i].title);
    }

    data.map((game, index) => {
      if (index > 2) {
        const productGames = document.createElement("div");

        productGames.setAttribute("class", "games w-3/12 my-10");

        productGames.innerHTML = `
        
              <div class="products rounded-md bg-[#1a1a1ae6]">
                <div class="products-content w-full">
                  <img
                    id="img3"
                    class="w-full rounded-md"
                    alt="${game.title}"
                    src='${game.img}'
                  />
                  <div
                    class="cart-price flex flex-col justify-center gap-5 text-white"
                  >
                    <h2 id="title3" class="text-xs text-left m-2"> ${game.title}</h2>
                    <!-- <ion-icon
                      name="cart-outline"
                      class="mx-4 cursor-pointer text-white"
                    ></ion-icon> -->
                    <span id="price3" class="text-xs text-right mx-2">${game.price}</span>
                  </div>
                </div>
              </div>
        
        `;

        container.appendChild(productGames); //Irá adicionar um elemento filho ao container
      }
    });
  } catch (error) {
    alert(
      "Liga o servidor caralho!!!!!!!!!!!!!!!!!!!!!!!  json-server --watch data.json ",
      error
    );
  }
};

getGamersFromApi();
