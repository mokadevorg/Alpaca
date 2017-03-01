import { AlpacaPage } from './app.po';

describe('alpaca App', () => {
  let page: AlpacaPage;

  beforeEach(() => {
    page = new AlpacaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
