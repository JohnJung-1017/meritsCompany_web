import yjOffice004 from "../../../assets/images/yj_004.jpg";
import { useCommonStore } from "../../common/useCommonStore";

// 자료실 하이라이트. contentRef 는 상위(Hero의 스크롤 타깃)에서 주입한다.
function MP01AA01M3({ contentRef }) {
  const { downloads } = useCommonStore();

  return (
    <section
      ref={contentRef}
      className="relative overflow-hidden bg-slate-950"
      aria-label="Home resources highlight"
    >
      <div className="absolute inset-0">
        <img src={yjOffice004} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.54)_38%,rgba(2,6,23,0.65)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-4xl">
            {/* 어두운 배경 위라 Achievements 의 blue-700 을 그대로 쓰면 대비가 부족해
                같은 계열의 밝은 톤을 사용한다. */}
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-blue-300/90">
              Resources & Downloads
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              제품 및 회사소개서, 표준 설계 도면, 시험성적서, 풍동 시험
              동영상자료까지 프로젝트 검토에 필요한 핵심 자료를 빠르게 확인할 수
              있습니다.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {downloads.map((item) => (
              <button
                key={item.title}
                type="button"
                data-nav-page="resources"
                className="group flex min-h-[9.5rem] w-full items-center justify-between rounded-2xl border border-blue-700/50 bg-white px-6 py-5 text-left shadow-[0_18px_50px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[0_24px_60px_rgba(2,6,23,0.26)]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 transition duration-300 group-hover:border-blue-700 group-hover:text-blue-700">
                    <i data-lucide={item.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-medium tracking-tight text-slate-800 transition group-hover:text-slate-950 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Download
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{item.meta}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MP01AA01M3;
