import React from 'react';

// importing components by family type
import FoundationFamily from './componentsFamilies/FoundationFamily';
import LayoutFamily from './componentsFamilies/LayoutFamily/LayoutFamily';
import InputFamily from './componentsFamilies/InputFamily';
import SelectionFamily from './componentsFamilies/SelectionFamily';
import ButtonFamily from './componentsFamilies/ButtonFamily';
import NavigationFamily from './componentsFamilies/NavigationFamily';
import TooltipFamily from './componentsFamilies/TooltipFamily';
import NotificationFamily from './componentsFamilies/NotificationFamily';
import ModalFamily from './componentsFamilies/ModalFamily';
import PickerFamily from './componentsFamilies/PickerFamily';
import OtherFamily from './componentsFamilies/OtherFamily';
import ContentWidgetsFamily from './componentsFamilies/ContentWidgetsFamily';
import InternalFamily from './componentsFamilies/InternalFamily';

import { Container, Row, Page } from 'wix-style-react';

class ComponentsCheatsheet extends React.Component {
  render() {
    const componentsFamiliesArr = [
      FoundationFamily,
      LayoutFamily,
      InputFamily,
      SelectionFamily,
      ButtonFamily,
      NavigationFamily,
      TooltipFamily,
      NotificationFamily,
      ModalFamily,
      PickerFamily,
      OtherFamily,
      ContentWidgetsFamily,
      InternalFamily,
    ];

    return (
      <Page>
        <Page.Header
          title="Components Cheatsheet"
          subtitle="Common components index"
        />
        <Page.Content>
          <Container>
            {componentsFamiliesArr.map((Family, i) => (
              <Row key={`family-row-${i}`}>
                <Family key={`family-${i}`} />
              </Row>
            ))}
          </Container>
        </Page.Content>
      </Page>
    );
  }
}
export default ComponentsCheatsheet;
