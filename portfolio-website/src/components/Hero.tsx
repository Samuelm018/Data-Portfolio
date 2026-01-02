import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Data Analyst <span className="text-primary">transforming data</span> into business insights
                        </h1>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl">
                            I’m Samuel M, a Data Analyst with hands-on experience in SQL, Power BI, Python, and Excel, focused on transforming raw data into clear, actionable business insights. I build end-to-end analytics solutions—from data cleaning and querying to interactive dashboards—that support data-driven decision-making.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_25px_-5px_var(--color-primary)]"
                        >
                            View Projects
                        </Link>
                        <a
                            href="/SAMUEL_M_Resume.pdf"
                            download="SAMUEL_M_Resume.pdf"
                            target="_blank"
                            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-8">
                        <div className="bg-card border border-gray-800 p-4 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">4+</div>
                            <div className="text-sm text-gray-500">Major Projects</div>
                        </div>
                        <div className="bg-card border border-gray-800 p-4 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">10+</div>
                            <div className="text-sm text-gray-500">Tools Mastered</div>
                        </div>
                        <div className="bg-card border border-gray-800 p-4 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-gray-500">Business Focus</div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse" />
                        <div className="relative h-full w-full rounded-full border-4 border-gray-800 shadow-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500">
                            <Image
                                src="/samuel.jpg"
                                alt="Samuel M"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
