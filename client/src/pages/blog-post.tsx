import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { useMemo } from "react";
import { marked } from "marked";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n/LanguageContext";
import type { BlogPost } from "@shared/schema";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";
import { pt, enUS } from "date-fns/locale";

export default function BlogPostPage() {
  const { t, language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
  });

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

  const getTitle = (p: BlogPost) => language === 'pt' ? p.titlePt : p.titleEn;
  const getContent = (p: BlogPost) => language === 'pt' ? p.contentPt : p.contentEn;
  const getExcerpt = (p: BlogPost) => language === 'pt' ? p.excerptPt : p.excerptEn;

  const htmlContent = useMemo(() => {
    if (!post) return '';
    const content = getContent(post);
    return marked.parse(content) as string;
  }, [post, language]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: getTitle(post),
        text: getExcerpt(post),
        url: window.location.href,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 md:pt-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="w-full h-96 mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 md:pt-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">{t.common.notFound}</h1>
            <p className="text-muted-foreground mb-8">{t.blog.error}</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.blog.backToBlog}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${getTitle(post)} | Blog Azores4fun`}
        description={getExcerpt(post)}
        ogImage={post.featuredImage || "/og-default.jpg"}
        canonicalPath={`/blog/${post.slug}`}
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <article className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6" data-testid="button-back-to-blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.blog.backToBlog}
            </Button>
          </Link>

          {post.category && (
            <Badge className="mb-4" variant="secondary" data-testid="badge-category">
              {post.category}
            </Badge>
          )}

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-post-title">
            {getTitle(post)}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b">
            <span className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {formatDate(post.publishedAt)}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="ml-auto"
              data-testid="button-share"
            >
              <Share2 className="h-4 w-4 mr-2" />
              {t.blog.sharePost}
            </Button>
          </div>

          {post.featuredImage && (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.featuredImage}
                alt={getTitle(post)}
                className="w-full h-full object-cover"
                data-testid="img-featured"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            data-testid="content-body"
          />

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog">
              <Button variant="outline" data-testid="button-back-bottom">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.blog.backToBlog}
              </Button>
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
