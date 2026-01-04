"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function AboutTimeline() {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.set(dot, {
      motionPath: {
        path,
        align: path,
        autoRotate: false,
        start: 0,
        end: 0,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-timeline-row",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0).to(
      dot,
      {
        motionPath: {
          path,
          align: path,
          autoRotate: false,
          start: 0,
          end: 1,
        },
        ease: "none",
      },
      0
    );

    ScrollTrigger.refresh();

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="mr-30 ml-30 bg-gray-50">
      <div className="frame">
        {/* LEFT STRIPE */}
        <div className="b10" />

        {/* CENTER */}
        <div className="bmid">
          {/* ===== ABOUT HEADER ROW ===== */}
          <div className="border-b border-gray-300 px-8 py-20 text-center">
            <p className="text-blue-500 uppercase tracking-widest text-sm mb-3">
              About
            </p>
            <h2 className="text-4xl font-semibold mb-4">
              How I got into building real software
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              My journey didn’t begin with a CS degree, but with curiosity,
              problem-solving, and a desire to build things that actually work.
            </p>
          </div>

          {/* ===== TIMELINE ROW ===== */}
          <div
            id="about-timeline-row"
            className="border-b border-gray-300 px-8 py-28"
          >
            <div className="mx-auto max-w-5xl grid grid-cols-[1fr_80px_1fr] gap-12">
              {/* LEFT */}
              <div>
                <div className="mb-[18rem] rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">Life Before Code</h3>
                  <p className="text-sm text-gray-700">
                    Studying Mechanical Engineering at IIT (ISM) Dhanbad built my
                    analytical thinking long before I wrote production software.
                    Competitive programming in C and C++ shaped how I approach
                    problems.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">These Days</h3>
                  <p className="text-sm text-gray-700">
                    I now focus on full-stack development using React, Node.js,
                    Express, and MongoDB, prioritizing clean architecture,
                    scalability, and maintainability.
                  </p>
                </div>
              </div>

              {/* CENTER PATH */}
              <div className="relative flex justify-center pointer-events-none">
                <svg
                  width="80"
                  height="900"
                  viewBox="0 0 80 900"
                  className="overflow-visible"
                  style={{
                    width: "80px",
                    height: "900px",
                    padding: 0,
                    margin: 0,
                    border: "none",
                  }}
                >
                  <path
                    ref={pathRef}
                    d="
                      M40 0
                      V200
                      C40 260 18 300 18 360
                      V500
                      C18 560 40 600 40 660
                      V800
                      V900
                    "
                    stroke="#a5b4fc"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <div
                  ref={dotRef}
                  className="absolute h-4 w-4 rounded-full bg-blue-500
                  shadow-[0_0_16px_rgba(59,130,246,0.9)]"
                />
              </div>

              {/* RIGHT */}
              <div>
                <div className="mt-[10rem] mb-[18rem] rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">Programming Origins</h3>
                  <p className="text-sm text-gray-700">
                    Building complete applications taught me how frontend,
                    backend, and business logic come together in real systems.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">Life Beyond Code</h3>
                  <p className="text-sm text-gray-700">
                    Outside projects, I mentor, collaborate in student
                    communities, and enjoy explaining technical concepts to
                    others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT*/}
        <div className="b11" />
      </div>
    </div>
  );
}
