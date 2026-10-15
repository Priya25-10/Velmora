const allProductsData = [
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
  },
  {
    id: 901,
    name: "Velmora Noir",
    category: "Men",
    price: 2499,
    oldPrice: 2999,
    discount: "17% OFF",
    description: "A bold woody and amber fragrance.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 902,
    name: "Velmora Rose",
    category: "Women",
    price: 2299,
    oldPrice: 2799,
    discount: "18% OFF",
    description: "A graceful floral fragrance.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 903,
    name: "Velmora Oud",
    category: "Men",
    price: 2999,
    oldPrice: 3499,
    discount: "14% OFF",
    description: "A rich and luxurious oud fragrance.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80"
  },
    {
      id: 701,
      name: "Velmora Imperium",
      type: "Men",
      category: "Eau De Parfum",
      fragrance: "Leather, Cedar & Amber",
      size: "100 ML",
      price: 3299,
      oldPrice: 3899,
      discount: "15% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFNxkoBw533O3C91ujRLY46HH74i4YoYQigfgOLjw7g&s=10"
    },

    {
      id: 702,
      name: "Velmora Monarch",
      type: "Men",
      category: "Perfume Collection",
      fragrance: "Woody, Spicy & Oud",
      size: "4 × 20 ML",
      price: 3599,
      oldPrice: 4199,
      discount: "14% OFF",
      image:
        "https://velmoraperfumes.in/wp-content/uploads/2026/05/1000019366.png"
    },

    {
      id: 703,
      name: "Velmora Serene",
      type: "Women",
      category: "Eau De Parfum",
      fragrance: "Jasmine, Pear & Musk",
      size: "100 ML",
      price: 2799,
      oldPrice: 3299,
      discount: "15% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNxs9ZXIx8eSJx1u315lIaOoMsDI1GI8bmBNzad5-3dLA_fkkCPhyTIAZ&s=10"
    },

    {
      id: 704,
      name: "Velmora Belleza",
      type: "Women",
      category: "Perfume Collection",
      fragrance: "Rose, Vanilla & Amber",
      size: "4 × 20 ML",
      price: 2999,
      oldPrice: 3599,
      discount: "17% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyx6fX6QMQL-2lbXeXUoLntCbLNjB4iKIhiuJrjxnAJDf4-9TecUkJA3E&s=10"
    },

    {
      id: 705,
      name: "Velmora Eternal Duo",
      type: "Couple Combo",
      category: "Couple Perfume Set",
      fragrance: "Woody & Amber / Floral & Musk",
      size: "2 × 50 ML",
      price: 3499,
      oldPrice: 4299,
      discount: "19% OFF",
      image:
        "https://images.pexels.com/photos/36459921/pexels-photo-36459921.jpeg"
    },

    {
      id: 706,
      name: "Velmora Together",
      type: "Couple Combo",
      category: "Perfume Gift Set",
      fragrance: "Fresh Citrus & Romantic Florals",
      size: "2 × 50 ML",
      price: 3299,
      oldPrice: 3999,
      discount: "18% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ps3QoVDdtnfyuJcTu85F7iZieAjuT9jwocoGpscjK7WW-LFE7xOiJPkb&s=10"
    },

    {
      id: 707,
      name: "Velmora Harmony",
      type: "Unisex",
      category: "Unisex Collection",
      fragrance: "Fresh, Floral & Woody",
      size: "4 × 20 ML",
      price: 2499,
      oldPrice: 2999,
      discount: "17% OFF",
      image:
        "https://images.pexels.com/photos/34144825/pexels-photo-34144825.jpeg"
    },

    {
      id: 708,
      name: "Velmora Signature Box",
      type: "Gift Set",
      category: "Luxury Perfume Collection",
      fragrance: "Floral, Woody, Vanilla & Musk",
      size: "4 × 30 ML",
      price: 2899,
      oldPrice: 3499,
      discount: "17% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ET1htgwUF0zkfg74Grc41k_HDkK17tiic9QV9GoiYq33U_6QqfDMKGA&s=10"
    },
    {
      id: 501,
      name: "Velmora Elara",
      category: "Eau De Parfum",
      fragrance: "Rose & Vanilla",
      size: "100 ML",
      price: 2499,
      oldPrice: 2999,
      discount: "17% OFF",
      image:
        "https://redtape.com/cdn/shop/files/1_1ad3857d-dd18-49c8-b9c9-b6ec73a8a4df.jpg?v=1756545096&width=1500"
    },

    {
      id: 502,
      name: "Velmora Amara",
      category: "Eau De Parfum",
      fragrance: "Jasmine & Musk",
      size: "100 ML",
      price: 2699,
      oldPrice: 3199,
      discount: "16% OFF",
      image:
        "https://mumuso.co.in/cdn/shop/files/MUMUSO-Creative7th57358copy2_e0cdf3e7-9465-4a80-86ff-5caca22f8ca9.jpg?v=1768558588&width=1500"
    },

    {
      id: 503,
      name: "Velmora Celeste",
      category: "Eau De Parfum",
      fragrance: "Peony & Amber",
      size: "100 ML",
      price: 2899,
      oldPrice: 3399,
      discount: "15% OFF",
      image:
        "https://m.media-amazon.com/images/I/71V5YExfkOL._AC_UF350,350_QL80_.jpg"
    },

    {
      id: 504,
      name: "Velmora Liora",
      category: "Eau De Parfum",
      fragrance: "Peach & Blossom",
      size: "100 ML",
      price: 2299,
      oldPrice: 2799,
      discount: "18% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBBK0UsPyTuFbB7IgHW_C1-Ey_kplkPuD76SCP4mOBQaHQ7ghnWvHT_Xz&s=10"
    },

    {
      id: 505,
      name: "Velmora Seraphine",
      category: "Eau De Parfum",
      fragrance: "Orchid & Vanilla",
      size: "100 ML",
      price: 3099,
      oldPrice: 3699,
      discount: "16% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwTemxnwUQ1Yq-uSMFRZhUEBHDUNa7wEULuceraQ3nkX-OOb_V7gn3Us&s=10"
    },

    {
      id: 506,
      name: "Velmora Aurelia",
      category: "Eau De Parfum",
      fragrance: "Saffron & Rose",
      size: "100 ML",
      price: 3299,
      oldPrice: 3899,
      discount: "15% OFF",
      image:
        "https://www.ayouthveda.com/cdn/shop/files/eve_bloom_with_carton_copy.jpg?v=1776565985&width=480"
    },

    {
      id: 507,
      name: "Velmora Freya",
      category: "Eau De Toilette",
      fragrance: "Citrus & White Flowers",
      size: "100 ML",
      price: 1999,
      oldPrice: 2399,
      discount: "17% OFF",
      image:
        "https://www.feelthings.com/cdn/shop/articles/Untitled_design_-_2026-06-10T145455.007_d9c629c5-fdad-41bd-92ad-41b59a684a9f.jpg?v=1781086004"
    },

    {
      id: 508,
      name: "Velmora Isadora",
      category: "Eau De Parfum",
      fragrance: "Lavender & Iris",
      size: "100 ML",
      price: 2799,
      oldPrice: 3299,
      discount: "15% OFF",
      image:
        "https://www.frenchessence.com/cdn/shop/files/1500X1500-6.jpg?v=1783767689"
    },

    {
      id: 509,
      name: "Velmora Roselle",
      category: "Eau De Parfum",
      fragrance: "Red Rose & Musk",
      size: "100 ML",
      price: 2599,
      oldPrice: 3099,
      discount: "16% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppV6g06t3qviizR-4cGnm16e-Fapq4CjbDYQs7i3ucdyTzRMBATCu_zs&s=10"
    },

    {
      id: 510,
      name: "Velmora Violetta",
      category: "Eau De Parfum",
      fragrance: "Violet & Powdery Musk",
      size: "50 ML",
      price: 1899,
      oldPrice: 2299,
      discount: "17% OFF",
      image:
        "https://www.thearchies.in/cdn/shop/files/image_2024-10-15_121603622.png?v=1749620360"
    },

    {
      id: 511,
      name: "Velmora Lumina",
      category: "Eau De Toilette",
      fragrance: "Pear & Freesia",
      size: "100 ML",
      price: 2199,
      oldPrice: 2599,
      discount: "15% OFF",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-312,ar-1024-1024,pr-true,f-auto,q-40/cms/product_variant/ecadec4c-0565-4332-ad1e-00de7296e794/Skinn-By-Titan-Celeste-Perfume-For-Women-Eau-De-Parfum-Premium-Fragrance.jpeg"
    },

    {
      id: 512,
      name: "Velmora Rosaline",
      category: "Eau De Parfum",
      fragrance: "Rose & Sandalwood",
      size: "100 ML",
      price: 2999,
      oldPrice: 3499,
      discount: "14% OFF",
      image:
        "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000490104696/2o7Cbydbt-000000000490104696_4.jpeg"
    },

    {
      id: 709,
      name: "Velmora Enchant",
      type: "Women",
      category: "Perfume Gift Set",
      fragrance: "Floral, Rose & Soft Musk",
      size: "4 × 20 ML",
      price: 2699,
      oldPrice: 3199,
      discount: "16% OFF",
      image:
        "https://images.pexels.com/photos/36482359/pexels-photo-36482359.jpeg"
    },

    {
      id: 710,
      name: "Velmora Prestige",
      type: "Gift Set",
      category: "Luxury Fragrance Set",
      fragrance: "Amber, Oud & Floral Notes",
      size: "4 × 20 ML",
      price: 3199,
      oldPrice: 3799,
      discount: "16% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ySdcU50urGfEPrx4DHTQBkiWcjRu5BiYaBFYOuQShdWPY1K-mwIGWii5&s=10"
    },
     {
    id: 711,
    name: "Velmora Royal Crest",
    type: "Men",
    category: "Eau De Parfum",
    fragrance: "Leather, Amber & Woods",
    size: "100 ML",
    price: 3399,
    oldPrice: 3999,
    discount: "15% OFF",
    image:
      "https://velmoraroyal.com/cdn/shop/files/Charm_Image_2.png?v=1779619622&width=533"
  },{
      id: 710,
      name: "Velmora Prestige",
      type: "Gift Set",
      category: "Luxury Fragrance Set",
      fragrance: "Amber, Oud & Floral Notes",
      size: "4 × 20 ML",
      price: 3199,
      oldPrice: 3799,
      discount: "16% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ySdcU50urGfEPrx4DHTQBkiWcjRu5BiYaBFYOuQShdWPY1K-mwIGWii5&s=10"
    },
     {
    id: 711,
    name: "Velmora Royal Crest",
    type: "Men",
    category: "Eau De Parfum",
    fragrance: "Leather, Amber & Woods",
    size: "100 ML",
    price: 3399,
    oldPrice: 3999,
    discount: "15% OFF",
    image:
      "https://velmoraroyal.com/cdn/shop/files/Charm_Image_2.png?v=1779619622&width=533"
  },

  {
    id: 712,
    name: "Velmora Dark Ember",
    type: "Men",
    category: "Eau De Parfum",
    fragrance: "Oud, Spice & Cedar",
    size: "100 ML",
    price: 3699,
    oldPrice: 4299,
    discount: "14% OFF",
    image:
      "https://images.pexels.com/photos/34143831/pexels-photo-34143831.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 713,
    name: "Velmora Lavender Mist",
    type: "Women",
    category: "Eau De Parfum",
    fragrance: "Lavender, Violet & Musk",
    size: "100 ML",
    price: 2799,
    oldPrice: 3299,
    discount: "15% OFF",
    image:
      "https://m.media-amazon.com/images/I/71+FEoTEaWL.jpg"
  },

  {
    id: 714,
    name: "Velmora Velvet Bloom",
    type: "Women",
    category: "Eau De Parfum",
    fragrance: "Rose, Vanilla & White Flowers",
    size: "100 ML",
    price: 2999,
    oldPrice: 3599,
    discount: "17% OFF",
    image:
      "https://zeenaluxury.com/cdn/shop/files/velvet-bloom-perfume-oil-10ml-india_720664a2-a534-40b0-921c-1b7973fb44a6.jpg?v=1775202926&width=1200"
  },

  {
    id: 715,
    name: "Velmora Harmony Pair",
    type: "Couple Combo",
    category: "Couple Perfume Set",
    fragrance: "Woody Amber & Floral Musk",
    size: "2 × 50 ML",
    price: 3599,
    oldPrice: 4299,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/34144749/pexels-photo-34144749.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 716,
    name: "Velmora Love Edition",
    type: "Couple Combo",
    category: "Perfume Gift Set",
    fragrance: "Citrus, Rose & Soft Woods",
    size: "2 × 50 ML",
    price: 3299,
    oldPrice: 3999,
    discount: "18% OFF",
    image:
      "https://www.victoriassecret.in/on/demandware.static/-/Sites-vs_master_catalog/default/dw8b8ec899/large/111853257847_OF_F.jpg"
  },

  {
    id: 717,
    name: "Velmora Pure Essence",
    type: "Unisex",
    category: "Unisex Fragrance",
    fragrance: "Fresh Citrus, Musk & Woods",
    size: "100 ML",
    price: 2699,
    oldPrice: 3199,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/31612018/pexels-photo-31612018.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 718,
    name: "Velmora Midnight Gold",
    type: "Gift Set",
    category: "Luxury Fragrance Set",
    fragrance: "Amber, Vanilla & Musk",
    size: "3 × 30 ML",
    price: 3199,
    oldPrice: 3799,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/30999236/pexels-photo-30999236.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 719,
    name: "Velmora Scarlet Veil",
    type: "Women",
    category: "Perfume Collection",
    fragrance: "Floral, Sweet & Powdery",
    size: "4 × 20 ML",
    price: 2899,
    oldPrice: 3499,
    discount: "17% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSu_NrgFMykVVXTgU5TKh89Bs5U2blQwnSXjyHg_OzHp1Q3r4QOP0eSoA&s=10"
  },
  {
      id: 701,
      name: "Velmora Imperium",
      type: "Men",
      category: "Eau De Parfum",
      fragrance: "Leather, Cedar & Amber",
      size: "100 ML",
      price: 3299,
      oldPrice: 3899,
      discount: "15% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFNxkoBw533O3C91ujRLY46HH74i4YoYQigfgOLjw7g&s=10"
    },
  {
    id: 720,
    name: "Velmora Urban Legend",
    type: "Men",
    category: "Eau De Parfum",
    fragrance: "Citrus, Leather & Musk",
    size: "100 ML",
    price: 3099,
    oldPrice: 3699,
    discount: "16% OFF",
    image:
      "https://images.pexels.com/photos/20011541/pexels-photo-20011541.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
      id: 204,
      name: "Velmora Vertex",
      category: "Eau De Parfum",
      fragrance: "Aquatic & Citrus",
      size: "100 ML",
      price: 2299,
      oldPrice: 2799,
      discount: "18% OFF",
      image:
        "https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/JUNE/22/0dcQu8cf_25cbf3288ca84bd69cd04b99da8d5581.jpg"
    },

    {
      id: 205,
      name: "Velmora Ardent",
      category: "Eau De Parfum",
      fragrance: "Woody & Spicy",
      size: "100 ML",
      price: 2799,
      oldPrice: 3299,
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
    },

    {
      id: 206,
      name: "Velmora Sterling",
      category: "Eau De Toilette",
      fragrance: "Fresh & Musk",
      size: "100 ML",
      price: 1999,
      oldPrice: 2399,
      discount: "17% OFF",
      image:
        "https://images.unsplash.com/photo-1587017539504-67cfbddac569"
    },

    {
      id: 207,
      name: "Velmora Ascend",
      category: "Eau De Parfum",
      fragrance: "Oud & Leather",
      size: "100 ML",
      price: 3399,
      oldPrice: 3999,
      discount: "15% OFF",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/95b74a09-21cc-40ca-9653-02354b5a4a42.jpg?crop=0.666666666667xw:1xh;center,top&resize=1200:*"
    },

    {
      id: 208,
      name: "Velmora Monarch",
      category: "Eau De Parfum",
      fragrance: "Amber & Woody",
      size: "100 ML",
      price: 3299,
      oldPrice: 3899,
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1619994403073-2cec844b8e63"
    },

    {
      id: 209,
      name: "Velmora Drift",
      category: "Eau De Toilette",
      fragrance: "Marine & Fresh",
      size: "100 ML",
      price: 1899,
      oldPrice: 2299,
      discount: "17% OFF",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
    },

    {
      id: 210,
      name: "Velmora Obsidian",
      category: "Eau De Parfum",
      fragrance: "Dark Musk & Amber",
      size: "100 ML",
      price: 2999,
      oldPrice: 3499,
      discount: "14% OFF",
      image:
        "https://www.frenchessence.com/cdn/shop/files/SQUARE-URBAN-6.jpg?v=1783768282"
    },

    {
      id: 211,
      name: "Velmora Zenith",
      category: "Eau De Parfum",
      fragrance: "Bergamot & Cedar",
      size: "50 ML",
      price: 2199,
      oldPrice: 2599,
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108"
    }
];

export default allProductsData;