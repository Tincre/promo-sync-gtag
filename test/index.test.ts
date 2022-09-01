import {
  promoEventButtonClick,
  promoEventPromoButtonClick,
  promoEventSignupButtonClick,
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
import { generateEventIdClientSide } from '../src/eventId';
import crypto from 'crypto';

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
describe('PromoEventPageView', () => {
  it('executes', () => {
    expect(promoEventPageView({})).toBe(undefined);
  });
});
describe('PromoEventAddPaymentInfo', () => {
  it('executes', () => {
    expect(promoEventAddPaymentInfo({})).toBe(undefined);
  });
});
describe('PromoEventAddToCart', () => {
  it('executes', () => {
    expect(promoEventAddToCart({})).toBe(undefined);
  });
});
describe('PromoEventCompleteRegistration', () => {
  it('executes', () => {
    expect(promoEventCompleteRegistration({})).toBe(undefined);
  });
});
describe('PromoEventDonate', () => {
  it('executes', () => {
    expect(promoEventDonate({})).toBe(undefined);
  });
});
describe('PromoEventInitiateCheckout', () => {
  it('executes', () => {
    expect(promoEventInitiateCheckout({})).toBe(undefined);
  });
});
describe('PromoEventLead', () => {
  it('executes', () => {
    expect(promoEventLead({})).toBe(undefined);
  });
});
describe('PromoEventPurchase', () => {
  it('executes', () => {
    expect(promoEventPurchase({})).toBe(undefined);
  });
});
describe('PromoEventSearch', () => {
  it('executes', () => {
    expect(promoEventSearch({})).toBe(undefined);
  });
});
describe('PromoEventStartTrial', () => {
  it('executes', () => {
    expect(promoEventStartTrial({})).toBe(undefined);
  });
});
describe('PromoEventSubmitApplication', () => {
  it('executes', () => {
    expect(promoEventSubmitApplication({})).toBe(undefined);
  });
});
describe('PromoEventSubscribe', () => {
  it('executes', () => {
    expect(promoEventSubscribe({})).toBe(undefined);
  });
});
describe('PromoEventViewContent', () => {
  it('executes', () => {
    expect(promoEventViewContent({})).toBe(undefined);
  });
});
describe('PromoEventButtonClick', () => {
  it('executes', () => {
    expect(promoEventButtonClick({})).toBe(undefined);
  });
});

describe('PromoEventPromoButtonClick', () => {
  it('executes', () => {
    expect(promoEventPromoButtonClick({})).toBe(undefined);
  });
});


describe('PromoEventSignupButtonClick', () => {
  it('executes', () => {
    expect(promoEventSignupButtonClick({})).toBe(undefined);
  });
});



describe('generateEventIdClientSide', () => {
  it('returns crypto id implementation when google_tag_manager is not present on window', () => {
    /* @ts-ignore */
    global.window = jest.fn();
    let testUuid = 'randomUUIDvalue';
    /* @ts-ignore */
    window['crypto'] = {
      /* @ts-ignore */
      randomUUID: () => testUuid,
      /* @ts-ignore */
      getRandomValues: (arr:any) => crypto.randomBytes(arr.length)
    }
    expect(generateEventIdClientSide()).toBe(testUuid);
  });
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
