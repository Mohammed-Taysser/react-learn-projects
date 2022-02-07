import React from 'react';
import { Route } from '../../components/CustomRouter';

import GoogleTranslateDashboard from '../../components/googleTranslate';
import GoogleTranslateV1 from '../../components/googleTranslate/v1';
import { LANGUAGES } from '../../static/Data';

function GoogleTranslate() {
  return (
    <>
      <Route path='/google-translate'>
        <GoogleTranslateDashboard />
      </Route>
      <Route path='/google-translate/v1'>
        <GoogleTranslateV1 languages={LANGUAGES} />
      </Route>
    </>
  );
}

export default GoogleTranslate;
