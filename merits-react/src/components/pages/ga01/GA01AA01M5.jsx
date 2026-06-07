import ImageWithFallback from "../../common/ImageWithFallback";

// 상세보기 이미지 캐러셀
function GA01AA01M5({
  images,
  currentImageIndex,
  onPrev,
  onNext,
  canPrev,
  canNext,
}) {
  const currentImage = images[currentImageIndex];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
        <div className="aspect-[16/10]">
          <ImageWithFallback
            src={currentImage.src}
            alt={currentImage.alt}
            fallbackLabel={currentImage.caption}
          />
        </div>
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="이전 이미지"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg font-semibold text-white shadow transition hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          aria-label="다음 이미지"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg font-semibold text-white shadow transition hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {">"}
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/70">
        <span>{currentImage.caption}</span>
        <span className="font-medium text-white">
          {currentImageIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}

export default GA01AA01M5;
