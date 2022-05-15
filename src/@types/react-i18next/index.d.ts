import "react-i18next";
import type common from "public/locales/en/common.json";
import type ns1 from "public/locales/en/ns1.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      ns1: typeof ns1;
    };
  }
}
