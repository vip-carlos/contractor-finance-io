export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Contractor Finance</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Construction accounting & CFO services
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Based in San Diego, CA
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Serving contractors nationwide
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            &copy; {currentYear} Contractor Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
