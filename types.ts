
export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
}

export interface InquiryData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}
