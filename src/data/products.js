// Static jewelry catalog — 18 products across 4 categories
export const categories = [
  { id: 'rings', name: 'Rings', slug: 'rings', description: 'Elegant rings for every occasion' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', description: 'Statement necklaces & pendants' },
  { id: 'earrings', name: 'Earrings', slug: 'earrings', description: 'Earrings that shine' },
  { id: 'bracelets', name: 'Bracelets', slug: 'bracelets', description: 'Wrist elegance' },
];

// User-provided Unsplash set (cycled across products/sections)
export const galleryImages = [
  'https://images.unsplash.com/photo-1631965004544-1762fc696476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxsZXJ5fGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1674255466836-f38d1cc6fd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1633555234047-192d10238f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGpld2VsbGVryXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1590166223826-12dee1677420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1598218940656-7126545fd283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
];

export const products = [
  { id: 1, name: 'Eternal Rose Gold Band', category: 'rings', price: 289, rating: 4.8, reviews: 124, image: galleryImages[0], material: 'Rose Gold' },
  { id: 2, name: 'Diamond Solitaire Ring', category: 'rings', price: 1899, rating: 5.0, reviews: 89, image: galleryImages[1], material: 'Platinum & Diamond' },
  { id: 3, name: 'Vintage Emerald Ring', category: 'rings', price: 745, rating: 4.6, reviews: 42, image: galleryImages[2], material: 'Gold & Emerald' },
  { id: 4, name: 'Infinity Twist Ring', category: 'rings', price: 165, rating: 4.9, reviews: 201, image: galleryImages[3], material: 'Sterling Silver' },
  { id: 5, name: 'Pearl Drop Necklace', category: 'necklaces', price: 320, rating: 4.7, reviews: 67, image: galleryImages[4], material: 'Pearl & Gold' },
  { id: 6, name: 'Sapphire Pendant', category: 'necklaces', price: 520, rating: 4.9, reviews: 98, image: galleryImages[5], material: 'Gold & Sapphire' },
  { id: 7, name: 'Layered Chain Necklace', category: 'necklaces', price: 189, rating: 4.5, reviews: 156, image: galleryImages[6], material: 'Gold Plated' },
  { id: 8, name: 'Ruby Heart Pendant', category: 'necklaces', price: 445, rating: 4.8, reviews: 73, image: galleryImages[7], material: 'Rose Gold & Ruby' },
  { id: 9, name: 'Crystal Stud Earrings', category: 'earrings', price: 95, rating: 4.6, reviews: 234, image: galleryImages[8], material: 'Crystal & Silver' },
  { id: 10, name: 'Gold Hoop Earrings', category: 'earrings', price: 178, rating: 4.9, reviews: 312, image: galleryImages[9], material: '14K Gold' },
  { id: 11, name: 'Pearl Stud Earrings', category: 'earrings', price: 145, rating: 5.0, reviews: 189, image: galleryImages[10], material: 'Freshwater Pearl' },
  { id: 12, name: 'Dangle Emerald Earrings', category: 'earrings', price: 398, rating: 4.7, reviews: 54, image: galleryImages[0], material: 'Gold & Emerald' },
  { id: 13, name: 'Tennis Bracelet', category: 'bracelets', price: 2200, rating: 5.0, reviews: 28, image: galleryImages[1], material: 'Diamond & Platinum' },
  { id: 14, name: 'Beaded Gem Bracelet', category: 'bracelets', price: 165, rating: 4.4, reviews: 92, image: galleryImages[2], material: 'Semi-precious Stones' },
  { id: 15, name: 'Rose Gold Bangle', category: 'bracelets', price: 275, rating: 4.8, reviews: 117, image: galleryImages[3], material: 'Rose Gold' },
  { id: 16, name: 'Charm Bracelet', category: 'bracelets', price: 128, rating: 4.5, reviews: 203, image: galleryImages[4], material: 'Sterling Silver' },
  { id: 17, name: 'Art Deco Ring', category: 'rings', price: 612, rating: 4.7, reviews: 61, image: galleryImages[5], material: 'Gold & Onyx' },
  { id: 18, name: 'Moonstone Necklace', category: 'necklaces', price: 198, rating: 4.6, reviews: 88, image: galleryImages[6], material: 'Moonstone & Silver' },
];

export const getProductById = (id) => products.find((p) => p.id === Number(id));
export const getProductsByCategory = (category) =>
  category ? products.filter((p) => p.category === category) : products;
export const getSimilarProducts = (productId, category, limit = 4) =>
  products.filter((p) => p.category === category && p.id !== productId).slice(0, limit);
