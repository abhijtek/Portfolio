export default function Contact() {
  return (
    <div className="mr-30 ml-30 bg-gray-50">
      <div className="frame">
        {/* LEFT STRIPE */}
        <div className="b10" />

        {/* CENTER */}
        <div className="bmid border-x border-gray-300">
          {/* HEADER */}
          <div className="border-b border-gray-300 px-8 py-20 text-center">
            <p className="text-blue-500 uppercase tracking-widest text-sm mb-3">
              Contact
            </p>
            <h2 className="text-4xl font-semibold mb-4">
              Let’s connect
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Whether it’s a project idea, collaboration, or just a conversation,
              feel free to reach out. I usually respond pretty quickly.
            </p>
          </div>

          {/* CONTENT */}
          <div className="px-8 py-28">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT: MESSAGE */}
              <div className="rounded-2xl border border-gray-50 bg-white p-6">
                <h3 className="text-lg font-medium mb-3">
                  Say hello 👋
                </h3>
                <p className="text-gray-600 mb-6">
                  I’m open to internships, freelance work, collaborations,
                  or just exchanging ideas around tech and startups.
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-gray-500 mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:23je0015@iitism.ac.in"
                      className="text-blue-600 hover:underline"
                    >
                      23je0015@iitism.ac.in
                    </a>
                  </div>

                  <div>
                    <span className="block text-gray-500 mb-1">
                      LinkedIn
                    </span>
                    <a
                      href="https://www.linkedin.com/in/abhijeet-rajput-69a783316/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      linkedin.com/in/abhijeet-rajput
                    </a>
                  </div>

                  <div>
                    <span className="block text-gray-500 mb-1">
                      GitHub
                    </span>
                    <a
                      href="https://github.com/abhijtek"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      github.com/abhijtek
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: CTA / AVAILABILITY */}
              <div className="rounded-2xl border border-gray-50 bg-white p-6">
                <h3 className="text-lg font-medium mb-3">
                  Availability
                </h3>
                <p className="text-gray-600 mb-6">
                  I’m generally available for short calls or discussions.
                  If it’s something interesting, I’m happy to make time.
                </p>

                <div className="rounded-xl border border-gray-50 bg-gray-50 p-4 text-sm text-gray-600">
                  <p className="mb-2">
                    Preferred contact method:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email for detailed discussions</li>
                    <li>LinkedIn for quick messages</li>
                  </ul>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                  (Calendar booking coming soon)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT STRIPE */}
        <div className="b11" />
      </div>
    </div>
  );
}
