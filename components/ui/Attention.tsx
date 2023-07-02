interface AttentionProps {
    text: string;
}

export default function Attention({text}: AttentionProps) {
  return (
    <div className="w-full text-center text-foreground bg-orange-600 py-1">{text}</div>
  )
}
