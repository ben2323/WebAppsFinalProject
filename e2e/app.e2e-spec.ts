import { FinalProjectPage } from './app.po';

describe('final-project App', () => {
  let page: FinalProjectPage;

  beforeEach(() => {
    page = new FinalProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
