import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    const posts = t.raw("posts") as any[];
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const postUrl = `/${locale}/blog/${slug}`;

    return {
        title: `${post.title} | Pombo Mbe Alban`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: postUrl,
            siteName: "Pombo Mbe Alban Portfolio",
            images: [
                {
                    url: post.image || "/logo.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: locale,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image || "/logo.png"],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });

    // Localized posts
    const posts = t.raw("posts") as any[];

    // Find the current post based on the slug
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
