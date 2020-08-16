import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './MarketingPageLayoutContent.st.css';
import { dataHooks, size } from './constants';

import Text, { SIZES as TEXT_SIZES } from '../Text';
import Heading, { APPEARANCES } from '../Heading';
import { isString } from '../utils/StringUtils';

const sizesMap = {
  overline: {
    [size.medium]: TEXT_SIZES.small,
    [size.large]: TEXT_SIZES.medium,
  },
  title: {
    [size.medium]: APPEARANCES.H2,
    [size.large]: APPEARANCES.H1,
  },
  subtitle: {
    [size.medium]: APPEARANCES.H4,
    [size.large]: APPEARANCES.H3,
  },
  content: {
    [size.medium]: TEXT_SIZES.small,
    [size.large]: TEXT_SIZES.medium,
  },
};

/** This component is used in the MarketingPageLayout component. It includes all the content of the page. */
class MarketingPageLayoutContent extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      size,
      overline,
      title,
      subtitle,
      content,
      actions,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        className={st(classes.root, { size }, className)}
      >
        {overline && (
          <div
            data-hook={dataHooks.overlineContainer}
            className={classes.overlineContainer}
          >
            <div
              data-hook={dataHooks.overline}
              className={classes.overline}
              children={
                isString(overline) ? (
                  <Text size={sizesMap.overline[size]}>{overline}</Text>
                ) : (
                  overline
                )
              }
            />
            <div className={classes.overlineDivider} />
          </div>
        )}
        {title && (
          <div
            data-hook={dataHooks.title}
            className={classes.title}
            children={
              isString(title) ? (
                <Heading appearance={sizesMap.title[size]}>{title}</Heading>
              ) : (
                title
              )
            }
          ></div>
        )}
        {subtitle && (
          <div
            data-hook={dataHooks.subtitle}
            className={classes.subtitle}
            children={
              isString(subtitle) ? (
                <Heading appearance={sizesMap.subtitle[size]}>
                  {subtitle}
                </Heading>
              ) : (
                subtitle
              )
            }
          ></div>
        )}
        {content && (
          <div
            data-hook={dataHooks.content}
            className={classes.content}
            children={
              isString(content) ? (
                <Text size={sizesMap.content[size]}>{content}</Text>
              ) : (
                content
              )
            }
          ></div>
        )}
        {actions && (
          <div
            data-hook={dataHooks.actions}
            className={classes.actions}
            children={actions}
          />
        )}
      </div>
    );
  }
}

MarketingPageLayoutContent.displayName = 'MarketingPageLayoutContent';

MarketingPageLayoutContent.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the marketing page layout content.  The default value is 'large'. */
  size: PropTypes.oneOf(['medium', 'large']),

  /** The overline content. */
  overline: PropTypes.node,

  /** The page's title. */
  title: PropTypes.node,

  /** The page's subtitle. */
  subtitle: PropTypes.node,

  /** The page's content. */
  content: PropTypes.node,

  /** The page's actions - area of buttons. */
  actions: PropTypes.node,
};

MarketingPageLayoutContent.defaultProps = {
  size: 'large',
};

export default MarketingPageLayoutContent;
