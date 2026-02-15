import { Button } from '@/components/ui/button'

interface ChoiceButtonsProps {
  choices: string[]
  onChoiceClick: (choice: string) => void
  disabled: boolean
  onShowFreeText?: () => void
}

export function ChoiceButtons({ choices, onChoiceClick, disabled, onShowFreeText }: ChoiceButtonsProps) {
  const handleClick = (choice: string) => {
    // "Něco jiného…" variants reveal textarea instead of sending
    const isFreeTextTrigger =
      choice.includes('Něco jiného') ||
      choice.includes('Jinde') ||
      choice.includes('Ještě nevím')

    if (isFreeTextTrigger && onShowFreeText) {
      onShowFreeText()
    } else {
      onChoiceClick(choice)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {choices.map((choice, idx) => (
        <Button
          key={idx}
          variant="outline"
          className="w-full justify-start text-left h-auto py-3 px-4"
          onClick={() => handleClick(choice)}
          disabled={disabled}
        >
          {choice}
        </Button>
      ))}
    </div>
  )
}
