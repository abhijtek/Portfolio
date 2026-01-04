export default function Video() {
  return (
    <div className="mr-30 ml-30 bg-gray-50">
      <div className="frame">
        <div className="b10" />

        <div className="bmid border-b border-gray-300">
          <div className="px-8 py-20 text-center border-b border-gray-300">
            <p className="text-blue-500 uppercase tracking-widest text-sm mb-3">
              Why Me
            </p>
            <h2 className="text-4xl font-semibold mb-4">
              Why you should hire me
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              A short video explaining how I think, build, and deliver
              real-world software.
            </p>
          </div>

          <div className="px-8 py-24 flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-gray-300 bg-black">
              <iframe
                src="https://drive.google.com/file/d/1iUe7UgHYFq5J9NVKdmm_nMCm8Wfb_t2M/preview
"
                title="Why you should hire me"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="b11" />
      </div>
    </div>
  );
}
