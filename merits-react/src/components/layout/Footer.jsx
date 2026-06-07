import teamMeritsLogoWhiteTextFoot from "../../assets/team-merits-logo-white-text-foot.svg";
import { useCommonStore } from "../common/useCommonStore";

function Footer() {
  const { company, offices } = useCommonStore();
  const { head, factory } = offices;

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
                상호 : {company.name}
                <span className="mx-2 text-gray-600">|</span>
                대표 : {company.ceo}
              </p>
              <p className="mt-3 flex items-center text-sm text-gray-400">
                <i data-lucide="mail" className="mr-2 h-4 w-4" />
                {company.email}
              </p>
            </div>
            {/* Head Office */}
            <div className="md:col-span-4">
              <h4 className="mb-4 flex items-center font-bold text-white">
                <i
                  data-lucide="building-2"
                  className="mr-2 h-4 w-4 text-blue-500"
                />
                {head.label}
              </h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                {head.addressLines[0]}
                <br />
                {head.addressLines[1]} {head.addressDetail}
              </p>
              <p className="text-sm font-mono text-gray-400">
                <span className="text-gray-500">TEL.</span>
                {" "}{head.tel}{" "}
                <span className="mx-2 text-gray-700">|</span>
                <span className="text-gray-500">FAX.</span>
                {" "}{head.fax}
              </p>
            </div>
            {/* Factory */}
            <div className="md:col-span-4">
              <h4 className="mb-4 flex items-center font-bold text-white">
                <i data-lucide="factory" className="mr-2 h-4 w-4 text-blue-500" />
                {factory.label}
              </h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                {factory.addressLines[0]}
                <br />
                {factory.addressDetail}
              </p>
              <p className="text-sm font-mono text-gray-400">
                <span className="text-gray-500">TEL.</span>
                {" "}{factory.tel}{" "}
                <span className="mx-2 text-gray-700">|</span>
                <span className="text-gray-500">FAX.</span>
                {" "}{factory.fax}
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
