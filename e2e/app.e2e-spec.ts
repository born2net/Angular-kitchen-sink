import { NgKitchenSinkPage } from './app.po';

describe('ng-kitchen-sink App', function() {
  let page: NgKitchenSinkPage;

  beforeEach(() => {
    page = new NgKitchenSinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
