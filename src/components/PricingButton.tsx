export const PricingButton = ({
  onClick,
  content,
}: {
  onClick?: () => void
  content: string
}) => {
  return (
    <button
      onClick={onClick}
      className="border-blue-border shadow-blue-border from-pink-default via-lilac-default to-blue-default mt-4 mb-8 h-12 w-full max-w-[480px] rounded-3xl bg-gradient-to-r font-semibold hover:border-2 hover:shadow-[0px_0px_10px]"
    >
      {content}
    </button>
  )
}
