const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [],

  cart: {
    products: [],
  },

  gallery: 'aenean-ru-bristique-1',

  featuredProductsId: [
    'aenean-ru-bristique-1',
    'aenean-ru-bristique-2',
    'aenean-ru-bristique-3',
    'aenean-ru-bristique-4',
    'aenean-ru-bristique-5',
    'aenean-ru-bristique-24',
  ],
  topSellerProductsId: [
    'aenean-ru-bristique-6',
    'aenean-ru-bristique-7',
    'aenean-ru-bristique-8',
    'aenean-ru-bristique-9',
    'aenean-ru-bristique-10',
    'aenean-ru-bristique-23',
  ],
  saleOffProductsId: [
    'aenean-ru-bristique-11',
    'aenean-ru-bristique-12',
    'aenean-ru-bristique-13',
    'aenean-ru-bristique-14',
    'aenean-ru-bristique-15',
    'aenean-ru-bristique-22',
  ],
  topRatedProductsId: [
    'aenean-ru-bristique-16',
    'aenean-ru-bristique-17',
    'aenean-ru-bristique-18',
    'aenean-ru-bristique-19',
    'aenean-ru-bristique-20',
    'aenean-ru-bristique-21',
  ],

  promoted: {
    productsId: [
      'aenean-ru-bristique-1',
      'aenean-ru-bristique-2',
      'aenean-ru-bristique-3',
    ],
    banners: [
      {
        id: 1,
        bannerTitle: 'Indoor Furniture',
        bannerSubtitle: 'Save up to 50% of all furniture',
        picture: '/images/sofas/sofa-2.jpg',
      },
      {
        id: 2,
        bannerTitle: 'Outdoor Furniture',
        bannerSubtitle: 'Save up to 75% of choosen furniture',
        picture: '/images/dinings/dining-5.jpg',
      },
    ],
  },
  viewport: 'desktop',

  promotions: {
    firstLine: 'GUEST ROOM',
    secondLine: 'SOFA',
    thirdLine: '-20%',
    fourthLine: 'OFFICE CHAIR',
    fifthLine: 'COLLECTION',
    sixthLine: '$200.00',
    seventhLine: 'SPECIAL COLLECTION',
    eighthLine: 'SAVE UP 45% OF FURNITURE',
  },
  compared: {
    products: [],
  },
  blogs: [
    {
      id: 1,
      author: 'Amy Johnson',
      category: 'Living Room',
      blogTitle: 'How to Find a Perfect Sofa',
      dateOfPublishing: '15 AUG 2023',
      numberOfComments: '4',
      blogURL: 'perfect-sofa',
      blogSummery:
        'To find the perfect sofa, match its style with your decor, ensure it is comfortable and fits your space, verify its quality for durability, and consider its intended use. The perfect sofa is stylish, comfortable, durable, and functional.',
      blogContent:
        'The sofa is one of the most essential pieces of furniture in any home. It is not only the centerpiece of your living room, but it is also the place where you relax after a long day, entertain guests, and even binge-watch your favorite shows. Therefore, finding the perfect sofa is crucial in making your living space comfortable and inviting. When you embark on the hunt for the perfect sofa, the first thing you need to do is decide on the style of sofa that best fits your personal taste and the aesthetic of your home. The sofa should complement the existing furniture and decor. If your home is decorated in a modern or minimalist style, consider a sleek, streamlined couch with clean lines. If your home has a traditional or rustic decor, a classic roll-arm or a tufted Chesterfield sofa might be more appropriate. Color is also a vital factor in choosing your sofa. Neutral hues are safe and versatile, while bold shades can make a strong statement. However, while style is important, comfort should not be compromised. After all, you will be spending a lot of time sitting or lying on your sofa. Look for a sofa that has the right height, depth, and cushion firmness for your comfort. It is always a good idea to test the sofa in the store by sitting, reclining, or even lying down on it to get a feel for its comfort level. Before you fall in love with a particular sofa, it is essential to make sure it fits your space. You can do this by measuring your living room and taking note of the dimensions. Also, consider the scale of the sofa in relation to the room and the other furniture. A large sectional might overpower a small space, while a small loveseat might look lost in a large room. It is also important to measure the doorways, stairways, or elevators that the sofa will have to go through during delivery. The perfect sofa is not only stylish and comfortable but also durable. To ensure durability, look for a sturdy frame made of kiln-dried hardwood or engineered wood. The cushions should retain their shape even after prolonged use, so look for high-resilience foam or down-fill. The upholstery material should also be durable and easy to clean, especially if you have pets or children. Leather, microfiber, and synthetic fabrics are often good choices. Finally, consider how you will use your sofa. If it is mainly for lounging or watching TV, a deeper sofa with plush cushions might be ideal. If you often have overnight guests, you might want to consider a sofa bed. For a large family or for people who love to entertain, a sectional with plenty of seating might be the best choice. Finding the perfect sofa can take time and patience, but the result will be worth it. A great sofa can elevate the style of your home, provide comfort for you and your guests, and last for many years. So, take these tips to heart, start shopping, and soon enough, you will find a sofa that is just right for you and your home. ',
      imageName: '1',
    },
    {
      id: 2,
      author: 'Kate Allen',
      category: 'Trends',
      blogTitle: 'Trends in home decor',
      dateOfPublishing: '15 JULY 2023',
      numberOfComments: '1',
      blogURL: 'trends-in-home-decor',
      blogSummery:
        'Current home decor trends emphasize sustainability with eco-friendly materials, integration of technology, personalization with unique pieces, and bold color schemes. These trends aim to create appealing, livable homes.',
      blogContent:
        'Home decor trends are constantly evolving, and recent years have seen some intriguing developments. An increased focus on sustainability in the industry has led to people choosing decor and furniture made from recycled or sustainably-sourced materials, with a move towards less clutter and waste. Coupled with this shift towards green living is the rise in popularity of natural materials and organic shapes. Rattan, bamboo, and reclaimed wood have found a place in the modern home, echoing an earthy, calming aesthetic. The incorporation of technology into home decor has also seen a marked increase. Smart lights, voice-activated home assistants, and other advanced devices are no longer the stuff of science fiction but common fixtures in many households. The desire for personalization is another trend that has gained momentum. One-of-a-kind items, handcrafted pieces, and vintage finds are coveted for their uniqueness in a world full of mass-produced goods. olor trends are leaning towards bolder hues with the return of deep blues, vibrant greens, and even black to create statement spaces. These bold colors are frequently teamed with metallic accents to add an element of glamour. The widespread effects of the pandemic have had a role in shaping home decor trends, with a significant increase in the time spent at home. As such, comfortable and functional spaces have been prioritized, and the home office has become a necessity rather than a luxury. Indoor plants and calming artwork are now popular decor elements, contributing to a sense of well-being. Another trend gaining traction is eclectic decor, where different styles are mixed and matched, offering a canvas for personal expression and creativity. This trend breaks traditional design rules, allowing pieces from different styles to coexist harmoniously. In conclusion, current home decor trends reflect societal shifts and personal preferences. Emphasis on sustainability, personalization, technology, and comfort is likely to continue shaping this industry. As these trends evolve, the objective remains consistent: to create homes that are not just visually appealing but also comfortable, functional, and true reflections of their inhabitants.',
      imageName: '2',
    },
    {
      id: 3,
      author: 'Amy Johnson',
      category: 'Bedroom',
      blogTitle: 'Best mattresses for good sleep',
      dateOfPublishing: '15 JUNE 2023',
      numberOfComments: '7',
      blogURL: 'best-mattresses-good-sleep',
      blogSummery:
        'The best mattress offers comfort, support, and durability. Popular types include memory foam for pressure relief, innerspring for breathability, hybrids for a balance of comfort and support, latex for eco-friendly resilience, and adjustable air for customizability.',
      blogContent:
        'Choosing the right mattress is a key factor in ensuring a good night is sleep. With a plethora of options available in the market, finding the best mattress can be a daunting task. The best mattress not only provides comfort but also offers adequate support for the spine, helping to prevent back pain and other issues. Memory foam mattresses have gained considerable popularity due to their superior comfort and support. They are known for their ability to conform to the body, providing excellent pressure relief. This makes them a particularly good choice for side sleepers or those with joint pain. Furthermore, advancements in cooling technology have addressed one of the main drawbacks of traditional memory foam mattresses, which is heat retention. Many memory foam mattresses now incorporate cooling gels or have open-cell construction to promote air circulation, providing a cooler sleep experience. Innerspring mattresses, the classic choice, have also seen significant improvements over the years. The best innerspring mattresses now feature pocketed coil systems that move independently, offering better support and motion isolation than traditional linked spring systems. They also tend to be more breathable than foam mattresses, making them a good choice for hot sleepers. Hybrid mattresses, which combine the comfort of foam with the support of springs, have become increasingly popular. These mattresses often feature a layer of memory foam, latex, or other types of foam on top of a pocketed coil base. This combination offers a balance of comfort, support, and breathability. For those who prefer a more natural option, latex mattresses are worth considering. Latex can be processed using a more eco-friendly method than synthetic foams and offers a unique feel that is bouncy yet supportive. They are also naturally resistant to dust mites and mold, making them a good choice for allergy sufferers.Adjustable air mattresses offer customizability that other mattress types can not match. These mattresses allow you to adjust the firmness to your liking, often on both sides of the bed separately, making them a great choice for couples with different comfort preferences. When choosing the best mattress, it is also essential to consider firmness level, which largely depends on personal preference and sleep position. Stomach sleepers typically need a firmer mattress to prevent their hips from sinking too much, while side sleepers usually prefer a softer mattress that can contour to their body curves. Lastly, always consider the quality of the materials used and the reputation of the brand. Look for mattresses with high-quality foams or springs that can withstand years of use, and opt for brands known for their durability and customer service. Most reputable brands offer a sleep trial, giving you a chance to test out the mattress at home and return it if it do not suit your needs. In conclusion, the best mattress is a personal choice that depends on individual needs, sleep position, and preferences. Whether you choose a memory foam, innerspring, hybrid, latex, or adjustable air mattress, the goal is to find one that provides a balance of comfort, support, and durability to ensure a good nights sleep.',
      imageName: '3',
    },
    {
      id: 4,
      author: 'Paul Harris',
      category: 'Living Room',
      blogTitle: 'Plants for your living room',
      dateOfPublishing: '15 MAY 2023',
      numberOfComments: '2',
      blogURL: 'plants-for-living-room',
      blogSummery:
        'Indoor plants such as Peace Lily, Snake Plant, Rubber Plant, Fiddle Leaf Fig, and Pothos can significantly enhance a living rooms ambiance. They improve air quality, require minimal care, provide aesthetic appeal, and contribute to mental wellbeing, making the living room a tranquil sanctuary.',
      blogContent:
        'Living rooms serve as a focal point in most homes; it is the place where families gather, friends converse, and individuals unwind after a long day. One way to enhance this space and cultivate a soothing ambiance is by integrating indoor plants. Incorporating indoor plants can elevate a living room is aesthetic appeal, improve air quality, and contribute positively to an individual is mental wellbeing.  Among the many choices available, the Peace Lily stands out as an exceptional choice for living rooms. This hardy plant thrives even in low light conditions and infrequent watering, making it ideal for those new to plant care. Additionally, Peace Lilies have the ability to purify the air, removing harmful toxins and creating a cleaner, healthier environment. Their lush, green leaves and elegant white flowers serve as an eye-catching focal point, enhancing the overall aesthetic of the room. Another option worth considering is the Snake Plant. It is a low-maintenance, resilient plant perfect for those leading a busy lifestyle. It can tolerate neglect, prosper in low light, and requires minimal watering. The Snake Plant, with its upright leaves and unique patterns, introduces an element of architectural beauty to a living room. Moreover, it releases oxygen at night, improving the air quality and promoting better sleep for those who may doze off in the living room. The Rubber Plant is another excellent selection for living rooms. This plant, featuring large, glossy leaves, introduces an exotic, tropical vibe to the interior. It demands moderate light and occasional watering. Rubber Plants also act as powerful air purifiers, eliminating airborne toxins, and thus improving the overall air quality within the room. If the living room has access to ample sunlight, the Fiddle Leaf Fig is an impeccable choice. It is characterized by its broad, glossy leaves that can make any space feel like a lush, tropical haven. This plant does require a little more attention and care with its need for bright, filtered light and regular watering. However, the striking beauty it imparts to the living room makes the effort worth it. The Pothos, also known as Devils Ivy, is another fantastic choice for the living room. With its heart-shaped leaves and trailing vines, this plant brings a touch of the wilderness into the home. Pothos thrive in a variety of lighting conditions and require water only when the soil begins to dry out, making them an easy-care option for the living room. In conclusion, plants for the living room do more than just enhance the aesthetic appeal of the space. They bring in a bit of nature, promote cleaner air, and can significantly contribute to mental wellness. Whether it is the Peace Lily, Snake Plant, Rubber Plant, Fiddle Leaf Fig, or Pothos, each one offers unique characteristics and benefits that can help transform a living room into a tranquil, vibrant sanctuary. Therefore, consider incorporating these green companions into the living room to experience their myriad benefits and enjoy a visually pleasing home environment.',
      imageName: '4',
    },
    {
      id: 5,
      author: 'Sara Clark',
      category: 'Guide',
      blogTitle: 'How to use mirrow to optically enlarge your space',
      dateOfPublishing: '15 APR 2023',
      numberOfComments: '0',
      blogURL: 'how-to-use-mirrow-optically-enlarge-space-home',
      blogSummery:
        'Mirrors can optically enlarge a space by reflecting light and views. Position them opposite windows or open spaces, use large wall mirrors, arrange them in series, incorporate mirrored furniture, create false doorways, and consider the mirrors shape for maximal spatial illusion.',
      blogContent:
        'Mirrors are versatile tools that can be used to optically enlarge any space. They are particularly effective in smaller rooms where creating an illusion of space can make the room feel larger and more inviting. To achieve this effect, several strategies can be employed. Firstly, consider the placement of the mirror. It is most beneficial to place a mirror opposite a window or an open space. This positioning will reflect natural light and the exterior view, thereby creating a sense of depth and openness. If there is not a window available, position the mirror to reflect a focal point in the room such as a piece of artwork or a beautiful piece of furniture. This trick not only doubles the view of the focal point but also makes the room appear more spacious. Using a large wall mirror is another effective way to create the illusion of a larger room. A large mirror will reflect a considerable portion of the room, giving the impression that the room continues beyond its physical boundaries. This works particularly well in narrow spaces such as hallways or small living rooms. A wall-to-wall mirror, or even a large standing mirror leaning against the wall, can dramatically enhance the perceived size of the space. Furthermore, using mirrors in a series or a cluster can also enhance the sense of space. A series of small mirrors arranged artistically on a wall can capture different angles of the room, creating an interesting and visually expansive effect. Similarly, mirrored tiles or a collection of mirrored wall art can multiply the perceived space in an innovative and artistic way. Another technique to optically enlarge a space is to use mirrored furniture or accessories. A mirrored coffee table, for example, can reflect the ceiling and the space above, making the room feel taller. Similarly, a mirrored cabinet or dresser can add depth to a room, especially when it reflects a well-lit, open space. Mirrors can also be used to create a false doorway or window. For instance, a tall, framed mirror can look like a doorway leading to another room. This gives the illusion of extra square footage and adds an element of architectural interest. In addition, the shape of the mirror can also play a part in enhancing space. For instance, vertical mirrors can make a room appear taller, while horizontal mirrors can make it seem wider. Therefore, the selection of the mirror shape should be based on the rooms dimensions and the desired effect. Moreover, using mirrors in unexpected places can surprise the eye and enhance the feeling of space. Mirrored backsplashes in a kitchen, or mirrored closet doors in a bedroom, can make the areas feel larger and brighter. In conclusion, mirrors are powerful tools for creating an illusion of expanded space. Their placement, size, arrangement, and shape can dramatically alter the perception of a rooms size. By strategically incorporating mirrors, any room can feel larger, brighter, and more inviting. With careful consideration and creativity, mirrors can truly transform a space, making it appear much more expansive than it actually is.',
      imageName: '5',
    },
    {
      id: 6,
      author: 'Ben Davis',
      category: 'Guide',
      blogTitle: 'Best cat furniture for stylish home',
      dateOfPublishing: '15 MAR 2023',
      numberOfComments: '1',
      blogURL: 'best-cat-furniture-stylish-home',
      blogSummery:
        'The best mattress offers comfort, support, and durability. Popular types include memory foam for pressure relief, innerspring for breathability, hybrids for a balance of comfort and support, latex for eco-friendly resilience, and adjustable air for customizability.',
      blogContent:
        'Choosing the right furniture for a cat-friendly home can be a balancing act between catering to a cat is needs and maintaining the aesthetic appeal of the living space. It is possible to strike this balance by selecting pieces that are both functional and stylish. Start by considering the importance of a cat tree or tower. Cat trees come in a variety of shapes, sizes, and designs and serve as a play and rest area for cats. When selecting a cat tree, choose one with a sleek design and neutral colors to seamlessly blend with the existing furniture. Look for a high-quality wood finish that can add a touch of sophistication to the room. The cat tree should also have different levels and cozy hideaways that cater to a cat is instinct to climb and explore. A cat bed is another important piece of furniture. Rather than a traditional cat bed, opt for a design that is modern and innovative, such as an enclosed pod. Such beds provide a comfortable retreat for cats, and their unique design can add a contemporary touch to any room. Consider one with a sturdy metal stand to increase durability without compromising style. Litter boxes, while necessary, can often be an eyesore. However, many modern designs now mask the true function of the litter box. Opt for a litter box with a smooth, stylish finish and a design that conceals the litter. The use of durable and easy-to-clean materials is a practical choice that will also contribute to the overall aesthetic of the room. Scratchers are essential for cats, but they do not have to be unattractive. A cat scratcher lounge with a curvy design can offer cats ample scratching space while also providing a stylish lounging area. Choose one made from environmentally friendly materials, such as recycled cardboard, in neutral colors to match your home interiors. Another innovative idea is to consider wall-mounted cat furniture. This type of furniture turns an empty wall into a stylish feature while providing cats with a world of climbing, scratching, and resting options. Opt for a sleek, modern look with wooden finishes to create a unique and conversation-starting feature in your home. Lastly, even a cat feeder can contribute to the style of a home. An elevated cat feeder with a chic, minimalist design can add a sophisticated touch to a kitchen or dining room. In addition, it can also promote healthier eating habits for cats. In conclusion, the key to selecting the best cat furniture for a stylish home is to find pieces that balance functionality with design. By considering the style, materials, and design of cat trees, beds, litter boxes, scratchers, wall-mounted furniture, and feeders, you can create a cat-friendly environment that also complements your home is aesthetic.',
      imageName: '6',
    },
  ],
  blogCategories: ['Guides', 'Lifestyle', 'Trends', 'Living Room', 'Bedroom', 'Others'],
  blogAuthors: ['Amy Johnson', 'Ben Davis', 'Sara Clark', 'Paul Harris', 'Kate Allen'],

  shopCategories: ['Furniture', 'Sofas', 'Chairs', 'Tables', 'Bedroom', 'Kitchen'],
};

export default initialState;
