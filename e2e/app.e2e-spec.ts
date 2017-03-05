import { AngularPracticeTrialPage } from './app.po';

describe('angular-practice-trial App', function() {
  let page: AngularPracticeTrialPage;

  beforeEach(() => {
    page = new AngularPracticeTrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
