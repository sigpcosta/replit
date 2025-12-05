import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import type { BlogPost } from "@shared/schema";
import { Calendar, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { pt, enUS } from "date-fns/locale";

export default function BlogPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].blog;

  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, "d 'de' MMMM, yyyy", { 
      locale: language === 'pt' ? pt : enUS 
    });
  };

  const getTitle = (post: BlogPost) => language === 'pt' ? post.titlePt : post.titleEn;
  const getExcerpt = (post: BlogPost) => language === 'pt' ? post.excerptPt : post.excerptEn;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/blog"
      />
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
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.blog.error}</p>
            </div>
          ) : posts && posts.length > 0 ? (
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
