export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  location: string;
  bestTime: string;
  cost: string;
  emoji: string;
  category: string;
  funFact?: string;
  address: string;
}

export interface Food {
  name: string;
  description: string;
  emoji: string;
  placesToEat: string[];
  bestTime: string;
  taste: string;
  funFact?: string;
}

export interface Hotel {
  name: string;
  address: string;
  priceRange: string;
  description: string;
  rating: string;
  budgetCategory: 'budget' | 'mid' | 'luxury';
  emoji: string;
  highlight: string;
}

export interface ItineraryStop {
  time: string;
  place: string;
  desc: string;
  activity: string;
  emoji: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  description: string;
  stops: ItineraryStop[];
}
