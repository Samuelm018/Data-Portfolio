export default function Footer() {
    return (
        <footer className="bg-[#0F172A] border-t border-gray-800 py-8 mt-auto">
            <div className="container-custom text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Samuel M. All rights reserved.</p>
                <p className="mt-2">Data Analyst | SQL | Power BI | Python</p>
            </div>
        </footer>
    );
}
