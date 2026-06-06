import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryDetail from "./GalleryDetail";

function getColumnCount(width) {
  if (width >= 1280) {
    return 3;
  }

  if (width >= 768) {
    return 2;
  }

  return 1;
}

function GalleryGrid({
  projects,
  activeId,
  onToggle,
  activeProject,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onCloseDetail,
}) {
  const [columnCount, setColumnCount] = useState(() =>
    typeof window === "undefined" ? 3 : getColumnCount(window.innerWidth)
  );
  const activeIndex = projects.findIndex((project) => project.id === activeId);
  const activeRowEndIndex =
    activeIndex >= 0
      ? Math.min(
          Math.floor(activeIndex / columnCount) * columnCount + columnCount - 1,
          projects.length - 1
        )
      : -1;

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);

    return () => {
      window.removeEventListener("resize", updateColumnCount);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.id} className="contents">
          <GalleryCard
            project={project}
            isActive={project.id === activeId}
            onToggle={onToggle}
          />
          {index === activeRowEndIndex && activeProject ? (
            <div className="col-span-1 md:col-span-2 xl:col-span-3">
              <GalleryDetail
                project={activeProject}
                currentImageIndex={currentImageIndex}
                onPrevImage={onPrevImage}
                onNextImage={onNextImage}
                onClose={onCloseDetail}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
