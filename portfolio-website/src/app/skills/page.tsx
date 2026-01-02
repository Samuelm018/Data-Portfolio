export default function SkillsPage() {
    return (
        <div className="py-20">
            <div className="container-custom">
                <h1 className="text-4xl font-bold mb-12 text-center">Technical Skills</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {[
                        { name: "Python", category: "Analysis" },
                        { name: "SQL", category: "Database" },
                        { name: "Power BI", category: "Visualization" },
                        { name: "Excel", category: "Spreadsheet" },
                        { name: "Pandas", category: "Data Processing" },
                        { name: "Seaborn", category: "Visualization" },
                    ].map((tool) => (
                        <div key={tool.name} className="p-6 bg-card border border-gray-800 rounded-xl hover:border-primary/30 transition-colors">
                            <div className="text-xl font-bold text-white mb-2">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.category}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
