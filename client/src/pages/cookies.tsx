import { useLanguage } from "@/i18n/LanguageContext";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Cookies() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.legal.cookies.title} | Azores4fun</title>
        <meta name="description" content={t.legal.cookies.metaDescription} />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              {t.legal.cookies.title}
            </h1>

            <p>{t.legal.cookies.p1}</p>

            <p>{t.legal.cookies.p2}</p>

            <p>{t.legal.cookies.p3}</p>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
