import Commerce from "@chec/commerce.js";

let commerce = null;

function getCommerce(commercePublicKey) {
  // Checks if commerce instance already exist
  // prevents creating instance over and over again
  if (commerce) {
    return commerce;
  } else {
    const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
    const devEnvironment = process.env.NODE_ENV === "development";
    console.log(process.env.COMMERCE_PUBLIC_KEY);
    if (devEnvironment && !publicKey) {
      throw Error("Commerce public API key not found.");
    }

    commerce = new Commerce(publicKey, devEnvironment);
    return commerce;
  }
}

export default getCommerce;
