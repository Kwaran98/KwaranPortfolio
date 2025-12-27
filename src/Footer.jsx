export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-center">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-2">
        <p className="text-gray-600 text-base font-medium">
          © {new Date().getFullYear()} Kamalesh Waran
        </p>
      </div>
    </footer>
  );
}
