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

    data.map((game, index) => {
      if (index > 2) {
        const productGames = document.createElement("div");

        productGames.setAttribute(
          "class",
          "games ease-in duration-500 w-3/12 my-5 relative"
        );

        productGames.addEventListener("mouseover", (event) => {
          const description = event.currentTarget.querySelector(".description");
          const parent = event.currentTarget.querySelector(".products");

          description.classList.remove("noShow");
        });

        productGames.addEventListener("mouseout", (event) => {
          const description = event.currentTarget.querySelector(".description");
          const parent = event.currentTarget.querySelector(".products");

          description.classList.add("noShow");
        });

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
                    <h2 id="title3" class="text-xs text-left m-2"> ${
                      game.title
                    }</h2>
                    <p class='description noShow'> ${game.description} </p>
                    <!-- <ion-icon
                      name="cart-outline"
                      class="mx-4 cursor-pointer text-white"
                    ></ion-icon> -->
                    <span id="price3" class="text-ls text-right mx-2"> ${
                      game.price === "Gratuito"
                        ? "Gratuito"
                        : "R$ " + game.price
                    }</span>
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
