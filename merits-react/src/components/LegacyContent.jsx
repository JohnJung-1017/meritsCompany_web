import legacyBodyHtml from '../legacy-body.html?raw'

function LegacyContent({ containerRef, onInteraction }) {
  return (
    <div
      ref={containerRef}
      onClick={onInteraction}
      className="flex min-h-screen flex-col"
      dangerouslySetInnerHTML={{ __html: legacyBodyHtml }}
    />
  )
}

export default LegacyContent
