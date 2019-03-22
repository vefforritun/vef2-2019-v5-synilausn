import React from 'react';
import PropTypes from 'prop-types';

import { classnames } from '../../utils';

import './Item.scss';

export default class Content extends React.Component {

  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
  }

  renderItem(type, item) {
    switch (type) {
      case 'youtube':
        return (
          <iframe
            title="Fyrirlestur"
            className="item__iframe"
            src={item.data}
            frameBorder="0"
            allowFullScreen
          />
        );
      case 'image':
          return (
            <div>
              <img alt={item.caption} src={item.data} />
              <p className="item__caption">{item.caption}</p>
            </div>
          );
      case 'code':
          return (
            <pre className="item__code">{item.data}</pre>
          );

      case 'list':
        return (
          <ul className="item__ul">
            {item.data.map((listItem, i) => (
              <li className="item__li" key={i}>{listItem}</li>
            ))}
          </ul>
        );

      case 'heading':
        return (
          <h3 className="item__heading">{item.data}</h3>
        );

      case 'quote':
        return (
          <blockquote>
            <p className="item__quote">{item.data}</p>
            <p className="item__attribute">{item.attribute}</p>
          </blockquote>
        );

      case 'text':
        return (
          <React.Fragment>
            {item.data.split('\n').map((text, i) => (
              <p key={i} className="item__text">{text}</p>
            ))}
          </React.Fragment>
        );

      default:
        return JSON.stringify(item);
    }
  }

  render() {
    const { type, item } = this.props;

    return (
      <div className={classnames('item', `item--${type}`)}>
        <div className="item__content">
          {this.renderItem(type, item)}
        </div>
      </div>
    );

  }
}
