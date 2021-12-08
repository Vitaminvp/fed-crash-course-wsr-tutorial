import React from 'react';
import { render } from '@testing-library/react';
import {
  CardHeaderTestkit,
  HeadingTestkit,
  TabsTestkit,
} from 'wix-style-react/dist/testkit';
import App from './App';
import DataHooks from './SecondTask/DataHooks';

describe('App', () => {
  it('should have title', async () => {
    const { baseElement } = render(<App />);

    const headingDriver = HeadingTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.APP_TITLE,
    });

    expect(await headingDriver.getText()).toEqual(
      'FED Guild Crash Course 2021',
    );
  });

  it('click first tab', async () => {
    const { baseElement } = render(<App />);

    const tabDriver = TabsTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.TABS,
    });

    await tabDriver.clickTabAt(0);

    const FirstCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FIRST_CARD,
    });

    expect(await FirstCardHeaderTestkit.title()).toEqual(
      'What is Lorem Ipsum?',
    );
  });
});
