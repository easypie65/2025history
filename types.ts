export interface Photo {
  url: string;
  description?: string;
}

export interface ActivitySection {
  title?: string;
  photos?: Photo[];
  padletUrl?: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  pdfUrl?: string;
  sections?: ActivitySection[];
}
