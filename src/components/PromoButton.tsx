export const PromoButton = ({
  onClick,
  content,
}: {
  onClick?: () => void
  content: string
}) => {
  return (
    <button
      onClick={onClick}
      className="border-blue-border shadow-blue-border from-pink-default via-lilac-default to-blue-default h-12 w-60 rounded-[8px] bg-gradient-to-r text-sm font-semibold hover:border-2 hover:shadow-[0px_0px_10px]"
    >
      {content}
    </button>
  )
}
