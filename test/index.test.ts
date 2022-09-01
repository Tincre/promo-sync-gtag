import { 
  promoEventPageView,
  promoEventAddPaymentInfo,
  promoEventAddToCart,
  promoEventCompleteRegistration,
  promoEventDonate,
  promoEventInitiateCheckout,
  promoEventLead,
  promoEventPurchase,
  promoEventSearch,
  promoEventStartTrial,
  promoEventSubmitApplication,
  promoEventSubscribe,
  promoEventViewContent,
} from '../src/index';

import {
  generateEventIdClientSide,
} from '../src/eventId';

beforeAll(() => {
  /* @ts-ignore */
  global.window = jest.fn();

  window['google_tag_manager'] = {
    'GTM-57QS65R': {
      dataLayer: {
        get: (gtm: string) => {
          return {
            start: 'testStart',
            uniqueEventId: 'testUniqueEventId',
          };
        },
      },
    },
  };
  window['dataLayer'] = [];
});

describe('generateEventIdClientSide', () => {
  it('returns a string', () => {
    expect(generateEventIdClientSide()).toBe('testStart.testUniqueEventId');
  });
});
describe('gtmEventPageView', () => {
  it('executes', () => {
    expect(promoEventPageView({})).toBe(undefined);
  });
});
describe(  'PromoEventPageView', () => {

});
describe('PromoEventAddPaymentInfo', () => {

});
describe('PromoEventAddToCart', () => {

});
describe('PromoEventCompleteRegistration', () => {

});
describe('PromoEventDonate', () => {

});
describe('PromoEventInitiateCheckout', () => {

});
describe('PromoEventLead', () => {

});
describe('PromoEventPurchase', () => {

});
describe('PromoEventSearch', () => {

});
describe('PromoEventStartTrial', () => {

});
describe('PromoEventSubmitApplication', () => {

});
describe('PromoEventSubscribe', () => {

});
describe('PromoEventViewContent', () => {

});
/* This needs to be last in the file due to its mangling of the global.window 
 * property. */
describe('generateEventIdClientSide', () => {
  it('returns undefined when google_tag_manager is not present on window', () => {
    /* @ts-ignore */
    global.window = undefined;

    expect(generateEventIdClientSide()).toBe(undefined);
  });
});


