// Core entities

export interface DesignerScore {
  designerId: string
  score: number
  reason: string
}

export interface Testimonial {
  clientName: string
  text: string
  project?: string
}

export interface Designer {
  id: string
  name: string
  specialty: 'interior' | 'architect' | 'both'
  photo: string
  hourlyRate: number
  consultationPrice: string // e.g. "Úvodní konzultace od 1500 Kč"
  availability: 'immediate' | 'within-week' | 'within-month'
  location: string
  yearsExperience: number
  shortBio: string
  approach: string
  whatYouGet: string // Co klient získá z konzultace
  testimonials: Testimonial[]
  portfolioImages: string[]
  tags: string[]
  matchScore?: number
}

export interface ConversationMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  suggestedChoices?: string[]  // Optional button choices for user response
  allowFreeText?: boolean      // Allow "Něco jiného…" escape hatch (default: true)
}

export interface ExtractedNeeds {
  spaceType?: string
  budget?: number
  timeline?: string
  priorities?: string[]
  constraints?: string[]
}

export interface ConversationState {
  initialDescription: string
  messages: ConversationMessage[]
  extractedNeeds: ExtractedNeeds
  designerScores: DesignerScore[]
  isComplete: boolean
}

export interface MatchCriteria {
  needs: ExtractedNeeds
  preferredSpecialty?: string[]
  maxRate?: number
  locationPreference?: string[]
}

// Filter state for Browse / Results
export interface FilterState {
  location: string
  specialty: string
  rateMin: number
  rateMax: number
  availability: ('immediate' | 'within-week' | 'within-month')[]
}
