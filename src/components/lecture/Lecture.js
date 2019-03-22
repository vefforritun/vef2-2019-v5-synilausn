import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { classnames } from '../../utils';

import Item from '../item/Item';

import './Lecture.scss';

export default class Lecture extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    toggleFinished: PropTypes.func,
    finished: PropTypes.bool,
  }

  render() {
    const { content, toggleFinished, finished } = this.props;

    return (
      <section className="lecture">
        <div className="lecture__content">
          <div className="lecture__row">
            <div className="lecture__col">
              {content.map(({ type, ...item }, i) => (
                <Item key={i} type={type} item={item} />
              ))}
            </div>
          </div>
        </div>

        <footer className="lecture__footer">
          <button
            onClick={toggleFinished}
            className={classnames('lecture__finish', finished ? 'lecture__finish--finished' : '')}
          >
            {finished ? '✓ Fyrirlestur kláraður' : 'Klára fyrirlestur'}
          </button>
          <Link className="lecture__back" to="/">Til baka</Link>
        </footer>
      </section>
    );
  }
}
