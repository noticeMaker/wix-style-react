import React from 'react';
import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import Input from '../Input';
import styles from './MultiSelectCheckbox.scss';
import { listItemSelectBuilder } from '../ListItemSelect';
import { listItemSectionBuilder } from '../ListItemSection';

const OPEN_DROPDOWN_CHARS = ['Enter', 'ArrowDown', 'Space', ' '];

class MultiSelectCheckbox extends InputWithOptions {
  /** An option value can be either a function or an object:
   * If it's a function, there's a need to override it in order to support the select mechanism within the MultiSelectCheckbox itself.
   * If it's a string, we check which string in order to know which builder to use. We use builders instead of manually override the styles of the DropdownLayout.
   * */
  createOptions(options) {
    return options.map(option => {
      if (typeof option.value === 'function') {
        return this._renderFunctionOption(option);
      } else {
        if (option.value === '-') {
          return listItemSectionBuilder({
            type: 'divider',
            ...option,
          });
        } else {
          const builder = listItemSelectBuilder({
            ...option,
            checkbox: true,
            title: option.value,
          });
          return this._renderFunctionOption(builder);
        }
      }
    });
  }

  _renderFunctionOption(option) {
    const value = option.value;

    return {
      ...option,
      value: props =>
        value({
          ...props,
          selected: this.isSelectedId(option.id),
        }),
    };
  }

  isSelectedId(optionId) {
    return this.props.selectedOptions.indexOf(optionId) !== -1;
  }

  dropdownAdditionalProps() {
    return {
      options: this.createOptions(this.props.options),
      closeOnSelect: false,
      selectedHighlight: false,
    };
  }

  selectedOptionsToText() {
    return this.props.selectedOptions
      .map(selectedOption =>
        this.props.options.find(option => option.id === selectedOption),
      )
      .filter(selectedOption => selectedOption)
      .map(this.props.valueParser)
      .join(this.props.delimiter);
  }

  inputAdditionalProps() {
    return {
      readOnly: false,
      disableEditing: true,
      inputElement: <Input textOverflow="ellipsis" disableEditing />,
      value: this.selectedOptionsToText(),
    };
  }

  inputClasses() {
    return styles.showPointer;
  }

  _onSelect(option) {
    this.showOptions();

    if (this.closeOnSelect()) {
      this.setState({ showOptions: false });
    }

    // The option object is not the original since it was injected a checkbox
    const originalOption = this.props.options.find(op => option.id === op.id);
    if (this.isSelectedId(originalOption.id)) {
      this.props.onDeselect &&
        this.props.onDeselect(originalOption.id, originalOption);
    } else {
      this.props.onSelect &&
        this.props.onSelect(originalOption.id, originalOption);
    }
  }

  _onInputClicked(event) {
    this.state.showOptions ? this.hideOptions() : this.showOptions();
    if (this.props.onInputClicked) {
      this.props.onInputClicked(event);
    }
  }

  _onKeyDown(event) {
    if (OPEN_DROPDOWN_CHARS.includes(event.key)) {
      event.preventDefault();
      this.showOptions();
    }

    this.dropdownLayout && this.dropdownLayout._onKeyDown(event);
  }

  _onFocus(e) {
    if (this.props.disabled) {
      return;
    }
    this._focused = true;
    this.setState({ isEditing: false });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }
}

MultiSelectCheckbox.displayName = 'MultiSelectCheckbox';

MultiSelectCheckbox.propTypes = {
  ...InputWithOptions.propTypes,

  /** Array of objects. Objects must have an Id and can can include *value* and *node*. If value is '-', a divider will be rendered instead. */
  options: PropTypes.array,

  /** The selected options ids. */
  selectedOptions: PropTypes.array,

  /** A callback function called whenever the user selects a single option. The function receives the id of the selected option as the first argument, and the actual option object as the second argument.. */
  onSelect: PropTypes.func,

  /** A callback function to be called when an option was unchecked. The function receives the id of the unselected option as the first argument, and the actual option object as the second argument. */
  onDeselect: PropTypes.func,

  /** delimiter between the selected options that will be displayed in the input. */
  delimiter: PropTypes.string,
};

MultiSelectCheckbox.defaultProps = {
  ...InputWithOptions.defaultProps,
  delimiter: ', ',
  selectedOptions: [],
  closeOnSelect: false,
  valueParser: option => option.label || option.value,
};

export default MultiSelectCheckbox;
