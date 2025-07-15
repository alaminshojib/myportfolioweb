import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";

export default function BlogPage() {
  const posts = [
    {
      title: "📝 My First Seminar Experience",
      date: "July 14, 2025",
      excerpt: "Today I attended a livestock seminar and shared ideas on feed formulation and sustainability...",
      link: "/blogs/seminar-experience",
    },
    {
      title: "🌱 A Visit to BAU Experimental Farm",
      date: "July 13, 2025",
      excerpt: "Explored the new feeding strategies at the experimental dairy farm. Learned a lot from field observation...",
      link: "/blogs/experimental-farm-visit",
    },
    {
      title: "💡 Building My Portfolio Website with HeroUI",
      date: "July 12, 2025",
      excerpt: "I started building my portfolio site using Vite + Tailwind + HeroUI. Here's how I structured the layout...",
      link: "/blogs/building-my-portfolio",
    },
  ];

  return (
    <DefaultLayout>
      <section className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-800 px-4 py-16 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={title()}>My Blog</h1>
          <p className="text-slate-200 mt-4 text-lg">
            Sharing my academic journey, thoughts, and experiences.
          </p>
        </div>

        {/* Blog List */}
        <div className="mt-12 max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl duration-200"
            >
              <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
              <p className="text-sm text-purple-200 mb-3">{post.date}</p>
              <p className="text-slate-100 mb-4">{post.excerpt}</p>
              <Link
                href={post.link}
                className="text-sm text-blue-300 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
