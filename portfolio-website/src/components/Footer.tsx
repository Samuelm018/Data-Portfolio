export default function Footer() {
    return (
        <footer className="bg-navbar border-t border-white/10 py-8 mt-auto">
            <div className="container-custom text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Samuel M. All rights reserved.</p>
            </div>
        </footer>
    );
}
