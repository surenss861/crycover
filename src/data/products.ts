export type ProductHandle = "reset-kit" | "reset-duo" | "reset-trio";

export interface Product {
  handle: ProductHandle;
  name: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  badge?: string;
  benefits: string[];
  story: string;
  howToUse: string;
  fridgeTip: string;
  ingredientsSummary: string;
  isBundle: boolean;
  bundleCopy?: string;
}

export const products: Record<ProductHandle, Product> = {
  "reset-kit": {
    handle: "reset-kit",
    name: "Reset Kit",
    description:
      "6 individually wrapped patches. For the look of less puffiness and calmer skin after emotional moments.",
    price: "$24",
    benefits: [
      "Helps reduce the appearance of puffiness",
      "Skin looks calmer, less red-looking",
      "Hydrates tear-dried skin",
    ],
    story:
      "Made for after moments — when feelings show up on your face and you still have to show up. No explanation needed.",
    howToUse:
      "Apply under eyes and on upper cheek. Leave on about 10 minutes. Gently remove.",
    fridgeTip: "Store in the fridge for an extra cooling feel.",
    ingredientsSummary:
      "Caffeine, niacinamide, hyaluronic acid. Gentle, no harsh actives. See full ingredients page for details.",
    isBundle: false,
  },
  "reset-duo": {
    handle: "reset-duo",
    name: "Reset Duo",
    description:
      "2 Reset Kits. Keep one at home, one in your bag. Save 10%.",
    price: "$44",
    compareAtPrice: "$48",
    badge: "Save 10%",
    benefits: [
      "Everything in the Reset Kit, times two",
      "One for home, one for your bag",
      "Save when you stock up",
    ],
    story:
      "For when you want a reset wherever you are. One kit stays on your shelf, one goes with you.",
    howToUse:
      "Same as the Reset Kit. Apply under eyes and on upper cheek. 10 minutes. Gently remove.",
    fridgeTip: "Keep one in the fridge, one in your bag.",
    ingredientsSummary:
      "Same formula as the Reset Kit. Caffeine, niacinamide, hyaluronic acid.",
    isBundle: true,
    bundleCopy: "Keep one at home, one in your bag.",
  },
  "reset-trio": {
    handle: "reset-trio",
    name: "Reset Trio",
    description:
      "3 Reset Kits. Never without a reset. Save 15%.",
    price: "$62",
    compareAtPrice: "$72",
    badge: "Save 15%",
    benefits: [
      "Everything in the Reset Kit, times three",
      "Never without a reset",
      "Best value",
    ],
    story:
      "For the people who know they’ll use it. Home, bag, desk — covered.",
    howToUse:
      "Same as the Reset Kit. Apply under eyes and on upper cheek. 10 minutes. Gently remove.",
    fridgeTip: "Keep one in the fridge for an extra cooling feel.",
    ingredientsSummary:
      "Same formula as the Reset Kit. Caffeine, niacinamide, hyaluronic acid.",
    isBundle: true,
    bundleCopy: "Keep one at home, one in your bag, one for backup.",
  },
};

export function getProduct(handle: string): Product | null {
  if (handle in products) return products[handle as ProductHandle];
  return null;
}
