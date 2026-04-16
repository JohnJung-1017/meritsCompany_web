import teamMeritsLogoWhiteTextFoot from "../../assets/team-merits-logo-white-text-foot.svg";

function Footer() {
  return (
    <>
      {/* Common Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-12 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Company Info */}
            <div className="md:col-span-4">
              <div className="mb-4 flex items-center">
                <img
                  src={teamMeritsLogoWhiteTextFoot}
                  alt="메리츠 로고"
                  className="h-9 w-auto max-w-none origin-left scale-[1.35] object-contain"
                />
              </div>
              <p className="mb-2 text-sm font-medium text-gray-300">
                상호 : (주)메리츠컴퍼니
                <span className="mx-2 text-gray-600">|</span>
                대표 : 김태진
              </p>
              <p className="mt-3 flex items-center text-sm text-gray-400">
                <i data-lucide="mail" className="mr-2 h-4 w-4" />
                merits@merits.co.kr
              </p>
            </div>
            {/* Head Office */}
            <div className="md:col-span-4">
              <h4 className="mb-4 flex items-center font-bold text-white">
                <i
                  data-lucide="building-2"
                  className="mr-2 h-4 w-4 text-blue-500"
                />
                본사
              </h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                경기도 용인시 기흥구 흥덕중앙로 55,
                <br />
                흥덕리써밋 309~310호 (영덕동, 리써밋타워)
              </p>
              <p className="text-sm font-mono text-gray-400">
                <span className="text-gray-500">TEL.</span>
                {" "}1544-3341{" "}
                <span className="mx-2 text-gray-700">|</span>
                <span className="text-gray-500">FAX.</span>
                {" "}031-211-6366
              </p>
            </div>
            {/* Factory */}
            <div className="md:col-span-4">
              <h4 className="mb-4 flex items-center font-bold text-white">
                <i data-lucide="factory" className="mr-2 h-4 w-4 text-blue-500" />
                공장
              </h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                경기도 화성시 서신면 전곡산단13길 7
                <br />
                (전곡리)
              </p>
              <p className="text-sm font-mono text-gray-400">
                <span className="text-gray-500">TEL.</span>
                {" "}031-366-7993{" "}
                <span className="mx-2 text-gray-700">|</span>
                <span className="text-gray-500">FAX.</span>
                {" "}031-366-7994
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-sm md:flex-row">
            <div>© 2000-2026 MERITS COMPANY. ALL RIGHTS RESERVED.</div>
            <div className="mt-4 md:mt-0">
              <button
                type="button"
                data-nav-page="contact"
                className="font-bold tracking-widest transition hover:text-white"
              >
                문의하기
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
