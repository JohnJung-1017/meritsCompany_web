import SectionHeading from "../../common/SectionHeading";
import { useCO01store } from "./useCO01store";

// 기업연혁 블록
function CO01AA01M3() {
  const { historyTimeline } = useCO01store();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Company History" title="기업연혁" underline />
      <div className="divide-y divide-gray-100 border-t border-gray-100">
        {historyTimeline.map((year) => (
          <div
            key={year.year}
            className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[7rem_1fr]"
          >
            <p className="text-3xl font-bold text-blue-700">{year.year}</p>
            <ul className="space-y-4">
              {year.items.map((item) => (
                <li
                  key={`${year.year}-${item.month}-${item.desc}`}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-7 w-9 flex-shrink-0 items-center justify-center rounded-md bg-gray-200 text-xs font-bold text-gray-700">
                    {item.month}
                  </span>
                  <span className="text-gray-700">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CO01AA01M3;
