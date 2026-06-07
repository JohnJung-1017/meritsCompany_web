// 페이지/섹션 상단의 eyebrow(소제목) + 제목 + 설명 블록.
// About/Resources/Features/Technology 의 반복되는 섹션 헤더를 통일한다.
function SectionHeading({
  eyebrow,
  eyebrowIcon,
  eyebrowColor = "text-blue-600",
  title,
  titleClassName = "",
  description,
  descriptionClassName = "text-gray-500",
  descriptionWide = false,
  descriptionTopMargin = "mt-4",
  underline = false,
  wrapperClassName = "mb-16",
}) {
  const eyebrowClassName = eyebrowIcon
    ? `flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest ${eyebrowColor}`
    : `text-sm font-bold uppercase tracking-widest ${eyebrowColor}`;

  return (
    <div className={`text-center ${wrapperClassName}`}>
      <span className={eyebrowClassName}>
        {eyebrowIcon ? (
          <i data-lucide={eyebrowIcon} className="h-4 w-4" />
        ) : null}
        {eyebrow}
      </span>
      <h2 className={`mt-2 text-3xl font-bold text-gray-900 ${titleClassName}`}>
        {title}
      </h2>
      {underline ? (
        <div className="mx-auto mt-6 h-1 w-12 bg-blue-600" />
      ) : null}
      {description ? (
        <p
          className={`${descriptionTopMargin} ${
            descriptionWide ? "mx-auto max-w-3xl " : ""
          }${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
