import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CheckoutAddress } from "./CheckoutAddress";
import { ANONYMOUS_USER_PROPS, LOGGED_IN_USER_PROPS } from "./fixtures";

let portalRoot = document.getElementById("modal-root");
if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(portalRoot);
}

const setShippingAddress = action("setShippingAddress has been called");
const setBillingAddress = action("setBillingAddress has been called");
const setBillingAsShippingAddress = action(
  "setBillingAsShippingAddress has been called"
);

storiesOf("@components/organisms/CheckoutAddress", module)
  .addParameters({ component: CheckoutAddress })
  .add("default", () => (
    <CheckoutAddress
      {...ANONYMOUS_USER_PROPS}
      shippingAddressRequired
      setShippingAddress={setShippingAddress}
      setBillingAddress={setBillingAddress}
      setBillingAsShippingAddress={setBillingAsShippingAddress}
    />
  ))
  .add("with addresses", () => (
    <CheckoutAddress
      {...LOGGED_IN_USER_PROPS}
      shippingAddressRequired
      setShippingAddress={setShippingAddress}
      setBillingAddress={setBillingAddress}
      setBillingAsShippingAddress={setBillingAsShippingAddress}
    />
  ));
