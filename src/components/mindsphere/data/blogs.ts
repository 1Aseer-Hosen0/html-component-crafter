import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import b4 from "@/assets/blog-4.jpg";
import b5 from "@/assets/blog-5.jpg";
import b6 from "@/assets/blog-6.jpg";

export type Blog = {
  cover: string;
  likes: number;
  comments: number;
  category: string;
  title: string;
  author: string;
  initials: string;
  avatarBg: string;
  readTime: string;
};

export const blogs: Blog[] = [
  { cover: b1, likes: 142, comments: 38, category: "Mental Health", title: "Why talking about anxiety is the first step toward healing", author: "Anika Sharma", initials: "AS", avatarBg: "hsl(217 64% 14%)", readTime: "5 min read" },
  { cover: b2, likes: 98, comments: 21, category: "Self-care", title: "5 daily habits that genuinely helped my mental wellbeing", author: "Riya Patel", initials: "RP", avatarBg: "hsl(214 65% 33%)", readTime: "4 min read" },
  { cover: b3, likes: 203, comments: 57, category: "Community", title: "Finding your people: how peer support changed everything for me", author: "Lena Marcus", initials: "LM", avatarBg: "hsl(212 60% 44%)", readTime: "6 min read" },
  { cover: b4, likes: 76, comments: 14, category: "Mindfulness", title: "Breathing through the hard moments — a beginner's guide", author: "Sam Torres", initials: "ST", avatarBg: "hsl(209 54% 50%)", readTime: "3 min read" },
  { cover: b5, likes: 189, comments: 44, category: "Awareness", title: "Understanding teen burnout and what we can actually do about it", author: "Dr. Priya Nair", initials: "PN", avatarBg: "hsl(217 64% 14%)", readTime: "7 min read" },
  { cover: b6, likes: 317, comments: 82, category: "Stories", title: "From feeling invisible to finding a voice — my Mindsphere story", author: "Anonymous", initials: "AN", avatarBg: "hsl(216 19% 44%)", readTime: "8 min read" },
];
