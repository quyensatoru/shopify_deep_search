import { DeliveryMethod, WebhookHandler } from "@shopify/shopify-api";
function noop () {}

export default {
  ORDERS_PAID: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: `${process.env.API_URL}/webhook/orders/paid`,
    callback: noop
  },
  APP_UNINSTALLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: `${process.env.API_URL}/webhook/app/uninstalled`,
    callback: noop
  },
} as {[key: string]: WebhookHandler};
