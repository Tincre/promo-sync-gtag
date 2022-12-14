/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { gtmEvent } from './event';
import { generateEventIdClientSide } from './eventId';

export const promoGtag = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://sync.tincre.dev/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-57QS65R');`;
export const promoGtmId = 'GTM-57QS65R';
export const promoGtmSrc = `https://sync.tincre.dev/gtm.js?id=${promoGtmId}`;
export function loadPromoGtag() {
  ((w, d, s, l, i) => {
    /*@ts-ignore*/
    w[l] = w[l] || [];
    /*@ts-ignore*/
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    /*@ts-ignore*/
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
    /*@ts-ignore*/
    j.async = true;
    /*@ts-ignore*/
    j.src = 'https://sync.tincre.dev/gtm.js?id=' + i + dl;
    /*@ts-ignore*/
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', promoGtmId);
}

export function gtmPageView(remainingData: object) {
  gtmEvent('PromoEventPageView', remainingData);
}

export function promoEventPageView(remainingData: object) {
  gtmPageView(remainingData);
}

export function promoEventPromoButtonClick(remainingData: object) {
  gtmEvent('PromoEventPromoButtonClick', remainingData);
}

export function promoEventButtonClick(remainingData: object) {
  gtmEvent('PromoEventLoginButtonClick', remainingData);
}

export function promoEventSignupButtonClick(remainingData: object) {
  gtmEvent('PromoEventSignupButtonClick', remainingData);
}

export function promoEventAddPaymentInfo(remainingData: object) {
  gtmEvent('PromoEventAddPaymentInfo', remainingData);
}

export function promoEventDonate(remainingData: object) {
  gtmEvent('PromoEventDonate', remainingData);
}

export function promoEventAddToCart(remainingData: object) {
  gtmEvent('PromoEventAddToCart', remainingData);
}

export function promoEventCompleteRegistration(remainingData: object) {
  gtmEvent('PromoEventCompleteRegistration', remainingData);
}

export function promoEventInitiateCheckout(remainingData: object) {
  gtmEvent('PromoEventInitiateCheckout', remainingData);
}

export function promoEventLead(remainingData: object) {
  gtmEvent('PromoEventLead', remainingData);
}

export function promoEventPurchase(remainingData: object) {
  gtmEvent('PromoEventPurchase', remainingData);
}

export function promoEventSearch(remainingData: object) {
  gtmEvent('PromoEventSearch', remainingData);
}

export function promoEventStartTrial(remainingData: object) {
  gtmEvent('PromoEventStartTrial', remainingData);
}

export function promoEventSubmitApplication(remainingData: object) {
  gtmEvent('PromoEventSubmitApplication', remainingData);
}

export function promoEventSubscribe(remainingData: object) {
  gtmEvent('PromoEventSubscribe', remainingData);
}

export function promoEventViewContent(remainingData: object) {
  gtmEvent('PromoEventViewContent', remainingData);
}

export { generateEventIdClientSide };
