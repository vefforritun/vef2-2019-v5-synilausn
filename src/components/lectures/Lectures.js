import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { classnames } from '../../utils';

import './Lectures.scss';

export default class Lectures extends React.Component {

  static propTypes = {
    lectures: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { lectures } = this.props;

    return (
      <div className="lectures">
        <div className="lectures__row">
          {lectures.map((item, i) => {
            const thumbnailClassname =
              classnames(
                'lectureItem__image',
                !item.thumbnail ? 'listItem__image--empty' : '',
              );

            return (
              <div className="lectures__col" key={i}>
                <Link to={`/${item.slug}`} className="lectureItem">
                  <div className={thumbnailClassname}>
                    {item.thumbnail && (
                      <img src={item.thumbnail} alt=""></img>
                    )}
                  </div>
                  <div className="lectureItem__bottom">
                    <div className="lectureItem__texts">
                      <span className="lectureItem__category">{item.category}</span>
                      <h2 className="lectureItem__title">{item.title}</h2>
                    </div>
                    {item.finished && (
                      <p className="lectureItem__finished">✓</p>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
