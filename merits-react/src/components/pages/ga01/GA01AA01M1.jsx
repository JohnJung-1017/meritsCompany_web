// 시공사례 헤더 (제목 + 설명 문단)
function GA01AA01M1({ title, description }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 space-y-3 text-base leading-7 text-slate-600 sm:text-lg">
        {description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </header>
  );
}

export default GA01AA01M1;
