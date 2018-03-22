import recipes from '../../reducers/recipes';

describe('Category reducers changes state on', () => {
  it('adds recipes to state', () => {
    const results =
        {
          recipes: [{ title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1}],
          type: 'GET_USER_RECIPES',
        };
    expect(recipes({}, results))
      .toEqual([{ title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1}]);
  }),
  it('adds a new recipe', () => {
    const results =
        {
          recipe: { title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1},
          type: 'NEW_RECIPE_SUCCESS',
        };
    expect(recipes({}, results))
      .toEqual({ title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1});
  }),
  it('deletes a category', () => {
    const results =
        {
          recipe: { title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1},
          type: 'DELETE_RECIPE_SUCCESS',
        };
    expect(recipes({}, results))
      .toEqual({ title: 'Recipe Title', ingredients: 'egs, beans', steps: 'cook it', category_id: 1});
  })
});