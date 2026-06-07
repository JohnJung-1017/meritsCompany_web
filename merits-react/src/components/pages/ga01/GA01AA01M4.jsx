import GA01AA01M5 from "./GA01AA01M5";

const detailFields = [
  { key: "location", label: "위치" },
  { key: "period", label: "공사기간" },
  { key: "scale", label: "규모" },
];

// 시공사례 상세보기 패널 (캐러셀 + 상세 정보)
function GA01AA01M4({
  project,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onClose,
}) {
  const canPrev = currentImageIndex > 0;
  const canNext = currentImageIndex < project.images.length - 1;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#1f1f1f] text-white shadow-[0_35px_90px_rgba(15,23,42,0.24)] animate-[detailReveal_320ms_ease-out]">
      <button
        type="button"
        onClick={onClose}
        aria-label="상세보기 닫기"
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl leading-none text-white transition hover:bg-white/10"
      >
        ×
      </button>

      <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:p-10">
        <GA01AA01M5
          images={project.images}
          currentImageIndex={currentImageIndex}
          onPrev={onPrevImage}
          onNext={onNextImage}
          canPrev={canPrev}
          canNext={canNext}
        />

        <div className="flex flex-col justify-between rounded-[1.75rem] bg-white/5 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Detail View
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
              {project.title}
            </h2>

            <dl className="mt-8 space-y-4">
              {detailFields.map((field) => (
                <div
                  key={field.key}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-white/10 pb-4"
                >
                  <dt className="text-sm font-semibold text-white/55">
                    {field.label}
                  </dt>
                  <dd className="text-sm leading-6 text-white/88">
                    {project.detail[field.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-black/20 p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
              Description
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/84 sm:text-base">
              {project.detail.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GA01AA01M4;
