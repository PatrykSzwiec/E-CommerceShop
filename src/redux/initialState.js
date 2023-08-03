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
      blogTitle: 'How to Find a Perfect Sofa',
      dateOfPublishing: '15 JAN 2016',
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
      blogTitle: 'Trends in home decor',
      dateOfPublishing: '15 JAN 2016',
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
      blogTitle: 'Best mattresses',
      dateOfPublishing: '15 JAN 2016',
      numberOfComments: '7',
      blogURL: 'best-mattresses',
      blogSummery:
        'The best mattress offers comfort, support, and durability. Popular types include memory foam for pressure relief, innerspring for breathability, hybrids for a balance of comfort and support, latex for eco-friendly resilience, and adjustable air for customizability.',
      blogContent:
        'Choosing the right mattress is a key factor in ensuring a good night is sleep. With a plethora of options available in the market, finding the best mattress can be a daunting task. The best mattress not only provides comfort but also offers adequate support for the spine, helping to prevent back pain and other issues. Memory foam mattresses have gained considerable popularity due to their superior comfort and support. They are known for their ability to conform to the body, providing excellent pressure relief. This makes them a particularly good choice for side sleepers or those with joint pain. Furthermore, advancements in cooling technology have addressed one of the main drawbacks of traditional memory foam mattresses, which is heat retention. Many memory foam mattresses now incorporate cooling gels or have open-cell construction to promote air circulation, providing a cooler sleep experience. Innerspring mattresses, the classic choice, have also seen significant improvements over the years. The best innerspring mattresses now feature pocketed coil systems that move independently, offering better support and motion isolation than traditional linked spring systems. They also tend to be more breathable than foam mattresses, making them a good choice for hot sleepers. Hybrid mattresses, which combine the comfort of foam with the support of springs, have become increasingly popular. These mattresses often feature a layer of memory foam, latex, or other types of foam on top of a pocketed coil base. This combination offers a balance of comfort, support, and breathability. For those who prefer a more natural option, latex mattresses are worth considering. Latex can be processed using a more eco-friendly method than synthetic foams and offers a unique feel that is bouncy yet supportive. They are also naturally resistant to dust mites and mold, making them a good choice for allergy sufferers.Adjustable air mattresses offer customizability that other mattress types can not match. These mattresses allow you to adjust the firmness to your liking, often on both sides of the bed separately, making them a great choice for couples with different comfort preferences. When choosing the best mattress, it is also essential to consider firmness level, which largely depends on personal preference and sleep position. Stomach sleepers typically need a firmer mattress to prevent their hips from sinking too much, while side sleepers usually prefer a softer mattress that can contour to their body curves. Lastly, always consider the quality of the materials used and the reputation of the brand. Look for mattresses with high-quality foams or springs that can withstand years of use, and opt for brands known for their durability and customer service. Most reputable brands offer a sleep trial, giving you a chance to test out the mattress at home and return it if it do not suit your needs. In conclusion, the best mattress is a personal choice that depends on individual needs, sleep position, and preferences. Whether you choose a memory foam, innerspring, hybrid, latex, or adjustable air mattress, the goal is to find one that provides a balance of comfort, support, and durability to ensure a good nights sleep.',
      imageName: '3',
    },
  ],
};

export default initialState;
