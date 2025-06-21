import Link from "next/link";

type CourseKey =
  | "neet"
  | "jee"
  | "nda"
  | "foundation"
  | "preuniversity"
  | "primary-secondary";

type CourseDetail = {
  title: string;
  description: string;
  details: string;
};

const courseDetails: Record<CourseKey, CourseDetail> = {
  neet: {
    title: "NEET",
    description:
      "Expert-led NEET coaching program designed to build strong foundations in Physics, Chemistry, and Biology, aligned with the latest exam pattern and syllabus.",
    details:
      "Full NEET course details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
  jee: {
    title: "JEE",
    description:
      "Comprehensive JEE coaching crafted by experienced faculty, focusing on deep conceptual clarity in Physics, Chemistry, and Mathematics, aligned with the latest exam trends.",
    details:
      "Full JEE course details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
  nda: {
    title: "NDA",
    description:
      "Expert-driven NDA coaching focused on academic excellence, and personality development, aligned with the latest exam syllabus and defense service standards.",
    details:
      "Full NDA course details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
  foundation: {
    title: "Foundation Batch",
    description:
      "Foundation coaching for classes 10th to 12th, focusing on academic excellence and personality development.",
    details:
      "Full Foundation Batch details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
  preuniversity: {
    title: "Pre-University",
    description:
      "Classes for 11th and 12th (Science, Commerce, Arts) with comprehensive coverage, expert faculty, and personalized attention.",
    details:
      "Full Pre-University details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
  "primary-secondary": {
    title: "Primary & Secondary",
    description:
      "Engaging and interactive classes for primary and secondary students, focusing on foundational skills and holistic development.",
    details:
      "Full Primary & Secondary details go here. Add syllabus, faculty, duration, highlights, etc.",
  },
};

export default function CourseDetailPage({
  params,
}: {
  params: { slug: CourseKey };
}) {
  const course = courseDetails[params.slug];

  if (!course)
    return <div className="text-center py-20 text-2xl">Course not found.</div>;

  return (
    <section className="py-20 bg-[#f9e98e]/40 dark:bg-[#1a2320] transition-colors min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        <Link
          href="/#courses"
          className="inline-block mb-8 text-[#3b7a57] dark:text-[#f9e98e] hover:underline font-semibold"
        >
          ← Back to Courses
        </Link>
        <div className="bg-[#fffde7] dark:bg-[#324233] border border-[#f9e98e] dark:border-[#3b7a57] rounded-lg shadow-lg p-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            {course.title}
          </h1>
          <p className="text-xl mb-6 text-[#3b7a57] dark:text-yellow-100 font-medium">
            {course.description}
          </p>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Course Details
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{course.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
