export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* LOGO + TAGLINE */}
          <div className="space-y-4">
            {/* Logo placeholder */}
            <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              <img src="https://images.scalebranding.com/letter-a-logo-7c65ceec-ca7f-46d9-a375-c56629d04a0e.jpg" alt="" />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              I'm Abhijeet — a full-stack developer, student, and leader.
              Thanks for checking out my site.
            </p>
          </div>

          {/* EMPTY / SPACER (keeps layout balanced) */}
          <div />

          {/* CP LINKS */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">
              Competitive Programming
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://codeforces.com/profile/singhabhijeet1212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Codeforces
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/u/Jpr9utstOH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Abhijeet Singh Rajput
        </div>
      </div>
    </footer>
  );
}
