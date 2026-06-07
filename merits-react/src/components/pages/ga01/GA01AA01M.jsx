import { useState } from "react";
import GA01AA01M1 from "./GA01AA01M1";
import GA01AA01M2 from "./GA01AA01M2";
import { useGA01store } from "./useGA01store";

// 시공사진 페이지 (gallery) — 카드 그리드 + 인라인 상세보기 상태 관리
export function GA01AA01M() {
  const { galleryPageCopy, galleryProjects } = useGA01store();
  const [activeId, setActiveId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeProject =
    galleryProjects.find((project) => project.id === activeId) || null;

  const handleToggleCard = (projectId) => {
    if (projectId === activeId) {
      setActiveId(null);
      setCurrentImageIndex(0);
      return;
    }

    setActiveId(projectId);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextImage = () => {
    if (!activeProject) {
      return;
    }

    setCurrentImageIndex((prev) =>
      Math.min(prev + 1, activeProject.images.length - 1),
    );
  };

  const handleCloseDetail = () => {
    setActiveId(null);
    setCurrentImageIndex(0);
  };

  return (
    <div
      id="page-gallery"
      className="page-section hidden border-t border-slate-200 bg-gradient-to-b from-slate-100 via-white to-slate-100 fade-in"
    >
      <section className="min-h-[calc(100vh-5rem)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GA01AA01M1
            title={galleryPageCopy.title}
            description={galleryPageCopy.description}
          />

          <div className="mt-16">
            <GA01AA01M2
              projects={galleryProjects}
              activeId={activeId}
              onToggle={handleToggleCard}
              activeProject={activeProject}
              currentImageIndex={currentImageIndex}
              onPrevImage={handlePrevImage}
              onNextImage={handleNextImage}
              onCloseDetail={handleCloseDetail}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default GA01AA01M;
