import React from 'react';
import { render } from '@testing-library/react';
import {
  ButtonTestkit,
  InputTestkit,
  DropdownTestkit,
  CardHeaderTestkit,
} from 'wix-style-react/dist/testkit';
import WSRForm from './WSRForm';
import DataHooks from './DataHooks';

describe('WSRForm', () => {
  it('should submit the form', async () => {
    const { baseElement } = render(<WSRForm />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FIRST_NAME,
    });

    const lastNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.LAST_NAME,
    });

    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FAVORITE_COLOR,
    });

    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_BUTTON,
    });

    await firstNameInputTestkit.enterText('Moshe');
    await lastNameInputTestkit.enterText('Kerbel');
    await colorDropdownTestkit.driver.selectOptionById(1);

    await submitButtonTestkit.click();
    const SavedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SAVED_DATA,
    });
    expect(await SavedDataCardHeaderTestkit.title()).toEqual('Saved data');
  });

  it('should not submit the form', async () => {
    const { baseElement } = render(<WSRForm />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FIRST_NAME,
    });

    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FAVORITE_COLOR,
    });

    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_BUTTON,
    });

    await firstNameInputTestkit.enterText('Moshe');
    await colorDropdownTestkit.driver.selectOptionById(1);

    await submitButtonTestkit.click();
    const SavedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SAVED_DATA,
    });
    expect(await SavedDataCardHeaderTestkit.exists()).toEqual(false);
  });

  it('clear the form', async () => {
    const { baseElement } = render(<WSRForm />);

    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FAVORITE_COLOR,
    });

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.FIRST_NAME,
    });

    const lastNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.LAST_NAME,
    });

    await firstNameInputTestkit.enterText('Moshe');
    await lastNameInputTestkit.enterText('Kerbel');
    await colorDropdownTestkit.driver.selectOptionById(1);

    const clearButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.CLEAR_BUTTON,
    });

    await clearButtonTestkit.click();

    expect(await firstNameInputTestkit.getText()).toEqual('');
    expect(await lastNameInputTestkit.getText()).toEqual('');
    expect(await colorDropdownTestkit.inputDriver.getValue()).toEqual('');
  });
});
