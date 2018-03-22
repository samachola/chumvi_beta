import categories from '../../reducers/categories';

describe('Category reducers changes state on', () => {
  it('adds categories to state', () => {
    const results =
        {
          categories: [{ category_name: 'Cat  1', category_description: 'category description'}],
          type: 'GET_USER_CATEGORIES',
        };
    expect(categories({}, results))
      .toEqual([{ category_name: 'Cat  1', category_description: 'category description'}]);
  }),
  it('adds a new category', () => {
    const results =
        {
          category: { category_name: 'Cat  1', category_description: 'category description'},
          type: 'NEW_CATEGORY_SUCCESS',
        };
    expect(categories({}, results))
      .toEqual({ category_name: 'Cat  1', category_description: 'category description'});
  }),
  it('updates a category', () => {
    const results =
        {
          category: { category_name: 'Cat  1', category_description: 'category description'},
          type: 'EDIT_CATEGORY_SUCCESS',
        };
    expect(categories({}, results))
      .toEqual({ category_name: 'Cat  1', category_description: 'category description'});
  })
});