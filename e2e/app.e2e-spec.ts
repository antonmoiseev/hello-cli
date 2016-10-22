import { HelloCliPage } from './app.po';

describe('hello-cli App', function() {
  let page: HelloCliPage;

  beforeEach(() => {
    page = new HelloCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
