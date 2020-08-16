import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import { st, classes } from './FeatureList.st.css';
import { dataHooks } from './constants';

const isString = a => typeof a === 'string';

/** A footer for the marketing Page Layout */
class FeatureList extends React.PureComponent {
  render() {
    const { dataHook, className, features, cols } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={dataHook}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {features.map((featureItem, index) => {
          return (
            <FeatureItem
              key={featureItem.id || `feature${index}`}
              index={index}
              image={featureItem.image}
              title={featureItem.title}
              text={featureItem.text}
            />
          );
        })}
      </div>
    );
  }
}

const FeatureItem = ({ index, image, title, text }) => (
  <div className={classes.featureItem} data-hook={dataHooks.feature}>
    {image && (
      <div
        className={classes.featureItemImageContainer}
        data-hook={`${dataHooks.featureImage}${index}`}
        children={
          isString(image) ? (
            <img
              className={classes.featureItemImage}
              src={image}
              alt="featureImage"
            />
          ) : (
            image
          )
        }
      />
    )}
    <div className={classes.featureItemTextContainer}>
      {title && (
        <div className={classes.featureItemTitleContainer}>
          <Text
            data-hook={`${dataHooks.featureTitle}${index}`}
            size="medium"
            weight="bold"
          >
            {title}
          </Text>
        </div>
      )}
      {text && (
        <Text data-hook={`${dataHooks.featureText}${index}`} size="small">
          {text}
        </Text>
      )}
    </div>
  </div>
);

FeatureList.displayName = 'FeatureList';

FeatureList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Define the number of columns. It is used for the grid in order to define how many features will be displayed in a row. The default value is 3. */
  cols: PropTypes.number,

  /**
   * Array of features
   *  * `id` - the id of the feature (Each feature must have a unique `id`)
   *  * `image` - the feature image. If given as string, it will be used within `<img/>`. Otherwise can be given as React.Node.
   *  * `title` - the feature title.
   *  * `text` - the feature content.
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

FeatureList.defaultProps = {
  cols: 3,
  features: [],
};

export default FeatureList;
