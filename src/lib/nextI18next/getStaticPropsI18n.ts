import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Namespace } from "react-i18next";

export const getStaticPropsI18n = (nameSpace: Extract<Namespace, string[]>) => {
  const getStaticProps = async ({
    locale,
  }: {
    locale: Parameters<typeof serverSideTranslations>[0];
  }) => ({
    props: {
      ...(await serverSideTranslations(locale, nameSpace)),
    },
  });

  return getStaticProps;
};
