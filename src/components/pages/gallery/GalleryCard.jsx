import GalleryImage from "./GalleryImage";

function GalleryCard({ project, isActive, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(project.id)}
      aria-expanded={isActive}
      className={`group w-full overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition duration-300 ${
        isActive
          ? "border-blue-700 shadow-[0_20px_50px_rgba(30,64,175,0.12)]"
          : "border-slate-200 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <GalleryImage
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fallbackLabel={project.title}
          className="transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <span className="text-base font-semibold text-slate-900 sm:text-lg">
          {project.title}
        </span>
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition ${
            isActive
              ? "border-blue-700 bg-blue-700 text-white"
              : "border-slate-300 text-slate-700 group-hover:border-blue-700 group-hover:text-blue-700"
          }`}
        >
          {isActive ? "-" : "+"}
        </span>
      </div>
    </button>
  );
}

export default GalleryCard;
