import EmptyComparePart from "@/components/compareComponent/EmptyComparePart";
import FullComparePart from "@/components/compareComponent/FullComparePart";
import BlogSection from "@/components/modules/section-blog";

export default function ComparePage({ params, searchParams }) {
  return (
    <section className="w-full flex flex-col px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
      {/* <EmptyComparePart /> */}
      <FullComparePart />
      <BlogSection/>
    </section>
  );
}
