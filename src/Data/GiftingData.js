const giftingProducts = [
  {
    id: 801,
    name: "Velmora Grand Élan",
    type: "Gift Set",
    category: "Luxury Gift Set",
    fragrance: "Amber, Rose & Sandalwood",
    size: "3 × 30 ML",
    price: 2999,
    oldPrice: 3599,
    discount: "17% OFF",
    image:
      "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/APRIL/30/aIXF0z3S_92dafe4e9596419091d14716d533d8e8.jpg"
  },

  {
    id: 802,
    name: "Velmora Golden Moments",
    type: "Gift Set",
    category: "Premium Fragrance Set",
    fragrance: "Vanilla, Musk & Amber",
    size: "2 × 50 ML",
    price: 3299,
    oldPrice: 3899,
    discount: "15% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK8B3R74EonNzjDi-7pasNVVkx5niJbdDoLnnSx6Svw&s"
  },

  {
    id: 803,
    name: "Velmora Rosé Affair",
    type: "Gift Set",
    category: "Fragrance Gift Box",
    fragrance: "Rose, Peony & Soft Musk",
    size: "4 × 20 ML",
    price: 2799,
    oldPrice: 3299,
    discount: "15% OFF",
    image:
      "https://velaire.in/cdn/shop/files/Website_2_1080x1080.jpg?v=1779085649"
  },

  {
    id: 804,
    name: "Velmora Celebration Duo",
    type: "Couple Gift",
    category: "Couple Perfume Set",
    fragrance: "Citrus & Woods / Floral & Vanilla",
    size: "2 × 50 ML",
    price: 3499,
    oldPrice: 4199,
    discount: "17% OFF",
    image:
      "https://m.media-amazon.com/images/I/51vJ+MV3rcL._AC_UF350,350_QL80_.jpg"
  },

  {
    id: 805,
    name: "Velmora Silk Reverie",
    type: "Gift Set",
    category: "Luxury Fragrance Collection",
    fragrance: "Jasmine, Oud & Vanilla",
    size: "3 × 30 ML",
    price: 3199,
    oldPrice: 3799,
    discount: "16% OFF",
    image:
      "https://m.media-amazon.com/images/I/61PKU1SBViL._AC_UF1000,1000_QL80_.jpg"
  },

  {
    id: 806,
    name: "Velmora Cherished",
    type: "Gift Set",
    category: "Special Occasion Gift",
    fragrance: "Floral, Musk & Warm Amber",
    size: "4 × 20 ML",
    price: 2899,
    oldPrice: 3499,
    discount: "17% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcL42OEGEyN6opk_8JJQPZ9M0T2qz_ZlCDu6QFc9OjWp7oLbnpmE3hmA&s=10"
  },

  {
    id: 807,
    name: "Velmora Luxe Pair",
    type: "Couple Gift",
    category: "His & Hers Set",
    fragrance: "Woody Spice & White Florals",
    size: "2 × 50 ML",
    price: 3699,
    oldPrice: 4399,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/17747908/pexels-photo-17747908.jpeg?auto=compress&cs=tinysrgb&w=900"
  },

  {
    id: 808,
    name: "Velmora Festive Aura",
    type: "Gift Set",
    category: "Festive Perfume Box",
    fragrance: "Saffron, Rose & Oud",
    size: "3 × 30 ML",
    price: 3099,
    oldPrice: 3699,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/7670692/pexels-photo-7670692.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    id: 809,
    name: "Velmora Opulent Charm",
    type: "Gift Set",
    category: "Luxury Perfume Box",
    fragrance: "Saffron, Amber & Vanilla",
    size: "3 × 30 ML",
    price: 3399,
    oldPrice: 3999,
    discount: "15% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eqs6HTmFv-n_wyTn9UL_bCXPg3D7RSMjFTei2oy-fauZGz4QVZds180&s=10"
  },

  {
    id: 810,
    name: "Velmora Enchanted Pair",
    type: "Couple Gift",
    category: "His & Hers Collection",
    fragrance: "Cedar & Musk / Rose & Jasmine",
    size: "2 × 50 ML",
    price: 3799,
    oldPrice: 4499,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=900"
  },

  {
    id: 811,
    name: "Velmora Imperial Essence",
    type: "Gift Set",
    category: "Premium Fragrance Set",
    fragrance: "Oud, Leather & Tonka",
    size: "4 × 20 ML",
    price: 3299,
    oldPrice: 3899,
    discount: "15% OFF",
    image:
      "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=900"
  },

  {
    id: 812,
    name: "Velmora Petal Dreams",
    type: "Gift Set",
    category: "Floral Fragrance Collection",
    fragrance: "Peony, Rose & White Musk",
    size: "3 × 30 ML",
    price: 2899,
    oldPrice: 3399,
    discount: "15% OFF",
    image:
      "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=900"
  },

  {
    id: 813,
    name: "Velmora Celebration Luxe",
    type: "Gift Set",
    category: "Celebration Gift Box",
    fragrance: "Bergamot, Amber & Sandalwood",
    size: "4 × 20 ML",
    price: 3099,
    oldPrice: 3699,
    discount: "16% OFF",
    image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e21fd937-3c01-455d-af10-d3f2c9b98d88.__CR0,140,3840,2375_PT0_SX970_V1___.jpg"
  },

  {
    id: 814,
    name: "Velmora Eternal Bloom",
    type: "Gift Set",
    category: "Romantic Fragrance Set",
    fragrance: "Iris, Vanilla & Soft Musk",
    size: "2 × 50 ML",
    price: 3199,
    oldPrice: 3799,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=900"
  },

  {
    id: 815,
    name: "Velmora Prestige Duo",
    type: "Couple Gift",
    category: "Luxury His & Hers Set",
    fragrance: "Oud & Spice / Floral & Amber",
    size: "2 × 50 ML",
    price: 3999,
    oldPrice: 4699,
    discount: "15% OFF",
    image:
      "https://velmoraperfumes.in/wp-content/uploads/2026/05/1000019365.png"
  },

  {
    id: 816,
    name: "Velmora Sweet Indulgence",
    type: "Gift Set",
    category: "Special Occasion Set",
    fragrance: "Caramel, Vanilla & White Musk",
    size: "3 × 30 ML",
    price: 2799,
    oldPrice: 3299,
    discount: "15% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJXo9AGibFdj2lR74KAsXqqkgQO_wlO3dDzTZaHVlg5sKiMCEUXlcbKY&s=10"
  }
];

export default giftingProducts;