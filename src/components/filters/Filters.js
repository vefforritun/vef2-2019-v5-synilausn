import React from 'react';
import PropTypes from 'prop-types';

import './Filters.scss';

import { classnames } from '../../utils';

export default class Filters extends React.Component {

  state = {
    active: [],
  }

  static propTypes = {
    onFilter: PropTypes.func,
  }

  onClick = (type) => (e) => {
    const { onFilter } = this.props;
    const { active } = this.state;

    if (active.indexOf(type) >= 0) {
      active.splice(active.indexOf(type), 1);
    } else {
      active.push(type);
    }

    onFilter(active);

    return this.setState({ active });
  }

  render() {
    const { active } = this.state;

    const htmlActive = active.indexOf('html') >= 0;
    const cssActive = active.indexOf('css') >= 0;
    const jsActive = active.indexOf('javascript') >= 0;

    return (
      <ul className="filters">
        <li>
          <button
            className={classnames('filters__filter', htmlActive ? 'filters__filter--active' : null)}
            onClick={this.onClick('html')}
          >
            HTML
          </button>
        </li>
        <li>
          <button
            className={classnames('filters__filter', cssActive ? 'filters__filter--active' : null)}
            onClick={this.onClick('css')}
          >
            CSS
          </button>
        </li>
        <li>
          <button
            className={classnames('filters__filter', jsActive ? 'filters__filter--active' : null)}
            onClick={this.onClick('javascript')}
          >
            JavaScript
          </button>
        </li>
      </ul>
    );
  }
}
