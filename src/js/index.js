import Search from "./models/Search";

/*
- Global state of the app
- Search object
- Current recipe object
- Shopping list object
*/

const state = {};

const controlSearch = async () => {
  //Get query from view
  const query = "pizza"; // TODO: Accept from form

  if (query) {
    //New  search object and add to state
    state.search = new Search(query);

    //Prepare UI for results

    //Search for recipes
    await state.search.getResults();

    //Render results on UI
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
