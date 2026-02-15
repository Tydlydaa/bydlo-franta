import { Star } from 'lucide-react'

interface DesignerRatingProps {
  rating: number
  reviewCount: number
}

export function DesignerRating({ rating, reviewCount }: DesignerRatingProps) {
  return (
    <span className="inline-flex items-center gap-1">
      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
      <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
      <span className="text-muted-foreground">({reviewCount})</span>
    </span>
  )
}
