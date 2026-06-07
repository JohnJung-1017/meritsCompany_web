import { useMP01store } from "./useMP01store";

// 공식 SNS 채널 링크
function MP01AA01M4() {
  const { socials } = useMP01store();

  return (
    <section className="bg-slate-100" aria-label="Home social links">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Social Links
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              메리츠의 공식 채널을 확인해보세요
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            유튜브, 인스타그램, 페이스북 채널로 연결되는 영역입니다. 실제 링크는
            각 카드의 주석 위치에서 바로 수정하실 수 있습니다.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {socials.map((item) => (
            <a
              key={item.title}
              // TODO: 여기에 실제 SNS 링크를 넣어주세요.
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accentClassName} text-white shadow-lg shadow-slate-200/70`}
                >
                  <i data-lucide={item.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-medium text-slate-500 transition group-hover:text-slate-900">
                <span>채널 바로가기</span>
                <i data-lucide="arrow-up-right" className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MP01AA01M4;
