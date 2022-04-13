import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { MainWrapper, TextDefault } from '../../Components';
import { ICONS_NAME } from '../../Config/NavigationConstant';
import styles from './styles';

function PrivacyScreen() {
  const route = useRoute();
  const headerIcon = route?.params?.headerIcon ?? ICONS_NAME.DRAWER;
  return (
    <MainWrapper headerTitle="Terms and Conditions" leftIcon={headerIcon}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.container}>
        <TextDefault light link>
          {
            'Last updated: February 26, 2022\n\nPlease read these terms and conditions carefully before using Our Service.'
          }
        </TextDefault>
        <TextDefault light>
          {`
        Lorem Ipsum

        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        
        Lorem Ipsum
        
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et.
        
        Lorem Ipsum
        
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accum.`}
        </TextDefault>
      </ScrollView>
    </MainWrapper>
  );
}

export default React.memo(PrivacyScreen);
