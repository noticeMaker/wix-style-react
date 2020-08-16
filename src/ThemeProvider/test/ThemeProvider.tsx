import * as React from 'react';
import ThemeProvider from '..';
import { floatingPanels } from '../../Themes';

function themeProviderWithMandatoryProps() {
  return <ThemeProvider />;
}

function themeProviderWithAllProps() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={{
        color00: '#FF0000',
        color05: '#FF0000',
        color10: '#FF0000',
        color20: '#FF0000',
        color30: '#FF0000',
        color40: '#FF0000',
        color50: '#FF0000',
        color60: '#FF0000',
        textColorPrimary: '#FF0000',
        textColorPrimaryLight: '#FF0000',
        textColorSecondary: '#FF0000',
        textColorSecondaryLight: '#FF0000',
      }}
    />
  );
}

function themeProviderWithFloatingPanelsTheme() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={floatingPanels({ mainColor: '#555555' })}
    />
  );
}
