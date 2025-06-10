import { useCallback, useEffect } from 'react';
import { SafeAreaView, Text, Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import {
  AccessContext,
  Snippet,
  RestrictedContent,
  Paywall,
} from '@poool/react-native-access';

export default () => {
  const init = useCallback(async () => {
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView>
      <AccessContext
        appId="CknhMIMaTpNFRkEfkXB6d7EIZBQl4VPuPQgTlaChiulgdVeURmHlLBMeGu8wgJiF"
        config={{ cookiesEnabled: true }}
      >
        <Snippet>
          <Text>Synopsis</Text>
        </Snippet>
        <RestrictedContent>
          <Text>Full content</Text>
        </RestrictedContent>
        <Paywall />
      </AccessContext>
    </SafeAreaView>
  );
};
