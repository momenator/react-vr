import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

const PLACES = ['chess-world.jpg', 'church.jpg', 'nature.jpg', 'room.jpg'];

export default class react_vr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  onTeleport = () => {
    this.setState({
      index: Math.round(Math.random() * PLACES.length)
    })
  }

  render() {
    return (
      <View>
        <Pano source={asset(PLACES[this.state.index])}/>
        <VrButton
        onClick={this.onTeleport}>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Teleport
        </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
