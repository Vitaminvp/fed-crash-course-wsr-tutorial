describe('React application', () => {
  it('should display title', async () => {
    await page.goto(app.getUrl('/'));

    await page.waitForSelector('h1');
    expect(await page.$eval('h1', (e) => e.textContent)).toEqual(
      'FED Guild Crash Course 2021',
    );
  });
});
