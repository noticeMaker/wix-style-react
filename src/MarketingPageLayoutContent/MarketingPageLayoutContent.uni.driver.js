import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';

export const marketingPageLayoutContentDriverFactory = (base, body) => {
  const byHook = hook => base.$(`[data-hook="${hook}"]`);

  return {
    ...baseUniDriverFactory(base, body),

    /** Returns true if an outline is exist. */
    hasOverline: async () => await byHook(dataHooks.overlineContainer).exists(),

    /** Returns the overline text. */
    getOverlineText: async () =>
      (await textUniDriverFactory(await byHook(dataHooks.overline))).getText(),

    /** Returns true if an outline is exist. */
    hasTitle: async () => await byHook(dataHooks.titleContainer).exists(),

    /** Returns the title text. */
    getTitleText: async () =>
      (await headingUniDriverFactory(await byHook(dataHooks.title))).getText(),

    /** Returns true if a subtitle is exist. */
    hasSubtitle: async () => await byHook(dataHooks.subtitleContainer).exists(),

    /** Returns the subtitle text. */
    getSubtitleText: async () =>
      (
        await headingUniDriverFactory(await byHook(dataHooks.subtitle))
      ).getText(),

    /** Returns true if a content is exist. */
    hasContent: async () => await byHook(dataHooks.contentContainer).exists(),

    /** Returns the content text. */
    getContentText: async () =>
      (await textUniDriverFactory(await byHook(dataHooks.content))).getText(),

    /** Returns true if an actions is exist. */
    hasActions: async () => await byHook(dataHooks.actions).exists(),

    /** Checks that a node with the provided dataHook exists */
    childExists: async dataHook => base.$(`[data-hook="${dataHook}"]`).exists(),
  };
};
