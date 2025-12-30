import { useMemo } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import { staticBlogArticles, type BlogArticle } from "@/data/blog-articles";
import { Calendar, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { pt, enUS } from "date-fns/locale";

export default function BlogPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].blog;

  const posts = useMemo(() => 
    staticBlogArticles.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ), 
    []
  );

  const formatDate = (date: Date | string | null | undefined) => {
    if (!date) {
      return language === 'pt' ? 'Data não disponível' : 'Date not available';
    }
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      if (isNaN(dateObj.getTime())) {
        return language === 'pt' ? 'Data não disponível' : 'Date not available';
      }
      return format(dateObj, "d 'de' MMMM, yyyy", { 
        locale: language === 'pt' ? pt : enUS 
      });
    } catch {
      return language === 'pt' ? 'Data não disponível' : 'Date not available';
    }
  };

  const getTitle = (post: BlogArticle) => language === 'pt' ? post.titlePt : post.titleEn;
  const getExcerpt = (post: BlogArticle) => language === 'pt' ? post.excerptPt : post.excerptEn;

  const generateBlogListJsonLd = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://azores4fun.com';
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": language === 'pt' ? "Blog Azores4Fun - Turismo e Aventura nos Açores" : "Azores4Fun Blog - Tourism and Adventure in the Azores",
      "description": seo.description,
      "url": `${baseUrl}/blog`,
      "inLanguage": language === 'pt' ? 'pt-PT' : 'en-US',
      "publisher": {
        "@type": "Organization",
        "name": "Azores4Fun",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Horta",
          "addressRegion": "Faial",
          "addressCountry": "Portugal"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+351934993770",
          "contactType": "customer service"
        }
      },
      "blogPost": posts?.slice(0, 10).map(post => ({
        "@type": "BlogPosting",
        "headline": getTitle(post),
        "description": getExcerpt(post),
        "url": `${baseUrl}/blog/${post.slug}`,
        "image": post.featuredImage ? `${baseUrl}${post.featuredImage}` : undefined,
        "datePublished": post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
        "author": {
          "@type": "Organization",
          "name": post.author || "Azores4Fun"
        }
      })) || []
    };
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/blog"
      />
      {posts && posts.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(generateBlogListJsonLd())}
          </script>
        </Helmet>
      )}
      <Navigation />

      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4" data-testid="text-blog-title">
              {t.blog.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
              {t.blog.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card 
                    className="overflow-hidden hover-elevate transition-all cursor-pointer h-full flex flex-col"
                    data-testid={`card-blog-post-${post.id}`}
                  >
                    {post.featuredImage && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={getTitle(post)}
                          className="w-full h-full object-cover"
                        />
                        {post.category && (
                          <Badge className="absolute top-3 left-3" variant="secondary">
                            {post.category}
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h2 className="font-heading text-xl font-bold mb-3 line-clamp-2">
                        {getTitle(post)}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                        {getExcerpt(post)}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium text-sm mt-3">
                        {t.common.learnMore}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.blog.empty}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
