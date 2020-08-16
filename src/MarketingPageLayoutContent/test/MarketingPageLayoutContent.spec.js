import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayoutContent from '../MarketingPageLayoutContent';
import { marketingPageLayoutContentPrivateDriverFactory } from './MarketingPageLayoutContent.private.uni.driver';

describe(MarketingPageLayoutContent.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutContentPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayoutContent />);

    expect(await driver.exists()).toBe(true);
  });

  describe('overline', () => {
    it('should render the provided `overline` text', async () => {
      const overline = 'Overline Text';
      const { driver } = render(
        <MarketingPageLayoutContent overline={overline} />,
      );

      expect(await driver.getOverlineText()).toBe(overline);
    });

    it('should render the provided `overline` node', async () => {
      const overlineNode = <div data-hook="overline">Outline Text</div>;
      const { driver } = render(
        <MarketingPageLayoutContent overline={overlineNode} />,
      );

      expect(await driver.childExists('overline')).toBe(true);
    });

    it('should not display overline', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasOverline()).toBe(false);
    });
  });

  describe('title', () => {
    it('should render the provided `title` text', async () => {
      const title = 'Title Text';
      const { driver } = render(<MarketingPageLayoutContent title={title} />);

      expect(await driver.getTitleText()).toBe(title);
    });

    it('should render the provided `title` node', async () => {
      const titleNode = <div data-hook="title">Outline Text</div>;
      const { driver } = render(
        <MarketingPageLayoutContent title={titleNode} />,
      );

      expect(await driver.childExists('title')).toBe(true);
    });

    it('should not display title', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasTitle()).toBe(false);
    });
  });

  describe('subtitle', () => {
    it('should render the provided `subtitle` text', async () => {
      const subtitle = 'Subtitle Text';
      const { driver } = render(
        <MarketingPageLayoutContent subtitle={subtitle} />,
      );

      expect(await driver.getSubtitleText()).toBe(subtitle);
    });

    it('should not display subtitle', () => {});
  });

  xdescribe('content area', () => {
    it('should display content area', () => {});

    it('should not display content area', () => {});
  });

  xdescribe('actions', () => {
    it('should display actions', () => {});

    it('should not display actions', () => {});
  });
});
