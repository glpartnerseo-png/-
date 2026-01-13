
import { SiteContent, GalleryItem } from './types';

export const INITIAL_CONTENT: SiteContent = {
  heroTitle: "전문가의 손길로 되살아나는 가치",
  heroSubtitle: "명품 복원부터 대규모 단체 세탁까지, 프로캠(PROCAM)이 책임집니다.",
  service1Title: "명품 세탁 & 복원",
  service1Desc: "고가의 명품 의류, 핸드백, 가죽 제품을 전문적인 기술력으로 본연의 아름다움을 되찾아 드립니다.",
  service2Title: "기업 & 단체 세탁",
  service2Desc: "공장 작업복, 군복, 소방복부터 연수원과 기숙사의 대량 침구류까지 체계적인 시스템으로 관리합니다."
};

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    title: "명품 패딩 복원",
    category: "Luxury",
    beforeImg: "https://picsum.photos/seed/before1/600/400",
    afterImg: "https://picsum.photos/seed/after1/600/400"
  },
  {
    id: 2,
    title: "가죽 핸드백 염색",
    category: "Luxury",
    beforeImg: "https://picsum.photos/seed/before2/600/400",
    afterImg: "https://picsum.photos/seed/after2/600/400"
  },
  {
    id: 3,
    title: "대량 작업복 클리닝",
    category: "Group",
    beforeImg: "https://picsum.photos/seed/before3/600/400",
    afterImg: "https://picsum.photos/seed/after3/600/400"
  }
];

export const COLORS = {
  black: "#000000",
  deepGreen: "#013220",
  accentGreen: "#006400",
  lightGreen: "#00A86B"
};
