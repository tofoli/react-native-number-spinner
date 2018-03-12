import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { round10 } from 'round10';
import styles from './style';


class Spinner extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
          min: props.min || 0,
          max: props.max || 99,
          num: props.default || 0,
          step: props.step || 1,
          precision: (props.step || 1).toString().split('.')[1].length,
          color: props.color || '#33c9d6',
          numColor: props.numColor || '#333',
          numBgColor: props.numBgColor || 'white',
          showBorder: props.showBorder || true,
          fontSize: props.fontSize || 14,
          btnFontSize: props.btnFontSize || 14,
          buttonTextColor: props.buttonTextColor || 'white',
          disabled: props.disabled || false,
          width: props.width || 90,
          height: props.height || 30
      };
    }

  _onNumChange (num) {
    if (this.props.onNumChange) this.props.onNumChange(num);
};

  _increase () {
    if (this.state.disabled) return;

    if (this.state.max > this.state.num) {
      var num = round10(this.state.num + this.state.step, this.state.precision * -1);
      if (typeof this.state.value === 'undefined') {
        this.setState({
          num: num
      });
    };

      this._onNumChange(num);
    }
};

  _decrease () {
    if (this.state.disabled) return;

    if (this.state.min < this.state.num) {
      var num = round10(this.state.num - this.state.step, this.state.precision * -1);
      if (typeof this.state.value === 'undefined') {
        this.setState({
          num: num
      });
  };

      this._onNumChange(num);
  }
};

  render () {
    return (
      <View style={[styles.container,
        { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
        { width: this.state.width } ]}>
        <TouchableOpacity
          style={[styles.btn,
            { backgroundColor: this.state.color },
            { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
            { height: this.state.height } ]}
          onPress={() => this._decrease()}>
          <Text style={[styles.btnText,
              { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize }]}>-</Text>
        </TouchableOpacity>
        <View style={[styles.num,
            { borderColor: this.state.showBorder ? this.state.color : 'transparent', backgroundColor: this.state.numBgColor, height: this.state.height
            }]}>
          <Text style={[styles.numText, {color: this.state.numColor, fontSize: this.state.fontSize}]}>{this.state.num}</Text>
        </View>
        <TouchableOpacity
          style={[styles.btn,
            { backgroundColor: this.state.color },
            { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
            { height: this.state.height }]}
          onPress={() => this._increase()}>
          <Text style={[styles.btnText,
              { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize
              }]}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Spinner;
