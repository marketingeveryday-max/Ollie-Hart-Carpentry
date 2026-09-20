import { Code, UploadCloud, Copy, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <main
      id="onboarding-page"
      className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div id="onboarding-container" className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <header id="onboarding-header" className="text-center mb-12 sm:mb-16">
          <p
            id="onboarding-eyebrow"
            className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3"
          >
            PROFIT STUDIO · MEDIA SETUP
          </p>
          <h1
            id="onboarding-title"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-3"
          >
            Prepare Your Website Media
          </h1>
          <p
            id="onboarding-subtitle"
            className="text-lg text-neutral-600 font-normal"
          >
            Upload your media, then build your website.
          </p>
        </header>

        {/* Three Step Cards */}
        <div
          id="steps-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Step 1 */}
          <section
            id="step-card-1"
            className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  id="step-badge-1"
                  className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-800 text-sm font-semibold flex items-center justify-center"
                >
                  1
                </span>
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <Code className="w-5 h-5" />
                </div>
              </div>

              <h2
                id="step-heading-1"
                className="text-xl font-semibold text-neutral-900 mb-2"
              >
                Open Code
              </h2>
              <p
                id="step-desc-1"
                className="text-neutral-600 text-sm leading-relaxed"
              >
                Open the Code view in Google AI Studio.
              </p>
            </div>
          </section>

          {/* Step 2 */}
          <section
            id="step-card-2"
            className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  id="step-badge-2"
                  className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-800 text-sm font-semibold flex items-center justify-center"
                >
                  2
                </span>
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <UploadCloud className="w-5 h-5" />
                </div>
              </div>

              <h2
                id="step-heading-2"
                className="text-xl font-semibold text-neutral-900 mb-2"
              >
                Upload Your Media
              </h2>
              <p
                id="step-desc-2"
                className="text-neutral-600 text-sm leading-relaxed mb-4"
              >
                Drag your prepared files into:
              </p>

              {/* Visual directory path */}
              <div
                id="directory-path-display"
                className="flex items-center flex-wrap gap-1.5 p-2.5 rounded-lg bg-neutral-100/80 border border-neutral-200/80 font-mono text-xs text-neutral-800"
              >
                <span className="font-medium">public</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-medium">assets</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-semibold text-neutral-950">media</span>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section
            id="step-card-3"
            className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  id="step-badge-3"
                  className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-800 text-sm font-semibold flex items-center justify-center"
                >
                  3
                </span>
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <Copy className="w-5 h-5" />
                </div>
              </div>

              <h2
                id="step-heading-3"
                className="text-xl font-semibold text-neutral-900 mb-2"
              >
                Copy the Build Prompt
              </h2>
              <p
                id="step-desc-3"
                className="text-neutral-600 text-sm leading-relaxed"
              >
                Return to the Profit Studio guide and copy &ldquo;Build the Complete Website.&rdquo;
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

