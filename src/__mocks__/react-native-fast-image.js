// __mocks__/react-native-fast-image.js
import React from 'react';
import { Image } from 'react-native';

const FastImageMock = ({ testID, accessibilityLabel, ...props }) => {
  return <Image testID={testID} accessibilityLabel={accessibilityLabel} {...props} />;
};

FastImageMock.resizeMode = {
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
  center: 'center',
};

FastImageMock.priority = {
  low: 'low',
  normal: 'normal',
  high: 'high',
};

FastImageMock.cacheControl = {
  immutable: 'immutable',
  web: 'web',
  cacheOnly: 'cacheOnly',
};

export default FastImageMock;
