/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import HomePage from '../page-objects/home-page';

const URL = (process.env.BASE_URL || '').replace(/\/$/, '');


fixture('Test Intela challenge')
  .page(URL);

test('Add the first item', async t => {
  await HomePage.addAnItem('one');
  await HomePage.addAnItem('two');
  await HomePage.addAnItem('three');
  await HomePage.addAnItem('four');
  await HomePage.editItem('edit', 'description edit');
  await HomePage.deleteItem();
});
