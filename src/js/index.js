import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";
/*
- Global state of the app
- Search object
- Current recipe object
- Shopping list object
*/

const state = {};

const controlSearch = async () => {
  //Get query from view
  const query = searchView.getInput(); // TODO: Accept from form

  if (query) {
    //New  search object and add to state
    state.search = new Search(query);

    //Prepare UI for results
    searchView.clearInput();
    searchView.clearResult();

    //Search for recipes
    await state.search.getResults();

    //Render results on UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
