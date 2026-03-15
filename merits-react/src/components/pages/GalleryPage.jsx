import { useMemo, useState } from "react";
import { galleryMeta } from "./gallery.meta";

const imageModules = import.meta.glob(
  "../../assets/images/*.{png,jpg,jpeg,webp,avif,gif,svg}",
  { eager: true, import: "default" }
);

const toFallbackTitle = (filename) =>
  filename.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim() || "Untitled";

function GalleryPage() {
  const galleryItems = useMemo(
    () =>
      Object.entries(imageModules)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([path, image]) => {
          const filename = path.split("/").pop() || "";
          const key = filename.replace(/\.[^/.]+$/, "");
          const fallbackTitle = toFallbackTitle(filename);
          const meta = galleryMeta[key] || {};
          const title = meta.title || fallbackTitle;

          return {
            image,
            title,
            description: meta.description || "",
            alt: meta.alt || title,
          };
        }),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = galleryItems.length;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < itemCount - 1;

  const goPrev = () => {
    if (!canGoPrev) {
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (!canGoNext) {
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <>
      {/* PAGE: GALLERY */}
      <div
        id="page-gallery"
        className="page-section hidden fade-in bg-gray-50 border-t border-gray-200"
      >
        <section className="py-24 min-h-[calc(100vh-5rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {itemCount === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 p-10 text-center text-gray-500">
                <p className="font-medium">`src/assets/images` 폴더에 이미지를 추가해 주세요.</p>
                <p className="text-sm mt-2">
                  파일명으로 기본 title/alt를 생성하고, `gallery.meta.js`로 덮어쓸 수 있습니다.
                </p>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-white">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {galleryItems.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="w-full shrink-0">
                      <div className="group relative overflow-hidden h-[28rem] md:h-[32rem]">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-bold text-2xl mb-1">{item.title}</h3>
                          {item.description ? (
                            <p className="text-blue-200 text-base font-light">{item.description}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  aria-label="이전 사진"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-gray-800 shadow-md border border-gray-200 hover:bg-white transition disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canGoNext}
                  aria-label="다음 사진"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-gray-800 shadow-md border border-gray-200 hover:bg-white transition disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  {">"}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default GalleryPage;
