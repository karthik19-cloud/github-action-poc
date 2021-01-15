describe("Testing our nodeJS app", () => {
  it("Testing using Github Actions", () => {
    expect(2).toBe(2);
  });
});

describe('Google Search Test', () => {

    it('should have the right title', (done) => {
      browser.url('https://google.com/')
      search_box_element = $('[name=\'q\']')
      search_box_element.setValue("BrowserStack\n")

      expect(browser).toHaveTitle("BrowserStack - Google Search");
    })

})
