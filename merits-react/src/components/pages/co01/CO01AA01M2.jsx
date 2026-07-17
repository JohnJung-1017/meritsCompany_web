import SectionHeading from "../../common/SectionHeading";
import { useCO01store } from "./useCO01store";

// 경영목표 블록
function CO01AA01M2() {
  const { managementGoals } = useCO01store();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Management Goals"
        title="경영목표"
        underline
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {managementGoals.map((goal) => (
          <div
            key={goal.title}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <i data-lucide={goal.icon} className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {goal.titleEn}
            </p>
            <h3 className="mt-2 mb-5 text-xl font-bold text-gray-900">
              {goal.title}
            </h3>
            <ul className="space-y-3">
              {goal.points.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                  <span className="text-sm leading-relaxed text-gray-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CO01AA01M2;
