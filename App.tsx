/**
 * React Native AdMob Example
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import mobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

function App(): React.JSX.Element {
  // Inicializar o SDK do Google Mobile Ads
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        // Inicialização bem-sucedida
        console.log('AdMob SDK inicializado com sucesso');
      });
  }, []);

  // ID de teste para o banner - em produção, substituir pelo ID real
  const adUnitId = TestIds.BANNER;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.adContainer}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  adContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
});

export default App;
