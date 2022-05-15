import { useTranslation } from "next-i18next";
import { getStaticPropsI18n } from "lib/nextI18next/getStaticPropsI18n";

const Home = () => {
  const { t: t1 } = useTranslation();
  const { t: t2 } = useTranslation("ns1");

  return (
    <>
      <div>{t1("title")}</div>
      <div>{t1("greet.morning")}</div>
      <div>{t1("greet.evening")}</div>

      <div>{t2("user.1.name")}</div>
      <div>{t2("user.1.age")}</div>
      <div>{t2("user.2.name")}</div>
      <div>{t2("user.2.age")}</div>
    </>
  );
};

export default Home;

export const getStaticProps = getStaticPropsI18n(["common", "ns1"]);
