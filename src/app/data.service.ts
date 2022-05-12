import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  mobiles = [
    {
      id: 1,
      pic: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a12-1.jpg",
      name: "OPPO A12",
      color: "(black,32 GB)",
      price: "9,990",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 2,
      pic: "https://images.firstpost.com/wp-content/uploads/2019/07/Vivo.jpg",
      name: "Vivo Y11",
      color: "(Red,32 GB)",
      price: "9,990",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 3,
      pic:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m11-sm-m115-1.jpg",
      name: "Samsung Galaxy M11",
      color: "(Violet,64 GB)",

      price: "10,999",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 4,
      pic: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x2-1.jpg",
      name: "POCO X2",
      color: "(Matrix Purple,64 GB)",
      price: "9990",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 5,
      pic: "https://fdn2.gsmarena.com/vv/pics/realme/realme-5s-1.jpg",
      name: "Realme 5s",
      color: "(Crystal Blue,128 GB)",
      price: "11,999",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 6,
      pic:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-honor-10-lite-4.jpg",
      name: "Honor 10 Lite",
      color: "(Midnight Black,32 GB)",
      price: "13,990",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    }
  ];
  mobileAccs = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/k3dc7m80/cases-covers/back-cover/2/p/e/flipkart-smartbuy-rm5p-kick-blk-original-imafmevzzdymh28z.jpeg?q=70",
      name: "Mobile Case",
      color: "Black,flexible",
      price: "239",
      desc: [
        "Flexible Rubber Case",
        "REDMI-9A-BLUE-VINTY",
        "Mi Redmi 9A, Redmi 9i",
        "Black"
            ]
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/416/416/jtrjngw0/battery-charger/b/9/9/delmohut-original-wall-chargers-original-imaffyzpfnsm3hha.jpeg?q=70",
      name: "Mobile charger",
      color: "White",
      price: "449",
      desc:[
          "Charger With Data Sync Cable",
          "FAST CHARGER WITH FAST CHARGING CABLE",
          "vivo Travel Charger 2 A Mobile Charger with Detachable Cable",
          "fast charging adptor with cable 2.4 ",
          "A Mobile Charger with Detachable Cable"
      ]
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/jv9udu80/data-cable/micro-usb-cable/3/e/c/portronics-por-654-konnect-core-1m-original-imafg6n2zs2cqtzd.jpeg?q=70",
      name: "Mobile Cables",
      color: "black",
      price: "199",
      desc:[
        "Length 2 m",
        "Round Cable",
        "Connector One: USB Type A|Connector Two: A Type",
        "Cable Speed: 480 Mbps",
        "Mobile"
      ]
    },
    {
      id: 4,
      pic: "https://rukminim1.flixcart.com/image/612/612/jm9hfgw0/mobile-holder/8/k/w/universal-smart-elv-original-imaf77cz9k5eeasy.jpeg?q=70",
      name: "Mobile Holder",
      color: "black",
      price: "189",
      desc:[
          "Portronics",
          "Stainless Steel",
          "Mobile, Tablet",
          "Desktop Stand",
          "Black"
      ]
    }
  ];
  speakers = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/jl6wjgw0/speaker-refurbished/w/f/3/u-a110-f-d-original-imaf8dugbygcue2v.jpeg?q=70",
      name: "Home Audio Speaker",
      color: "Black,2.1 channel",
      price: "1,599"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/k3ncakw0/speaker/home-theatre/y/g/q/zebronics-feel-original-imaff6r6kcr5nmrk.jpeg?q=70",
      name: "Home Theatre",
      color: "Black,4.1 channel",
      price: "2,199"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/416/416/k4x2du80/speaker/mobile-tablet-speaker/c/z/f/jbl-flip-essential-original-imafnpuhahqwvwhw.jpeg?q=70",
      name: "Bluetooth Speaker",
      color: "Grey,Stereo channel",
      price: "9,990"
    }
  ];
  computerAccs = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/jvv9zm80/external-hard-drive/hdd/b/w/a/seagate-sthh2000301-original-imafgjv8buzmkqza.jpeg?q=70",
      name: "External Hard Disk",
      color: "USB 2.0,USB 3.0",
      price: "5,799"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/416/416/jzfvma80/pendrive/pendrive/y/3/f/sandisk-sdcz50-064g-i35-sdcz50-064g-b35-original-imafjgffgz9hgbzy.jpeg?q=70",
      name: "Pendrive",
      color: "Black,Red",
      price: "615"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/kb1470w0/mouse/3/6/c/logitech-m-171-original-imafsgt7u32mm9gr.jpeg?q=70",
      name: "Mouse",
      color: "Wireless,Grey",
      price: "699"
    }
  ];
  washingMachines = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/312/312/k20r8nk0/washing-machine-new/v/a/q/superb-atom-70s-whirlpool-original-imafhgkngguf8jvn.jpeg?q=70",
      name: "Whirlpool 7kg",
      spinSpeed: "1000rpm",
      price: "27,999"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/312/312/jnt7low0/washing-machine-new/z/z/g/wa62m4100hy-tl-samsung-original-imafaezy3zezejpj.jpeg?q=70",
      name: "samsung 6.5kg",
      spinSpeed: "1100rpm",
      price: "30,199"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/312/312/jnt7low0/washing-machine-new/z/z/g/wa62m4100hy-tl-samsung-original-imafaezy3zezejpj.jpeg?q=70",
      name: "samsung 6.5kg",
      spinSpeed: "1200rpm",
      price: "35,599"
    }
  ];
  refrigerators = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/416/416/k4ss2a80/refrigerator-new/n/x/b/rr19t241bse-nl-2-samsung-original-imafnmkcsmkchra8.jpeg?q=70",
      name: "Samsung 253",
      color: "Grey",
      price: "15,399"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/312/312/k79dd3k0/refrigerator-new/y/5/h/wde-205-roy-3s-twilight-fiesta-3-whirlpool-original-imafpje9shu2ngz3.jpeg?q=70",
      name: "Whirlpool 265",
      color: "Grey",
      price: "13,999"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/416/416/k4ss2a80/refrigerator-new/c/3/f/rr20t182xu8-hl-4-samsung-original-imafnmkc2djbhn3f.jpeg?q=70",
      name: "Samsung 192",
      color: "Blue",
      price: "12,999"
    }
  ];
  airConditioners = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/312/312/jxm5d3k0/air-conditioner-new/q/3/c/183-dzz-r-32-1-5-split-fixed-speed-voltas-original-imafgf6nndarub2k.jpeg?q=70",
      name: "Voltas 1.5 Ton",
      powerConsumption: "1729 W",
      price: "23,999"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/312/312/k5wse4w0/air-conditioner-new/n/n/x/ar18tv5hltu-1-5-split-dual-inverter-samsung-original-imafzhfvf2rdzztd.jpeg?q=70",
      name: "Samsung 1 Ton",
      powerConsumption: "1329 W",
      price: "28,999"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/312/312/k6mibgw0/air-conditioner-new/q/2/g/ls-q18ynya-1-5-split-dual-inverter-lg-original-imafpfgwzfshgctw.jpeg?q=70",
      name: "LG 1.5 Ton",
      powerConsumption: "1440 W",
      price: "39,590"
    }
  ];
  footWears = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/kcxpbww0/sandal/q/h/i/453-sparx-blue-grey-original-imaftyfddvfvwbfr.jpeg?q=50",
      name: "SportsSandal",
      color: "Menblue",
      price: "728"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/kbqu4cw0/shoe/z/m/i/la5202-7-layasa-yellow-original-imaftyzguwxhdnvw.jpeg?q=50",
      name: "RunningShoes",
      color: "yellow",
      price: "445"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k4d27ww0/shoe/k/v/a/airsocks-12cblkrd-6-asian-black-red-original-imafk53zyh5hejtd.jpeg?q=50",
      name: "WalkingShoes",
      color: "Red,black",
      price: "375"
    }
  ];
  bottomWears = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/k6l2vm80/track-pant/9/m/z/l-shopyholik-line-shopyholik-original-imafzpp7urgszh7h.jpeg?q=50",
      name: "Tracks",
      color: "black",
      price: "259"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/k0plpjk0/short/g/z/y/xl-tjc2-0-grey-stripped-shorts-trinity-jeans-company-original-imafkf9wt8g2yysd.jpeg?q=50",
      name: "NightShoots",
      color: "grey",
      price: "399"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/jean/n/u/3/bmw-darklevis-ben-martin-32-original-imaedpc4zcgjadsv.jpeg?q=50",
      name: "Jeans",
      color: "blue",
      price: "799"
    }
  ];
  winterWears = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/k251k7k0/jacket/f/y/j/xxl-vrobjf-bk-vrojass-original-imafhkdgsfehezng.jpeg?q=50",
      name: "Jackets",
      color: "black",
      price: "899"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/k2z1t3k0/sweater/f/7/b/4-5-years-mcbaw19sw012-miss-chief-original-imafm6wxgyhudyy4.jpeg?q=50",
      name: "Sweaters",
      color: "Red",
      price: "799"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k2rwlu80/sweatshirt/s/q/d/m-pjstjslp947507-peter-england-original-imafmftkjushuhhe.jpeg?q=50",
      name: "SweatShirts",
      color: "Blue",
      price: "459"
    }
  ];
  boyswatches = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/jo1s8sw0/watch/e/v/y/38042pp01-fastrack-original-imafah8wgbgyj8hf.jpeg?q=50",
      name: "Fastrack",
      color: "Black",
      price: "1,596"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/jtx9evk0/watch/y/j/u/nh1639sm01-titan-original-imaff69wyzdtxstu.jpeg?q=50",
      name: "Titan",
      color: "white",
      price: "2,075"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k572gsw0/watch/p/a/f/nf7987ym06-sonata-original-imafnxnujnyyukf3.jpeg?q=50",
      name: "Sonata",
      color: "gold",
      price: "1,090"
    }
  ];
  ethnicWears = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/k3t21zk0/sari/q/m/b/free-1294sr201-swaron-original-imafmtz9keafbn9r.jpeg?q=50",
      name: "Sarees",
      color: "Red",
      price: "1,596"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/kc3p30w0/kurta/m/x/7/xxl-pi07-black02-velle-original-imaftaqfvphbh86p.jpeg?q=50",
      name: "Kurtas&Kurtis",
      color: "Blue",
      price: "775"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k0tw13k0/fabric/z/z/h/cotton-dress-crally-original-imafkjgg5zf2djs8.jpeg?q=50",
      name: "DressMaterial",
      color: "Yellow",
      price: "590"
    }
  ];
  sandals = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/kbnz8nk0/sandal/b/e/f/step-life-39-kenix-world-silver-original-imafsy3zbbwwfbft.jpeg?q=50",
      name: "Flats",
      color: "Black",
      price: "396"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/jvfk58w0/sandal/j/q/7/ls-2665-41-london-steps-white-original-imafgcffwvgumz2g.jpeg?q=50",
      name: "Heels",
      color: "white",
      price: "775"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/jzn0tjk0/shoe/v/a/t/elasto-02-l-cnvymrn-5-asian-navy-original-imafjhsehz2ukgqw.jpeg?q=50",
      name: "Shoes",
      color: "Red",
      price: "890"
    }
  ];
  jwellerry = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/bangle-bracelet-armlet/q/4/c/bng-0181-2-6-jewels-galaxy-2-original-imaecsca4nv8gxcn.jpeg?q=50",
      name: "Bangles",
      color: "silver",
      price: "296"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/jpcxrww0/jewellery-set/n/b/s/m4081fl-etnico-original-imaez9phhvhvnm73.jpeg?q=50",
      name: "Necklace",
      color: "gold",
      price: "2,175"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k01b8280pkrrdj/earring/f/a/m/1086erg-vighnaharta-original-imafezn3vyjxwe8p.jpeg?q=50",
      name: "Earings",
      color: "gold",
      price: "6,990"
    }
  ];

  watches = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/watch/s/u/e/38003pp05-fastrack-original-imae9j88pwgt3agf.jpeg?q=50",
      name: "Fastrack",
      color: "Black",
      price: "1,596"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/jgmkwi80/watch/y/f/y/2593sm01-titan-original-imaf4skzpc3fxksy.jpeg?q=50",
      name: "Titan",
      color: "white",
      price: "1,975"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/jtkeg7k0/watch/h/d/j/8096ym04c-sonata-original-imafevxaxm6zj4tb.jpeg?q=50",
      name: "Sonata",
      color: "gold",
      price: "790"
    }
  ];
  clothing = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/kcdp5zk0/gown/q/7/5/na-xxl-3-4-sleeve-stitched-atoz1429-adhi-shree-fashion-na-original-imaftgn6gj3tcu4c.jpeg?q=50",
      name: "Dresses",
      color: "yellow",
      price: "799"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/kbdz5ow0/skirt/r/8/j/free-buta-maroon-skirt-fashioncutz-original-imafsqb5cufbbtgr.jpeg?q=50",
      name: "Skirts",
      color: "red",
      price: "499"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/532/638/k2gh30w0/jean/u/p/j/28-fashion-6-charming-boutique-original-imafhsynz3zzhyse.jpeg?q=50",
      name: "Jeans",
      color: "Blue",
      price: "699"
    }
  ];
  babyFootwears = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/532/638/kdqa4y80/kids-sandal/k/r/d/3c-01109-034-1-5c-magic-original-imafukjqefqpkybh.jpeg?q=50",
      name: "Sandals",
      color: "White&Blue",
      price: "199"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/532/638/k5fn3ww0/kids-shoe/z/b/9/4c-30-neobaby-original-imafnz23zw8zgzfp.jpeg?q=50",
      name: "Shoes",
      color: "Red&Black",
      price: "299"
    }
  ];
  toys = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/k186fm80/puzzle/z/z/c/50-learning-double-sided-drawing-wooden-magnetic-puzzle-for-kids-original-imafkuksyhzsyqc5.jpeg?q=70",
      name: "Puzzles",
      color: "Multicolor",
      price: "250"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/musical-toy/6/n/m/gift-world-drum-keyboard-musical-toys-with-flashing-lights-original-imaemtyjtanzwkdn.jpeg?q=70",
      name: "Musical Toys",
      color: "Multicolor",
      price: "549"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/remote-control-toy/h/s/u/baby-first-ferrari-doors-opening-car-with-remote-control-red-original-imaeedz9hwrhudyz.jpeg?q=70",
      name: "Remote cars",
      color: "Red",
      price: "989"
    }
  ];
  sofas = [
    {
      id: 1,
      pic:"https://rukminim1.flixcart.com/image/612/612/k2f1n680/sofa-sectional/b/g/t/brown-na-m00016-modern-sofa-collection-brown-original-imafhs2z8zqrkcgy.jpeg?q=70",
      name: "Leatherette",
      color: "Black",
      price: "2,899"
    },
    { 
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/k9stjm80/sofa-sectional/q/s/m/brown-polycotton-mfm0067-flipkart-perfect-homes-brown-original-imafrgdqepummtbn.jpeg?q=70",
      name: "Intex sofa cum bed",
      color: "Brown",
      price: "6,699"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/jfk00i80/inflatable-sofa/d/g/q/pvc-leatherette-2-seater-inflatable-sofa-color-black-wds-original-imaf3j6fzyhywqrq.jpeg?q=70",
      name: "KSC Air sofa",
      color: "Blue",
      price: "3,199"
    }
  ];
  beds = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/kb89ea80/bed/v/4/c/king-na-particle-board-lyukbwbswen-brn-nilkamal-wenge-brown-original-imafshuaufnsndrh.jpeg?q=70",
      name: "candence Wood",
      color: "Brown",
      price: "23,199"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/jn0msnk0/bed/3/v/h/queen-na-rosewood-sheesham-aeliniaqueen-1-home-edge-teak-original-imaf9sfdb9dhsyxz.jpeg?q=70",
      name: "Queen wood",
      color: "White",
      price: "12,199"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/k1118cw0/bed/7/q/y/single-multi-nylon-sharma-steel-industries-single-folding-bed-original-imafkzakggnnjgfy.jpeg?q=70",
      name: "Sharma steel",
      color: "green",
      price: "1,699"
    }
  ];
  clocks = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/wall-clock/x/q/r/2007blue-ajanta2007blue-analog-ajanta-original-imafkhkhfzsmyzkx.jpeg?q=70",
      name: "Ajanda analog",
      color: "grey",
      price: "299"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/k44hksw0/wall-clock/3/z/n/403-403white-analog-kadio-original-imafn3chkfwasuqe.jpeg?q=70",
      name: "Kadio analog",
      color: "white",
      price: "259"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/wall-clock/m/3/z/altra-quartz-analog-pendulum-clock-805brown-analog-altra-quartz-original-imafkhkgpxhvt9zy.jpeg?q=70",
      name: "Quartz analog",
      color: "brown",
      price: "359"
    }
  ];
  sports = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/jf751u80/bat/g/g/u/1-1-2-short-handle-virat-kohli-grand-edition-tennis-cricket-bat-original-imaf3j2zhmdnays3.jpeg?q=70",
      name: "Cricket",
      color: "white",
      price: "380"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/jyhl1u80/racquet/g/h/s/s3-small-pb1000-combo-strung-2-pb1000-95-badminton-racquet-jager-original-imafgzsrhqppazwx.jpeg?q=70",
      name: "Badminton",
      color: "red",
      price: "579"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/jmnrtzk0-1/toy-sport/a/2/j/soccer-football-training-disk-ball-football-nightstar-original-imaf9d3zhhvc4huh.jpeg?q=70",
      name: "Football",
      color: "white",
      price: "299"
    }
  ];
  books = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/0/6/6/beyond-2020-original-imafbp4hkkrg6uwj.jpeg?q=70",
      name: "India 2020",
      price: "300"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/kd94uq80/regionalbooks/f/h/j/attitude-is-everything-original-imafu6fugzzucu5s.jpeg?q=70",
      name: "Attitude is Everything",
      price: "350"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/jar3qfk0/book/3/9/7/the-secret-original-imafy9g6kscprbgm.jpeg?q=70",
      name: "Secret",
      price: "600"
    }
  ];

  constructor() {}
}
