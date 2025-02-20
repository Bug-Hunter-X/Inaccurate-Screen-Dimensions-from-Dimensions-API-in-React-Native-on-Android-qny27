import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Dimensions, StyleSheet, View, LayoutAnimation } from 'react-native';

const AccurateDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useLayoutEffect(() => {
    const onChange = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setScreenDimensions(Dimensions.get('window'));
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <View style={[styles.container, { width: screenDimensions.width, height: screenDimensions.height }]}>
      {/* Your layout here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccurateDimensions;