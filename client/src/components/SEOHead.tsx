import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalPath: string;
  structuredData?: object;
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  canonicalPath,
  structuredData
}: SEOProps) {
  const { language } = useLanguage();
  const baseUrl = 'https://azores4fun.com';
  const currentUrl = `${baseUrl}${canonicalPath}`;
  const fullOgImage = `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={language === 'pt' ? 'pt_PT' : 'en_US'} />
      <meta property="og:site_name" content="Azores4fun" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      <link rel="canonical" href={currentUrl} />
      
      <html lang={language} />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
