// 와류저감장치 적용 상세 구조 (이미지 영역)
function TE01AA01M9() {
  return (
    <div className="reveal mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
        <i
          data-lucide="image"
          className="icon-react mr-2 h-6 w-6 text-blue-600"
        />
        와류저감장치 적용 상세 구조
      </h3>

      <div className="group relative flex h-[500px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="blueprint-bg absolute inset-0 opacity-40" />

        <img
          src="https://images.unsplash.com/photo-1581093583563-3df8e76da74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="와류저감장치 구조 도면"
          className="absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        />

        <div className="relative z-10 flex flex-col items-center rounded-2xl border border-gray-200 bg-white/70 p-6 text-center shadow-sm backdrop-blur-md">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-600/10 text-blue-600">
            <i data-lucide="camera" className="h-8 w-8" />
          </div>
          <p className="text-lg font-bold text-gray-700">
            와류저감장치 상세 도면/사진 삽입 영역
          </p>
          <p className="mt-2 text-sm font-light text-gray-500">
            유동저감장치(오버행), 직결피스(M14X25L), 받침대(GI), STS 각관 구조
            위치
          </p>
        </div>

        <div className="absolute left-4 top-4 rounded border border-blue-200 bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-800 shadow-sm backdrop-blur-md">
          실제 적용 구조 렌더링
        </div>
      </div>
      <p className="mt-5 px-4 text-center text-sm font-light leading-relaxed text-gray-500">
        <strong>도약대 효과(Ski-jump Effect)</strong>를 통해 오버행 곡면이
        바람을 위쪽으로 튕겨 내어 벽체 뒤쪽의 정온역(Wind Shadow)을 획기적으로
        넓히고,{" "}
        <strong>와류 파쇄(Vortex Breaking)</strong> 기술인 다단 리브 구조가
        거대한 소용돌이를 잘게 부수어 소음과 비산 먼지를 차단합니다.
      </p>
    </div>
  );
}

export default TE01AA01M9;
