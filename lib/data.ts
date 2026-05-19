export interface Product {
  name: string;
  price: string;
  image: string;
  desc: string;
}

export const spacesData: Record<string, { hero: string; tagline: string; products: Product[] }> = {
  "Modular Kitchen": {
    hero: "/modular kitchen.png",
    tagline: "Precision-engineered kitchens built around how you live, cook, and gather.",
    products: [
      { name: "Modern L-Shape Kitchen", price: "₹1,50,000", desc: "Efficient corner utilisation with sleek cabinetry and premium countertop finish.", image: "/L shaped kitchen.png" },
      { name: "Island Kitchen Setup", price: "₹2,00,000", desc: "Open-plan island layout ideal for contemporary homes and entertaining spaces.", image: "/island kitchen.png" },
      { name: "Compact Modular Kitchen", price: "₹90,000", desc: "Smart, space-saving design without compromising on storage or aesthetics.", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop" },
      { name: "Premium Wood Kitchen", price: "₹2,50,000", desc: "Warm hardwood finishes paired with modern hardware for a timeless look.", image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=800&h=800&fit=crop" },
      { name: "U-Shape Luxury Kitchen", price: "₹3,10,000", desc: "Maximum counter space in a three-wall layout for serious home chefs.", image: "/u shaped kitchen.png" },
      { name: "Minimalist White Kitchen", price: "₹1,80,000", desc: "Handle-less cabinets and pure white surfaces for a clean, airy feel.", image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=800&fit=crop" },
      { name: "Classic Italian Kitchen", price: "₹2,80,000", desc: "Old-world Italian craftsmanship meets contemporary Indian living standards.", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=800&fit=crop" },
      { name: "Smart Urban Kitchen", price: "₹1,20,000", desc: "Tech-integrated kitchen with soft-close drawers and smart storage solutions.", image: "https://images.unsplash.com/photo-1556910110-a5a63dfd3938?w=800&h=800&fit=crop" },
    ],
  },
  "Bedroom Furniture": {
    hero: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    tagline: "Sanctuaries crafted for rest, comfort, and personal expression.",
    products: [
      { name: "Master Bedroom Set", price: "₹85,000", desc: "Complete bedroom ensemble with bed frame, side tables, and wardrobe.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Modern Wardrobe", price: "₹45,000", desc: "Floor-to-ceiling wardrobe with customisable shelf and hanging configurations.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Bedside Table Set", price: "₹12,000", desc: "Pair of slim bedside tables with soft-close drawers and cable management.", image: "https://images.unsplash.com/photo-1532372576444-eea8880fa138?w=800&h=800&fit=crop" },
      { name: "Dressing Unit", price: "₹25,000", desc: "Full-length mirror dressing unit with illuminated surround and storage.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop" },
      { name: "King Size Platform Bed", price: "₹55,000", desc: "Low-profile platform bed with upholstered headboard in premium fabric.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop" },
      { name: "Sliding Door Wardrobe", price: "₹65,000", desc: "Space-saving sliding doors with mirrored panels and interior lighting.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Cozy Bedroom Chair", price: "₹18,000", desc: "Upholstered accent chair perfect for a reading corner or dressing area.", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Bedroom Vanity Set", price: "₹38,000", desc: "Hollywood-style vanity with tabletop mirror, cushioned stool, and storage.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" },
    ],
  },
  "Office Furniture": {
    hero: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    tagline: "Workspaces that command presence and inspire productivity.",
    products: [
      { name: "Executive Desk", price: "₹35,000", desc: "Large-format executive desk with modesty panel and built-in cable tray.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Ergonomic Chair", price: "₹15,000", desc: "Lumbar-support ergonomic seating with breathable mesh back and armrests.", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop" },
      { name: "Conference Table", price: "₹65,000", desc: "12-seater boardroom table with integrated power modules and wire management.", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&h=800&fit=crop" },
      { name: "Storage Cabinet", price: "₹22,000", desc: "Lockable multi-drawer cabinet in powder-coated steel finish.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&h=800&fit=crop" },
      { name: "L-Shaped Manager Desk", price: "₹45,000", desc: "Corner workstation with overhead hutch and pedestals for ample storage.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Reception Counter", price: "₹55,000", desc: "Curved reception desk with back panel cladding and integrated lighting.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Visitor Chairs Set", price: "₹28,000", desc: "Set of 4 upholstered visitor chairs in premium leatherette.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Bookshelf Display", price: "₹19,000", desc: "Open-shelf display unit in warm walnut veneer, ideal for offices and lobbies.", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" },
    ],
  },
  "Hotel Furniture": {
    hero: "/hotel furniture.png",
    tagline: "Hospitality interiors that leave lasting impressions on every guest.",
    products: [
      { name: "Lobby Seating Array", price: "₹1,20,000", desc: "Modular lobby seating in premium fabric with solid wood legs and arm panels.", image: "/hotel furniture.png" },
      { name: "Premium Suite Bed", price: "₹75,000", desc: "King-size hotel bed with tufted headboard and pull-out trundle option.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop" },
      { name: "Banquet Chairs Set", price: "₹40,000", desc: "Stackable banquet chairs in gold or silver frame with padded seat covers.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=800&fit=crop" },
      { name: "Reception Desk", price: "₹85,000", desc: "Curved hotel reception with stone top and brass or chrome accent detailing.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" },
      { name: "Lounge Armchairs", price: "₹45,000", desc: "Deep-seat barrel armchairs in velvet upholstery for premium hotel lounges.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop" },
      { name: "Hotel Dining Tables", price: "₹95,000", desc: "Restaurant-grade dining tables with laminate tops and metal or wood bases.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop" },
      { name: "Suite Wardrobe", price: "₹60,000", desc: "Hotel wardrobe with safe compartment, trouser press area, and mirror door.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop" },
      { name: "Outdoor Pool Loungers", price: "₹55,000", desc: "Weather-resistant teak or aluminium sun loungers for pool and terrace areas.", image: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?w=800&h=800&fit=crop" },
    ],
  },
  "Home Furniture": {
    hero: "/Home furniture.png",
    tagline: "Every corner of your home, elevated with purposeful design.",
    products: [
      { name: "Complete Living Room Set", price: "₹1,10,000", desc: "3+1+1 sofa arrangement with matching coffee table and side tables.", image: "/Home furniture.png" },
      { name: "Dining Room Package", price: "₹65,000", desc: "6-seater dining table with upholstered chairs in coordinated fabric.", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop" },
      { name: "Entertainment Unit", price: "₹35,000", desc: "Wall-mounted TV unit with open shelves, closed cabinets, and LED backlight.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop" },
      { name: "Balcony Setup", price: "₹18,000", desc: "Compact outdoor bistro set in rust-proof aluminium for balcony or patio.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop" },
      { name: "Premium Leather Sofa", price: "₹85,000", desc: "Full-grain leather 3-seater with solid wood frame and recliner option.", image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop" },
      { name: "Coffee Table Minimalist", price: "₹14,000", desc: "Hairpin-leg coffee table with solid wood top in walnut or oak finish.", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=800&fit=crop" },
      { name: "Home Office Desk", price: "₹28,000", desc: "Compact home office desk with integrated shelves and cable routing.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop" },
      { name: "Study Room Bookshelf", price: "₹22,000", desc: "Floor-to-ceiling bookshelf with adjustable shelves and ladder rail system.", image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&h=800&fit=crop" },
    ],
  },
};
