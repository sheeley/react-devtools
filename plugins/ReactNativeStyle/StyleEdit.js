/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

var React = require('react');
var BlurInput = require('./BlurInput');

class StyleEdit {
  props: {
    style: Object,
    onChange: (attr: string, val: string | number) => void,
  };

  render(): ReactElement {
    var attrs = Object.keys(this.props.style);
    return (
      <ul style={styles.container}>
        {attrs.map(name => (
          <li style={styles.attr}>
            {name}:
            <BlurInput
              value={this.props.style[name]}
              onChange={val => this.props.onChange(name, val)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

var styles = {
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  attr: {
    padding: 2,
  },
};

module.exports = StyleEdit;