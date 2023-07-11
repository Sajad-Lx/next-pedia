interface AttentionProps {
  text: string
}

export default function Attention({ text }: AttentionProps) {
  return (
    <div className="w-full bg-orange-500 py-1 text-center text-foreground">
      {text}
    </div>
  )
}
