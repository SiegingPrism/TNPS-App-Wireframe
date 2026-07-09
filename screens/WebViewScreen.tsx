import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

interface WebViewScreenProps {
  assetPath: string;
  onBack: () => void;
}

export default function WebViewScreen({ assetPath, onBack }: WebViewScreenProps) {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  // Handle hardware back button on Android
  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      } else {
        onBack();
        return true;
      }
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [canGoBack, onBack]);

  const css = `
    nav[class*='bottom'],
    .fixed.bottom-0,
    [class*='fixed'][class*='bottom-0'],
    [class*='fixed-bottom'],
    nav[class*='fixed'][class*='bottom'] {
        display: none !important;
    }
    body {
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
    }
  `.replace(/\s+/g, ' ');

  const jsInjection = `
    var style = document.createElement('style');
    style.innerHTML = '${css.replace(/'/g, "\\'")}';
    document.head.appendChild(style);
    true;
  `;

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: `file:///android_asset/${assetPath}` }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        mixedContentMode="always"
        injectedJavaScript={jsInjection}
        onShouldStartLoadWithRequest={(request) => {
          // Intercept any internal navigation to admindashboard/code.html or dashboard.html and handle it native-side
          if (
            request.url.includes('admindashboard/code.html') ||
            request.url.includes('dashboard.html')
          ) {
            onBack();
            return false;
          }
          return true;
        }}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
