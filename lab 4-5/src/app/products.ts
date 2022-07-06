export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  img1: string;
  img2: string;
  img3: string;
  likes: number;
  categoryId: number;
  currentCategory: number;
  isActive: boolean;
}
// categoryId 1: Personal Care
// categoryId 2: Camera & Photo
// categoryId 3: Printers & Scanners
// categoryId 4: Smart Home
export const products = [
  {
    id: 1,
    name: "Philips One by Sonicare Rechargeable Toothbrush, Shadow Black, HY1200/06",
    price: 39.55,
    description: `Designed with you in mind, Philips One is a big step up from manual brushing. Battery life up to 30 days
                  Micro vibrations and tapered bristles made of soft nylon gently polish teeth for a brighter smile
                  Take your manual brushing experience to the next level by pairing regular brush motions with bristle micro-vibrations
                  2 Minute Timer with 30 second notifications
                  Dentists recommend replacing brush heads every 3 months
                  The One is made to travel so you can get that clean feeling any place. It’s sleek and lightweight and fits neatly into a compact travel case
                  Brush heads match colorful handle for super sleek look. Handles are ONLY compatible with Philips One brush heads. Includes: One (1) Philips One by Sonicare Rechargeable Toothbrush and matching brush head; 1 travel case; 1 USB charger`,
    url: 'https://www.amazon.com/Philips-Sonicare-Rechargeable-Toothbrush-Shadow/dp/B09B17TS7N/ref=sr_1_1?pd_rd_r=e7957c16-b986-45e5-a1ad-1c026c4ac81a&pd_rd_w=KpTHb&pd_rd_wg=6tmuU&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=FKK58HB2SVTV2ED0EDGZ&qid=1656751039&s=beauty-intl-ship&sr=1-1',
    img1: 'https://m.media-amazon.com/images/I/71WY0EFGKBL._SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61UixsVa0ZL._SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71DCKnoTW2L._SX569_.jpg',
    likes: 12710,
    categoryId:  1,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 2,
    name: "Philips Norelco Multigroomer All-in-One Trimmer Series 3000, 13 Piece Mens Grooming Kit, for Beard, Face, Nose, and Ear Hair Trimmer and Hair Clipper, NO Blade Oil Needed, MG3750/60",
    price: 19.96,
    description: `13 attachments for all of your grooming needs: Full size steel trimmer, a steel precision trimmer, a nose and ear hair trimmer, 3 hair trimming guards, 3 beard trimming guards, a stubble guard, an accessory travel storage bag, and a cleaning brush. Unlike competition, no oil needed to maintain high quality performance Blades and Guards are easy to detach and rinse
                  Maximum precision with DualCut technology, which includes 2x more self-sharpening blades. The steel blades sharpen themselves as they work, resulting in blades that remain as sharp as day 1 after 2 years of use.
                  Unlike competition, no oil needed to maintain high quality performance. Automatic voltage: 100-240 V
                  Blades and Guards are easy to detach and rinse, For Hair Type: All Hair Types
                  The Blade is made out of Metal
                  The MG3750 is the model number indicated on the packaging, it is part of the Multigroom 3000 series`,
    url: 'https://www.amazon.com/Philips-Norelco-Multigroom-attachment-MG3750/dp/B01K1HPA60/ref=sr_1_17?pd_rd_r=e7957c16-b986-45e5-a1ad-1c026c4ac81a&pd_rd_w=KpTHb&pd_rd_wg=6tmuU&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=FKK58HB2SVTV2ED0EDGZ&qid=1656753016&s=beauty-intl-ship&sr=1-17',
    img1: 'https://m.media-amazon.com/images/I/91qmPJKT87L._SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71PD-ZfXHAL._SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71GqXNYoG+L._SX569_.jpg',
    likes: 114052,
    categoryId: 1,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 3,
    name: "Water Flosser 600ml Dental Oral Irrigator Teeth Cleaner for Personal Braces Care Teeth Cleaning, 6 Multifunctional Jet Tips and 10 Adjustable Water Pressure Perfect for Family",
    price: 28.99,
    description: `【Professional and Powerful Flossing】 The upgraded Mornwell oral irrigator uses a unique combination of water pressure and pulsation. Its water pulsation ranges from 1400 times/minute to 1700 times/minute, which perfectly removes up to 99.9% of dental plaque in the mouth, effectively massages the gums and prevents Oral problems such as tooth stains and bad breath. This is the perfect tooth cleaner for people who wear braces, implants, crowns or periodontal pockets.
                  【10 Adjustable Water Pressure】 A dental floss whose water pressure is gradually adjustable from low to high (30 to 110PSI), allowing your family to find the most comfortable pressure setting, flushing and removing food residues between the gums, and promoting blood cycle. Water pressure 1-4 is suitable for people with sensitive teeth, First-time users and children; Water pressure 4-6 is suitable for most people; Water pressure 7-10 is suitable for experienced adults.
                  【600ML large Water Tank & Waterproof Design】 The 600ML large-capacity water tank provides 120 seconds of water flow without refilling. The detachable water tank is convenient for filling and cleaning. The Mornwell Flosser adopts the waterproof design of IXP7 double sealing ring to prevent leakage. The 3-minute smart timer ensures your safety and the life of the flosser.
                  【Convenient and Humanized Design】 Mornwell water flosser is made of safe ABS Material, one-key operation, easy to use. The water flow switch can be controlled at any time through the on/off button on the handle, no longer looking for buttons clumsily. The 39-inch retractable hose design and 360° rotating tip can reach all areas of the oral cavity. It is easy to use and more convenient. The hidden storage box saves more space.
                  【Satisfactory Service】 We promise that dental floss is manufactured in accordance with strict quality standards to provide our customers with the best experience, so that you can buy with confidence. It is the best birthday gift for family, lover, friends, etc. If you encounter any problems after purchasing the product, please contact us in time. We will provide you with the most satisfactory service!`,
    url: 'https://www.amazon.com/Irrigator-Personal-Cleaning-Multifunctional-Adjustable/dp/B088CXT483/ref=sr_1_31_sspa?pd_rd_r=e7957c16-b986-45e5-a1ad-1c026c4ac81a&pd_rd_w=KpTHb&pd_rd_wg=6tmuU&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=FKK58HB2SVTV2ED0EDGZ&qid=1656753016&s=beauty-intl-ship&sr=1-31-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExN0Y3N1JLWTUwVUVYJmVuY3J5cHRlZElkPUEwMTU0NTI5Mlo3UVNSME4zVVM5MCZlbmNyeXB0ZWRBZElkPUEwNTQ2NDk4MkwxUUtIUDZFODRaUyZ3aWRnZXROYW1lPXNwX2J0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    img1: 'https://m.media-amazon.com/images/I/61YZDT4be5L._SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/515cUejd4ML._SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61QvDZtVLGL._SX569_.jpg',
    likes: 762,
    categoryId: 1,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 4,
    name: "Listerine Freshburst Antiseptic Mouthwash for Bad Breath, Kills 99% of Germs That Cause Bad Breath & Fight Plaque & Gingivitis, ADA Accepted Mouthwash, Spearmint, 1 L",
    price: 5.67,
    description: `KILLS 99.9% of GERMS: This 1-liter bottle of Listerine Freshburst spearmint antiseptic mouthwash kills 99.9% of germs that cause bad breath, plaque and gingivitis for a fresher and cleaner mouth than brushing alone
                  FIGHT PLAQUE AND GINGIVITIS: A germ-killing mouthwash clinically shown to reduce plaque more than brushing and flossing alone by up to 52 percent more and reduce gingivitis by 21 percent more, for a fresh and healthy mouth
                  REFRESHING Mint FLAVOR: From the #1 dentist recommended brand of over the counter mouthwashes, this mouthwash for bad breath features a minty flavor that works to leave your mouth feeling clean and refreshed
                  ADA Seal of ACCEPTANCE: As an American Dental Association (ADA)-accepted antiseptic mouthwash, Listerine Freshburst Antiseptic Mouthwash offers 24-hour germ* protection with twice daily use.*Germs that cause plaque, gingivitis and bad breath
                  WHOLE MOUTH CLEAN: With approximately 4 weeks supply, achieve maximum results from this fresh breath mouthwash by rinsing mouth for 30 seconds twice a day, both morning and night, and experience a refreshing, dentist-clean feeling`,
    url: 'https://www.amazon.com/Listerine-Antiseptic-Adult-Mouthwash-Fresh/dp/B005IHSKYS/ref=sr_1_45?pd_rd_r=e7957c16-b986-45e5-a1ad-1c026c4ac81a&pd_rd_w=KpTHb&pd_rd_wg=6tmuU&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=FKK58HB2SVTV2ED0EDGZ&qid=1656753172&s=beauty-intl-ship&sr=1-45',
    img1: 'https://m.media-amazon.com/images/I/71leoxB4LEL._AC_SX679_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71sTAI-c0+L._AC_SX679_.jpg',
    img3: 'https://m.media-amazon.com/images/I/716fcbvn8cL._AC_SX679_.jpg',
    likes: 16101,
    categoryId: 1,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 5,
    name: "Ear and Nose Hair Trimmer Clipper - 2021 Professional Painless Eyebrow & Facial Hair Trimmer for Men Women, Battery-Operated Trimmer with IPX7 Waterproof, Dual Edge Blades for Easy Cleansing Black",
    price: 12.99,
    description: `【Versatile Trimming Tool】Made of high-quality stainless steel, this cordless Ear and Nose Hair Trimmer can effectively and comfortably remove unwanted hair from your nose, ears, eyebrows, beard, and face. One-button design is easy to use and suitable for men and women. Let you show the most confident side anytime, anywhere.
                  【Dual-Edge Spinning Blades】This nose hair trimmer features a dual-edge spinning blades system with a protective cover, inner 360° rotating design, which smoothly and precisely removes the hairs without painful or unpleasant pulling. It is comfortable and easy to use. Let you show your best at work or appointments.
                  【IPX7 Waterproof & Easy Cleansing】It’s waterproof and washable, making it easy to deal with residual by soak cleaning or having it take a shower. Washable and removable trimmer head is convenient for cleaning and maintenance. User-friendly handy body design comes with a dust-proof cover to protect the trimmer head.
                  【Energy-Saving & Whisper-Quiet Operation】The upgraded motor is more powerful but less power-consuming by 5%. 1pc AA battery (NOT included) can run for more than 6 months for 5mins’ of use at a time. This nose trimmer is suitable for road trips and travel. With operating noise less than 50db, use the nose hair clippers freely.
                  【Worry-Free Money-Back Guarantee】ZORAMI nose hair trimmer comes with a 30-day full-money-back assurance without a lot of arguing required. Please feel free to reach us if you have any questions or dissatisfaction and we’ll make it solved.`,
    url: 'https://www.amazon.com/Nose-Hair-Trimmer-Clipper-Battery-Operated/dp/B098NSHBQK/ref=sr_1_51?pd_rd_r=e7957c16-b986-45e5-a1ad-1c026c4ac81a&pd_rd_w=KpTHb&pd_rd_wg=6tmuU&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=FKK58HB2SVTV2ED0EDGZ&qid=1656753172&s=beauty-intl-ship&sr=1-51',
    img1: 'https://m.media-amazon.com/images/I/61ox1Eh9FaL._SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71lCcU19lpL._SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71sjDLi4-OL._SX569_.jpg',
    likes: 18128,
    categoryId: 1,
    currentCategory: 0,
    isActive: true,
  },


  {
    id: 6,
    name: "Digital Camera 2.7K 48MP Vlogging Camera, Auto Focus Digital Point and Shoot Camera with 32GB Memory Card,16X Zoom, Time Lapse Digital Cameras for Kids Teenagers Students Boys Girls, Green",
    price: 73.99,
    description: `【Capture the Beautiful Moments with Ease】This digital point and shoot camera features essential photography functions, such as time-lapse photography, slow motion,16X zoom, white balance, Anti-shake,continuous shooting, ect, and it's easier operation is perfect for kids, teenagers and starters who are interested in photography.
                  【2.7K 48MP & Auto Focus】Equipped with a professional level image sensor, this digital camera captures vivid 2.7K videos and amazing 48MP pictures, which is close to 4K image quality. What's more, You can press the shutter button halfway down to focus on the target, never worry about defocus and blurry.
                  【3 Inch Large Screen & 16X Zoom】Designed for kids and starters, we adapted a 3 inch IPS screen, it's larger, clearer and also a good protection for your eyes. With the 16X digital zoom, the objects will be magnified up to 16x, you will see an amazing tiny world.
                  【More Photography Jollity】This digital camera leads you to enjoy the fun of photography. If you want to make a short video about sunrise or flower opening, the time lapse function can finish it perfectly. The slow motion will help you capture the exciting moments and paly it back at a slow speed. The camera has 20 pcs effects, so you create Vintage photos, Black/White photos...
                  【What You Will Get】The vlogging camera is firmly placed in a custom box, accessories include 32 GB SD card, Type C cable, 2* 700ml Batteries, Camera Charger, Lanyard and Bag, One year Warranty. Ideal gift for Graduation, Birthday, Christmas and any important time.`,
    url: 'https://www.amazon.com/Digital-Vlogging-Cameras-Teenagers-Students/dp/B0B1V2JSB8/ref=sr_1_1_sspa?qid=1656753804&s=electronics&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVSVdZTklJV0MzSzcmZW5jcnlwdGVkSWQ9QTAxNjI3MDQzNDlIRTZSM0E5MjVWJmVuY3J5cHRlZEFkSWQ9QTEwNDY0NTUyTEJZSFdXQjBQWVZUJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1',
    img1: 'https://m.media-amazon.com/images/I/61Ny4pf4abL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71L1thL5V3L._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71Q+KRgLHoL._AC_SX569_.jpg',
    likes: 10,
    categoryId: 2,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 7,
    name: "Digital Camera, Lecran Kids Camera FHD 1080P 36.0 Mega Pixels Vlogging Camera with 16X Digital Zoom, LCD Screen, Compact Portable Mini Cameras for Teens, Beginners, Students, Kids (Black)",
    price: 45.89,
    description: `【FHD 1080P & 36MP Digital Camera】Featured with FHD 1080P resolution and 36.0 megapixels, this digital camera will help you to capture the most exciting memorable moments with good quality images or videos. Totally fits your demand, you could have fun and record wonderful times with friends, family members, and classmates.
                  【Vlogging Record & Webcam】Support video mode, build-in microphone, you could gain clear recording videos. The mini digital camera also can be used as a webcam, you could have video calls or start living streaming to share things on social media, just turn off the camera, connect it with the computer, press the power and mode button at the same time, then it will on the webcam mode.
                  【16X Digital Zoom & Pause Function】This digital camera supports 16X digital zoom, you could zoom in or out images by using the W/T button. The pause function allows you to pause when record or playback videos. And the built-in fill light helps you to take quality pictures in the dark.
                  【Portable & Easy to use】Smaller than smartphone, this compact portable mini camera is small enough to fit your pocket, you could bring it anywhere, anytime. And this point-and-shoot digital camera is super easy to operate and control, a deal gift for seniors, teens, kids, and students.
                  【Multifunction Digital Camera & Warranty】 This mini camera supports anti-shake, face detection, smile capture, continuous shotting, and self-timer function. It comes with two rechargeable lithium batteries, a USB cable, a portable bag, and a lanyard rope. We provide a perfect one year warranty for all purchases on Amazon, any problem or suggestion, please get in touch with us.`,
    url: 'https://www.amazon.com/Lecran-Vlogging-Portable-Beginners-Students/dp/B09ZKWVZ5G/ref=sr_1_2_sspa?qid=1656753804&s=electronics&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVSVdZTklJV0MzSzcmZW5jcnlwdGVkSWQ9QTAxNjI3MDQzNDlIRTZSM0E5MjVWJmVuY3J5cHRlZEFkSWQ9QTAwMDI1NThBWUdVREhEOThBSUImd2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3NlJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1',
    img1: 'https://m.media-amazon.com/images/I/613b7UhnCOL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81ZsIoSvfDL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71PEFEwmniL._AC_SX569_.jpg',
    likes: 542,
    categoryId: 2,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 8,
    name: "OLYMPUS Tough TG-6 Waterproof Camera, Red",
    price: 499.99,
    description: `Water proof (50 feet /15 meter), dust proof, shock proof (7 feet / 2.1 meter), crush proof (100 kgf), freeze proof (14 degree Fahrenheit / -10 degree Celsius), anti-fog
                  High resolution F2.0 lens, maximum 8x zoom, true pic VIII, back illuminated CMOS image sensor
                  Variable macro system comprised of 4 macro shooting modes, magnified shooting up to 1 centimeter from the end of the lens
                  5 underwater shooting modes including underwater microscope, 3 underwater white balance modes
                  4K movie and full HD 120 fps high speed movies can be recorded. Battery life - Approx. 340 Images (using Toshiba SDHC UHS-I Card Exceria with is on, based on CIPA testing standards). Approx. 50 minutes (under standard JEITA testing). Approx. 110 minutes (when zoom and other operational functions are not used). When repeatedly recording at the maximum time of 29 minutes`,
    url: 'https://www.amazon.com/Olympus-Tough-TG-6-Waterproof-Camera/dp/B07RC8HPHL/ref=sr_1_5?qid=1656753804&s=electronics&sr=1-5&th=1',
    img1: 'https://m.media-amazon.com/images/I/61J18Xn9bfS._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81dfn2AZSdL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/91xFL6ItRdL._AC_SX569_.jpg',
    likes: 1708,
    categoryId: 2,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 9,
    name: "Digital Camera, Lecran FHD 1080P 36.0 Mega Pixels Vlogging Camera with 16X Digital Zoom, LCD Screen, Compact Portable Mini Cameras for Students, Teens, Kids (Purple)",
    price: 53.99,
    description: `【FHD 1080P & 36MP Digital Camera】Featured with FHD 1080P resolution and 36.0 megapixels, this digital camera will help you to capture the most exciting memorable moments with good quality images or videoes. Totally fits your demand, you could have fun and record wonderful times with friends, family members, and classmates.
                  【Vlogging Record & Webcam】Support video mode, build-in microphone, you could gain clear recording videos. The mini digital camera also can be used as a webcam, you could have video calls or start living streaming to share things on social media, just turn off the camera, connect it with the computer, press power and mode button at the same time, then it will on the webcam mode.
                  【16X Digital Zoom & Pause Function】This digital camera supports 16X digital zoom, you could zoom in or out images by using the W/T button. The pause function allows you to pause when record or playback videos. And the build-in fill light helps you to take quality pictures in the dark.
                  【Portable & Easy to use】Smaller than smartphone, this compact portable mini camera is small enough to fit your pocket, you could bring it to anywhere, anytime. And this point and shoot digital camera is super easy to operate and control, a deal gift for seniors, teens, kids, and students.
                  【Multifunction Digital Camera & Warranty】 This mini camera supports anti-shake, face detection, smile capture, continuous shotting, and self-timer function. It comes with two rechargeable lithium batteries, USB cable, portable bag, and lanyard rope. We provide a perfect one year warranty for all purchases on Amazon, any problem or suggestion, please get in touch with us.`,
    url: 'https://www.amazon.com/Digital-Lecran-Vlogging-Portable-Students/dp/B08QMNZWSK/ref=sr_1_15_sspa?qid=1656753804&s=electronics&sr=1-15-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVSVdZTklJV0MzSzcmZW5jcnlwdGVkSWQ9QTAxNjI3MDQzNDlIRTZSM0E5MjVWJmVuY3J5cHRlZEFkSWQ9QTA3NTc3MjMzVDFNNzdRR1ZIQjg2JndpZGdldE5hbWU9c3BfbXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1',
    img1: 'https://images-na.ssl-images-amazon.com/images/I/71a5wNItTJL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81d9mDHdrfL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/816PCPqIlWL._AC_SX569_.jpg',
    likes: 2647,
    categoryId: 2,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 10,
    name: "Digital Camera for Kids Girls and Boys - 1080P FHD Digital Camera 36MP LCD Screen Rechargeable Students Compact Camera Mini Camera with 16X Digital Zoom Vlogging Camera for Teens, Kids (Black)",
    price: 46.74,
    description: `Multi-functions Compact Camera:This kids camera with 1080P FHD video resolution,36MP (max) picture pixel,8MP CMOS image sensor,2.4 inch LCD screen,16X digital zoom,pause function,built-in fill light,anti-shaking,continuous shooting,face detect,smile capture,self-timer,internal microphone and speaker(record sound videos),USB 2.0.This is a cost-effective entry-level ordinary camera,easy to operate,ideal gift for kids,adult,seniors,students,beginners.
                  Designed with Kids in Mind:This vlogging camera is specially designed for children,with a tiny shape that can be held securely by your child's small hands.Lightweight design and small size make it is convenient for carrying around to capture happy moments anytime,anywhere.You can put this portable camera directly in your pocket or backpack,Do not make you feel the weight of the camera.The digital camera could make continuous shooting,you could not miss every happy moments of daily life.
                  16X Digital Zoom & Flash Light:The 16x digital zoom can magnify your photos,you can take the desired photos according to the actual scene.This pocket digital camera has a built-in microphone,the camera can record its own voice,and you can also turn on the built-in flash according to the needs of the scene,you can also shoot in low light conditions.This video camera has a 2.4 inch LCD screen,you can see what you are filming or playback with sound immediately.
                  Rechargeable Youtube Camera:This pocket camera comes with two rechargeable battery,it can be charged via our USB cable included in the package.You can enjoy 60 minutes of continuous photography after once charging.You can also record videos while charging.The USB cable not only supports charging,but also supports transferring photos and videos from the video camera to your computer for saving and collecting photos in a timely manner.
                  Pause Function:The camcorder supports the pause function,a good choice for YouTube and vlogging.You can continue the recording in the same file without restarting a new one.The beginner camera supports class-10 external-memory max up to 128G SD card(Not included,you need to purchase it separately),SD card need to be formatted before using.If you have any problems or concerns,please feel free to contact us,we will give you a satisfied solution within 24 hours.`,
    url: 'https://www.amazon.com/Digital-Rechargeable-Students-Vlogging-Beginners/dp/B09FS9RGK4/ref=sr_1_29?qid=1656753804&s=electronics&sr=1-29',
    img1: 'https://m.media-amazon.com/images/I/71qicVkKAJL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71qJSeXMJgL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/719GgEKD27L._AC_SX569_.jpg',
    likes: 460,
    categoryId: 2,
    currentCategory: 0,
    isActive: true,
  },


  {
    id: 11,
    name: "VIISAN 3240 A3 Large Format Scanner,Color Receipt & Document & Photo & Book & Art & CAD Scanner,[A3 and Below] Flatbed Scanner with 2400 x 2400 DPI [A3 Scan for 4 Sec],Supports Windows 11 & Mac",
    price: 449.99,
    description: `[A3 large format & high speed] VIISAN 3240 designed for high quality scanning of artworks, photos, painting albums, books, magazines, newspapers, CAD drawings, and other large document items up to 304 x 426 mm (11.98" x 16.8") in size. It is ideal for school projects,business work, graphic designing and digital publishing work.It takes only 4 seconds or an A3 size.
                  [high resolution Contact Image Sensor (CIS) & Supports multiple drivers] VIISAN 3240 provides a maximum optical resolution of 2400 x 2400 dpi which delivers a color depth of 48-bit vivid true-to-life image and realizes smoother and more detailed color gradient and variations.Compatible with Windows TWAIN, WIA, MacOS ICA, and Linux XSANE drivers.
                  [Convenient Auto-Scan Function & NO More Waiting] VIISAN 3240 by detecting the cover sensor, the Auto-Scan function enables the scanner to scan automatically when the scanner lid is closed. It enhances the efficiency of continuous scanning process.and LED Light Source, Save Energy, No Warm-Up Time,No More Waiting
                  [Unique Frameless Narrow Boundary Design & High strength of the glass platen] VIISAN 3240 adopt unique frameless and ultra thin panel design of platen, VF series makes it easy to slide scan objects out after scanning. When scanning thick bound books, it allows books to lay flat against the platen's surface, which eliminates the book spine shadow during scanning,and it can bear up to 5 pounds for scanning large file.
                  [1-year limited warranty] We provide a one-year warranty for Non-man-made damage.`,
    url: 'https://www.amazon.com/VIISAN-Scanner-Receipt-Document-Supports/dp/B08DKK2LDD/ref=sr_1_1_sspa?qid=1656755707&rnid=502394&s=electronics&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNTY5Q1BYVEVSM00xJmVuY3J5cHRlZElkPUExMDI0MjQ3MVhSRDNLSUNOM0xPMiZlbmNyeXB0ZWRBZElkPUEwODI4NDAyMUYyOTBJVElJTFI3WSZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    img1: 'https://m.media-amazon.com/images/I/61iQG5FeLpL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71kuiwfqBsL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/713N6dJSPLL._AC_SX569_.jpg',
    likes: 32,
    categoryId: 3,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 12,
    name: "KODAK Slide N SCAN Film and Slide Scanner with Large 5” LCD Screen, Convert Color & B&W Negatives & Slides 35mm, 126, 110 Film Negatives & Slides to High Resolution 22MP JPEG Digital Photos",
    price: 169.99,
    description: `SAVE OLD PHOTO MEMORIES: 14/22MP Digital Film Scanner Lets You View, Edit & Convert Your Old Color & B&W Negatives [135, 110, 126mm] & 50mm Slides [135, 110, 126mm] to Digital Files & Save Directly to SD Card (NOT INCLUDED)
                  5” LCD DISPLAY WITH GALLERY MODE: Features Large, Crystal-Clear Screen with Wide Viewing Angle for Instantly Previewing & Editing Photos | Great for Sharing with Friends & Family or Using as an Elegant Digital Picture Frame in Home or Office
                  CONVENIENT EASY-LOAD FILM INSERTS: Quick-Feeding Tray Technology Allows for Continuous Loading Action, Making Scanning Fast & Simple! Includes 50mm Slide Holder, Adapters for 135, 110 & 126 Films, Cleaning Brush, USB & HDMI Cables
                  EDITING WITH A SINGLE TOUCH: Advanced Capture Software Enhances, Resizes & Converts Photos Via Easy ‘Scan’ Button—No Complex Screens or Settings! | Easy Options Let You Choose Film Type, Adjust Color/Brightness & Assign Date/Time
                  SUPER CHIC. UBER COMPATIBLE: Device Handles All Your Old Slides & Negatives, Supports SD or SDHC Cards [Up to 32GB] (NOT INCLUDED) & Connects to Any Type-C USB-Enabled Computer | Gorgeous Design Blends Seamlessly w/ Your Home Décor`,
    url: 'https://www.amazon.com/KODAK-Scanner-Convert-Negatives-Resolution/dp/B084NVRHYQ/ref=sr_1_4?qid=1656755707&rnid=502394&s=electronics&sr=1-4',
    img1: 'https://m.media-amazon.com/images/I/81RdTfBiqfL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81+WVRXrw-L._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/81VL5h3zutL._AC_SX569_.jpg',
    likes: 4516,
    categoryId: 3,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 13,
    name: "Plustek Photo Scanner - ephoto Z300, Scan 4x6 Photo in 2sec, Auto Crop and Deskew with CCD Sensor. Support Mac and PC",
    price: 199,
    description: `The easiest way to scan photos and documents. Supports 3x5, 4x6, 5x7, and 8x10 in sizes photo scanning but also letter and A4 size paper. Optical Resolution is up to 600 dpi ( PS: two setting: 300dpi/ 600dpi).
                  Fast and easy, 2 seconds for one 4x6 photo and 5 seconds for one 8x10 size photo@300dpi. You can easily convert about 1000 photos to digitize files in one afternoon and share with your family or friends.
                  More efficient than a flatbed scanner. Just insert the photos one by one and then scan. This makes ePhoto much more efficient than a flatbed scanner.
                  Powerful Image Enhancement functions included. Quickly enhance and restore old faded images with a click of the mouse.
                  ePhoto Z300 works with both Mac and PC : Supports Windows 7/8/10/11 , Mac OS X 10.10 to 11.x. User can download the latest version on Plustek website.`,
    url: 'https://www.amazon.com/Plustek-Photo-Scanner-Sensor-Support/dp/B01LZJH63M/ref=sr_1_5?qid=1656755707&rnid=502394&s=electronics&sr=1-5',
    img1: 'https://m.media-amazon.com/images/I/61f1d+cnUCL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/811TMlnRFOL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71lrDnIT2aL._AC_SX569_.jpg',
    likes: 6087,
    categoryId: 3,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 14,
    name: "KODAK Step Wireless Mobile Photo Mini Printer (White) Compatible w/ iOS & Android, NFC & Bluetooth Devices",
    price: 2314,
    description: `STEP UP YOUR PRINTING GAME: No more making plans to print tomorrow. Kodak step printer connects to any iOS or Android Smartphone, Tablet or Similar Device [Via Bluetooth or NFC] so you can print pics instantly; Turn your selfies, portraits, social media posts & other images into physical photos
                  AMAZING ZERO-INK TECHNOLOGY: Zink innovation eliminates the need for pricy ink cartridges, toners or ribbons; 2” x 3” sticky-back paper with embedded dye crystals delivers high-quality, durable, affordable, beautifully detailed prints that are resistant to moisture, rips, tears & smudges
                  FULL EDITING SUITE VIA APP: Download the free Kodak App to create collages & customize your snaps with stunning filters, interesting borders, cool stickers, funny text & other personalized flair; Edit photos in your camera roll, then send to step for instant printing in less than 60 seconds
                  TAKE YOUR PROJECTS TO GO: Skip the computer connections, messy wires & clunky equipment; Our palm-sized printer weighs less than a pound, sets up fast & delivers gorgeous prints you can peel & stick everywhere; Great for decorating a fridge, laptop, locker, scrapbook, notebook & more
                  CUTE, COMPACT & COLORFUL: Step printer is designed for photo-loving influencers & crafters of all ages & skill levels; Portable, lightweight device features built-in lithium-ion rechargeable battery prints 25 photo on a full charge; Available in a variety of colors - a fantastic anytime gift idea
                  Max prints peed black white: 1.0 pages per minute
                  Max print speed color: 1.0 pages per minute
                  Printer technology: Zink technology`,
    url: 'https://www.amazon.com/Wireless-Printer-Compatible-Android-Bluetooth/dp/B08C72V1LB/ref=sr_1_7?qid=1656755707&rnid=502394&s=electronics&sr=1-7&th=1',
    img1: 'https://m.media-amazon.com/images/I/81lAHBOPTnL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81b2J5EsTsL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/91OJfwglrRL._AC_SX569_.jpg',
    likes: 9372,
    categoryId: 3,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 15,
    name: "HP Sprocket Studio Photo Printer – Personalize & Print, Water- Resistant 4x6'' Pictures (3MP72A)",
    price: 150,
    description: `Ready to print 4x6" in an instant – Designed for use with Bluetooth and the HP Sprocket app, the compact HP Sprocket Studio produces high-quality 4x6" photos, printed directly from your smartphone
                  Quality photos that last up to 100 years – Produce glossy, vibrant photos that are smudge-proof and water-resistant
                  Personalize your prints – Download the free HP Sprocket app for built-in templates for photo albums, cards, collages, and more—even take a picture of your own doodles and turn them into custom stickers
                  Print from a variety of sources – Pair this smartphone printer with the HP Sprocket app to view and print photos from social media, Google Photos, and more
                  Augmented reality fun – Use the HP Sprocket app to unlock content in augmented reality and view shared print queues, hidden videos, and more
                  Start printing instantly – Plug in your picture printer and start printing with the included ink cartridge and 10 sheets of 4x6" glossy Photo Paper
                  Optional portable battery – Go cordless and bring the optional power bank to charge your Sprocket Studio and print photos at any event`,
    url: 'https://www.amazon.com/HP-Sprocket-Studio-Photo-Printer/dp/B082G1SQSY/ref=sr_1_11?qid=1656755707&rnid=502394&s=electronics&sr=1-11&th=1',
    img1: 'https://m.media-amazon.com/images/I/81NL5ltOpbL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71kVRmnLUML._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71TpCBgApOL._AC_SX679_.jpg',
    likes: 3313,
    categoryId: 3,
    currentCategory: 0,
    isActive: true,
  },


  {
    id: 16,
    name: "WiiM Mini AirPlay2 Wireless Audio Streamer, Multiroom Stereo, Preamplifier, Works with Alexa and Siri Voice Assistants, Stream Hi-Res Audio from Spotify, Amazon Music and More",
    price: 149.99,
    description: `AIRPLAY 2 RECEIVER - WiiM Mini turns your stereo into an AirPlay 2-enabled speaker to stream the music that you love from iOS and Mac devices or stream TV audio from Apple TV. It’s an easy and affordable way to connect your Apple devices to your favorite audio equipment and upgrade to an AirPlay 2 receiver.
                  GAPLESS PLAYBACK HI-RES 192 kHz, 24-bit MUSIC - WiiM Mini can stream up to 24-bit/192 kHz music wirelessly on its digital and analog output. It can play all your music gaplessly and provide bit perfect output via its digital optical output. Not all integrated music services support 24-bit/192 kHz output. Currently, Amazon Music Ultra HD and TIDAL Master (MQA) are not supported. Amazon Music HD and TIDAL HiFi are supported instead.
                  SPOTIFY CONNECT & TIDAL CONNECT - Stream music directly from Spotify and TIDAL app using Spotify Connect or TIDAL Connect. Works for both Spotify Free and Premium users.
                  WORKS WITH ALEXA & SIRI - WiiM Mini works with Alexa and Siri Voice Assistants. Use your voice to control music playback and smart home automation.
                  MULTIROOM STREAMING - WiiM Mini lets you stream music throughout your home via Apple AirPlay 2, Amazon Alexa or our own multiroom function. Group with other AirPlay 2, Alexa devices such as Echo, HomePod or multiple WiiM Mini and play to multiple audio devices all at the same time.`,
    url: 'https://www.amazon.com/WiiM-Mini-Multiroom-Preamplifier-Assistants/dp/B09HC5GRKY/ref=lp_19185106011_1_12',
    img1: 'https://m.media-amazon.com/images/I/517MgwuUUtL._AC_SX569_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71V354SZKFL._AC_SX569_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71muCOlWKAL._AC_SX569_.jpg',
    likes: 284,
    categoryId: 4,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 17,
    name: "LEVOIT Smart Top Fill Humidifiers with Extra Large 6L Tank for Plants, Super Quiet Sleep Mode, Lasts Up to 60 Hours, Wifi Alexa App Control, Cool Mist for Bedroom Large Room Home, Essential Oil Tray",
    price: 49.99,
    description: `POWERFUL PERFORMANCE: With humidification up to 4x faster than other brands, a large 6-L tank, and up to 60 hours of operation, the Classic 300S provides relief in rooms as large as 505 ft². Experience alleviation of congestion, and dry skin
                  AUTOMATIC CONVENIENCE: With the smart humidity sensor, you don't have to worry about over-humidification anymore. Auto Mode adjusts mist levels and balances your home’s humidity automatically. Just customize your Humidity, turn on the humidifier, and enjoy
                  THE MOST CONVENIENT APP & VOICE CONTROL: The Classic300S is undoubtedly your most intimate humidifier. Simply use the free VeSync APP to control settings, create schedules, and connect to a third-party smart voice assistant to free your hands
                  CONVENIENT TOP-FILL DESIGN: The large opening makes refilling and cleaning the tank easy. Enjoy the convenience of a thoughtfully-designed product
                  BEST HUMIDIFIER FOR BEDROOM: Made with BPA-free materials and featuring quiet operation, the Classic 300S is perfect for bedroom. Sleep Mode provide you with the optimal sleep-humidifying environment. Also, you will love the soft, soothing night light.
                  RELAXING AROMATHERAPY: The Classic300S offers both humidity and aromatherapy, so you can add your favorite essential oils to the aroma box and enjoy wonderful, fresh-smelling air
                  SATISFACTION GUARANTEED: Experiencing issues, Our California-based Customer Support Team is here to help. If your product is defective, don’t worry about shipping it back. We’ll send you a replacement right away`,
    url: 'https://www.amazon.com/LEVOIT-Humidifiers-Ultrasonic-Essential-Customized/dp/B09C24TYGQ/ref=lp_19185106011_1_11?th=1',
    img1: 'https://m.media-amazon.com/images/I/61fIzaXuR3L._AC_SX679_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71rJQ7Ft8iL._AC_SX679_.jpg',
    img3: 'https://m.media-amazon.com/images/I/81tLeKq58NL._AC_SX679_.jpg',
    likes: 15673,
    categoryId: 4,
    currentCategory: 0,
    isActive: true,
  },
  {
    id: 18,
    name: "Atomi Smart Coffee Maker with Burr Grinder - WiFi, Voice-Activated, 8 Grind Settings, 12-Cup Glass Carafe, Reusable and Washable Filter, Compatible with Alexa and Google Assistant",
    price: 249.99,
    description: `𝗪𝗜𝗙𝗜 𝗘𝗡𝗔𝗕𝗟𝗘𝗗 - Start your coffee grinding and brewing from anywhere in the house by downloading the free Atomi Smart app to your phone.
                  𝗖𝗢𝗠𝗠𝗘𝗥𝗖𝗜𝗔𝗟-𝗚𝗥𝗔𝗗𝗘 𝗕𝗨𝗥𝗥 𝗚𝗥𝗜𝗡𝗗𝗘𝗥 - Built-in conical burr grinder can grind your beans 8 different ways, releasing enticingly rich aromas and full-bodied flavors.
                  𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗟𝗘 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡𝗔𝗟𝗜𝗧𝗬 - Brew from whole beans or pre-ground coffee. Operate manually using the LED control panel, using the app on your phone, or voice activation.
                  𝗣𝗥𝗢𝗚𝗥𝗔𝗠𝗠𝗔𝗕𝗟𝗘 - Create daily and weekly schedules to fit your lifestyle, set or change the brewing strength, warm it up throughout your day, and more.
                  𝗩𝗢𝗜𝗖𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗 - Use with Alexa or Google Assistant to begin grinding, brewing, to change brew strength, and to turn on/off your coffee maker.`,
    url: 'https://www.amazon.com/Atomi-Smart-Coffee-Maker-Grinder/dp/B08B1TX6LV/ref=sr_1_28?qid=1656790243&sr=8-28&srs=19185106011',
    img1: 'https://m.media-amazon.com/images/I/71kNUaHybTL._AC_SX679_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81BhacowDRL._AC_SX679_.jpg',
    img3: 'https://m.media-amazon.com/images/I/81Mc1QLVr0L._AC_SX679_.jpg',
    likes: 57,
    categoryId: 4,
    currentCategory: 0,
    isActive: true,
  }, 
  {
    id: 19,
    name: "Ultenic K10 Air Fryer 5.3QT, Smart APP Control, One Touch Screen with 11 Presets and 100 Chef-created Online Recipes & Cookbook, Works with Alexa, Google Assistant, Preheat&Shake Reminder&Keep Warm",
    price: 109,
    description: `Healthier, Faster, and Crispier: Get hotter, faster, and crispier results with Dual-Air Tecknology by Ultenic K10 Air Fryer. Cook your food up to 4 times faster than an oven, reduce your food's oil content by up to 90%, and preserve more nutrients in your food. Let's enjoy healthier and tasty snacks and meals without guilt.
                  11 Presets and Hundreds of Chef-inspired Recipes: Load with 11 one-touch presets, it can easily and intelligently cook french fries, chicken, steak, bacon etc. - Just choose a food type and press the button! Be inspired with the free 100-Recipe cookbook and explore, save, customize more common and pro online recipes in Ultenic App.
                  XL 5.3QT Capacity & User-Friendly Design: Feed up to 5 people or fit a whole roast chicken, 5.3QT large square basket is an ideal choice for family and fits perfectly on any kitchen countertop. An ergonomic touchscreen control panel displays a full view of your cooking progress, increasing visibility and ease of use without bending over.
                  Cook Hands-free with Alexa & Google Assistant: Hands Full? No Problem. The Smart K10 air fryer provides you the ability to control it through voice command with Amazon Alexa and Google Assistant when your hands are covered in oil or flour. Free your hands and enjoy a smarter way of cooking!
                  Dishwasher safe, PFOA-free and BPA-free: Spend less time with cleanup! Made of nonstick coated aluminum, the basket and crisper plate are both durable, dishwasher safe, PFOAs and BPA free. After all the cooking are done, just place the baskets and plates in the dishwasher for quick and easy cleanup.`,
    url: 'https://www.amazon.com/Ultenic-K10-Chef-created-Cookbook-Assistant/dp/B09CYYNTKK/ref=sr_1_36?qid=1656790256&sr=8-36&srs=19185106011',
    img1: 'https://m.media-amazon.com/images/I/81-4kHbKVNL._AC_SX679_.jpg',
    img2: 'https://m.media-amazon.com/images/I/814DXv4kXtL._AC_SX679_.jpg',
    img3: 'https://m.media-amazon.com/images/I/81Ix9n6KRsL._AC_SX679_.jpg',
    likes: 408,
    categoryId: 4,
    currentCategory: 0,
    isActive: true,
  }, 
  {
    id: 20,
    name: "Sandman Clocks Doppler Smart Alarm Clock with Alexa, Bedside Alexa Clock with 6 USB Charging Ports, WiFi, Stereo Bluetooth Speakers, Auto Dimmer, in Blackout",
    price: 199.95,
    description: `ALEXA, SET MY ALARM: Use your voice, an app on your Android or iOS device, or the buttons to control your Doppler. Simply ask Alexa to set multiple alarms, play your favorite music, control your smart home, and so much more.
                  EQUIPPED WITH MULTIPLE USB PORTS: The Doppler allows you to charge up to 6 devices at once. Anything that charges via USB is compatible with Doppler. Two versions are available, one with 3 standard USB ports, and 3 USB-C ports.
                  COOL INTUITIVE DESIGN: Featuring an auto-dimming display, a large snooze button, and even white noise generated from Alexa, it displays the time and local weather with discrete LEDs, equipped with Wi-Fi, and an app for total control.
                  MUSIC TO YOUR EARS: Designed with high-quality stereo speakers and a bass port, the Doppler is tuned to produce sound with amazing vibrance and clarity. Set your Doppler alarm to wake up to your favorite music from Alexa or fun built-in alarm sounds.
                  FITS YOUR DÉCOR: The Doppler comes in three colors: Moon Grey, and Blackout. The screen is customizable with over 6 million display color options to fit your bedroom aesthetic. The clean, modern design is made to fit in and blend into your aesthetic.`,
    url: 'https://www.amazon.com/Sandman-Clocks-Blackout-Customizable-Bluetooth/dp/B08M99QL8T/ref=sr_1_35?qid=1656790256&sr=8-35&srs=19185106011',
    img1: 'https://m.media-amazon.com/images/I/61kj2mmN45L._AC_SX679_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71k6EB8qkJL._AC_SX679_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71wzsW4ef3L._AC_SX679_.jpg',
    likes: 28,
    categoryId: 4,
    currentCategory: 0,
    isActive: true,
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/