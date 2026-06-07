import { useRef } from "react";
import MP01AA01M1 from "./MP01AA01M1";
import MP01AA01M2 from "./MP01AA01M2";
import MP01AA01M3 from "./MP01AA01M3";
import MP01AA01M4 from "./MP01AA01M4";

// 메인 페이지 (home). Hero의 스크롤 버튼이 자료실 하이라이트(M3)로 이동하도록
// contentRef 를 여기서 소유해 두 블록을 연결한다.
export function MP01AA01M({ onHeroVisibilityChange }) {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* PAGE: HOME */}
      <div id="page-home" className="page-section fade-in">
        <MP01AA01M1
          onHeroVisibilityChange={onHeroVisibilityChange}
          onScrollToContent={scrollToContent}
        />
        <MP01AA01M2 />
        <MP01AA01M3 contentRef={contentRef} />
        <MP01AA01M4 />
      </div>
    </>
  );
}

export default MP01AA01M;
