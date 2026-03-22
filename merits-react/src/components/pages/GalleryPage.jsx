import { useState } from "react";
import GalleryGrid from "./gallery/GalleryGrid";
import GalleryHeader from "./gallery/GalleryHeader";
import { galleryPageCopy, galleryProjects } from "./gallery.meta";

function GalleryPage() {
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
      Math.min(prev + 1, activeProject.images.length - 1)
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
          <GalleryHeader
            title={galleryPageCopy.title}
            description={galleryPageCopy.description}
          />

          <div className="mt-16">
            <GalleryGrid
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

export default GalleryPage;
