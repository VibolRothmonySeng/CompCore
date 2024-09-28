const cpu_coolerData = [
  {
    "name": "Thermalright Peerless Assassin 120 SE",
    "price": 33.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Elite 360 RGB",
    "price": 273.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool GAMMAXX AG400 ARGB",
    "price": 29.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair iCUE H150i ELITE CAPELLIX XT",
    "price": 189.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      34.1
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MASTERLIQUID ML240L RGB V2",
    "price": 99.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      27
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-D15 chromax.black",
    "price": 119.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken 240",
    "price": 120.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Phantom Spirit 120 SE",
    "price": 35.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AK620 ZERO DARK",
    "price": 61.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III",
    "price": 116.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master Hyper 212 Black Edition",
    "price": 29.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6.5,
      26
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Elite 360 RGB",
    "price": 275.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool LS720 SE WH",
    "price": 97.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermalright Assassin X 120 Refined SE",
    "price": 17.89,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool LS720 SE",
    "price": 92.18,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Peerless Assassin 120 SE WHITE ARGB",
    "price": 36.99,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Noctua NH-D15",
    "price": 109.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair iCUE H100x RGB ELITE",
    "price": 99.99,
    "rpm": 1500,
    "noise_level": [
      7,
      28
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Phantom Spirit 120 SE ARGB",
    "price": 36.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Corsair iCUE H100i RGB ELITE",
    "price": 119.99,
    "rpm": [
      400,
      1850
    ],
    "noise_level": [
      5,
      28.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool AK400",
    "price": 33.49,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 29,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-214-XT",
    "price": 17.98,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III",
    "price": 99.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE H150i ELITE LCD XT",
    "price": 249.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      34.1
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noctua NH-U12S chromax.black",
    "price": 89.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.6,
      22.4
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken 360",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken 240 RGB",
    "price": 172.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "be quiet! Pure Rock 2 Black",
    "price": 37.9,
    "rpm": 1500,
    "noise_level": [
      19.1,
      26.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool LT720",
    "price": 106.24,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black / Gray",
    "size": 360
  },
  {
    "name": "NZXT Kraken Elite 360",
    "price": 266.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "AMD Wraith Prism",
    "price": 56,
    "rpm": 2800,
    "noise_level": 42,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 139.99,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair H105",
    "price": 869.03,
    "rpm": [
      800,
      2700
    ],
    "noise_level": 37.7,
    "color": null,
    "size": 240
  },
  {
    "name": "Thermalright Frozen Notte ARGB",
    "price": 53.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Notte ARGB",
    "price": 66.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "White",
    "size": 360
  },
  {
    "name": "NZXT Kraken 360 RGB",
    "price": 256.54,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool AK620 DIGITAL",
    "price": 73.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock Pro 5",
    "price": 79.9,
    "rpm": [
      1300,
      2000
    ],
    "noise_level": [
      8.9,
      23.3
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II Trinity SL-INF",
    "price": 169.95,
    "rpm": 2100,
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid 360L Core ARGB",
    "price": 85.67,
    "rpm": [
      350,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noctua NH-U12A chromax.black",
    "price": 129.94,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      18.8,
      22.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II Trinity SL-INF",
    "price": 164.99,
    "rpm": 2100,
    "noise_level": 29,
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Notte ARGB",
    "price": 64.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin X Refined SE ARGB",
    "price": 18.89,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Phantom Spirit EVO",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Peerless Assassin 120 SE ARGB",
    "price": 33.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Intel E97379-001",
    "price": 8.99,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": 22,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Deepcool AK400 DIGITAL",
    "price": 46.77,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9A-AM5 CHROMAX.BLACK",
    "price": 54.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Asus ROG Ryujin III ARGB",
    "price": 339.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 36.45,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool AK400",
    "price": 33.7,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 29,
    "color": "White",
    "size": null
  },
  {
    "name": "NZXT Kraken 360 RGB",
    "price": 219.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin King SE ARGB",
    "price": 20.09,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "NZXT Kraken 240 RGB",
    "price": 160.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool LS520 SE",
    "price": 74.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE H150i ELITE CAPELLIX XT",
    "price": 199.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 142.99,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "be quiet! Dark Rock Pro 4",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      12.8,
      24.3
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9i-17xx chromax.black",
    "price": 54.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II LCD SL-INF",
    "price": 280.62,
    "rpm": null,
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool AK620",
    "price": 54.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "Noctua NH-L9a-AM4",
    "price": 44.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Brown",
    "size": null
  },
  {
    "name": "Lian Li Galahad II LCD SL-INF",
    "price": 269.99,
    "rpm": null,
    "noise_level": 29,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool AK620",
    "price": 54.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Frozen Notte ARGB",
    "price": 50.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool AK400 ZERO DARK",
    "price": 39.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 29,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AK500 ZERO DARK",
    "price": 45.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      25.9,
      31.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool LT720 WH",
    "price": 99.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 36",
    "price": 36.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 RGB Black Edition",
    "price": 56.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-L12S",
    "price": 64.9,
    "rpm": [
      450,
      1850
    ],
    "noise_level": [
      16.8,
      23.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool LT520",
    "price": 84.69,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black / Gray",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 Spectrum V3",
    "price": 20.98,
    "rpm": [
      650,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG RYUJIN II",
    "price": 499,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "be quiet! Dark Rock 4",
    "price": 109.67,
    "rpm": 1400,
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair iCUE H100i ELITE CAPELLIX XT",
    "price": 144.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      34.1
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer III",
    "price": 111.99,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Deepcool ASSASSIN IV",
    "price": 84.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      22.6,
      29.3
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair iCUE LINK H150i LCD",
    "price": 224.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Lian Li Galahad II Trinity",
    "price": 119,
    "rpm": 2450,
    "noise_level": 35.4,
    "color": "White",
    "size": 360
  },
  {
    "name": "Corsair iCUE H150i ELITE LCD XT",
    "price": 259.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      31.1
    ],
    "color": "White / Gray",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer III",
    "price": 127.99,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermalright AXP90-X47",
    "price": 22.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer II 280",
    "price": 94.99,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "NZXT T120 RGB",
    "price": 49.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.2,
      27.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Pure Rock Slim 2",
    "price": 24.9,
    "rpm": null,
    "noise_level": [
      13.1,
      25.4
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC II ARGB",
    "price": 129.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noctua NH-D9L",
    "price": 54.95,
    "rpm": [
      400,
      2000
    ],
    "noise_level": [
      16.3,
      22.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML240L ARGB V2",
    "price": 59.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Assassin Spirit 120 EVO",
    "price": 22.9,
    "rpm": 2000,
    "noise_level": 28.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Phantom Spirit",
    "price": 37.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool LS720",
    "price": 139,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken Elite 240",
    "price": 159.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-U9S chromax.black",
    "price": 69.95,
    "rpm": [
      400,
      2000
    ],
    "noise_level": [
      16.3,
      22.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9A-AM5",
    "price": 44.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Brown / Silver",
    "size": null
  },
  {
    "name": "Corsair iCUE H150i RGB ELITE",
    "price": 179.99,
    "rpm": [
      400,
      1850
    ],
    "noise_level": [
      19,
      35.8
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE LINK H150i LCD",
    "price": 284.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermalright Assassin X SE",
    "price": 16.89,
    "rpm": 2200,
    "noise_level": 23.85,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Noctua NH-D15S chromax.black",
    "price": 109.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Z73",
    "price": 379,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken Elite 280 RGB",
    "price": 189.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 34.48,
    "color": "White",
    "size": 280
  },
  {
    "name": "NZXT Kraken Elite 240 RGB",
    "price": 236.76,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 (2023)",
    "price": 29.99,
    "rpm": [
      690,
      2500
    ],
    "noise_level": 32.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9x65 chromax.black",
    "price": 69.9,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-214-XT",
    "price": 17.98,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID 360R V2",
    "price": 104,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master Hyper 212 Black Edition",
    "price": 92.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      6.5,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MASTERLIQUID ML120L RGB V2",
    "price": 59.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      27
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Corsair iCUE H150i ELITE LCD",
    "price": 399,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      10,
      30.4
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin X Refined SE ARGB",
    "price": 19.29,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "Corsair iCUE LINK H150i RGB",
    "price": 204.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noctua NH-L9i chromax.black",
    "price": 54.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool MYSTIQUE",
    "price": 179.99,
    "rpm": [
      500,
      2150
    ],
    "noise_level": 36.49,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer II 360",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT T120 RGB",
    "price": 39.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.2,
      27.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer II 420",
    "price": 109.99,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Deepcool AK400 ZERO DARK PLUS",
    "price": 44.99,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Iceberg Thermal IceFLOE T95",
    "price": 9.99,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 32.3,
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING IS-55 Black",
    "price": 39.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken 280",
    "price": 144.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19.4,
      32.1
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "ARCTIC Liquid Freezer II 240",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Aqua Elite V3",
    "price": 55.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING FROZN A410 BLACK",
    "price": 29.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Peerless Assassin",
    "price": 32.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Corsair iCUE H100i ELITE CAPELLIX XT",
    "price": 179.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      34.1
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Noctua NH-U12A",
    "price": 119.95,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      18.8,
      22.6
    ],
    "color": "Brown",
    "size": null
  },
  {
    "name": "Thermalright Peerless Assassin 120 Black",
    "price": 46.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair iCUE H170i ELITE CAPELLIX",
    "price": 331.98,
    "rpm": 2000,
    "noise_level": [
      10,
      37
    ],
    "color": "Black",
    "size": 420
  },
  {
    "name": "Lian Li Galahad II Trinity Performance",
    "price": 159.99,
    "rpm": [
      2300,
      3000
    ],
    "noise_level": [
      32.1,
      39.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright AXP90-X47",
    "price": 35.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Orange / Brown",
    "size": null
  },
  {
    "name": "NZXT Kraken 120",
    "price": 79.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Aqua Elite V3",
    "price": 49.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE H150i ELITE CAPELLIX",
    "price": 286.95,
    "rpm": 2400,
    "noise_level": [
      10,
      37
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid 240L Core ARGB",
    "price": 79.99,
    "rpm": [
      350,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG Ryujin III",
    "price": 342.96,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 36.45,
    "color": "White",
    "size": 360
  },
  {
    "name": "Scythe Fuma 3",
    "price": 49.99,
    "rpm": [
      200,
      1500
    ],
    "noise_level": [
      4,
      28.6
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW X",
    "price": 54.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "NZXT Kraken Z73 RGB",
    "price": 369.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Edge",
    "price": 43.9,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 105.9,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool LE720",
    "price": 160.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master Hyper 212 EVO",
    "price": 80.26,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair iCUE H170i ELITE LCD XT",
    "price": 299.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      5,
      33.8
    ],
    "color": "Black",
    "size": 420
  },
  {
    "name": "Corsair iCUE H60x RGB ELITE",
    "price": 79.99,
    "rpm": 1500,
    "noise_level": [
      7,
      28
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool GAMMAXX AG400 ARGB",
    "price": 29.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Asus ROG RYUJIN III 360 ARGB EVA-02 EDITION",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 36.45,
    "color": "Red / Black",
    "size": 360
  },
  {
    "name": "EK EK-Nucleus AIO CR360 Lux D-RGB",
    "price": 167.95,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken X53",
    "price": 212.43,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-L9i-17xx",
    "price": 44.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Brown / Beige",
    "size": null
  },
  {
    "name": "Deepcool AK620 DIGITAL WH",
    "price": 80.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID 240R V2",
    "price": 87.43,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Assassin X 120 PLUS V2",
    "price": 21.79,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Pure Rock 2 FX",
    "price": 47.9,
    "rpm": null,
    "noise_level": [
      7.9,
      24.4
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 2 FX",
    "price": 129.9,
    "rpm": null,
    "noise_level": [
      8,
      34
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "HYTE THICC Q60",
    "price": 299.99,
    "rpm": null,
    "noise_level": [
      10,
      47.3
    ],
    "color": "White / Black",
    "size": 280
  },
  {
    "name": "Thermalright Aqua Elite V3",
    "price": 56.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool AG400",
    "price": 21.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 149.99,
    "rpm": [
      200,
      1900
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermalright Frozen Prism ARGB",
    "price": 60.59,
    "rpm": 1850,
    "noise_level": 27,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Vetroo V5",
    "price": 27.99,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 30.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-U12S redux",
    "price": 54.95,
    "rpm": [
      450,
      1700
    ],
    "noise_level": 25.1,
    "color": "Gray / Silver",
    "size": null
  },
  {
    "name": "Deepcool LS520 SE WH",
    "price": 77.98,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 Halo",
    "price": 34.4,
    "rpm": [
      650,
      2050
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Elite 280",
    "price": 169.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19.4,
      32.1
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermaltake UX100",
    "price": 11.99,
    "rpm": 1800,
    "noise_level": 26.92,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9i",
    "price": 44.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Brown",
    "size": null
  },
  {
    "name": "Asus ProArt LC 420",
    "price": 269.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 31.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Cooler Master MasterLiquid 360L Core ARGB",
    "price": 89.99,
    "rpm": [
      350,
      1750
    ],
    "noise_level": 27.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool LS720S ZERO DARK",
    "price": 99.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus TUF Gaming LC II ARGB",
    "price": 109.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 116.99,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "White",
    "size": 240
  },
  {
    "name": "Thermalright Aqua Elite V3",
    "price": 44.99,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": 240
  },
  {
    "name": "Thermalright AXP90-X47",
    "price": 22.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "White",
    "size": null
  },
  {
    "name": "StarTech FAN775E",
    "price": 14.77,
    "rpm": 2600,
    "noise_level": 22.2,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright AXP90-X47",
    "price": 20.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Thermalright Assassin Spirit 120 EVO DARK",
    "price": 20.59,
    "rpm": 1850,
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Peerless Assassin 120 White",
    "price": 44.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid 240L Core ARGB",
    "price": 79.99,
    "rpm": [
      350,
      1750
    ],
    "noise_level": 27.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "Noctua NH-U9S",
    "price": 59.95,
    "rpm": [
      400,
      2000
    ],
    "noise_level": [
      16.3,
      22.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Assassin X 90 SE ARGB",
    "price": 17.89,
    "rpm": 2200,
    "noise_level": 23.85,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "EK Nucleus AIO CR240 Dark",
    "price": 120.87,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Magic Scenic V2",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool ASSASSIN IV",
    "price": 84.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      22.6,
      29.3
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "NZXT Kraken Z63",
    "price": 229.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      38
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Deepcool LE520",
    "price": 91.11,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-L9x65",
    "price": 59.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Assassin 4S",
    "price": 79.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 29.3,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-XT",
    "price": 14.99,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Prism",
    "price": 56.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair H150",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      18,
      26.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "be quiet! Pure Rock 2",
    "price": 34.9,
    "rpm": 1500,
    "noise_level": [
      19.1,
      26.8
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Elite 280 RGB",
    "price": 189.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 34.48,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Deepcool LT520 WH",
    "price": 79.89,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 Halo",
    "price": 28.99,
    "rpm": [
      650,
      2050
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": 48.3,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "White / Black",
    "size": null
  },
  {
    "name": "Noctua NH-L9a-AM4 chromax.black",
    "price": 54.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 36 A-RGB",
    "price": 38.99,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II Trinity",
    "price": 149.99,
    "rpm": 2450,
    "noise_level": 35.4,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-47-XT",
    "price": 29.99,
    "rpm": [
      800,
      2800
    ],
    "noise_level": 32.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML360L ARGB V2",
    "price": 99.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROZN A620 BLACK",
    "price": 44.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer II 360 A-RGB",
    "price": 204.9,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black / Gray",
    "size": 360
  },
  {
    "name": "NZXT Kraken Elite 240 RGB",
    "price": 225.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 36",
    "price": 32.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID P240",
    "price": 75,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE LINK H170i LCD",
    "price": 244.99,
    "rpm": [
      400,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Corsair H100",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      18,
      26.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Water 3.0 Ultimate",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 20,
    "color": null,
    "size": 360
  },
  {
    "name": "ID-COOLING FROSTFLOW X",
    "price": 59.99,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16.8,
      32.6
    ],
    "color": "Black / Silver",
    "size": 280
  },
  {
    "name": "Noctua NH-D12L",
    "price": 89.95,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      18.8,
      22.6
    ],
    "color": "Beige / Brown",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock Elite",
    "price": 99.9,
    "rpm": [
      1500,
      2000
    ],
    "noise_level": [
      11,
      25.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 127.99,
    "rpm": [
      200,
      1900
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Frozen Prism ARGB",
    "price": 47.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "White",
    "size": 240
  },
  {
    "name": "Thermalright Assassin X Refined SE",
    "price": 18.89,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 7 X",
    "price": 22.99,
    "rpm": [
      300,
      2000
    ],
    "noise_level": 22.5,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "EK Nucleus AIO CR360 Dark",
    "price": 237.77,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE H100i ELITE LCD XT",
    "price": 219.99,
    "rpm": [
      550,
      2100
    ],
    "noise_level": [
      5,
      34.1
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Lian Li Galahad II Trinity",
    "price": 116.73,
    "rpm": 2450,
    "noise_level": 35.4,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG STRIX LC II ARGB",
    "price": 144.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE H150i RGB ELITE",
    "price": 164.99,
    "rpm": [
      400,
      1850
    ],
    "noise_level": [
      5,
      28.9
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Noctua NH-U12S",
    "price": 74.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.6,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H100i v2",
    "price": 310.82,
    "rpm": 2435,
    "noise_level": 37.7,
    "color": null,
    "size": 240
  },
  {
    "name": "Thermalright Assassin Spirit V2",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Deepcool AK400 DIGITAL WH",
    "price": 46.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "Vetroo V240",
    "price": 59.99,
    "rpm": 1800,
    "noise_level": 30.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool AK500 DIGITAL",
    "price": 58.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-D12L CHROMAX.BLACK",
    "price": 99.9,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      18.8,
      22.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 2 FX",
    "price": 89.9,
    "rpm": null,
    "noise_level": [
      8,
      32.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Phanteks GLACIER ONE 360D30",
    "price": 179.99,
    "rpm": [
      250,
      2000
    ],
    "noise_level": 30.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin Spirit 120 EVO WHITE ARGB",
    "price": 20.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "NZXT Kraken X63",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      38
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Corsair H150i PRO",
    "price": 371.6,
    "rpm": 1600,
    "noise_level": 25,
    "color": null,
    "size": 360
  },
  {
    "name": "Asus ROG Ryujin III",
    "price": 299.99,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE H115i ELITE CAPELLIX XT",
    "price": 169.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      5,
      33.8
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Lian Li Galahad II Trinity Performance",
    "price": 159.99,
    "rpm": [
      2300,
      3000
    ],
    "noise_level": [
      32.1,
      39.9
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Lian Li GALAHAD AIO 360 RGB",
    "price": 259.95,
    "rpm": [
      800,
      1900
    ],
    "noise_level": null,
    "color": "White / Silver",
    "size": 360
  },
  {
    "name": "Thermalright AXP90-X53 FULL",
    "price": 47.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Copper / Orange",
    "size": null
  },
  {
    "name": "Corsair iCUE LINK H150i RGB",
    "price": 214.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer II 240 A-RGB",
    "price": 99.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black / Gray",
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer II 420 A-RGB",
    "price": 99.99,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Deepcool LE720",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Alpine 23 CO",
    "price": 13.88,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair A115",
    "price": 99.99,
    "rpm": [
      400,
      1600
    ],
    "noise_level": [
      5,
      33.9
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 EVO V2",
    "price": 91.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 RGB Black Edition",
    "price": 99.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      8,
      30
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer II 280 A-RGB",
    "price": 102.99,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Asus ROG RYUO III 360 ARGB",
    "price": 189.99,
    "rpm": 2200,
    "noise_level": 36.45,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Prism ARGB",
    "price": 50.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Fractal Design Lumen S24 RGB V2",
    "price": 113.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TH360 V2 ARGB Sync",
    "price": 117.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid 240 Atmos",
    "price": 119.99,
    "rpm": [
      690,
      2500
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool LS520S ZERO DARK",
    "price": 79.98,
    "rpm": [
      500,
      2250
    ],
    "noise_level": [
      28.2,
      32.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "NZXT Kraken 280 RGB",
    "price": 177.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 34.48,
    "color": "White",
    "size": 280
  },
  {
    "name": "Noctua NH-D15S",
    "price": 99.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "MSI MEG CORELIQUID S360",
    "price": 169,
    "rpm": null,
    "noise_level": 22.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Alpine AM4",
    "price": 10.25,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Corsair iCUE H100i ELITE CAPELLIX",
    "price": 200,
    "rpm": 2400,
    "noise_level": [
      10,
      37
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-U14S",
    "price": 79.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 131.99,
    "rpm": [
      200,
      1900
    ],
    "noise_level": null,
    "color": "White",
    "size": 280
  },
  {
    "name": "Corsair iCUE H100i RGB ELITE",
    "price": 149.99,
    "rpm": [
      400,
      1850
    ],
    "noise_level": [
      5,
      28.9
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "ARCTIC Alpine 17 CO",
    "price": 12.99,
    "rpm": [
      250,
      2700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Prism ARGB",
    "price": 55.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool AG200",
    "price": null,
    "rpm": [
      500,
      3050
    ],
    "noise_level": 30.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MPG CORELIQUID D360",
    "price": 201.99,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Frost Commander 140 BLACK",
    "price": 39.9,
    "rpm": 1800,
    "noise_level": 30.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Assassin X Refined SE PLUS",
    "price": 22.29,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Silent Loop 2 360",
    "price": 215,
    "rpm": 2200,
    "noise_level": [
      17.7,
      39.8
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "GAMDIAS BOREAS E1",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AG500 BK ARGB",
    "price": 36.98,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 36 A-RGB",
    "price": 43.99,
    "rpm": [
      200,
      2000
    ],
    "noise_level": null,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermaltake UX200 SE ARGB",
    "price": 24.99,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 25,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool LS720 WH",
    "price": 134.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid 120L Core",
    "price": 59.99,
    "rpm": [
      650,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool AK500",
    "price": 58.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      25.9,
      31.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X",
    "price": 199.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": [
      7.9,
      37.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Alpine 17",
    "price": 11.99,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "ID-COOLING FROZN A400 BLACK",
    "price": 24.99,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright AXP120-X67",
    "price": 33.9,
    "rpm": 1800,
    "noise_level": 26.1,
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock Slim",
    "price": 59.9,
    "rpm": 1500,
    "noise_level": [
      11,
      23.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Z73 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid 240L Core",
    "price": 94.71,
    "rpm": [
      650,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE H115i RGB ELITE",
    "price": 159.99,
    "rpm": [
      400,
      1600
    ],
    "noise_level": [
      19,
      35.8
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Phanteks GLACIER ONE 360D30",
    "price": 169.99,
    "rpm": [
      250,
      2000
    ],
    "noise_level": 30.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "MSI MAG CORELIQUID C240",
    "price": 99.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Lian Li Galahad II Trinity",
    "price": 136.53,
    "rpm": 2450,
    "noise_level": 35.4,
    "color": "White",
    "size": 240
  },
  {
    "name": "Noctua NH-P1",
    "price": 109.9,
    "rpm": null,
    "noise_level": 0,
    "color": "Silver",
    "size": null
  },
  {
    "name": "Asus ROG RYUO III 360 ARGB WHITE EDITION",
    "price": 186.78,
    "rpm": 2200,
    "noise_level": 36.45,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool GAMMAXX AG620 ARGB",
    "price": 47.99,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II LCD",
    "price": 229.9,
    "rpm": [
      300,
      2450
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "MSI MAG CORELIQUID E360",
    "price": 135,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool LS520",
    "price": 81.98,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DASHFLOW 240 BASIC",
    "price": 64.98,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML360 Illusion",
    "price": 145.61,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "Black / Silver",
    "size": 360
  },
  {
    "name": "NZXT Kraken X73 RGB",
    "price": 389.95,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": 47.07,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "be quiet! Pure Rock LP",
    "price": null,
    "rpm": 2500,
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120 Mini WHITE ARGB V3",
    "price": 18.98,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "Thermalright AXP90-X36",
    "price": 22.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Vetroo V5",
    "price": 27.99,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 30.8,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Burst Assassin ARGB",
    "price": 22.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA824 Stealth",
    "price": 99.99,
    "rpm": null,
    "noise_level": [
      0,
      24.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li GALAHAD AIO 360 RGB UNI FAN SL120 EDITION",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "Black / Silver",
    "size": 360
  },
  {
    "name": "Thermalright Peerless Assassin 120 White ARGB",
    "price": 39.29,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID E360 WHITE",
    "price": 139,
    "rpm": null,
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "MSI MAG CORELIQUID C360",
    "price": 143,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE H150i ELITE CAPELLIX",
    "price": 349.78,
    "rpm": 2400,
    "noise_level": [
      10,
      37
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Scythe Mugen 5 Rev. B",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Z53",
    "price": 229.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "EK AIO Basic 360",
    "price": 113.82,
    "rpm": [
      550,
      2200
    ],
    "noise_level": 33.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master Hyper H412R",
    "price": 40.99,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XTS BLACK",
    "price": 29.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X II 360 ICE",
    "price": 289.99,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      12,
      37.5
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer III A-RGB",
    "price": 136.25,
    "rpm": [
      200,
      1900
    ],
    "noise_level": null,
    "color": "White",
    "size": 420
  },
  {
    "name": "Zalman CNPS10X Performa",
    "price": 19.99,
    "rpm": [
      700,
      1500
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Vetroo V360",
    "price": 84.59,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Alpine 23",
    "price": 11.99,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "White / Black",
    "size": null
  },
  {
    "name": "IceGiant ProSiphon Elite",
    "price": 169.99,
    "rpm": [
      300,
      2300
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID M360",
    "price": 89,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken 280 RGB",
    "price": 159.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 34.48,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Assassin X Refined SE ARGB V2",
    "price": 19.89,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "NZXT T120",
    "price": 55.49,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Prism",
    "price": 46.9,
    "rpm": 1850,
    "noise_level": 27,
    "color": "Black",
    "size": 240
  },
  {
    "name": "be quiet! Pure Loop 240",
    "price": 99.9,
    "rpm": null,
    "noise_level": [
      19,
      39.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake UX200 SE ARGB",
    "price": 34.98,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 25,
    "color": "White",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": 57.55,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "White / Gray",
    "size": null
  },
  {
    "name": "ID-COOLING DASHFLOW BASIC",
    "price": 79.98,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Vetroo V240",
    "price": 59.99,
    "rpm": 1800,
    "noise_level": 30.8,
    "color": "White / Gray",
    "size": 240
  },
  {
    "name": "Thermalright Aqua Elite V3",
    "price": 39.9,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "NZXT Kraken X73",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair H100i RGB PLATINUM",
    "price": null,
    "rpm": 2400,
    "noise_level": 37,
    "color": "Black / Silver",
    "size": 240
  },
  {
    "name": "Corsair iCUE LINK H100i RGB",
    "price": 149.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": 45.99,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "Red / Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid 360 Atmos",
    "price": 134.99,
    "rpm": [
      690,
      2500
    ],
    "noise_level": 27.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "be quiet! Shadow Rock 3",
    "price": 47.9,
    "rpm": 1600,
    "noise_level": [
      11.5,
      24.4
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad II Trinity SL-INF",
    "price": 124.99,
    "rpm": 2100,
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ENDORFY Fera 5",
    "price": 49.36,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC II ARGB",
    "price": 114.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-D9L chromax.black",
    "price": 74.9,
    "rpm": [
      400,
      2000
    ],
    "noise_level": [
      16.3,
      22.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AK500S DIGITAL",
    "price": 51.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool MYSTIQUE",
    "price": 149.99,
    "rpm": [
      500,
      2150
    ],
    "noise_level": 36.49,
    "color": "Black",
    "size": 240
  },
  {
    "name": "EK AIO Elite 360 D-RGB",
    "price": 106.99,
    "rpm": [
      550,
      2200
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "EK EK-Nucleus AIO CR360 Lux D-RGB",
    "price": 163.99,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "White",
    "size": 360
  },
  {
    "name": "Corsair iCUE H170i ELITE CAPELLIX XT",
    "price": 204.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      5,
      33.8
    ],
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermalright AXP120-X67",
    "price": 29.9,
    "rpm": 1800,
    "noise_level": 26.1,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Assassin King SE ARGB",
    "price": 19.29,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Silver / Gray",
    "size": null
  },
  {
    "name": "Thermalright Frozen Edge",
    "price": 62.9,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake Gravity i2",
    "price": 11.99,
    "rpm": 1800,
    "noise_level": 21.3,
    "color": null,
    "size": null
  },
  {
    "name": "Lian Li Galahad II Trinity SL-INF",
    "price": 129.99,
    "rpm": 2100,
    "noise_level": 29,
    "color": "White",
    "size": 240
  },
  {
    "name": "EK EK-Nucleus AIO CR240 Lux D-RGB",
    "price": 119.99,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID M240",
    "price": 69,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair iCUE H150i RGB PRO XT",
    "price": 203.1,
    "rpm": 2400,
    "noise_level": 37,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "Corsair iCUE H100i RGB PRO XT",
    "price": 229.99,
    "rpm": 2400,
    "noise_level": 37,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-L12 Ghost S1",
    "price": 64.9,
    "rpm": [
      300,
      1600
    ],
    "noise_level": [
      13.1,
      17.6
    ],
    "color": "Silver / Beige",
    "size": null
  },
  {
    "name": "Lian Li Galahad II LCD",
    "price": 229.99,
    "rpm": [
      300,
      2450
    ],
    "noise_level": 30,
    "color": "White",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid ML240L ARGB V2",
    "price": 99.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Asus TUF GAMING LC 240 ARGB",
    "price": 86.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TH360 V2 ARGB Sync",
    "price": 129.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": 360
  },
  {
    "name": "MSI MAG CORELIQUID P360",
    "price": 168.17,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-67-XT",
    "price": 34.99,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake Contact 9 SE",
    "price": 15.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 24.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC II 280 ARGB",
    "price": 89.99,
    "rpm": [
      700,
      2100
    ],
    "noise_level": 35.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "EK AIO Basic 240",
    "price": 107.62,
    "rpm": [
      550,
      2200
    ],
    "noise_level": 33.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright AXP90-X53",
    "price": 23.9,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Deepcool Assassin 4S",
    "price": 79.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 29.3,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING PINKFLOW",
    "price": 99.99,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "White / Pink",
    "size": 240
  },
  {
    "name": "ID-COOLING DASHFLOW BASIC",
    "price": 79.98,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool LD360",
    "price": 119.99,
    "rpm": [
      600,
      2400
    ],
    "noise_level": 38.71,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool LE520",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 240
  },
  {
    "name": "Corsair iCUE LINK H100i RGB",
    "price": 159.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "White",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID 240R V2",
    "price": 94,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "be quiet! Pure Loop 2",
    "price": 104.9,
    "rpm": null,
    "noise_level": [
      17.2,
      36.8
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken M22",
    "price": 79.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax Liqmax III 360 ARGB",
    "price": 89.99,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Silver Soul 135",
    "price": 34.9,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn BLACK RIDGE",
    "price": 91.42,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      14,
      37.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair H100i RGB PLATINUM SE",
    "price": null,
    "rpm": 2200,
    "noise_level": 36,
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool AG620",
    "price": 39.99,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AK500",
    "price": 49.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120 MINI V2",
    "price": 19.89,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Corsair H60 (2018)",
    "price": null,
    "rpm": 1700,
    "noise_level": 28.3,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Frost Commander 140",
    "price": 39.79,
    "rpm": 1800,
    "noise_level": 30.2,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-225-XT",
    "price": 34.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TH240 V2 ARGB Sync",
    "price": 84.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "NZXT Kraken X73 RGB",
    "price": 279.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "Iceberg Thermal IceFLOE OASIS 360",
    "price": null,
    "rpm": [
      200,
      2200
    ],
    "noise_level": 28.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus ROG RYUJIN II ARGB",
    "price": 339.7,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool AK500 DIGITAL WH",
    "price": 64.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 622 Halo",
    "price": 64.98,
    "rpm": [
      650,
      2050
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Phanteks Glacier One 360MPH",
    "price": 330,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 36 CO",
    "price": 35.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright AXP120-X67",
    "price": 43.9,
    "rpm": 1800,
    "noise_level": 26.1,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Deepcool AG300",
    "price": null,
    "rpm": [
      500,
      3050
    ],
    "noise_level": 30.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Gigabyte AORUS WATERFORCE 360",
    "price": 169.99,
    "rpm": [
      950,
      2150
    ],
    "noise_level": [
      16.9,
      31
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken X53 RGB",
    "price": 250,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING IS-55 ARGB",
    "price": 39.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master I30",
    "price": 13.3,
    "rpm": 2600,
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Corsair H100x",
    "price": 299.99,
    "rpm": 1700,
    "noise_level": 37,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X II 360",
    "price": 279.99,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      12,
      37.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Burst Assassin",
    "price": 21.9,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Gray / Black",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC II",
    "price": 129.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair iCUE LINK H100i LCD",
    "price": 199.99,
    "rpm": [
      480,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DASHFLOW 240 BASIC",
    "price": 59.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 7 X CO",
    "price": 26.99,
    "rpm": [
      300,
      2000
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Corsair iCUE LINK H170i RGB",
    "price": 199.99,
    "rpm": [
      400,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Inter-Tech ALSEYE W90",
    "price": 29.99,
    "rpm": 3000,
    "noise_level": 36.7,
    "color": "White / Black",
    "size": null
  },
  {
    "name": "GAMDIAS BOREAS E1",
    "price": 29.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TH360 V2 Ultra ARGB Sync",
    "price": 159.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Scythe Mugen 6 Dual Fan",
    "price": 54.99,
    "rpm": [
      300,
      2000
    ],
    "noise_level": [
      3,
      26.88
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Assassin X 120 V2",
    "price": 18.19,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo CR-1400 EVO Color White",
    "price": 24.88,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      22.3,
      33.8
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master I70C",
    "price": 24.98,
    "rpm": [
      650,
      1800
    ],
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Zalman CNPS9X Performa",
    "price": 19.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Lite 240",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ID-COOLING AURAFLOW X",
    "price": 59.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML360L ARGB V2",
    "price": 119.99,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "EK AIO 240 D-RGB",
    "price": 125.99,
    "rpm": [
      450,
      2600
    ],
    "noise_level": 36.4,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML280 Mirror",
    "price": 150.99,
    "rpm": [
      650,
      1400
    ],
    "noise_level": [
      10,
      27
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Corsair H115i RGB PLATINUM",
    "price": 269.99,
    "rpm": 2000,
    "noise_level": 37,
    "color": "Black / Silver",
    "size": 280
  },
  {
    "name": "Noctua NH-U9DXi4",
    "price": 64.95,
    "rpm": [
      300,
      1600
    ],
    "noise_level": [
      13.1,
      17.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT T120",
    "price": 39.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.9,
      30.6
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool LS520 WH",
    "price": 103.34,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 240
  },
  {
    "name": "Lian Li Galahad II LCD",
    "price": 199.99,
    "rpm": [
      300,
      1550
    ],
    "noise_level": 26.7,
    "color": "White",
    "size": 280
  },
  {
    "name": "Phanteks GLACIER ONE 420D30",
    "price": 179.99,
    "rpm": [
      250,
      1800
    ],
    "noise_level": 29.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermaltake TH420 V2 Ultra ARGB Sync",
    "price": 149.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34.7,
    "color": "White",
    "size": 420
  },
  {
    "name": "Thermalright SI-100 WHITE ARGB",
    "price": 26.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "White",
    "size": null
  },
  {
    "name": "Noctua NH-L9x65 SE-AM4",
    "price": 59.95,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.8,
      23.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Silver Soul 110",
    "price": 28.9,
    "rpm": 2500,
    "noise_level": 23,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Silver Soul 110",
    "price": 35.9,
    "rpm": 2500,
    "noise_level": 23,
    "color": "Black",
    "size": null
  },
  {
    "name": "Fractal Design Lumen S36 RGB V2",
    "price": 134.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright SI-100",
    "price": 26.9,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Blue",
    "size": null
  },
  {
    "name": "be quiet! Shadow Rock LP",
    "price": 49.9,
    "rpm": 1500,
    "noise_level": [
      14.8,
      25.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool AG620 WH ARGB",
    "price": 57.23,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 620S",
    "price": 49.99,
    "rpm": [
      350,
      1750
    ],
    "noise_level": 27.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID 360R V2",
    "price": 139.18,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Lian Li GALAHAD AIO 240 RGB UNI FAN SL120 EDITION",
    "price": 225.01,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "White / Silver",
    "size": 240
  },
  {
    "name": "EK AIO 280 D-RGB",
    "price": 113.59,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 36.4,
    "color": "Black / Translucent White",
    "size": 280
  },
  {
    "name": "Deepcool AG400 PLUS",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML240 Illusion",
    "price": 127.05,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML240L V2 RGB",
    "price": 129.9,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Alphacool Eisbaer Pro Aurora",
    "price": 227.91,
    "rpm": null,
    "noise_level": 31.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "be quiet! Pure Loop 2 FX",
    "price": 109.9,
    "rpm": null,
    "noise_level": [
      10.8,
      32.8
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Cooler Master MasterLiquid PL360 FLUX",
    "price": 179.99,
    "rpm": null,
    "noise_level": 32,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH360 V2 Ultra ARGB Sync",
    "price": 187.13,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": 360
  },
  {
    "name": "MSI MPG CORELIQUID K360",
    "price": 390,
    "rpm": null,
    "noise_level": 39.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair H100i PRO RGB",
    "price": null,
    "rpm": 2400,
    "noise_level": 37,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer II 360 Rev. 2",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Scythe FUMA 2",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      2.7,
      24.9
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Noctua NH-D14",
    "price": null,
    "rpm": [
      900,
      1200
    ],
    "noise_level": [
      12.6,
      19.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frozen Edge",
    "price": 53.9,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": 240
  },
  {
    "name": "ENDORFY Spartan 5 MAX ARGB",
    "price": 42.55,
    "rpm": [
      250,
      1500
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC II",
    "price": 89.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "be quiet! Dark Rock TF 2",
    "price": 89.9,
    "rpm": 1400,
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-U9B SE2",
    "price": 119.99,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      7.9,
      17.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-C14S",
    "price": 79.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair iCUE H115i ELITE CAPELLIX",
    "price": 200,
    "rpm": 2000,
    "noise_level": [
      10,
      36
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Phanteks Glacier One 360 T30 Gen2",
    "price": 390.67,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      11.1,
      39.7
    ],
    "color": "Black / Gray",
    "size": 360
  },
  {
    "name": "Noctua NH-U14S TR4-SP3",
    "price": 99.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Assassin Spirit V2 Plus",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Deepcool LE500",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Lian Li Galahad II LCD",
    "price": 209.99,
    "rpm": [
      300,
      1550
    ],
    "noise_level": 26.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Cooler Master Hyper 212 EVO V2",
    "price": 62.74,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Vetroo V360",
    "price": 84.59,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Vetroo V5",
    "price": 27.99,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 30.8,
    "color": "Pink",
    "size": null
  },
  {
    "name": "NZXT Kraken X62",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      38
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "APNX AP1-V",
    "price": 49.9,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      32.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Asus ROG RYUO III 240 ARGB",
    "price": 130.51,
    "rpm": 2200,
    "noise_level": 36.45,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG Ryujin III",
    "price": 174.99,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Lian Li GALAHAD AIO 360 RGB",
    "price": 209,
    "rpm": [
      800,
      1900
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": 360
  },
  {
    "name": "be quiet! Pure Loop 280",
    "price": 99.9,
    "rpm": null,
    "noise_level": [
      22.5,
      38.1
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Corsair iCUE H100i ELITE CAPELLIX",
    "price": 189.99,
    "rpm": 2400,
    "noise_level": [
      10,
      37
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "EVGA CLC 280",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      16,
      39.5
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Fractal Design Lumen S36 V2",
    "price": 173.57,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin King SE",
    "price": 19.89,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "Silver / Gray",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Lite 120",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool AG400 ARGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 LED Turbo ARGB",
    "price": 62.49,
    "rpm": [
      650,
      1800
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SL360",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "White",
    "size": 360
  },
  {
    "name": "Cooler Master Hyper 622 Halo",
    "price": 64.98,
    "rpm": [
      650,
      2050
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "ENDORFY Fera 5 Dual Fan",
    "price": 54.16,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "NZXT Kraken Z53 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "EVGA CLCx 360",
    "price": 149.99,
    "rpm": null,
    "noise_level": 35,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-55 ARGB",
    "price": 34.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.2,
    "color": "White",
    "size": null
  },
  {
    "name": "Phanteks GLACIER ONE 420D30",
    "price": 184.99,
    "rpm": [
      250,
      1800
    ],
    "noise_level": 29.5,
    "color": "White",
    "size": 420
  },
  {
    "name": "Cooler Master Hyper H410R RGB",
    "price": 43.64,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      6,
      29
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT Kraken X63 RGB",
    "price": 278.83,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 280
  },
  {
    "name": "Razer Hanbo Chroma",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "be quiet! Silent Loop 2 240",
    "price": 180.08,
    "rpm": 2200,
    "noise_level": [
      16.8,
      38.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FROZN A410 ARGB",
    "price": 34.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken Z63 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 280
  },
  {
    "name": "Deepcool AS500 Plus",
    "price": 44.99,
    "rpm": [
      500,
      1200
    ],
    "noise_level": 31.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX GT A-RGB",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 27.8,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool CASTLE 360EX A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROZN A620 ARGB",
    "price": 59.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING AURAFLOW X",
    "price": 59.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Scythe Fuma 2 Rev.B",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      2.58,
      23.8
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Pure Rock Slim",
    "price": 33.99,
    "rpm": 2000,
    "noise_level": [
      13.1,
      25.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "APNX AP1-V",
    "price": 49.9,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      32.8
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Corsair iCUE H170i ELITE LCD",
    "price": 289.99,
    "rpm": [
      400,
      1600
    ],
    "noise_level": [
      10,
      31.8
    ],
    "color": "Black",
    "size": 420
  },
  {
    "name": "NZXT Kraken Z63 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Corsair H60",
    "price": null,
    "rpm": 2000,
    "noise_level": 30.85,
    "color": null,
    "size": 120
  },
  {
    "name": "CRYORIG H7",
    "price": 159.88,
    "rpm": [
      330,
      1600
    ],
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H55",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      18,
      26.5
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermaltake Gravity A2",
    "price": 20.3,
    "rpm": [
      1200,
      3500
    ],
    "noise_level": 33.5,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Corsair iCUE LINK H115i RGB",
    "price": 169.99,
    "rpm": [
      400,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Intel BXTS15A",
    "price": 44.62,
    "rpm": [
      1000,
      3850
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW X 240 LITE",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Gravity i3",
    "price": 17.79,
    "rpm": [
      1200,
      3500
    ],
    "noise_level": 36.5,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "NZXT Kraken X53 RGB",
    "price": 174.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Lian Li Galahad AIO240 (2022)",
    "price": 171.68,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "Black / Silver",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-224-XTS",
    "price": 29.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "White",
    "size": null
  },
  {
    "name": "Montech METAL DT24 PREMIUM",
    "price": 69,
    "rpm": [
      800,
      1950
    ],
    "noise_level": 26,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Zalman CNPS9X Performa ARGB",
    "price": 24.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Corsair H100i",
    "price": null,
    "rpm": 2700,
    "noise_level": 37.68,
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Alpine 12 LP",
    "price": 12.95,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Thermalright Aqua Elite ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 28.2,
    "color": null,
    "size": 360
  },
  {
    "name": "Thermalright Peerless Assassin MINI",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noctua NH-L12Sx77",
    "price": 74.9,
    "rpm": [
      450,
      1850
    ],
    "noise_level": [
      16.8,
      23.9
    ],
    "color": "Silver / Beige",
    "size": null
  },
  {
    "name": "Deepcool LE500 Marrs",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TH420 V2 Ultra ARGB Sync",
    "price": 168.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34.7,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Deepcool AG500 WH ARGB",
    "price": 36.98,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Frost Commander 140",
    "price": 35.9,
    "rpm": 1800,
    "noise_level": 30.2,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Thermaltake TH120 V2 ARGB Sync",
    "price": 79.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 120
  },
  {
    "name": "EK EK-Nucleus AIO CR240 Lux D-RGB",
    "price": 127.99,
    "rpm": [
      550,
      2300
    ],
    "noise_level": 36,
    "color": "White",
    "size": 240
  },
  {
    "name": "be quiet! Shadow Rock 3",
    "price": 47.9,
    "rpm": null,
    "noise_level": [
      11.5,
      24.4
    ],
    "color": "White / Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML240 Illusion",
    "price": 129.11,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X",
    "price": 183.81,
    "rpm": [
      800,
      2500
    ],
    "noise_level": [
      7.9,
      37.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DK-03",
    "price": null,
    "rpm": 1600,
    "noise_level": 26.4,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MASTERLIQUID PL360 FLUX",
    "price": null,
    "rpm": null,
    "noise_level": 32,
    "color": "White",
    "size": 360
  },
  {
    "name": "Corsair iCUE H115i RGB Pro XT",
    "price": null,
    "rpm": 2200,
    "noise_level": 36,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Cooler Master MasterLiquid PL240 FLUX",
    "price": 126.74,
    "rpm": null,
    "noise_level": 32,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra",
    "price": 216.19,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool AK500S DIGITAL",
    "price": 54.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "Jonsbo CR-1000 EVO ARGB Black",
    "price": 25.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA612 Stealth ARGB",
    "price": 71.97,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper H411R",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ARCTIC Freezer i35 RGB",
    "price": 33.26,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Asus ROG Ryujin III",
    "price": 204.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 36.45,
    "color": "White",
    "size": 240
  },
  {
    "name": "Cooler Master A71C",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": 24.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 Halo SF6 Ryu",
    "price": 45.24,
    "rpm": [
      650,
      2050
    ],
    "noise_level": 27,
    "color": "White / Orange",
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic Scenic V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 31.4,
    "color": "White",
    "size": 280
  },
  {
    "name": "Corsair A500",
    "price": 89.99,
    "rpm": 2400,
    "noise_level": 36,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock Pro TR4",
    "price": 132.19,
    "rpm": [
      1200,
      1500
    ],
    "noise_level": [
      12.8,
      24.3
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TH280 V2 ARGB Sync",
    "price": 99.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "be quiet! Silent Loop 2 280",
    "price": 166.59,
    "rpm": 1600,
    "noise_level": [
      16.5,
      36.1
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Noctua NH-U9 TR4-SP3",
    "price": 89.95,
    "rpm": [
      400,
      2000
    ],
    "noise_level": [
      16.3,
      22.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TH240 V2 ARGB Sync",
    "price": 89.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": 240
  },
  {
    "name": "be quiet! Pure Loop 360",
    "price": 129.99,
    "rpm": null,
    "noise_level": [
      19.8,
      40.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Antec VORTEX 360",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 31.24,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid ML360R RGB",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      34
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool CASTLE 240EX A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID E240",
    "price": 99,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master i50",
    "price": 16.98,
    "rpm": 2000,
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "NZXT Kraken Z53 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX GTE V2",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 27.8,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID E240 WHITE",
    "price": 99,
    "rpm": null,
    "noise_level": null,
    "color": "White",
    "size": 240
  },
  {
    "name": "Corsair iCUE H100i ELITE LCD",
    "price": 217.29,
    "rpm": [
      450,
      2000
    ],
    "noise_level": [
      10,
      30.4
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noctua NH-U12S SE-AM4",
    "price": 74.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.6,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Antec A400i",
    "price": 28.74,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      20,
      36
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water 280",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 36.4,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Frost Spirit 140 V3 BLACK",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken X52",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Deepcool THETA 20 PWM",
    "price": null,
    "rpm": [
      900,
      2400
    ],
    "noise_level": [
      17.8,
      32.5
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Lian Li GALAHAD AIO 240 RGB UNI FAN SL120 EDITION",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "Black / Silver",
    "size": 240
  },
  {
    "name": "ID-COOLING FROZN A620 ARGB WHITE",
    "price": 59.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "White",
    "size": null
  },
  {
    "name": "Asus TUF Gaming LC II ARGB",
    "price": 89.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Gigabyte AORUS LIQUID COOLER",
    "price": null,
    "rpm": 2500,
    "noise_level": [
      18,
      39.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus ROG RYUO III 240 ARGB WHITE EDITION",
    "price": 134.99,
    "rpm": 2200,
    "noise_level": 36.45,
    "color": "White",
    "size": 240
  },
  {
    "name": "Asus ROG STRIX LC II ARGB",
    "price": 149.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FROZN A410 ARGB WHITE",
    "price": 34.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "White",
    "size": null
  },
  {
    "name": "ARCTIC Freezer A35 A-RGB",
    "price": 46.99,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 2",
    "price": 89.9,
    "rpm": null,
    "noise_level": [
      15.4,
      34.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-914-XT ARGB",
    "price": 29.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      25.8
    ],
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "Enermax LIQMAX III 360 ARGB",
    "price": 89.99,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "Corsair H110i",
    "price": null,
    "rpm": 2100,
    "noise_level": 43,
    "color": null,
    "size": 280
  },
  {
    "name": "Lian Li GALAHAD AIO 360 RGB UNI FAN SL120 EDITION",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "White / Silver",
    "size": 360
  },
  {
    "name": "Gelid Solutions Liquid 120",
    "price": 64.98,
    "rpm": [
      750,
      1800
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool LD240",
    "price": 99.99,
    "rpm": [
      600,
      2400
    ],
    "noise_level": 38.71,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Scythe Mugen 5 Black Edition Rev.C",
    "price": 50.99,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      28.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 2",
    "price": 99.9,
    "rpm": null,
    "noise_level": [
      15.4,
      33.8
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Fractal Design Lumen S24 V2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Fractal Design Celsius S24",
    "price": 126.4,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": null,
    "size": 240
  },
  {
    "name": "NZXT Kraken X63 RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      22,
      33
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "ID-COOLING FROZN A610 BLACK",
    "price": 39.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX L240 V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "ENDORFY Fortis 5",
    "price": 67.14,
    "rpm": [
      250,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Gelid Solutions BlackFrore",
    "price": 23.99,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 20,
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock 3",
    "price": null,
    "rpm": [
      400,
      1400
    ],
    "noise_level": [
      8.4,
      21.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Pure Rock",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      19.1,
      26.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TH120 V2 ARGB Sync",
    "price": 79.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": 120
  },
  {
    "name": "Thermalright Assassin King 90",
    "price": 23.9,
    "rpm": 2500,
    "noise_level": 27.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra",
    "price": 249.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 33.2,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Cooler Master MasterLiquid ML240R RGB",
    "price": 149.1,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Alpenf\u00f6hn Panorama 2",
    "price": null,
    "rpm": [
      500,
      3000
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master X Dream I117",
    "price": null,
    "rpm": 1800,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool AS500 PLUS WH",
    "price": 49.99,
    "rpm": [
      500,
      1200
    ],
    "noise_level": 31.5,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "NZXT Kraken X72",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROSTFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Jonsbo CR-1400",
    "price": null,
    "rpm": [
      900,
      2300
    ],
    "noise_level": [
      20,
      30.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Gigabyte AORUS WATERFORCE 240",
    "price": null,
    "rpm": [
      950,
      2150
    ],
    "noise_level": [
      16.9,
      31
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TH120 ARGB Sync",
    "price": 59.74,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax AQUAFUSION ADV 360",
    "price": 99.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      15,
      32.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus ROG Ryujin III ARGB",
    "price": 234.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 36.45,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool AN600",
    "price": 55.98,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      20.4,
      24.2
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SL240",
    "price": 99.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "White",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer i35 A-RGB",
    "price": 44.77,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool UD511 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 400 V2",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": null,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "Gelid Solutions Tranquillo Rev. 5",
    "price": 19.98,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 26.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AG400 DIGITAL BK ARGB",
    "price": null,
    "rpm": [
      500,
      2100
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Iceberg Thermal IceSLEET G3",
    "price": 17.98,
    "rpm": [
      600,
      1200
    ],
    "noise_level": 20.5,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "Alphacool Core Ocean T38",
    "price": null,
    "rpm": null,
    "noise_level": [
      0,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Enermax LIQMAX III 240 ARGB",
    "price": 69.98,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML360 Sub-Zero EVO",
    "price": null,
    "rpm": null,
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Fractal Design Lumen S28 RGB V2",
    "price": 197.95,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      10,
      35.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Noctua NH-D15 SE-AM4",
    "price": 109.95,
    "rpm": [
      1200,
      1500
    ],
    "noise_level": [
      19.2,
      24.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Asus ROG RYUJIN 360",
    "price": 267.05,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool ASSASSIN III",
    "price": 79.98,
    "rpm": [
      400,
      1400
    ],
    "noise_level": 34.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AK400",
    "price": null,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 29,
    "color": "Pink / White",
    "size": null
  },
  {
    "name": "MSI MEG CORELIQUID S280",
    "price": 165,
    "rpm": null,
    "noise_level": 24.9,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Razer Hanbo Chroma",
    "price": 179.99,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Vision 360",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "White",
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid ML240L RGB",
    "price": 118.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Jonsbo CR-1000",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      20.55,
      37.2
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ENDORFY Spartan 5 MAX",
    "price": 38.45,
    "rpm": [
      250,
      1500
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax AQUAFUSION ADV",
    "price": 72.86,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      15,
      32.6
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "ENDORFY Spartan 5 ARGB",
    "price": 37.47,
    "rpm": [
      250,
      1500
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Vetroo U6 Pro",
    "price": 34.99,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18.1,
      30.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Antec A30",
    "price": null,
    "rpm": 1750,
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H80i v2",
    "price": null,
    "rpm": 2435,
    "noise_level": 37.7,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master MasterAir MA612 Stealth",
    "price": 53.12,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Castle 240 RGB V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "TEAMGROUP SIREN GD360E",
    "price": 110.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.3,
      35.6
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING ZOOMFLOW 360 XT",
    "price": 99.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "CRYORIG M9a",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 26.4,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Mugen 5 PCGH Edition",
    "price": null,
    "rpm": [
      300,
      800
    ],
    "noise_level": [
      4,
      14.5
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Edge",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": 360
  },
  {
    "name": "Deepcool R-AN600-BKNNMN-G",
    "price": 51.14,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      20,
      24.4
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA624 Stealth",
    "price": 62,
    "rpm": [
      650,
      1400
    ],
    "noise_level": [
      10,
      27
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Mugen 6",
    "price": 46.99,
    "rpm": [
      300,
      2000
    ],
    "noise_level": [
      3,
      26.88
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone IceMyst 360",
    "price": 145.72,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      12.1,
      33.1
    ],
    "color": "Silver / Black",
    "size": 360
  },
  {
    "name": "Lian Li Galahad AIO360 (2022)",
    "price": 249.95,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "White / Silver",
    "size": 360
  },
  {
    "name": "ENDORFY Fera 5 ARGB",
    "price": 58.03,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ENDORFY Fortis 5 ARGB",
    "price": 76.03,
    "rpm": [
      250,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "KOLINK Umbra EX180",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 28.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING PINKFLOW 240 Diamond",
    "price": 99.99,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Pink",
    "size": 240
  },
  {
    "name": "Alphacool Eisbaer Pro Aurora",
    "price": 284.22,
    "rpm": null,
    "noise_level": 31.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Noctua NH-U12DXi4",
    "price": 74.95,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.6,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TOUGHAIR 310",
    "price": 39.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 23.6,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "Lian Li GALAHAD AIO 240 RGB",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": null,
    "color": "White / Silver",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Vision 360",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus ROG STRIX LC 360 RGB White Edition",
    "price": 249.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermaltake TH280 V2 ARGB Sync",
    "price": 109.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "White",
    "size": 280
  },
  {
    "name": "Cooler Master Wraith Ripper",
    "price": 269,
    "rpm": null,
    "noise_level": [
      0,
      38
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Alphacool Core Ocean T38",
    "price": 100.19,
    "rpm": null,
    "noise_level": [
      0,
      36
    ],
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermaltake TH420 V2 ARGB Sync",
    "price": 135.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Gigabyte AORUS ATC800",
    "price": 215,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      18,
      31
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHAIR 510",
    "price": 46.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 23.6,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "KOLINK Umbra EX180 Black Edition",
    "price": 42.48,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 28.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Big Shuriken 3 Rev.B",
    "price": null,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      2.58,
      27.8
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Zalman CNPS9X Performa ARGB",
    "price": 19.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 28,
    "color": "White",
    "size": null
  },
  {
    "name": "EK AIO 360 D-RGB",
    "price": null,
    "rpm": [
      450,
      2600
    ],
    "noise_level": 36.4,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Silver Soul 135",
    "price": 32.9,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Silver",
    "size": null
  },
  {
    "name": "ARCTIC Freezer i13 X",
    "price": 19.99,
    "rpm": [
      300,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 LED",
    "price": 47.8,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      9,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40F-TB",
    "price": 28.99,
    "rpm": [
      900,
      1800
    ],
    "noise_level": [
      11,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair iCUE H60i RGB PRO XT",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      10,
      37
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Corsair H115i PRO",
    "price": 249.99,
    "rpm": 1200,
    "noise_level": 20.4,
    "color": null,
    "size": 280
  },
  {
    "name": "ID-COOLING SE-214-XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      16,
      26.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper T20",
    "price": 30.74,
    "rpm": 2000,
    "noise_level": 30,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TH360 ARGB Sync",
    "price": 103.99,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ENDORFY Navis F360 ARGB",
    "price": 164.11,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROZN A720 BLACK",
    "price": 69.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 33.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TH360 ARGB Sync",
    "price": 101.99,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer 360",
    "price": null,
    "rpm": [
      500,
      1350
    ],
    "noise_level": 22.5,
    "color": null,
    "size": 360
  },
  {
    "name": "Geometric Future Eskimo Junior 36",
    "price": 119.9,
    "rpm": 2000,
    "noise_level": 29,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING SL360",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 4U-M",
    "price": 84.99,
    "rpm": [
      400,
      2300
    ],
    "noise_level": 40,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax Liqmax III 240 ARGB",
    "price": 73.99,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-226-XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Aerocool Cylon 4",
    "price": 51.2,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      14,
      26
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Kotetsu Mark 3",
    "price": 29.99,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      28.6
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "EVGA CLCx 240",
    "price": 99.99,
    "rpm": null,
    "noise_level": 35,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Antec VORTEX 240",
    "price": 99.45,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 31.24,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid 240",
    "price": 124.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermalright Frost Spirit 140",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Gray",
    "size": null
  },
  {
    "name": "ID-COOLING SE-207-XT SLIM SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Thermaltake TH360 V2 Ultra ARGB Sync",
    "price": 169.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "Blue / White",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "White",
    "size": 360
  },
  {
    "name": "Fractal Design Lumen S28 V2",
    "price": 156.9,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      10,
      35.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Amazon Basics",
    "price": 30.05,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      6,
      29
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Asus ROG RYUJIN II",
    "price": 182.49,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Alphacool Eisbaer Aurora 420",
    "price": 273.37,
    "rpm": [
      600,
      1500
    ],
    "noise_level": null,
    "color": "Black",
    "size": 420
  },
  {
    "name": "RAIJINTEK JUNO-X",
    "price": 38.76,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 26,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING FROZN A610",
    "price": 49.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-40X",
    "price": 26.99,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Yeston zeaginal Sakura",
    "price": 119.9,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": "White",
    "size": 360
  },
  {
    "name": "be quiet! Shadow Rock Slim 2",
    "price": 44.9,
    "rpm": 1400,
    "noise_level": [
      11.5,
      23.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TH120 ARGB Sync",
    "price": 63.99,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "White",
    "size": 120
  },
  {
    "name": "ENDORFY Navis F360",
    "price": 152.11,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra RGB",
    "price": 279.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 30.7,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermaltake TH280 V2 Ultra ARGB Sync",
    "price": 134.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Aqua Elite ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 28.2,
    "color": null,
    "size": 240
  },
  {
    "name": "Enermax ETS-T50 AXE ARGB",
    "price": 45.99,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      24
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X",
    "price": 199.99,
    "rpm": 2300,
    "noise_level": [
      8.06,
      44.4
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Antec Symphony ARGB",
    "price": 157.78,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      20,
      35
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 34 eSports",
    "price": 50.69,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 28,
    "color": "Red / Black",
    "size": null
  },
  {
    "name": "Iceberg Thermal IceSLEET G6 Stealth",
    "price": 37.99,
    "rpm": [
      600,
      1400
    ],
    "noise_level": 26,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "Alphacool Core Ocean T38",
    "price": 84.99,
    "rpm": null,
    "noise_level": [
      0,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool CASTLE 360EX",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Silverstone Hydrogon D120 ARGB V2",
    "price": 71.61,
    "rpm": null,
    "noise_level": [
      0,
      30.5
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright AXP90-X53",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "KOLINK Umbra Void",
    "price": null,
    "rpm": 2200,
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ENDORFY Spartan 5",
    "price": 35.19,
    "rpm": [
      250,
      1500
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake Floe DX RGB TT Premium Edition B",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19,
      23.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROSTFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "ARCTIC Liquid Freezer II 120",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING PINKFLOW 360",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Pink",
    "size": 360
  },
  {
    "name": "Fractal Design Celsius+ S36 Prisma PWM ARGB",
    "price": 247.53,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ENDORFY Fortis 5 Dual Fan",
    "price": 68.73,
    "rpm": [
      250,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 LED Turbo White Edition",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      9,
      31
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "BitFenix Cube ARGB",
    "price": 99.9,
    "rpm": 2000,
    "noise_level": 34,
    "color": "White",
    "size": 360
  },
  {
    "name": "Gelid Solutions Liquid 360",
    "price": 99.99,
    "rpm": [
      750,
      1800
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Silverstone AR12 RGB",
    "price": 38.42,
    "rpm": [
      700,
      2200
    ],
    "noise_level": [
      9,
      29
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "ARCTIC Alpine 12",
    "price": null,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Corsair H115i",
    "price": 224.98,
    "rpm": 2000,
    "noise_level": 40,
    "color": null,
    "size": 280
  },
  {
    "name": "ID-COOLING SL240",
    "price": 99.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-224-XTS ARGB",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "Black",
    "size": null
  },
  {
    "name": "MSI MPG CORELIQUID K240",
    "price": 168,
    "rpm": null,
    "noise_level": [
      0,
      39.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML120R RGB",
    "price": 124.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Corsair H100",
    "price": 306.63,
    "rpm": [
      1300,
      2500
    ],
    "noise_level": [
      22,
      39
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212X",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Celsius S36",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": null,
    "size": 360
  },
  {
    "name": "Cooler Master MA621P TR4",
    "price": 623.23,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 31,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "CRYORIG H7 Quad Lumi",
    "price": 109.33,
    "rpm": [
      330,
      1600
    ],
    "noise_level": [
      10,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "BitFenix Cube ARGB",
    "price": 99.9,
    "rpm": 2000,
    "noise_level": 34,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Jonsbo CR-1400 EVO ARGB Black",
    "price": 42.2,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      22.3,
      33.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Big Shuriken 3",
    "price": null,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      2.7,
      30.4
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 2",
    "price": 79.9,
    "rpm": null,
    "noise_level": [
      13,
      32.1
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool AG400 LED",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Scythe Ninja 5 Rev. B",
    "price": 64.98,
    "rpm": [
      300,
      800
    ],
    "noise_level": [
      4,
      14.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer Aurora 360",
    "price": 211.64,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ENDORFY Navis F240",
    "price": 119.56,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Fractal Design Celsius S36 Blackout",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Enermax LIQMAXFLO 360",
    "price": 80.74,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 23.46,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-207-XT SLIM",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TH240 V2 Ultra ARGB Sync",
    "price": 149.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING IS-47S",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone Hydrogon H90 ARGB",
    "price": null,
    "rpm": [
      500,
      2600
    ],
    "noise_level": [
      11.3,
      34.6
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master i71C RGB",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake TH420 V2 ARGB Sync",
    "price": 135.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "White",
    "size": 420
  },
  {
    "name": "Gigabyte AORUS WATERFORCE II 360 ICE",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": [
      12.8,
      36.9
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Gigabyte AORUS WATERFORCE 280",
    "price": null,
    "rpm": [
      950,
      2150
    ],
    "noise_level": [
      17.1,
      36.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Lian Li Galahad AIO360 (2022)",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "Black / Silver",
    "size": 360
  },
  {
    "name": "Alphacool Core Ocean T38",
    "price": null,
    "rpm": null,
    "noise_level": [
      0,
      36
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Enermax Liqmax III 120 HF",
    "price": 54.32,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14,
      32
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "TEAMGROUP SIREN GD360E",
    "price": 109.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.3,
      35.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool GAMMAXX GTE V2",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 27.8,
    "color": "White",
    "size": null
  },
  {
    "name": "Corsair H50",
    "price": null,
    "rpm": 1700,
    "noise_level": 30.32,
    "color": null,
    "size": 120
  },
  {
    "name": "Phanteks GLACIER ONE 240D30",
    "price": null,
    "rpm": [
      250,
      2000
    ],
    "noise_level": 30.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Contac Silent 12",
    "price": 29.99,
    "rpm": [
      400,
      1500
    ],
    "noise_level": [
      22.1,
      28.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX L240 A-RGB",
    "price": 319.81,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Aqua Elite ARGB",
    "price": null,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": 240
  },
  {
    "name": "Enermax AQUAFUSION ADV",
    "price": 78.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Cooler Master I70",
    "price": null,
    "rpm": 1800,
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 200T",
    "price": null,
    "rpm": [
      900,
      1600
    ],
    "noise_level": [
      17.8,
      26.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT Kraken X62 Rev 2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      38
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Thermaltake TH240 V2 Ultra ARGB Sync",
    "price": 135.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Mars Gaming ML-ONE",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      9,
      26
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "EVGA CLC 240",
    "price": 142.5,
    "rpm": [
      500,
      2400
    ],
    "noise_level": [
      16,
      39.9
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "CRYORIG C7",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DASHFLOW XT LITE",
    "price": 79.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH420 ARGB Sync",
    "price": 189.98,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Gigabyte AORUS WATERFORCE II 360",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": [
      12.8,
      36.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "LC-Power LC-CC-120-RGB",
    "price": 46.33,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW 240 XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Intel BXXTS100H",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      20,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks Glacier One 240 T30 Gen2",
    "price": null,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      11.1,
      39.7
    ],
    "color": "Black / Gray",
    "size": 240
  },
  {
    "name": "Asus TUF Gaming LC 120 RGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING FROZN A410 DK",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool LE300",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Asus ROG RYUJIN II 360 ARGB EVA Edition",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Silver / Black",
    "size": 360
  },
  {
    "name": "ID-COOLING PINKFLOW 240 V2",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Pink",
    "size": 240
  },
  {
    "name": "Jonsbo HX4170D",
    "price": 171.02,
    "rpm": [
      600,
      3300
    ],
    "noise_level": 28.4,
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA620M",
    "price": 150.9,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      8,
      30
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 7 Pro Rev.2",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H55",
    "price": null,
    "rpm": 1700,
    "noise_level": 30.32,
    "color": null,
    "size": 120
  },
  {
    "name": "Thermalright Aqua Elite ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 28.2,
    "color": null,
    "size": 360
  },
  {
    "name": "Antec A40PRO",
    "price": 47.34,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      16,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "GAMDIAS CHIONE P3-360U",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer A35",
    "price": 42.23,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Thermalright Peerless Assassin MINI",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool Ice Edge Mini FS V2.0",
    "price": null,
    "rpm": 2200,
    "noise_level": 24.7,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper TX3 Evo",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "EK AIO 120 D-RGB",
    "price": null,
    "rpm": [
      450,
      2600
    ],
    "noise_level": 36.4,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Noctua NH-L12",
    "price": null,
    "rpm": [
      1200,
      1600
    ],
    "noise_level": [
      13.1,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX L360 A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Iceberg Thermal IceFLOE OASIS 240",
    "price": 79.98,
    "rpm": [
      200,
      2200
    ],
    "noise_level": 28.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Vetroo Shadow",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AG400 DIGITAL PLUS",
    "price": null,
    "rpm": [
      500,
      2100
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master i70C",
    "price": 22.3,
    "rpm": [
      650,
      1800
    ],
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "EVGA CLC 360",
    "price": null,
    "rpm": [
      500,
      2400
    ],
    "noise_level": [
      16,
      39.9
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH240 ARGB Sync",
    "price": 121.11,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "Thermaltake TH280 V2 ARGB Sync",
    "price": 109.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25.8,
    "color": "Green",
    "size": 280
  },
  {
    "name": "Thermaltake TOUGHAIR 110",
    "price": 34.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 23.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID R",
    "price": 92.56,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Jonsbo HX4170D",
    "price": null,
    "rpm": [
      600,
      3300
    ],
    "noise_level": 28.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-914-XT",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": null,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "be quiet! Pure Loop 120",
    "price": 100.32,
    "rpm": null,
    "noise_level": [
      18.9,
      36.1
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool LS320",
    "price": 89.99,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Scythe Ninja 5",
    "price": null,
    "rpm": [
      300,
      800
    ],
    "noise_level": [
      4,
      14.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "NZXT Kraken X61",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      20,
      37
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Thermaltake Water 3.0 120 ARGB Sync",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Montech AIR COOLER 210",
    "price": 75.31,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright SI-100",
    "price": null,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Deepcool AG500 ARGB",
    "price": 51.27,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "be quiet! Dark Rock Pro 3",
    "price": null,
    "rpm": [
      1400,
      1700
    ],
    "noise_level": [
      13.2,
      26.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frost Tower 120",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 400 XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "Enermax ETS-N31-02",
    "price": 20.98,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 24.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterAIR G200P",
    "price": 78.98,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      6,
      28
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Silverstone IceMyst 420",
    "price": 162.99,
    "rpm": [
      400,
      1750
    ],
    "noise_level": [
      13.3,
      30.8
    ],
    "color": "Silver / Black",
    "size": 420
  },
  {
    "name": "Antec Symphony ARGB",
    "price": 146.63,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      20,
      35
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Alphacool Eisbaer 420",
    "price": 169.9,
    "rpm": 1100,
    "noise_level": 29.4,
    "color": "Black / Blue",
    "size": 420
  },
  {
    "name": "Cooler Master MasterLiquid ML360 Mirror",
    "price": 249,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Phanteks Glacier One 240 T30",
    "price": null,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      11.1,
      39.7
    ],
    "color": "Gray",
    "size": 240
  },
  {
    "name": "Antec Symphony ARGB",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      20,
      35
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Corsair H100i GTX",
    "price": 272.64,
    "rpm": 2435,
    "noise_level": 37.7,
    "color": null,
    "size": 240
  },
  {
    "name": "Corsair H60",
    "price": null,
    "rpm": null,
    "noise_level": 30.2,
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool CASTLE 240EX A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Deepcool LE300 Marrs",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool GAMMAXX 300",
    "price": null,
    "rpm": [
      900,
      1600
    ],
    "noise_level": [
      17.8,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TH420 ARGB Sync",
    "price": 135.79,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 34.7,
    "color": "White",
    "size": 420
  },
  {
    "name": "ARCTIC Freezer i35",
    "price": 38.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Montech METAL DT24 BASE",
    "price": 49.99,
    "rpm": [
      800,
      1950
    ],
    "noise_level": 26,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG STRIX LC 120 RGB",
    "price": 192.36,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermaltake UX200 ARGB",
    "price": 37.99,
    "rpm": [
      300,
      1500
    ],
    "noise_level": 26.33,
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone VIDA 240 SLIM",
    "price": 126.99,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      15.9,
      33.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX 400 Blue",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "Blue / Silver",
    "size": null
  },
  {
    "name": "BitFenix Cube ARGB",
    "price": 79.9,
    "rpm": 2000,
    "noise_level": 34,
    "color": "Black",
    "size": 240
  },
  {
    "name": "be quiet! Shadow Rock TF 2",
    "price": 91.05,
    "rpm": 1400,
    "noise_level": [
      11.9,
      24.4
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Corsair H75 2018",
    "price": 142.47,
    "rpm": 1900,
    "noise_level": 31,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Xilence M705D",
    "price": null,
    "rpm": [
      700,
      1600
    ],
    "noise_level": [
      18,
      32.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li GALAHAD AIO 240 RGB",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": 240
  },
  {
    "name": "Jonsbo CR-1400 EVO Color Black",
    "price": 24.88,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      22.3,
      33.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING DK",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.2,
      25.6
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer 360",
    "price": 156.59,
    "rpm": [
      550,
      1700
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Dynatron R24",
    "price": 39.95,
    "rpm": [
      1500,
      7000
    ],
    "noise_level": [
      16,
      47.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn BEN NEVIS",
    "price": null,
    "rpm": [
      400,
      1600
    ],
    "noise_level": [
      8,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Lumen S36 RGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Iceberg Thermal IceSLEET G4 Silent",
    "price": 19.98,
    "rpm": [
      600,
      1200
    ],
    "noise_level": 20.5,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "NZXT Kraken X41",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      20,
      37
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "MSI MAG CORELIQUID C280",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.8,
      33.28
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "MSI MAG CORELIQUID R",
    "price": 141.27,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.8,
      33.28
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Scythe Shuriken 2",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      1.8,
      23.2
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool LS320 WH",
    "price": 65.05,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 120
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra",
    "price": 199.99,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 28.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Vision 240",
    "price": null,
    "rpm": [
      2150,
      21500
    ],
    "noise_level": 27,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Jonsbo CR-3000 ARGB",
    "price": 49.45,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "ARCTIC Alpine 12 CO",
    "price": 20.82,
    "rpm": [
      100,
      2700
    ],
    "noise_level": null,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Thermaltake Water 3.0 360 ARGB Sync Edition",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Corsair H80i GT",
    "price": null,
    "rpm": 2435,
    "noise_level": 37.7,
    "color": null,
    "size": 120
  },
  {
    "name": "Thermalright Frost Spirit 140 V3 ARGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermaltake TH240 ARGB Sync",
    "price": null,
    "rpm": 1500,
    "noise_level": 28.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright AXP90-X53",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frost Spirit 140 V3 WHITE",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING AURAFLOW X 240 EVO SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool AK620 ZERO DARK ZORIA",
    "price": 95.45,
    "rpm": [
      500,
      1850
    ],
    "noise_level": 28,
    "color": "Orange / Black",
    "size": null
  },
  {
    "name": "Asus ROG Ryujin 240 RGB AIO",
    "price": 230,
    "rpm": [
      450,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 34",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MPG CORELIQUID D240",
    "price": 169,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Jonsbo CR-1000 EVO ARGB White",
    "price": 25.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Valkyrie SYN",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "White / Blue",
    "size": 360
  },
  {
    "name": "Asus ROG STRIX LC 240 RGB White Edition",
    "price": 184.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "White",
    "size": 240
  },
  {
    "name": "Silverstone NT09-115X",
    "price": 15.29,
    "rpm": [
      550,
      2500
    ],
    "noise_level": [
      18.5,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Liquid 240",
    "price": 84.95,
    "rpm": [
      750,
      1800
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterAir MA410M",
    "price": 96.23,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      6,
      31
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "MSI MPG CORELIQUID K240 V2",
    "price": 168.98,
    "rpm": null,
    "noise_level": 39.9,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Phanteks GLACIER ONE 240D30",
    "price": null,
    "rpm": [
      250,
      2000
    ],
    "noise_level": 30.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "Mars Gaming MCPU-XT",
    "price": 64.48,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      9,
      26
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Silent Loop 2 120",
    "price": 133.18,
    "rpm": 2200,
    "noise_level": [
      16.6,
      36.4
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Cooler Master MasterAir MA610P ARGB",
    "price": 112.53,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilentiumPC Fera 5",
    "price": null,
    "rpm": [
      300,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid 360L Core SF6 Chun-Li",
    "price": null,
    "rpm": [
      650,
      1750
    ],
    "noise_level": 27.2,
    "color": "White / Yellow",
    "size": 360
  },
  {
    "name": "Thermaltake Floe Riing RGB 360 TT Premium Edition",
    "price": 150.41,
    "rpm": [
      500,
      1400
    ],
    "noise_level": [
      19.8,
      24.7
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Thermaltake TOUGHAIR 710",
    "price": 94.98,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      18.5,
      23.9
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake Floe DX RGB 240 TT Premium Edition",
    "price": 115.6,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19,
      23.9
    ],
    "color": "Black / Gray",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX 400 EX",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 27.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TH280 V2 Ultra ARGB Sync",
    "price": 159.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34.7,
    "color": "White",
    "size": 280
  },
  {
    "name": "Cooler Master i70",
    "price": 19.98,
    "rpm": 1800,
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Iceberg Thermal IceSLEET X5",
    "price": 29.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      0,
      36
    ],
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      32.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone Krypton KR01",
    "price": 32.99,
    "rpm": [
      800,
      3000
    ],
    "noise_level": 33,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XTS",
    "price": 29.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake CLP0556",
    "price": 18.5,
    "rpm": [
      1900,
      2300
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake UX 210 ARGB",
    "price": 49.99,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT Basic",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      32.5
    ],
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "ID-COOLING FROZN A610 ARGB WHITE",
    "price": 49.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.9,
    "color": "White",
    "size": null
  },
  {
    "name": "Enermax AQUAFUSION ADV 240",
    "price": 69.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      15,
      32.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer A13 X",
    "price": 31,
    "rpm": [
      300,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 LED Turbo (Red)",
    "price": 59.04,
    "rpm": [
      300,
      1600
    ],
    "noise_level": [
      9,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 CO",
    "price": 39.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Mars Gaming ML-ONE",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      9,
      26
    ],
    "color": "Pink",
    "size": 120
  },
  {
    "name": "Asus ROG STRIX LC 360 RGB",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Silverstone Krypton KR02",
    "price": 38.99,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      13.6,
      34.8
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "White",
    "size": 240
  },
  {
    "name": "Enermax ETS-T50 AXE ARGB",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      24
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Alpine M1",
    "price": null,
    "rpm": 750,
    "noise_level": 20.5,
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron K129",
    "price": 43.93,
    "rpm": null,
    "noise_level": 0,
    "color": "Orange",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer LT240",
    "price": 119.9,
    "rpm": [
      550,
      1700
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool CASTLE 360EX A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "Alpenf\u00f6hn Brocken 4",
    "price": null,
    "rpm": [
      400,
      1600
    ],
    "noise_level": 22.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA410P",
    "price": 49.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper T2",
    "price": null,
    "rpm": 2800,
    "noise_level": [
      17,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone Hydrogon D120 ARGB",
    "price": 105.59,
    "rpm": null,
    "noise_level": [
      0,
      30.5
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Fractal Design Celsius+ S24 Prisma PWM ARGB",
    "price": 184.18,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "RAIJINTEK AIDOS BLACK",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 28.87,
    "color": null,
    "size": null
  },
  {
    "name": "GameMax Iceberg 240",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool Gammaxx L360 V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "Corsair H80i",
    "price": null,
    "rpm": 2700,
    "noise_level": 37.68,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master V8 GTS",
    "price": null,
    "rpm": 1600,
    "noise_level": 36,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks Glacier One 240MP",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Fractal Design Celsius+ S28 Prisma PWM ARGB",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": 34.1,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Enermax LIQMAXFLO SR 360",
    "price": 98.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 23.46,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master MASTERLIQUID PL240 FLUX",
    "price": 138.04,
    "rpm": null,
    "noise_level": 32,
    "color": "White",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 34 eSports",
    "price": null,
    "rpm": [
      200,
      2100
    ],
    "noise_level": null,
    "color": "White / Black",
    "size": null
  },
  {
    "name": "Jonsbo HX6200D",
    "price": 48,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18.6,
      29.7
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Enermax LIQMAXFLO 240",
    "price": 72.98,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 23.46,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ADATA XPG LEVANTE 360",
    "price": 159.99,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Fractal Design Celsius+ S28 Dynamic X2 PWM",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": 32.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Gigabyte AORUS WATERFORCE X II 240AORUS WATERFORCE X II 240",
    "price": 229.99,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      12,
      37.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "KOLINK Umbra Void",
    "price": 103.28,
    "rpm": 2200,
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG RYUO 240 RGB",
    "price": 189.98,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37,
    "color": "Black",
    "size": 240
  },
  {
    "name": "darkFlash Darkair",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW X",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Jonsbo CR-3000 ARGB",
    "price": 49.45,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG RYUO 120 RGB",
    "price": 239,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Cooler Master Hyper TX3 EVO",
    "price": 85.72,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      17,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Azza Blizzard SP 360",
    "price": null,
    "rpm": [
      700,
      2200
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Alpine Passive",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW 240 XT SNOW",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Enermax ETS-N30R-HE",
    "price": 26.13,
    "rpm": [
      600,
      2800
    ],
    "noise_level": [
      12,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "TEAMGROUP SIREN GD240E",
    "price": 100.98,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.3,
      35.6
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "RAIJINTEK PALLAS 120",
    "price": 29.99,
    "rpm": [
      200,
      1400
    ],
    "noise_level": 28.43,
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer 240",
    "price": null,
    "rpm": [
      500,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": 240
  },
  {
    "name": "ID-COOLING ZOOMFLOW X",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING IS-50X V2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      13.8,
      31.2
    ],
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW X 240 LITE SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Enermax ETS-F40-FS",
    "price": 39.99,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      10,
      23
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Dynatron R25",
    "price": 37,
    "rpm": [
      1000,
      7000
    ],
    "noise_level": [
      21.5,
      59.14
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cougar FORZA 85",
    "price": 45.1,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX AG620 ARGB",
    "price": null,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI CORE FROZR L",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.2,
      33.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright AXP-100 Full Copper",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": null,
    "color": "Orange",
    "size": null
  },
  {
    "name": "aigo Shadow Max",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "Alphacool Core Ocean T38",
    "price": 73.55,
    "rpm": null,
    "noise_level": [
      0,
      34.3
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax LIQMAX III RGB",
    "price": 52.27,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Yeston zeaginal Sakura",
    "price": 99.9,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": "White",
    "size": 240
  },
  {
    "name": "StarTech FAN1156PWM",
    "price": 22.7,
    "rpm": [
      1000,
      3000
    ],
    "noise_level": 33,
    "color": null,
    "size": null
  },
  {
    "name": "Xilence M906",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      18,
      30.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 13 CO",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine M1 - Passive",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Celsius+ S24 Dynamic X2 PWM",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX GTE V2",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 27.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Mugen 5 Rev.C",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      28.6
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Silverstone AR12-TUF",
    "price": 45.99,
    "rpm": [
      300,
      2200
    ],
    "noise_level": [
      6.2,
      34.4
    ],
    "color": "Black / Orange",
    "size": null
  },
  {
    "name": "Iceberg Thermal IceSLEET X7 Dual",
    "price": 37.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      0,
      38
    ],
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "Thermalright Silver Soul 135",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool CASTLE 360EX WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-50X V3",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.2,
    "color": "Black / Gray",
    "size": null
  },
  {
    "name": "ID-COOLING SE-226-XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Fractal Design Celsius+ S36 Dynamic X2 PWM",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "MSI MPG CORELIQUID K360 V2",
    "price": null,
    "rpm": null,
    "noise_level": 39.9,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Phanteks Glacier One 360MPH",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FX240ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterAir G100M RGB",
    "price": 43.25,
    "rpm": [
      600,
      2400
    ],
    "noise_level": 30,
    "color": "Black / Multicolor",
    "size": null
  },
  {
    "name": "Noua Jotun",
    "price": null,
    "rpm": 1800,
    "noise_level": 23,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Fractal Design Celsius S24 Blackout",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 32.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Alpenf\u00f6hn Brocken 4 Max",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": [
      22.8,
      24.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Azza CUBE 240",
    "price": 79.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX GT V2",
    "price": 39.99,
    "rpm": [
      500,
      1650
    ],
    "noise_level": 27.8,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING DK-07i RAINBOW",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.2,
      25.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Cougar FORZA 135",
    "price": 104.99,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 38.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "NZXT Kraken X42",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      38
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Deepcool GAMMAXX L120",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 17.8,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax LIQMAXFLO SR 240",
    "price": 89.99,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 23.46,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright AXP90-X36",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AS500",
    "price": null,
    "rpm": [
      500,
      1200
    ],
    "noise_level": 29.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX L240 A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool Castle 360 RGB V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noctua NH-U12S TR4-SP3",
    "price": 89.9,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.6,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Le Grand Macho RT",
    "price": 65.8,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      14,
      20
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer A35 CO",
    "price": 38.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo CR-1000 EVO Color White",
    "price": 24.99,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Core Matrix",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermaltake Water 3.0 240 ARGB Sync",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Freezer Xtreme Rev.2",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX GT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      17.8,
      29.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 eSports ONE (Black/Red)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ARCTIC Liquid Freezer II 240 RGB",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG STRIX LC 240 RGB",
    "price": 169.99,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 LED White Edition",
    "price": 64.11,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      9,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper T4",
    "price": null,
    "rpm": 1800,
    "noise_level": [
      15.1,
      31.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Pro 280",
    "price": null,
    "rpm": [
      650,
      2200
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "NZXT Kraken X42 Rev 2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      21,
      38
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Scythe FUMA Rev.B",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      13,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "upHere CCF150CF",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "BitFenix Cube ARGB",
    "price": 79.9,
    "rpm": 2000,
    "noise_level": 34,
    "color": "White",
    "size": 240
  },
  {
    "name": "EVGA CLCx 280",
    "price": 231.9,
    "rpm": null,
    "noise_level": 35,
    "color": "Black",
    "size": 280
  },
  {
    "name": "ARCTIC Freezer 13",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 3.0 Riing RGB 280",
    "price": 131.8,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.5,
      26.4
    ],
    "color": "Black / Red",
    "size": 280
  },
  {
    "name": "ENDORFY Navis F240 ARGB",
    "price": 140.92,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Intel BXRTS2011LC",
    "price": null,
    "rpm": 2200,
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master MasterLiquid LC240E RGB",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": 31.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID R",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "CRYORIG C7 Cu",
    "price": 83,
    "rpm": [
      600,
      2500
    ],
    "noise_level": 30,
    "color": "White / Orange",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid 120",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "ID-COOLING ZOOMFLOW 240",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus TUF Gaming LC 120 ARGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Frozen Magic Scenic V2",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": 240
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": 139.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.3,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Alphacool Eisbaer Extreme",
    "price": 367.7,
    "rpm": 1000,
    "noise_level": 18.8,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Iceberg Thermal IceSLEET X9 Dual TR",
    "price": 42.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      0,
      38
    ],
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "Thermalright Core Matrix",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 50 TR",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Phanteks Glacier One 240MPH",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Thermalright Aqua Elite ARGB",
    "price": null,
    "rpm": 1550,
    "noise_level": 25.6,
    "color": "White",
    "size": 360
  },
  {
    "name": "Enermax ETS-F40-FS",
    "price": 39.99,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      10,
      23
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra",
    "price": 193.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 33.2,
    "color": "Black",
    "size": 280
  },
  {
    "name": "GAMDIAS CHIONE M2",
    "price": 69.98,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair H110i GT",
    "price": 242.71,
    "rpm": 2100,
    "noise_level": 43,
    "color": null,
    "size": 280
  },
  {
    "name": "Cooler Master Hyper 212X EU Version",
    "price": 87,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      13,
      28.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-C14",
    "price": null,
    "rpm": [
      750,
      1200
    ],
    "noise_level": [
      10.1,
      19.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-L9a",
    "price": null,
    "rpm": 2500,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX L360 A-RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-30A",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML360 Sub-Zero",
    "price": null,
    "rpm": [
      650,
      1900
    ],
    "noise_level": [
      8,
      26
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Jonsbo HX7280",
    "price": 152.99,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      28,
      38
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Vision 240",
    "price": null,
    "rpm": [
      2150,
      21500
    ],
    "noise_level": 27,
    "color": "White",
    "size": 240
  },
  {
    "name": "Alphacool Eisbaer Aurora 240",
    "price": 153.16,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TOUGHAIR 510",
    "price": 56.31,
    "rpm": [
      500,
      1200
    ],
    "noise_level": 23.6,
    "color": "Green",
    "size": null
  },
  {
    "name": "Jonsbo PISA A5",
    "price": null,
    "rpm": [
      800,
      1850
    ],
    "noise_level": 36.8,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright AXP-100",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": [
      22,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212X Dual Fan",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240EX WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Gigabyte AORUS LIQUID COOLER",
    "price": null,
    "rpm": 2500,
    "noise_level": [
      18,
      39.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG RYUJIN II ARGB",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "YEYIAN VATN 120 ARGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Macho Rev.B",
    "price": 63.97,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cougar Forza 50 Essential",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34.5,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "GAMDIAS BOREAS P1-720",
    "price": 69.98,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "be quiet! Shadow Rock 2",
    "price": 107,
    "rpm": 1600,
    "noise_level": [
      15.3,
      25.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i35 CO",
    "price": 45.99,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax LIQMAXFLO 420",
    "price": 129.99,
    "rpm": [
      500,
      1700
    ],
    "noise_level": 25.47,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Thermaltake TOUGHLIQUID 360 EX Pro ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "YEYIAN VATN ARGB 240",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING ZOOMFLOW 360 XT SNOW",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Gelid Solutions Slim Silence AM1",
    "price": null,
    "rpm": [
      1200,
      2600
    ],
    "noise_level": [
      15,
      27.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Intel BXTS13X",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      21,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master MasterLiquid ML120L RGB",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Aerocool P7-L240",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      10.5,
      31.8
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML240P Mirage",
    "price": null,
    "rpm": 2000,
    "noise_level": 27,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool CASTLE 280EX",
    "price": null,
    "rpm": [
      400,
      1600
    ],
    "noise_level": 39.8,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Gigabyte AORUS WATERFORCE II 240",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": [
      12.8,
      36.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "CRYORIG M9 Plus",
    "price": 64.23,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 26.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Dolomit",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 23.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "EVGA CLC 120 CL11",
    "price": null,
    "rpm": 1800,
    "noise_level": 32.1,
    "color": null,
    "size": 120
  },
  {
    "name": "SilentiumPC Fera 3 HE1224",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus TUF Gaming LC 240 RGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FX360 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-224-XTS ARGB",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "White",
    "size": null
  },
  {
    "name": "EK AIO Elite 280 D-RGB",
    "price": 114.13,
    "rpm": [
      550,
      2200
    ],
    "noise_level": 36.4,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Mars Gaming ML-ONE",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      9,
      26
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "ARCTIC Freezer A35 RGB",
    "price": 37.38,
    "rpm": [
      200,
      1700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Jonsbo CR-1000",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      20.55,
      37.2
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Assassin X 90 SE",
    "price": null,
    "rpm": 2400,
    "noise_level": 27.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Silverstone IceMyst 280",
    "price": 122.99,
    "rpm": [
      400,
      1750
    ],
    "noise_level": [
      13.3,
      30.8
    ],
    "color": "Silver / Black",
    "size": 280
  },
  {
    "name": "ARCTIC Liquid Freezer II 240 RGB",
    "price": 117.54,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black / Gray",
    "size": 240
  },
  {
    "name": "ENDORFY Navis F280",
    "price": null,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Noctua NH-D14 SE2011",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      12.6,
      19.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H90",
    "price": null,
    "rpm": 1500,
    "noise_level": 35,
    "color": null,
    "size": 140
  },
  {
    "name": "Deepcool GAMMAXX 400 V2",
    "price": null,
    "rpm": [
      500,
      1650
    ],
    "noise_level": null,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "Cougar Forza 50",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Zalman CNPS4X",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Black",
    "size": null
  },
  {
    "name": "Geometric Future Eskimo Junior 36",
    "price": 119.9,
    "rpm": 2000,
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "YEYIAN VATN ARGB 360",
    "price": 109.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": 58.74,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "Yellow / Black",
    "size": null
  },
  {
    "name": "Valkyrie VIND SL125",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "White / Blue",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 50 (w/Controller)",
    "price": 75.23,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Enermax LIQTECH TR4 II 360",
    "price": 177.5,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "NZXT Kraken X31",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      18,
      34
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "NZXT Kraken X52 Rev 2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      21,
      36
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ID-COOLING FROSTFLOW+ 240 SNOW",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool Gamerstorm Captain 240 PRO",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX L240",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 17.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Floe Riing RGB 280 TT Premium Edition",
    "price": 59.99,
    "rpm": [
      500,
      1400
    ],
    "noise_level": [
      19.8,
      27.2
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "RAIJINTEK LETO PRO RGB",
    "price": 29.99,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 25,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax LIQMAXFLO SR 120",
    "price": 79.98,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 23.46,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Mars Gaming MCPU-XTW",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      9,
      26
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Silverstone IceMyst 240",
    "price": 109.99,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      12.1,
      33.1
    ],
    "color": "Silver / Black",
    "size": 240
  },
  {
    "name": "Iceberg Thermal IceSLEET G4 OC",
    "price": 24.99,
    "rpm": [
      600,
      1400
    ],
    "noise_level": 22.5,
    "color": "Black / Teal",
    "size": null
  },
  {
    "name": "Silverstone PF240-ARGB",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      7.4,
      35.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Silverstone HE02-V2",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": "Silver",
    "size": null
  },
  {
    "name": "Deepcool GAMERSTORM CAPTAIN 240X",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool CASTLE 120R",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ARCTIC Liquid Freezer II 420 RGB",
    "price": null,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "GAMDIAS CHIONE P3-240U",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG STRIX LC 360 RGB GUNDAM",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "White",
    "size": 360
  },
  {
    "name": "Enermax AQUAFUSION ADV 120",
    "price": 51.14,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      15,
      32.6
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Alphacool Eisbaer Pro Aurora",
    "price": 208.71,
    "rpm": null,
    "noise_level": 31.5,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Akasa Vegas Chroma AM",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Valkyrie SYN",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "Black / Red",
    "size": 360
  },
  {
    "name": "Thermaltake TOUGHAIR 510",
    "price": 59.99,
    "rpm": [
      500,
      1200
    ],
    "noise_level": 23.6,
    "color": "Teal",
    "size": null
  },
  {
    "name": "Dynatron T318",
    "price": 47.93,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 400 XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "Zalman CNPS10X Performa",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "Noctua NH-U12P SE2",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      12.6,
      19.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Seidon 120V",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "CRYORIG M9i",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 26.4,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX GTE",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 27,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ADATA XPG LEVANTE 240",
    "price": 109.99,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Azza Blizzard SP 240",
    "price": null,
    "rpm": [
      700,
      2200
    ],
    "noise_level": 36,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FROSTFLOW X LITE",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING SPACE LCD",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH360 V2 Ultra EX ARGB Sync",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Alphacool Eisbaer LT360",
    "price": 149.91,
    "rpm": [
      550,
      1700
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Silverstone Hydrogon D120 ARGB",
    "price": null,
    "rpm": null,
    "noise_level": [
      0,
      30.5
    ],
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "Silverstone PF360-ARGB",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      7.4,
      35.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TOUGHLIQUID 240 EX Pro ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": 124.98,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.3,
    "color": "Teal",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-214-XT-D",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 32.5,
    "color": "Gray / Black",
    "size": null
  },
  {
    "name": "be quiet! Silent Loop 360",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      16.1,
      36.9
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Deepcool GAMMAXX C40",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 23.9,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "PC Cooler GI-D66A",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      8,
      29.1
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING AURAFLOW X 240 EVO",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING IS-40X V3",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Lian Li Galahad AIO240 (2022)",
    "price": 194.04,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 32,
    "color": "White / Silver",
    "size": 240
  },
  {
    "name": "Cooler Master MasterAir MA610P",
    "price": null,
    "rpm": 1800,
    "noise_level": 35,
    "color": "Black",
    "size": null
  },
  {
    "name": "Azza CUBE 360",
    "price": 99.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 34,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Evercool LGAL1156A-B715",
    "price": null,
    "rpm": [
      1000,
      5500
    ],
    "noise_level": 56,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone VIDA 120 SLIM",
    "price": 110.71,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      15.9,
      33.9
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "GAMDIAS CHIONE P2",
    "price": 104.98,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-60 EVO ARGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      13.8,
      31.2
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "SilentiumPC Fortis 5",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master Hyper TX3",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      17,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "CRYORIG H5 Universal",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": [
      20,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Dark Rock TF",
    "price": null,
    "rpm": 1400,
    "noise_level": [
      11.9,
      26.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterAir Maker 8",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper H410R",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.4,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      32.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Scythe Mugen 5 Black Edition",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.75
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Core Matrix",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake TOUGHLIQUID 420 EX Pro ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Akasa K32",
    "price": null,
    "rpm": [
      600,
      3000
    ],
    "noise_level": [
      17.2,
      30.54
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 50",
    "price": 64.44,
    "rpm": [
      200,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Antec KUHLER Box",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "EVGA CLC 120",
    "price": null,
    "rpm": [
      500,
      2400
    ],
    "noise_level": [
      16,
      39.9
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Enermax Liqfusion 240",
    "price": 81.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING AURAFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool CASTLE 240EX WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water 360 High Speed",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 36.8,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING DK-03 RAINBOW",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.2,
      25.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING PINKFLOW 240 DIAMOND PURPLE",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Pink / Purple",
    "size": 240
  },
  {
    "name": "Cooler Master Hyper T200",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": 31,
    "color": null,
    "size": null
  },
  {
    "name": "Iceberg Thermal IceSLEET G4 Midnight Limited Edition",
    "price": 25.99,
    "rpm": [
      600,
      1400
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Xigmatek GAIA SD1283",
    "price": 30,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Floe DX RGB 360 TT Premium Edition",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19,
      23.9
    ],
    "color": "Black / Gray",
    "size": 360
  },
  {
    "name": "GAMDIAS CHIONE M3",
    "price": 84.99,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "White",
    "size": 240
  },
  {
    "name": "Jonsbo CR-1400 EVO ARGB White",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      22.3,
      33.8
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Intel BXTS13A",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-207-XT BLACK",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NC95TZ(RB)",
    "price": null,
    "rpm": [
      150,
      1500
    ],
    "noise_level": 28.6,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 103",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      17,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilentiumPC Fortis 3 HE1425",
    "price": null,
    "rpm": [
      500,
      1400
    ],
    "noise_level": [
      8,
      22
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 eSports ONE (Black/White)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW+ 120",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black / White",
    "size": 120
  },
  {
    "name": "Vetroo darkstorm M2",
    "price": null,
    "rpm": 1600,
    "noise_level": 26,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING AURAFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Silverstone NT07-115X",
    "price": 29.99,
    "rpm": [
      1500,
      3600
    ],
    "noise_level": [
      21.9,
      34.7
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water High Speed 360",
    "price": 278.48,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 36.8,
    "color": "White",
    "size": 360
  },
  {
    "name": "RAIJINTEK LETO RGB",
    "price": 28.22,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 25,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Corsair H110i GTX",
    "price": 212.81,
    "rpm": 2000,
    "noise_level": 40,
    "color": null,
    "size": 280
  },
  {
    "name": "be quiet! Shadow Rock Slim",
    "price": null,
    "rpm": [
      400,
      1400
    ],
    "noise_level": [
      11.5,
      23.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Pro 140",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Iceberg Thermal IceFLOE T65",
    "price": null,
    "rpm": [
      1000,
      3000
    ],
    "noise_level": 31.5,
    "color": "Silver / Teal",
    "size": null
  },
  {
    "name": "Corsair H80",
    "price": null,
    "rpm": [
      1300,
      2500
    ],
    "noise_level": [
      22,
      39
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "SilentiumPC Spartan 3 LT HE1012",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool CASTLE 240EX",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX 400S",
    "price": null,
    "rpm": 1300,
    "noise_level": 14.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML240 Mirror",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Phanteks Glacier One 280MP",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      18,
      39.1
    ],
    "color": "Black / White",
    "size": 280
  },
  {
    "name": "ARCTIC Liquid Freezer II 360 RGB",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black / Gray",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer II 280 RGB",
    "price": null,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 280
  },
  {
    "name": "ID-COOLING SE-903-XT",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      14,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-SD",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": null,
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID B",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Jonsbo CR-1000 GT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      20.55,
      37.2
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-67-XT",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer Aurora 280",
    "price": 181.16,
    "rpm": [
      600,
      1500
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "ARCTIC Freezer 11 LP",
    "price": 37.9,
    "rpm": [
      900,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9500 AT",
    "price": 29.99,
    "rpm": [
      1300,
      2650
    ],
    "noise_level": [
      18,
      27.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine AM4 CO",
    "price": 24.99,
    "rpm": [
      100,
      2700
    ],
    "noise_level": null,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake CLP0556-B",
    "price": 19.98,
    "rpm": [
      1900,
      2300
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT ARGB V3",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TOUGHAIR 710",
    "price": 79.19,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      18.5,
      23.9
    ],
    "color": "Gray",
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic ARGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": 360
  },
  {
    "name": "Corsair H110",
    "price": 248.28,
    "rpm": 1500,
    "noise_level": 35,
    "color": null,
    "size": 280
  },
  {
    "name": "SilentiumPC Fortis 5 ARGB",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax ETS-T50 AXE (Black)",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      18.9,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Brocken 3",
    "price": null,
    "rpm": [
      400,
      1050
    ],
    "noise_level": 22,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-47K",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Phanteks Glacier One 360MP",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "Deepcool CASTLE 360EX RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Asus ROG STRIX LC II ARGB",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Ultra120EX REV.4",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water High Speed 240",
    "price": 191.81,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 36.8,
    "color": "White",
    "size": 240
  },
  {
    "name": "Silverstone AR06",
    "price": 43.99,
    "rpm": 2500,
    "noise_level": [
      20,
      28.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noua Blizzard",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.4,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Thermaltake Floe Riing RGB 240 TT Premium Edition",
    "price": 114.5,
    "rpm": [
      500,
      1400
    ],
    "noise_level": [
      19.8,
      24.7
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Iceberg Thermal IceSLEET X6",
    "price": 31.99,
    "rpm": [
      500,
      1850
    ],
    "noise_level": [
      0,
      36
    ],
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID 360 EX Pro ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 31.6,
    "color": "Black",
    "size": 280
  },
  {
    "name": "NZXT Kraken X40",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      21,
      37
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Cooler Master Seidon 120M",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "CRYORIG R1 Ultimate",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "EVGA ACX",
    "price": null,
    "rpm": 2800,
    "noise_level": 42.5,
    "color": null,
    "size": null
  },
  {
    "name": "CRYORIG H5 Ultimate",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": [
      19,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Castle 360 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING FROSTFLOW 240 XT SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Jonsbo CR-1000 EVO Standard",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Jonsbo HP400S",
    "price": null,
    "rpm": [
      900,
      2800
    ],
    "noise_level": [
      20.2,
      34
    ],
    "color": "Blue / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-206-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake Riing Silent 12 RGB Sync Edition",
    "price": 65.02,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      13,
      22
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake Riing Silent 12 Red",
    "price": 38.69,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      13,
      18
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master DK9-7G52A-0L-GP",
    "price": 31.98,
    "rpm": 4500,
    "noise_level": 35,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Floe Riing RGB 360 TR4 Edition",
    "price": 160.41,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      21.8,
      33
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Alphacool Eisbaer Pro Aurora",
    "price": 192.75,
    "rpm": null,
    "noise_level": 31.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid PL360 FLUX 30TH Anniversary Edition",
    "price": null,
    "rpm": null,
    "noise_level": 30,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Titan DC-155A915Z/RPW",
    "price": null,
    "rpm": [
      1000,
      2600
    ],
    "noise_level": [
      24.8,
      33.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H75",
    "price": null,
    "rpm": 2000,
    "noise_level": 31.4,
    "color": null,
    "size": 120
  },
  {
    "name": "Antec KUHLER H2O 620",
    "price": null,
    "rpm": [
      1450,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Thermaltake Water 3.0 Riing RGB 240",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 26.4,
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master Hyper 212 LED Turbo (Black)",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      9,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Antec C400",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": [
      20.3,
      34.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW 240 XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID C240 EVA e-PROJECT",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID B",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING SE-214-XT-RN",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 35,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer 280",
    "price": 147.95,
    "rpm": 1100,
    "noise_level": 29.4,
    "color": "Black / Blue",
    "size": 280
  },
  {
    "name": "Geometric Future Eskimo Junior 24",
    "price": 79.9,
    "rpm": 2000,
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterAir MA620P",
    "price": 111.5,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 31,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ENDORFY Navis F280 ARGB",
    "price": 164.91,
    "rpm": [
      250,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Silverstone AR08",
    "price": 39.99,
    "rpm": [
      1500,
      2800
    ],
    "noise_level": [
      14.1,
      27.7
    ],
    "color": "Blue / Silver",
    "size": null
  },
  {
    "name": "Scythe Choten TUF Gaming Alliance",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": "Black / Yellow",
    "size": null
  },
  {
    "name": "Jonsbo HX6250",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": [
      28,
      38
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake CL-P0187",
    "price": 57.49,
    "rpm": 4800,
    "noise_level": 36,
    "color": null,
    "size": null
  },
  {
    "name": "Cougar Helor 240",
    "price": 124,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 37.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Tempest Subzero RGB",
    "price": null,
    "rpm": [
      800,
      1650
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "GAMDIAS BOREAS M1",
    "price": 36.99,
    "rpm": [
      800,
      2600
    ],
    "noise_level": [
      10,
      32
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 400 White",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID E360 MONSTER HUNTER EDITION",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool CAPTAIN360EX",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Cooler Master MasterLiquid ML360 RGB TR4 Edition",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "CRYORIG C7G",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": 30,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus ROG Strix LC 240",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Asus ROG Strix LC 120",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ARCTIC Freezer i13 X CO",
    "price": null,
    "rpm": [
      300,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-214-XT BASIC",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Gray / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-214-XT PRO",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": 28.9,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "SilenX EFZ-92HA2",
    "price": 21.25,
    "rpm": 2400,
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone PF120-ARGB",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      7.4,
      35.6
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING IS-30",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Mugen 5 S",
    "price": null,
    "rpm": [
      350,
      1800
    ],
    "noise_level": [
      4,
      22.9
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID P280",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.8,
      33.28
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.3,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master V8",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS10X OPTIMA",
    "price": null,
    "rpm": [
      1000,
      1700
    ],
    "noise_level": [
      17,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 612 Ver.2",
    "price": null,
    "rpm": [
      800,
      1300
    ],
    "noise_level": [
      11,
      20
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11 GT Rev 2",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Maelstrom 120T",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      17.8,
      34.1
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Scythe Mugen 5",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Brocken ECO",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      4.6,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW+ 240",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Deepcool Castle 240 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool GAMMAXX 400R",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "Red / Silver",
    "size": null
  },
  {
    "name": "Asus ROG Strix LC 360",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 37.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "darkFlash Shadow PWM",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": 29.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "GAMDIAS CHIONE M2",
    "price": null,
    "rpm": 1800,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-214-XT RING",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 33.5,
    "color": "White / Black",
    "size": null
  },
  {
    "name": "Alphacool Eisbaer 240",
    "price": 147.22,
    "rpm": [
      550,
      1700
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "In Win SR24 PRO",
    "price": 64.98,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Scythe KOTETSU Mark II TUF",
    "price": 68.62,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": "Black / Yellow",
    "size": null
  },
  {
    "name": "Silverstone IceGem 240P",
    "price": 185.84,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      7.3,
      36.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Silverstone IceGem 360",
    "price": 261.63,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      7.3,
      36.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Jonsbo CR-1000 EVO Color Black",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-47-XT",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": null
  },
  {
    "name": "Gelid Solutions Glacier",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 35,
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Kotetsu Mark II",
    "price": 88.8,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Floe DX RGB 280 TT Premium Edition",
    "price": 146.6,
    "rpm": [
      500,
      1400
    ],
    "noise_level": [
      19.8,
      26.2
    ],
    "color": "Black / Gray",
    "size": 280
  },
  {
    "name": "Valkyrie DRAGONFANG",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake Floe DX RGB TT Premium Edition B",
    "price": 115.6,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      19,
      23.9
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Water 3.0 Performer",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 20,
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool GAMMAXX 200",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      17.8,
      34.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Nepton 240M",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      6.5,
      27
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "NoFan CR-80EH",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Vanxie",
    "price": null,
    "rpm": [
      800,
      3300
    ],
    "noise_level": [
      8.2,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "MSI Core Frozr XL",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.2,
      33.6
    ],
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 eSports DUO",
    "price": null,
    "rpm": [
      200,
      2100
    ],
    "noise_level": 24.4,
    "color": "Green / Black",
    "size": null
  },
  {
    "name": "Scythe Katana 5",
    "price": null,
    "rpm": [
      300,
      2300
    ],
    "noise_level": [
      7.3,
      28.83
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-234-ARGB",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.2,
      31.5
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING IS-27i",
    "price": null,
    "rpm": [
      800,
      2700
    ],
    "noise_level": [
      14,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DK-07A RAINBOW",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.2,
      25.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SPACE LCD",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-903-SD V3",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID Ultra RGB",
    "price": 229.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 30.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Silverstone NT07-AM2",
    "price": 21.42,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      15,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS16X",
    "price": 29.99,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 Plus",
    "price": 79,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      13,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK Orcus 140 RGW",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 140
  },
  {
    "name": "Noua Alaska",
    "price": null,
    "rpm": [
      800,
      3000
    ],
    "noise_level": 30.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone AR05",
    "price": 41.99,
    "rpm": 2500,
    "noise_level": [
      20,
      28.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "GameMax Ice Chill 120",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 28.8,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": 143,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 33.2,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Cougar Helor 360",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 37.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake A1964",
    "price": null,
    "rpm": 5500,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS5X Performa",
    "price": null,
    "rpm": [
      1400,
      2800
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H50",
    "price": null,
    "rpm": 1700,
    "noise_level": 30.32,
    "color": null,
    "size": 120
  },
  {
    "name": "be quiet! Dark Rock Pro 2",
    "price": null,
    "rpm": [
      1500,
      1700
    ],
    "noise_level": [
      13.5,
      26.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK THEMIS",
    "price": null,
    "rpm": [
      1000,
      1500
    ],
    "noise_level": 24.53,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX 300 R",
    "price": null,
    "rpm": [
      900,
      1600
    ],
    "noise_level": [
      17.8,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gigabyte AORUS ATC700",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      12,
      31
    ],
    "color": "Black / Orange",
    "size": null
  },
  {
    "name": "ARCTIC Alpine 12 Passive",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere C92",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      15.1,
      31.6
    ],
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "SilentiumPC Fortis 5 Dual Fan",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo HX6200D",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18.6,
      29.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SPACE LCD",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-902X-B",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 23.8,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "Valkyrie DRAGONFANG",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "White",
    "size": 360
  },
  {
    "name": "Gelid Solutions Glacier",
    "price": 29.99,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 35,
    "color": "White",
    "size": null
  },
  {
    "name": "TEAMGROUP SIREN GD240E",
    "price": 105.99,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.3,
      35.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright TRUE Spirit 140 Direct",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "EVGA ACX mITX",
    "price": 36.74,
    "rpm": [
      800,
      2800
    ],
    "noise_level": 33.4,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW XT V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      13.8,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Zalman CNPS9900MAX-B",
    "price": null,
    "rpm": [
      900,
      1700
    ],
    "noise_level": [
      18,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS17X",
    "price": 34.99,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 29,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Scythe Mugen 5",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.75
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone IceGem 280",
    "price": 151.38,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      9.8,
      23.4
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Corsair A50",
    "price": null,
    "rpm": [
      1600,
      2000
    ],
    "noise_level": [
      26,
      31.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "StarTech FAN7751U",
    "price": null,
    "rpm": 4500,
    "noise_level": 39,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master GeminII M4",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 64 PLUS",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC12DX",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      21.9,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT Kraken X60",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      21,
      37
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Cooler Master Seidon 120XL",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool ICE BLADE 200M",
    "price": null,
    "rpm": 2200,
    "noise_level": [
      17.8,
      30.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Nepton 120XL",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      6.5,
      27
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "NoFan CR-95C",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW 240L-W",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      20,
      38.2
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 33 eSports ONE (Black/Yellow)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": "Black / Yellow",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 eSports",
    "price": null,
    "rpm": [
      200,
      2100
    ],
    "noise_level": null,
    "color": "Yellow / Black",
    "size": null
  },
  {
    "name": "GameMax Gamma 500 RGB",
    "price": null,
    "rpm": [
      1000,
      1800
    ],
    "noise_level": 26.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax Aquafusion 240",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI CORE FROZR S",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.2,
      33.6
    ],
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ID-COOLING SE-226-XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Phanteks Glacier One 240MPH",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      34.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-225-XT BLACK V2",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 RGB",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic EX",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DASHFLOW XT LITE",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING SPACE LCD",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-802-SD V3",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Rosewill RCX-ZAIO-92",
    "price": 29.99,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14.5,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R8",
    "price": 39.95,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK MYA RBW",
    "price": 29.99,
    "rpm": [
      200,
      1400
    ],
    "noise_level": 28.43,
    "color": "Black",
    "size": null
  },
  {
    "name": "RAIJINTEK DELOS RBW",
    "price": 39.99,
    "rpm": [
      650,
      2000
    ],
    "noise_level": 22.95,
    "color": "Black",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Dolomit Advanced",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Enermax Liqtech TR4 II 240",
    "price": 168.77,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "RAIJINTEK EOS 240 RBW",
    "price": 59.99,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 240
  },
  {
    "name": "RAIJINTEK THEMIS BLACK",
    "price": 27.2,
    "rpm": [
      1000,
      1500
    ],
    "noise_level": 24.53,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo HX6240",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      28,
      37.6
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-226-XT",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-234-ARGB V2",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Dolomit Premium",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Sapphire NITRO+ S240-A",
    "price": null,
    "rpm": [
      405,
      2400
    ],
    "noise_level": [
      17.9,
      36.2
    ],
    "color": "Black / Silver",
    "size": 240
  },
  {
    "name": "KOLINK Umbra Void",
    "price": null,
    "rpm": 2200,
    "noise_level": 30,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Corsair A70",
    "price": null,
    "rpm": [
      1600,
      2000
    ],
    "noise_level": [
      26,
      31.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H70",
    "price": null,
    "rpm": [
      1600,
      2000
    ],
    "noise_level": [
      26,
      31.5
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master V10 Hybrid TEC",
    "price": null,
    "rpm": [
      800,
      2400
    ],
    "noise_level": 17,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Dark Knight II SD1283",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 64 GT",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40F-W",
    "price": 139.59,
    "rpm": 2200,
    "noise_level": 27,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool ICE BLADE 100",
    "price": null,
    "rpm": 2200,
    "noise_level": 31.6,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 eSports ONE (Black/Green)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool NEPTWIN WHITE",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright SilverArrow TR4",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      21,
      45
    ],
    "color": "Silver / Red",
    "size": null
  },
  {
    "name": "SilentiumPC Navis RGB 240",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML360P Silver Edition ARGB",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      30
    ],
    "color": "Silver / Black",
    "size": 360
  },
  {
    "name": "Rosewill PB240-RGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 26.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Gigabyte AORUS LIQUID COOLER",
    "price": null,
    "rpm": 2300,
    "noise_level": [
      22.3,
      44.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Scythe Mugen 5 Black RGB Edition",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright AXP-90R",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Orange / Red",
    "size": null
  },
  {
    "name": "Enermax AQUAFUSION 360",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARESGAME RIVER 5",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 26.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "MSI MAG CORELIQUID RH",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Water 3.0 Riing Red 140",
    "price": null,
    "rpm": [
      400,
      1500
    ],
    "noise_level": [
      18.5,
      26.4
    ],
    "color": "Black / Red",
    "size": 140
  },
  {
    "name": "ID-COOLING DK-19 PWM",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.2,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "EK EK-Nucleus AIO CR360 Vision D-RGB",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 33.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Inter-Tech ALSEYE MAX 120",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.5,
      32.5
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Jonsbo CR-1400 EVO Standard",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      22.3,
      33.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Valkyrie DRAGONFANG",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING FX240 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "YEYIAN Storm 1200",
    "price": null,
    "rpm": [
      1000,
      1800
    ],
    "noise_level": 26.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Macho Direct",
    "price": 46.72,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron A49",
    "price": 50.78,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      10.8,
      21.3
    ],
    "color": "Silver",
    "size": null
  },
  {
    "name": "Rosewill RCX-Z90-AL",
    "price": 20,
    "rpm": [
      600,
      3000
    ],
    "noise_level": [
      15,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK Orcus 360 RGW",
    "price": 79.99,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master CHD-00008-01-GP",
    "price": 24.99,
    "rpm": 2200,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron Q12",
    "price": 39.95,
    "rpm": null,
    "noise_level": [
      16,
      35.98
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Valkyrie VIND SL125",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "Enermax LIQMAX III RGB",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master Seidon 240V",
    "price": null,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      12,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Antec C40",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      16,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "GameMax Gamma 500 ARGB",
    "price": 55.18,
    "rpm": [
      1000,
      1800
    ],
    "noise_level": 26.3,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Asus TUF Gaming LC RGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Corsair H40",
    "price": null,
    "rpm": 2000,
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Evercool HPL-815EP",
    "price": null,
    "rpm": [
      1000,
      4000
    ],
    "noise_level": [
      12,
      40
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe BIG Shuriken 2 Rev. B",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      9.32,
      33.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Seidon 240M",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Water 3.0 Extreme",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 20,
    "color": null,
    "size": 240
  },
  {
    "name": "CRYORIG C1",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": 24,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright TRUE Spirit 120M(BW) Rev.A",
    "price": null,
    "rpm": [
      600,
      1300
    ],
    "noise_level": 25.4,
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Steropes RC-1206b",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      9.32,
      33.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 eSports Edition (Black/Red)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Fryzen",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.8,
      41.5
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 34 eSports",
    "price": null,
    "rpm": [
      200,
      2100
    ],
    "noise_level": null,
    "color": "Green / Black",
    "size": null
  },
  {
    "name": "RAIJINTEK JUNO PRO RBW",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240 RGB V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright AXP-90R",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Silver / Gray",
    "size": null
  },
  {
    "name": "Cougar AQUA",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 35,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Fractal Design Lumen S28 RGB",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      10,
      35.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "GAMDIAS CHIONE E2",
    "price": null,
    "rpm": 1800,
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING SE-207-XT ADVANCED",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper H410R White Edition",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      6,
      29
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alphacool Eisbaer Pro HPE Aurora",
    "price": null,
    "rpm": null,
    "noise_level": 31.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Noua Vex",
    "price": null,
    "rpm": 1500,
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Inter-Tech ALSEYE X360",
    "price": null,
    "rpm": 1600,
    "noise_level": 35.6,
    "color": "Gray / Black",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-214-XT-RX",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Red / Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-214-XT-WL",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool AG620 Digital",
    "price": null,
    "rpm": [
      300,
      1950
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Phanteks PH-TC12LS_BK",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS20X",
    "price": 29.99,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 29,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cougar FORZA 85 ESSENTIAL",
    "price": 71.77,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 34.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Enermax LIQMAX III ARGB",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      14,
      27
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Alpenf\u00f6hn Silvretta",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "In Win Nebula NR36",
    "price": 134.3,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 25,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-224-XTS MINI",
    "price": null,
    "rpm": [
      700,
      1600
    ],
    "noise_level": 31.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Scythe Mugen MAX",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      13,
      30.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": null,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH240 V2 Ultra EX ARGB Sync",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake CL-P0326",
    "price": null,
    "rpm": 4200,
    "noise_level": 44,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40-TB",
    "price": 77.79,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      10,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "TUNIQ Tower 120 Extreme",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      16,
      20
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 2.0 Pro",
    "price": null,
    "rpm": [
      1200,
      2000
    ],
    "noise_level": [
      10,
      27.36
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Phanteks PH-TC14PE_BK",
    "price": null,
    "rpm": [
      900,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone HE02",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman FX100",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake NiC C5",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      20,
      39.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NK85TZ/CS2",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      15,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R14",
    "price": 42.95,
    "rpm": [
      1500,
      7000
    ],
    "noise_level": [
      16,
      47.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Mugen 4",
    "price": null,
    "rpm": [
      400,
      1400
    ],
    "noise_level": [
      5.3,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron T450",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": [
      16,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "CRYORIG R1 Universal",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": [
      20,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright TRUE Spirit 140 POWER",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper D92",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      18,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 360",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.29
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Deepcool GAMMAXX S40",
    "price": null,
    "rpm": [
      900,
      1600
    ],
    "noise_level": [
      17.8,
      26.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "LEPA AquaChanger 240",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master Blizzard T2",
    "price": null,
    "rpm": 2200,
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 412S",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      16.1,
      22.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 3.0 Riing RGB 360",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 26.4,
    "color": null,
    "size": 360
  },
  {
    "name": "Scythe FUMA",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      13,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master V8 Ver.2",
    "price": null,
    "rpm": 1600,
    "noise_level": 36,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Riing Silent 12 Blue",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      13,
      18
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterAir Pro 4",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid ML240R RGB Phantom Gaming Edition",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Scythe Mugen 5 TUF Gaming Alliance",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      4,
      24.9
    ],
    "color": "Brown / Black",
    "size": null
  },
  {
    "name": "Deepcool GAMERSTORM CAPTAIN 360X WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "White / Black",
    "size": 360
  },
  {
    "name": "SilentiumPC Grandis 2 XE1436",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 21,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Antec Neptune 240 ARGB",
    "price": null,
    "rpm": [
      900,
      1600
    ],
    "noise_level": [
      20,
      36
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "SilentiumPC Fera 3 EVO ARGB",
    "price": null,
    "rpm": [
      250,
      1600
    ],
    "noise_level": null,
    "color": "White / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW X",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Akasa Vegas Chroma LG",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frost Spirit 140 RGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Fractal Design Lumen S28",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      10,
      35.5
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "ARCTIC Liquid Freezer II 360 RGB",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin X",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING ICEFLOW ARGB",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DK-01S",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool AG500",
    "price": null,
    "rpm": [
      300,
      1850
    ],
    "noise_level": 29.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "EK EK-Nucleus AIO CR240 Vision D-RGB",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 33.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool UL551 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noua Siberus TR240",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Magic EX",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Horizon ARGB",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-207-XT ARGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 30.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Deepcool AG620 Digital ARGB",
    "price": null,
    "rpm": [
      300,
      1950
    ],
    "noise_level": 29.4,
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone NT07-115X",
    "price": 27.06,
    "rpm": [
      1200,
      3400
    ],
    "noise_level": [
      18,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water 240 High Speed",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 36.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid Mirror",
    "price": null,
    "rpm": [
      650,
      1800
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Thermalright Core Matrix",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "White",
    "size": 240
  },
  {
    "name": "ARCTIC Alpine 64 Pro Rev 2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master DK9-7E52A-0L-GP",
    "price": 42.99,
    "rpm": 3200,
    "noise_level": 25.17,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9900ALED",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      18,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z775-LP",
    "price": null,
    "rpm": [
      600,
      2600
    ],
    "noise_level": [
      16,
      24.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm CORE92",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": 19.5,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master GeminII S524",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      15.1,
      31.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper 612",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS80F",
    "price": null,
    "rpm": 2500,
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Nepton 280L",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      21,
      39
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Thermalright Silver Arrow IB-E Extreme",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      21,
      45
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Kotetsu",
    "price": null,
    "rpm": [
      400,
      1400
    ],
    "noise_level": [
      5.3,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho Zero",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "SilentiumPC Spartan LT HE922",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      9.9,
      21.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Seidon 120V VER.2",
    "price": null,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      6.5,
      27
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool LUCIFER K2",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      18.2,
      32.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool LUCIFER V2",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      12.6,
      31.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Brocken 2",
    "price": null,
    "rpm": 1100,
    "noise_level": 19,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone Argon AR10-115XS",
    "price": 40.99,
    "rpm": [
      500,
      4000
    ],
    "noise_level": [
      18.07,
      39.03
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 120EX RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool CAPTAIN 240EX RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 33 TR (Black/White)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 12",
    "price": null,
    "rpm": null,
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11 - Passive",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA620P TUF Gaming Edition",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      6,
      31
    ],
    "color": "Black / Yellow",
    "size": null
  },
  {
    "name": "Rosewill ROCC-16002",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 23.6,
    "color": "Blue / Black",
    "size": null
  },
  {
    "name": "Zalman CNPS10X Optima II",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 27,
    "color": "White",
    "size": null
  },
  {
    "name": "Enermax Aquafusion 120",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool GAMERSTORM CAPTAIN 240X WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32.1,
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "ID-COOLING AURAFLOW X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Akasa Nero 3",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 24.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "upHere AC12RGB",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere CC120RGB",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black / White",
    "size": 120
  },
  {
    "name": "ID-COOLING SE-224-XT RGB",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.2,
      31.5
    ],
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Fractal Design Lumen S24",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer II 420 RGB",
    "price": null,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 420
  },
  {
    "name": "ID-COOLING DK-15 PWM",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      14.2,
      26.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW X 120 SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "Inter-Tech ALSEYE X120",
    "price": null,
    "rpm": 1600,
    "noise_level": 35.6,
    "color": "Gray / Black",
    "size": 120
  },
  {
    "name": "Thermalright Frozen Magic ARGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "White",
    "size": 240
  },
  {
    "name": "GameMax Iceberg 240 Rainbow",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FX240",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FX360",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-40X V3",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-902-SD V3",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Aqua Elite ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 28.2,
    "color": null,
    "size": 240
  },
  {
    "name": "Zalman ALPHA2 A24",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "AQIRYS Hydra ARGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      25,
      34
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright SilverArrow T8",
    "price": 80.75,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      19,
      25
    ],
    "color": "Silver / Red",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe",
    "price": null,
    "rpm": 2000,
    "noise_level": 22.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Dynatron K5",
    "price": 28.95,
    "rpm": [
      1000,
      2500
    ],
    "noise_level": [
      14.7,
      29.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Kelvin T12",
    "price": null,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 26.9,
    "color": null,
    "size": 120
  },
  {
    "name": "Alpenf\u00f6hn Panorama rev.B",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      14,
      22.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 1750,
    "noise_level": 29.8,
    "color": "Black",
    "size": 420
  },
  {
    "name": "Zalman CNPS10X Performa",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      17,
      24
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Zalman CNPS9700 LED",
    "price": null,
    "rpm": [
      1250,
      2800
    ],
    "noise_level": [
      19.5,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-C12P SE14",
    "price": null,
    "rpm": [
      750,
      1200
    ],
    "noise_level": [
      10.1,
      19.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Frio OCK",
    "price": null,
    "rpm": [
      1200,
      2100
    ],
    "noise_level": [
      21,
      48
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9500A-LED",
    "price": null,
    "rpm": [
      1350,
      2600
    ],
    "noise_level": [
      18,
      27.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14PE",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master TPC 812",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11 Pro Rev. 2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 14,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11 Plus",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 14,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC12DX_BK",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      21.9,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPQ-12025",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": 38.1,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 3.0 Pro",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 20,
    "color": null,
    "size": 120
  },
  {
    "name": "be quiet! Dark Rock Advanced C1",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      6.6,
      18.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Intel BXRTS2011AC",
    "price": null,
    "rpm": [
      1000,
      3000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool FROSTWIN V2.0",
    "price": null,
    "rpm": 1600,
    "noise_level": [
      17.8,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Kelvin S36",
    "price": null,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 26.9,
    "color": null,
    "size": 360
  },
  {
    "name": "Thermalright Silver Arrow ITX",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      17,
      24.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Apache II",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright AXP-100 Muscle",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": [
      22,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i32",
    "price": 67,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Pro 240",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermalright Le Grand Macho",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Brontes RC-1001b",
    "price": null,
    "rpm": [
      650,
      2200
    ],
    "noise_level": [
      10.5,
      31.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKDT-1000",
    "price": null,
    "rpm": [
      800,
      3300
    ],
    "noise_level": [
      8.2,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Silent Loop 120",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      16.1,
      36.9
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "be quiet! Silent Loop 240",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      16.1,
      36.9
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Engine 27",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      13,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T50 AXE (White)",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      18.9,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Sella",
    "price": null,
    "rpm": [
      850,
      2200
    ],
    "noise_level": [
      14,
      29.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 eSports Edition (Black/Green)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Kabuto 3",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      4,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW+ 120 SNOW",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "ID-COOLING FROSTFLOW+ 280",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16.8,
      32.6
    ],
    "color": "Black / White",
    "size": 280
  },
  {
    "name": "ID-COOLING AURAFLOW 240 SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "CRYORIG H7 Plus",
    "price": null,
    "rpm": [
      300,
      1600
    ],
    "noise_level": 25,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master Hyper 212 RGB Phantom Gaming Edition",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      8,
      30
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Jonsbo CR-201 HIVES (White)",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      18,
      26.1
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool GAMMAXX GT TGA",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      17.8,
      27
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo TW3-240",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 25,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Silverstone HE01-V2",
    "price": 100.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      18,
      41
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Gelid Solutions Phantom",
    "price": null,
    "rpm": [
      750,
      1600
    ],
    "noise_level": [
      12,
      26.7
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Gelid Solutions Sirocco",
    "price": null,
    "rpm": [
      750,
      2000
    ],
    "noise_level": 40.4,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-207",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black / White",
    "size": null
  },
  {
    "name": "SilentiumPC Fera 3 RGB HE1224",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Enermax AQUAFUSION",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water 360",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Assassin King 120 Mini",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright Assassin King 120 Plus",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "GAMDIAS BOREAS E1",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      31
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Phanteks Glacier One 280MPH",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": [
      18,
      39.1
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermaltake Engine 17",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      11,
      23
    ],
    "color": "Silver",
    "size": null
  },
  {
    "name": "Thermaltake TOUGHLIQUID ARGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.3,
    "color": "Green",
    "size": 240
  },
  {
    "name": "ID-COOLING DK-03A RGB PWM",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14.2,
      25.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Jonsbo PISA A4",
    "price": null,
    "rpm": [
      800,
      1850
    ],
    "noise_level": 36.8,
    "color": "White",
    "size": null
  },
  {
    "name": "Jonsbo CR-3000 Standard",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      22,
      32
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Jonsbo HX5230",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      25.2,
      37.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic EX",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING FX360 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-50 MAX RGB V3",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 31.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING SE-225-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AG620 Digital ARGB",
    "price": null,
    "rpm": [
      300,
      1950
    ],
    "noise_level": 29.4,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Frozen Notte ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "White",
    "size": 240
  },
  {
    "name": "RAIJINTEK Orcus 280 RGW",
    "price": 74.99,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 280
  },
  {
    "name": "FSP Group Windale 4",
    "price": 19.99,
    "rpm": [
      600,
      1600
    ],
    "noise_level": 32,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermaltake CLP0552",
    "price": 24.99,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Sapphire NITRO+ S360-A",
    "price": null,
    "rpm": [
      405,
      2400
    ],
    "noise_level": [
      17.9,
      36.2
    ],
    "color": "Black / Silver",
    "size": 360
  },
  {
    "name": "Antec KUHLER H2O 950",
    "price": 65,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Silverstone NT06-PRO-V2",
    "price": 76.68,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": null,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Zalman CNPS16X",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 27,
    "color": "Black",
    "size": null
  },
  {
    "name": "In Win SR36 PRO",
    "price": 154.63,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Dynatron R13",
    "price": 47.51,
    "rpm": [
      1100,
      6000
    ],
    "noise_level": [
      19.1,
      53.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R15",
    "price": 43.95,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "In Win SR24",
    "price": 125.85,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Valkyrie DRAGONFANG",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Gelid Solutions SnowStorm",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      10,
      24.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT ARGB DUET",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      13.8,
      30.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frozen Horizon ARGB",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Cooler Master GeminII S",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Vortex Plus",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      17,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-SAM17",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-92HA3",
    "price": 36.38,
    "rpm": 2000,
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-100HA2",
    "price": 22.95,
    "rpm": 2400,
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS11X Performa",
    "price": null,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      17,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0587",
    "price": 74.98,
    "rpm": [
      1200,
      1800
    ],
    "noise_level": 39,
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Dark Rock 2",
    "price": null,
    "rpm": 1300,
    "noise_level": [
      8.7,
      21.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40-W",
    "price": null,
    "rpm": 2200,
    "noise_level": 31.2,
    "color": null,
    "size": null
  },
  {
    "name": "Antec KUHLER H2O 650",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master Hyper 412 Slim",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman FX70",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK PALLAS Red",
    "price": 40.2,
    "rpm": [
      650,
      1400
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK TRITON",
    "price": null,
    "rpm": [
      1000,
      2600
    ],
    "noise_level": [
      21.6,
      36.6
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Xigmatek Gaia II",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Akasa Nero LX",
    "price": null,
    "rpm": [
      600,
      1900
    ],
    "noise_level": [
      11.5,
      31.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-VC45",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax Liqmax II 120",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      16,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "CRYORIG A40 ULTIMATE",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      13,
      37
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Liquid Freezer 120",
    "price": null,
    "rpm": [
      500,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "ID-COOLING IS-60",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      13.8,
      30.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-214X",
    "price": null,
    "rpm": 1800,
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho X2 Limited Edition",
    "price": null,
    "rpm": 800,
    "noise_level": 15,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240 EX",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Alpine 20 PLUS CO",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Silent Loop 280",
    "price": null,
    "rpm": 1600,
    "noise_level": [
      16.1,
      37.3
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Deepcool Maelstrom 120T RF",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      17.8,
      34.1
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "RAIJINTEK TISIS CORE EDITION",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Matterhorn Rev. C \u2013 Black Edition",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 18.2,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 360EX WHITE RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Enermax LIQTECH TR4 280",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      14,
      25
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "SilentiumPC Fera 3 HE1224 v2",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Castle 280 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      19.8,
      35.4
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "SilentiumPC Navis RGB 120",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Cooler Master ML120L TUF Gaming Alliance Edition RGB",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": 15,
    "color": null,
    "size": 120
  },
  {
    "name": "CRYORIG H7 ULTRA",
    "price": null,
    "rpm": [
      300,
      1600
    ],
    "noise_level": 25,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Thermalright AXP-100RH",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": null,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "GameMax Iceberg 120 ARGB",
    "price": null,
    "rpm": 1100,
    "noise_level": 25,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Silverstone Tundra TD02-SLIM-V2",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      16.5,
      27.4
    ],
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Cooler Master MA410P TUF Gaming Edition",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": null,
    "color": "Yellow / Black",
    "size": null
  },
  {
    "name": "Rosewill ROCC-17001",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      13,
      25
    ],
    "color": "Silver",
    "size": null
  },
  {
    "name": "GameMax Ice Chill 240",
    "price": null,
    "rpm": [
      800,
      1900
    ],
    "noise_level": 28.8,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-224-XT ARGB V2",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.2,
      31.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cougar AQUA",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": 34,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Cougar AQUA",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 35,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Fractal Design Lumen S24 RGB",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "MSI MAG CORELIQUID R",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright Ultra120EX REV.4",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING DK-17 PWM",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14.2,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-914-XT BASIC V2",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-902-SD V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": null,
    "size": null
  },
  {
    "name": "Jonsbo PISA A4",
    "price": null,
    "rpm": [
      800,
      1850
    ],
    "noise_level": 36.8,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Inter-Tech ALSEYE H120",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      13.5,
      35.2
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Cooler Master MasterAir MA824 Stealth 30th Anniversary Edition",
    "price": null,
    "rpm": null,
    "noise_level": [
      0,
      24.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-65-XT",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 32.3,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Guardian",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "White",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Notte ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "White",
    "size": 360
  },
  {
    "name": "Zalman ALPHA2 A24",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.7,
    "color": "White",
    "size": 240
  },
  {
    "name": "Evercool HPFI-10025",
    "price": null,
    "rpm": 1800,
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone AR11",
    "price": 50.99,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      19.3,
      44.5
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Inter-Tech ALSEYE X240",
    "price": null,
    "rpm": 1600,
    "noise_level": 35.6,
    "color": "Gray / Black",
    "size": 240
  },
  {
    "name": "Evercool HPM-12025",
    "price": 44,
    "rpm": [
      800,
      2500
    ],
    "noise_level": [
      15,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-80HA3",
    "price": 32.92,
    "rpm": 2200,
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master GeminII M5 LED",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 31,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax AQUAFUSION ADV",
    "price": 64.99,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "Noua Ena",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 28,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Inter-Tech ALSEYE H240",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      13.5,
      35.2
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-206-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Cooler Master DP6-9EDSA-0L-GP",
    "price": null,
    "rpm": 2600,
    "noise_level": 24.5,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master RR-H101-22FK-RI",
    "price": null,
    "rpm": 2200,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master RR-LEE-L911-GP",
    "price": 33.5,
    "rpm": 2200,
    "noise_level": 17,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman 9500A",
    "price": null,
    "rpm": [
      1350,
      2600
    ],
    "noise_level": [
      18,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xion XON-HP9310P",
    "price": null,
    "rpm": [
      1000,
      3000
    ],
    "noise_level": [
      16,
      25.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7000C-AlCu",
    "price": null,
    "rpm": [
      1350,
      2400
    ],
    "noise_level": [
      17,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z90-CP",
    "price": null,
    "rpm": [
      600,
      3000
    ],
    "noise_level": [
      13.5,
      26.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Shuriken Rev. B 3",
    "price": null,
    "rpm": [
      650,
      2200
    ],
    "noise_level": [
      10.5,
      31.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT07-1156",
    "price": null,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      15,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-570D",
    "price": null,
    "rpm": [
      900,
      2300
    ],
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 13 Pro",
    "price": null,
    "rpm": [
      300,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-U9DX 1366",
    "price": null,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      7.9,
      17.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Venomous X - RT",
    "price": null,
    "rpm": 1300,
    "noise_level": 24.1,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 11 GT Rev. 2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCNJ-3100",
    "price": null,
    "rpm": [
      470,
      1900
    ],
    "noise_level": [
      7.05,
      37
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT HAVIK 140",
    "price": null,
    "rpm": 1200,
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 2.0 Extreme",
    "price": null,
    "rpm": [
      1200,
      2000
    ],
    "noise_level": 27.36,
    "color": null,
    "size": 240
  },
  {
    "name": "NZXT HAVIK 120",
    "price": null,
    "rpm": [
      1200,
      1500
    ],
    "noise_level": [
      18,
      22
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS8900 Quiet",
    "price": null,
    "rpm": [
      1000,
      1500
    ],
    "noise_level": [
      19,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R16",
    "price": null,
    "rpm": [
      1000,
      6000
    ],
    "noise_level": [
      21.5,
      55.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R9",
    "price": 41.95,
    "rpm": [
      1000,
      4500
    ],
    "noise_level": [
      13.14,
      45.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R4",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i30 CO",
    "price": null,
    "rpm": [
      400,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Slimhero",
    "price": null,
    "rpm": [
      750,
      1600
    ],
    "noise_level": [
      12,
      25.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R17",
    "price": null,
    "rpm": [
      1000,
      2500
    ],
    "noise_level": [
      17,
      31.92
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright HR-02 Rev.A(BW)",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho Rev.A.",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NC85TZ(RB)",
    "price": 48.89,
    "rpm": [
      210,
      2100
    ],
    "noise_level": 28.8,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ELC-LM120S-HP",
    "price": null,
    "rpm": 2500,
    "noise_level": 30,
    "color": null,
    "size": 120
  },
  {
    "name": "RAIJINTEK THEMIS Evo",
    "price": 48.18,
    "rpm": [
      1000,
      1500
    ],
    "noise_level": 24.53,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool LUCIFER",
    "price": null,
    "rpm": [
      700,
      1400
    ],
    "noise_level": [
      17.8,
      31.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool NEPTWIN V2.0",
    "price": null,
    "rpm": 1300,
    "noise_level": 26.6,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.29
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Water 3.0 Extreme S",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 20,
    "color": null,
    "size": 240
  },
  {
    "name": "Akasa Venom Medusa",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      6.9,
      28.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "LEPA AquaChanger 120",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Thermalright TRUE Spirit 140 (BW)",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool ASSASSIN II",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      17.8,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40F-RF",
    "price": null,
    "rpm": [
      500,
      1200
    ],
    "noise_level": [
      10,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Antec K\u00fchler H600 Pro",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      16,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Alpenf\u00f6hn Brocken 2 PCGH",
    "price": null,
    "rpm": 700,
    "noise_level": 18.5,
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Matterhorn Rev. C \u2013 White Edition",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 18.2,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 TR (Black/Red)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING Auraflow 240 RGB",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Antec Mercury 240 RGB",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 36,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Antec Mercury 360 RGB",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 36,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "Antec Mercury 120",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": "Black / White",
    "size": 120
  },
  {
    "name": "Silverstone AR08-V2",
    "price": null,
    "rpm": [
      1500,
      2800
    ],
    "noise_level": [
      14.1,
      27.7
    ],
    "color": "Blue / White",
    "size": null
  },
  {
    "name": "ARCTIC Alpine AM4 LP",
    "price": null,
    "rpm": [
      100,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Thermalright AXP-200 Muscle",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "GAMDIAS CHIONE P1A-360R",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      16,
      22
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "GameMax Iceberg 240 ARGB",
    "price": null,
    "rpm": 1100,
    "noise_level": 25,
    "color": "Black",
    "size": 240
  },
  {
    "name": "GameMax Iceberg 120",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Rosewill PB120-RGB",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 27.8,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax Liqfusion 360",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Deepcool GAMERSTORM CAPTAIN 240PRO V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Deepcool Neptwin RGB",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 27,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Gelid Solutions Phantom Black",
    "price": null,
    "rpm": [
      750,
      1600
    ],
    "noise_level": [
      12,
      26.7
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "upHere ACC92RGB",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere CCF150ARGB",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere CC2401-usa",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Silver Arrow 130",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      19,
      23
    ],
    "color": "Silver",
    "size": null
  },
  {
    "name": "Akasa X4",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      17,
      29.5
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool CASTLE 240EX RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Alpenf\u00f6hn Glacier Water 240",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cougar AQUA",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 35,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Fractal Design Lumen S36",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      10,
      33.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ARCTIC Liquid Freezer II 280 RGB",
    "price": null,
    "rpm": [
      200,
      1900
    ],
    "noise_level": 22.5,
    "color": "Black",
    "size": 280
  },
  {
    "name": "MSI MAG CORELIQUID RH",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.3,
      34.3
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright AXP-90i FULL Copper",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Orange / Brown",
    "size": null
  },
  {
    "name": "Thermaltake Water 3.0 Riing Red 280",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      18.5,
      26.4
    ],
    "color": "Black / Red",
    "size": 280
  },
  {
    "name": "Vetroo U6 Pro",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18.1,
      30.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING DK-03i PWM BLUE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-40X V2",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      14,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213V2",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING ICEFLOW 240 ARGB SNOW",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "In Win BR24",
    "price": 110,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 35.5,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Magic 240",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noua Numb",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": 29,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic ARGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 240
  },
  {
    "name": "GameMax Iceberg 120 Rainbow",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Valkyrie SYN",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "Black / Red",
    "size": 240
  },
  {
    "name": "Thermalright TA120 EX Black",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-912i-PWM",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 22.8,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool AG620 Digital",
    "price": null,
    "rpm": [
      300,
      1950
    ],
    "noise_level": 29.4,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Frozen Guardian",
    "price": null,
    "rpm": 2150,
    "noise_level": 27,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake TH280 V2 Ultra EX ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 30.7,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Frozen Warframe X",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright Frozen Notte ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake Astria 600 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "AQIRYS Hydra ARGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      25,
      34
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "RAIJINTEK Orcus 240 RGW",
    "price": 69.99,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Iceberg Thermal IceSLEET G4 OC",
    "price": 29.99,
    "rpm": [
      600,
      1400
    ],
    "noise_level": 22.5,
    "color": "Teal / Silver",
    "size": null
  },
  {
    "name": "Jonsbo HX6210",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": [
      20,
      31.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermaltake MeOrb II",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18.5,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Fractal Design Kelvin S24",
    "price": null,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 26.9,
    "color": null,
    "size": 240
  },
  {
    "name": "Silverstone Argon AR10-115XP",
    "price": 49.99,
    "rpm": [
      500,
      4000
    ],
    "noise_level": [
      18.07,
      39.03
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Rev. 2 Tranquillo",
    "price": 44.96,
    "rpm": [
      750,
      1500
    ],
    "noise_level": [
      12,
      25.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK JUNO-X",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 26,
    "color": "Red / Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer 50 TR (w/ARGB Controller)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 23.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master V6 GT",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      15,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master RR-V6SV-22PR-R1",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      15,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Frio",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": [
      20,
      43
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0503",
    "price": null,
    "rpm": 2900,
    "noise_level": 29.58,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9900MAX-R",
    "price": null,
    "rpm": [
      900,
      1700
    ],
    "noise_level": [
      18,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS10X Extreme",
    "price": null,
    "rpm": [
      1000,
      2150
    ],
    "noise_level": [
      20,
      39
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS10X QUIET",
    "price": null,
    "rpm": [
      700,
      1400
    ],
    "noise_level": 26,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7000C-Cu",
    "price": null,
    "rpm": [
      1700,
      2400
    ],
    "noise_level": [
      13.5,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Thors Hammer",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT07-775",
    "price": null,
    "rpm": [
      1200,
      1800
    ],
    "noise_level": [
      15,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Aegir SD128264",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek EP-CD903",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Nexus LOW-7000 R2",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      15,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC221PWM",
    "price": null,
    "rpm": [
      900,
      2400
    ],
    "noise_level": [
      17.8,
      26.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14PE_BL",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master X6 Elite",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      9,
      34.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 2.0 Performer",
    "price": null,
    "rpm": [
      1200,
      2000
    ],
    "noise_level": [
      10,
      27.36
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Thermaltake Contac 16",
    "price": null,
    "rpm": 2400,
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0600",
    "price": null,
    "rpm": [
      1000,
      2400
    ],
    "noise_level": [
      19.3,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14CS_BK",
    "price": null,
    "rpm": 700,
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-ARMGD",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC12DX_RD",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      21.9,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Swiftech H220",
    "price": null,
    "rpm": [
      1200,
      3000
    ],
    "noise_level": [
      16,
      33
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master RR-T812-24PK-R2",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      19,
      40
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS2X",
    "price": null,
    "rpm": [
      1500,
      2600
    ],
    "noise_level": [
      17.39,
      22.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright TS-120M(BW)",
    "price": null,
    "rpm": [
      600,
      1300
    ],
    "noise_level": 24.5,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT06-PRO",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho-120",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Nepton 140XL",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      21,
      39
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Xigmatek Janus LD1266",
    "price": null,
    "rpm": 1200,
    "noise_level": [
      19.2,
      22.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright SILVER ARROW IB-E",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      21,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright TRUE Spirit 90M Rev.A",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 27,
    "color": null,
    "size": null
  },
  {
    "name": "LEPA LPALV12-BK",
    "price": null,
    "rpm": 2200,
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "Swiftech H220-X",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      33
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Scythe Ashura Shadow",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      13,
      30.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P008-AL09WT-A",
    "price": null,
    "rpm": 1800,
    "noise_level": 21,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone TD02-E",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Frio Silent 14",
    "price": 44.88,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      12,
      19.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master GeminII S524 Ver 2",
    "price": null,
    "rpm": 2000,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Dark Knight SD1483 Frostbourne",
    "price": null,
    "rpm": [
      800,
      1200
    ],
    "noise_level": 18,
    "color": null,
    "size": null
  },
  {
    "name": "SilentiumPC Grandis XE1236",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 21,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i30",
    "price": null,
    "rpm": [
      400,
      1350
    ],
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax Liqmax II 240",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      16,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Silverstone NT01-PRO",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240 WHITE",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.29
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "ID-COOLING SE-902",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      23.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Raidmax Cobra 240",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 21.2,
    "color": null,
    "size": 240
  },
  {
    "name": "Reeven Justice",
    "price": 65.2,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 120 EX",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Deepcool CAPTAIN 120EX WHITE",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Thermaltake Riing Silent 12 Pro Blue",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      12,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool ICE BLADE PRO V2.0",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Maelstrom 240T",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      17.8,
      34.1
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Deepcool Maelstrom 240T RF",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      17.8,
      34.1
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "RAIJINTEK EREBOSS CORE EDITION",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING ICEKIMO 120W",
    "price": null,
    "rpm": 2500,
    "noise_level": [
      18,
      26.4
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master MasterAir Pro 3",
    "price": null,
    "rpm": [
      650,
      3000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Seidon 240P",
    "price": null,
    "rpm": [
      800,
      2400
    ],
    "noise_level": [
      12,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Contac 39",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      15,
      33.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-40V3",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "OcUK 240mm Extreme",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": 240
  },
  {
    "name": "ARCTIC Freezer 33 eSports Edition (Black/White)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 PENTA",
    "price": null,
    "rpm": [
      120,
      1350
    ],
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS8X Optima",
    "price": null,
    "rpm": [
      1200,
      2100
    ],
    "noise_level": [
      18.2,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 240EX RGB WH",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.6,
      31.3
    ],
    "color": "White / Black",
    "size": 240
  },
  {
    "name": "ROCCAT ROCC-16003",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": 25,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "RAIJINTEK LETO W",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 29,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "Cooler Master MasterAir MA410M TUF Gaming Edition",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      6,
      31
    ],
    "color": "Black / Yellow",
    "size": null
  },
  {
    "name": "Antec Mercury 120 RGB",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 36,
    "color": "Black / White",
    "size": 120
  },
  {
    "name": "Rosewill PB240",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 34.1,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Alphacool EISBAER LT120",
    "price": null,
    "rpm": [
      550,
      1700
    ],
    "noise_level": 29,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax Liqtech II 360",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "GAMDIAS CHIONE E1A-120R",
    "price": null,
    "rpm": [
      1200,
      1500
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright ARO-M14O",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": "Orange / Silver",
    "size": null
  },
  {
    "name": "GAMDIAS CHIONE M1A 240R",
    "price": null,
    "rpm": [
      1200,
      1500
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "CRYORIG C7 RGB",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": 30,
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool Captain 240 Pro",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 30,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright MACHO Rev.C",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      19,
      23
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Enermax LIQTECH II 360",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "Enermax Liqtech II 280",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      14,
      25
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "Jonsbo HP-400",
    "price": null,
    "rpm": [
      800,
      3000
    ],
    "noise_level": [
      14,
      33
    ],
    "color": "Blue / White",
    "size": null
  },
  {
    "name": "upHere CCF150RD",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere AC12BE",
    "price": null,
    "rpm": [
      600,
      1750
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere CC1201 Red",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black / White",
    "size": 120
  },
  {
    "name": "upHere CC2402-usa",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "SilentiumPC Navis RGB 360",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "SilentiumPC Fortis 3 RGB HE1425",
    "price": null,
    "rpm": [
      500,
      1400
    ],
    "noise_level": null,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Brocken 3",
    "price": null,
    "rpm": [
      400,
      1050
    ],
    "noise_level": 22,
    "color": "Black",
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Brocken 3",
    "price": null,
    "rpm": [
      400,
      1050
    ],
    "noise_level": 22,
    "color": "White",
    "size": null
  },
  {
    "name": "Apacer ZADAK Spark 240",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      18,
      25
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Enermax AQUAFUSION",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      17,
      32.6
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "GAMDIAS CHIONE E1",
    "price": null,
    "rpm": 1500,
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Thermalright TA140 EX",
    "price": null,
    "rpm": 1800,
    "noise_level": 30.2,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Akasa Soho H4",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      14.2,
      31.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Asus TUF Gaming LC RGB",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 29,
    "color": "Red / Black",
    "size": 240
  },
  {
    "name": "ID-COOLING DK-15",
    "price": null,
    "rpm": 2200,
    "noise_level": 28.5,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-913-R",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-223 BASIC",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DASHFLOW 360",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "In Win Nebula NR24",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 25,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "In Win BR36",
    "price": 128.9,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 35.5,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "Cooler Master X Dream P115",
    "price": null,
    "rpm": [
      900,
      4000
    ],
    "noise_level": [
      19,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool UL551 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noua Siberus Pro 240",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 32,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noua Polaris LM240",
    "price": null,
    "rpm": 2200,
    "noise_level": 38,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Noua Numb",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": 29,
    "color": "White",
    "size": null
  },
  {
    "name": "Deepcool LE320",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Deepcool LE320",
    "price": null,
    "rpm": [
      500,
      2250
    ],
    "noise_level": 32.9,
    "color": "White",
    "size": 120
  },
  {
    "name": "Thermalright Frozen Fusion",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-30A BLACK",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-30i BLACK",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING FX360",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 360
  },
  {
    "name": "ID-COOLING ZOOMFLOW XT ELITE",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.2,
      31.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING ZOOMFLOW XT ELITE",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.2,
      31.5
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING ZOOMFLOW XT V2",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      13.8,
      35.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING SE-214-XT HAFF",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 30.5,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-XT-ARGB",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-XT",
    "price": null,
    "rpm": [
      500,
      2200
    ],
    "noise_level": 25.8,
    "color": "White",
    "size": null
  },
  {
    "name": "Thermalright Frozen Warframe ARGB",
    "price": null,
    "rpm": 1750,
    "noise_level": 29.8,
    "color": "White",
    "size": 420
  },
  {
    "name": "Thermalright Frozen Notte ARGB V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 27.7,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermaltake Astria 200 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone Argon AR09-115XP",
    "price": 35.99,
    "rpm": [
      1200,
      5000
    ],
    "noise_level": [
      18.02,
      42.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool EC-NK804A-925EP",
    "price": 19.48,
    "rpm": 2750,
    "noise_level": 28.2,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake TH420 V2 Ultra EX ARGB Sync",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 30.7,
    "color": "Black",
    "size": 420
  },
  {
    "name": "ARCTIC Freezer 33 CO",
    "price": 54,
    "rpm": null,
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Jonsbo HX6240",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      28,
      37.6
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Noua Siberus Pro 120",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 32,
    "color": "Black",
    "size": 120
  },
  {
    "name": "RAIJINTEK Orcus 120 RGW",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 120
  },
  {
    "name": "GAMDIAS CHIONE E1",
    "price": null,
    "rpm": 1500,
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Jonsbo HX6210",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": [
      20,
      31.6
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Valkyrie SYN",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": 29,
    "color": "White / Blue",
    "size": 240
  },
  {
    "name": "Antec KUHLER Flow",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Hyper N520",
    "price": null,
    "rpm": null,
    "noise_level": 19,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master RR-H101-22FK-RA",
    "price": null,
    "rpm": 2200,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master S2N-PLMHS-07-GP",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake A4021",
    "price": 47.99,
    "rpm": 2200,
    "noise_level": 18,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0401",
    "price": 69.98,
    "rpm": [
      1300,
      2000
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0466",
    "price": null,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      19,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0579",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      15,
      33.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS 7500 AlCu LED",
    "price": null,
    "rpm": [
      1150,
      2300
    ],
    "noise_level": [
      17,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCNJ-3000",
    "price": null,
    "rpm": [
      470,
      1900
    ],
    "noise_level": [
      9.8,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCSMZ-2000",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      7.2,
      31.07
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT06-E",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek EP-CD901",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek LOKI SD963",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      20,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Cobra - D984",
    "price": null,
    "rpm": [
      1000,
      2800
    ],
    "noise_level": [
      20,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm CF800-MK III",
    "price": null,
    "rpm": [
      900,
      2600
    ],
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-560D",
    "price": null,
    "rpm": [
      900,
      2300
    ],
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek HDT-S1284F",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS11X Extreme",
    "price": null,
    "rpm": [
      1000,
      1950
    ],
    "noise_level": [
      17,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master DI5-9HDSC-A1-GP",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool NI01-9525EP",
    "price": null,
    "rpm": 2600,
    "noise_level": 33,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0555",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      12,
      16
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 13 Limited Edition",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "EVGA M020-00-000234",
    "price": null,
    "rpm": [
      750,
      2500
    ],
    "noise_level": [
      13.2,
      41.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPI-12025",
    "price": null,
    "rpm": [
      1200,
      1800
    ],
    "noise_level": [
      23,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Prime SD1484",
    "price": null,
    "rpm": [
      800,
      1200
    ],
    "noise_level": 18,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Rev. 1 Tranquillo",
    "price": null,
    "rpm": [
      750,
      1500
    ],
    "noise_level": [
      12,
      25.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC3001IE",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      17.8,
      34.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Megahalems Rev.B",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Antec KUHLER H2O 920",
    "price": null,
    "rpm": [
      700,
      2400
    ],
    "noise_level": 27.4,
    "color": null,
    "size": 120
  },
  {
    "name": "Sunbeam Twister 120",
    "price": null,
    "rpm": null,
    "noise_level": 16,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Silver Arrow",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Slim Silence I-Plus",
    "price": null,
    "rpm": [
      1200,
      2600
    ],
    "noise_level": [
      15,
      27.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS12X",
    "price": null,
    "rpm": [
      850,
      1200
    ],
    "noise_level": [
      22,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7700ALCULED",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      22.7,
      37.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm BTF90",
    "price": null,
    "rpm": [
      750,
      2500
    ],
    "noise_level": [
      18,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-GNSS",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NK35TZ/RPW/V2",
    "price": null,
    "rpm": [
      900,
      2800
    ],
    "noise_level": [
      12,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-MGH-C",
    "price": null,
    "rpm": null,
    "noise_level": 26,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC231PWM",
    "price": null,
    "rpm": [
      900,
      2400
    ],
    "noise_level": [
      17.8,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC2001IE",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.4,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Slim Silence A-Plus",
    "price": null,
    "rpm": [
      1200,
      2600
    ],
    "noise_level": [
      15,
      27.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman ZM-CNPS14X",
    "price": null,
    "rpm": [
      950,
      1350
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone SST-HE01",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      18,
      41
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS8000B",
    "price": null,
    "rpm": [
      1400,
      2800
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-120HA5",
    "price": null,
    "rpm": 1600,
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS8900 Extreme",
    "price": null,
    "rpm": [
      1250,
      2800
    ],
    "noise_level": [
      19.5,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i30 Extreme",
    "price": null,
    "rpm": [
      400,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer A30",
    "price": null,
    "rpm": [
      400,
      1350
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKTN-4000",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      7.2,
      31.07
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan EC-TTC-NC05TZ",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      15.3,
      29
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Dark Knight SD1283",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "NZXT Respire T20",
    "price": null,
    "rpm": [
      1300,
      1800
    ],
    "noise_level": [
      26.5,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7000V(AL)-1-PWM",
    "price": null,
    "rpm": [
      800,
      2600
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Megahalems (No Fans)",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC12DX_BL",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      21.9,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Silent Spirit",
    "price": null,
    "rpm": [
      900,
      2400
    ],
    "noise_level": [
      10,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPO-12025",
    "price": null,
    "rpm": [
      1400,
      2200
    ],
    "noise_level": [
      16,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Silver Arrow Extreme",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      21,
      45
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Eisberg 240L Prestige",
    "price": null,
    "rpm": 1600,
    "noise_level": 20.5,
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master RR-T612-20PK-R1",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-GNSS-BK",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS90F",
    "price": null,
    "rpm": 2300,
    "noise_level": 29,
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Shadow Rock Pro SR1",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      7.8,
      21.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "be quiet! Shadow Rock Topflow SR1",
    "price": null,
    "rpm": 1500,
    "noise_level": [
      9.6,
      24.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe Ashura",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      13,
      30.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0606",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      18,
      30.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 7 GT",
    "price": null,
    "rpm": 2000,
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLW0214",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": [
      20,
      43
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Enermax ETS-T40-BK",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0605",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      18,
      30.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Swiftech H320",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      33
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "Thermalright TS-120M",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      17,
      28.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7000V(AL)-1-PWMB",
    "price": null,
    "rpm": [
      800,
      2600
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Glacer 240L",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      19,
      40.33
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Antec KUHLER H2O 1250",
    "price": null,
    "rpm": [
      600,
      2400
    ],
    "noise_level": [
      16,
      38
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Dynatron K17",
    "price": 41.95,
    "rpm": [
      1000,
      2500
    ],
    "noise_level": [
      17,
      31.92
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R27",
    "price": 43.53,
    "rpm": [
      1000,
      3800
    ],
    "noise_level": [
      16,
      43.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i11",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax Liqtech 120X",
    "price": null,
    "rpm": [
      600,
      2500
    ],
    "noise_level": [
      15,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Enermax ETS-N30-HE",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      16,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Akasa Nero 3",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": 24.6,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake NiC L31",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      18,
      34.79
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7000-AlCu",
    "price": null,
    "rpm": [
      1350,
      2400
    ],
    "noise_level": [
      17,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright HR-22",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK TISIS",
    "price": null,
    "rpm": [
      600,
      1000
    ],
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK AIDOS",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 28.87,
    "color": null,
    "size": null
  },
  {
    "name": "Zero Infinity Shiva",
    "price": null,
    "rpm": 2200,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool GABRIEL",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": [
      18.2,
      32.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions GX7",
    "price": null,
    "rpm": [
      750,
      1800
    ],
    "noise_level": [
      12,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Basic 45",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Basic 48",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Basic 68",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPS-810CP",
    "price": null,
    "rpm": [
      1500,
      4000
    ],
    "noise_level": [
      16.2,
      37.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Glacer 240L Ver. 2",
    "price": null,
    "rpm": 2400,
    "noise_level": [
      19,
      40.33
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "X2 ECLIPSE IV",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      10,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone AR04",
    "price": null,
    "rpm": [
      1500,
      3400
    ],
    "noise_level": [
      18,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Water 3.0 Performer C + LNC",
    "price": null,
    "rpm": [
      1200,
      2000
    ],
    "noise_level": 27.36,
    "color": null,
    "size": 120
  },
  {
    "name": "Silverstone TD02-LITE",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18,
      35
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "RAIJINTEK TISIS",
    "price": null,
    "rpm": [
      600,
      1000
    ],
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCNJ-4000",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "CRYORIG A80",
    "price": null,
    "rpm": [
      600,
      1850
    ],
    "noise_level": [
      13,
      38
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Enermax ETS-T40F-BK",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Polar",
    "price": null,
    "rpm": [
      1400,
      2000
    ],
    "noise_level": [
      16,
      28.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright AXP-100R",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": [
      22,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer A32",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-50",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      13.8,
      30.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Antarctica",
    "price": null,
    "rpm": [
      450,
      4500
    ],
    "noise_level": 27.8,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer i11 CO",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DK-01",
    "price": null,
    "rpm": [
      800,
      2500
    ],
    "noise_level": [
      12,
      28.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-204",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-205",
    "price": null,
    "rpm": [
      1600,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-214",
    "price": null,
    "rpm": 1800,
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid Pro 120",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Silverstone SST-AR07",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      16.5,
      30.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool CAPTAIN 120 WHITE",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.29
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Reeven Okeanos",
    "price": null,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      4,
      23.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Hans RC-1205n",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT08-115X",
    "price": 37.99,
    "rpm": [
      1200,
      3500
    ],
    "noise_level": [
      21.56,
      62.88
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake Riing Silent 12 Pro Red",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      12,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Maelstrom 240",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.3
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Deepcool NEPTWIN",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Matterhorn Pure",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      8,
      24.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RIOTORO BIFROST 240",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": 240
  },
  {
    "name": "Gelid Solutions Rev. 4 Tranquillo",
    "price": null,
    "rpm": [
      750,
      1600
    ],
    "noise_level": [
      12,
      26.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Rev. 3 Tranquillo",
    "price": null,
    "rpm": [
      750,
      1500
    ],
    "noise_level": [
      12,
      26.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax LiqTech TR4 360",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": null,
    "size": 360
  },
  {
    "name": "ARCTIC Freezer 33 eSports Edition (Black/Yellow)",
    "price": null,
    "rpm": [
      200,
      1800
    ],
    "noise_level": 24.4,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 12 CO",
    "price": null,
    "rpm": null,
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer 33 Plus",
    "price": null,
    "rpm": null,
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK JUNO-X",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 26,
    "color": "Green / Black",
    "size": null
  },
  {
    "name": "RAIJINTEK JUNO-X",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": 26,
    "color": "Blue / Black",
    "size": null
  },
  {
    "name": "RAIJINTEK JUNO-X RGB",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK LETO B",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 29,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "RAIJINTEK LETO R",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 29,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ID-COOLING AURAFLOW 120",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING AURAFLOW 120 SNOW",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      18,
      35.2
    ],
    "color": "White",
    "size": 120
  },
  {
    "name": "Scythe SCBYK-1000",
    "price": null,
    "rpm": [
      300,
      2300
    ],
    "noise_level": [
      7.2,
      28.26
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Dynatron K199",
    "price": 36.95,
    "rpm": [
      1000,
      5000
    ],
    "noise_level": [
      20.71,
      51.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Antec Mercury 240",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Jonsbo CR-201 HIVES (Black)",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      18.5,
      30.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright ARO-M14G",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho 120 SBM",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      21,
      33
    ],
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Rosewill PB120",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": 34.1,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Enermax Liqtech II 240",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Cooler Master MasterLiquid ML240 RGB (TR4 Edition)",
    "price": null,
    "rpm": [
      650,
      2000
    ],
    "noise_level": [
      6,
      30
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Silverstone AR01-V2.1",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      15,
      38
    ],
    "color": "Black / White",
    "size": null
  },
  {
    "name": "Cooler Master I71C RGB",
    "price": null,
    "rpm": 1800,
    "noise_level": 28,
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "Phanteks PH-TC12LS_RGB",
    "price": null,
    "rpm": null,
    "noise_level": 25,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "ID-COOLING IS-50X",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": [
      13.8,
      30.2
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere ACC92CF",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere ACC92RD",
    "price": null,
    "rpm": [
      600,
      1700
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere CCF150BE",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "upHere AC12",
    "price": null,
    "rpm": [
      600,
      1750
    ],
    "noise_level": [
      16.1,
      27.7
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ARCTIC Freezer A13 X CO",
    "price": null,
    "rpm": [
      300,
      2000
    ],
    "noise_level": null,
    "color": "Black / White",
    "size": null
  },
  {
    "name": "RAIJINTEK Orcus 360",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 360
  },
  {
    "name": "RAIJINTEK EOS 360 RBW",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": 360
  },
  {
    "name": "In Win SR36",
    "price": null,
    "rpm": [
      500,
      2500
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 360
  },
  {
    "name": "CRYORIG R5",
    "price": null,
    "rpm": [
      700,
      1300
    ],
    "noise_level": [
      19,
      23
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW X",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      18,
      26.4
    ],
    "color": "White",
    "size": 360
  },
  {
    "name": "GAMDIAS CHIONE E2",
    "price": null,
    "rpm": [
      1200,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "GAMDIAS CHIONE M1",
    "price": 165.49,
    "rpm": [
      600,
      1200
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "Thermalright Assassin X Plus",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING DK-03i PWM RED",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-913-B",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-904TWIN",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      23.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-R V2",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.1,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-802-SD",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.3,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING HUNTER VC-3D",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16.8,
      32.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master GeminII M4",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Vortex 211P",
    "price": null,
    "rpm": 2200,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Vortex 211Q",
    "price": null,
    "rpm": 1500,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master X Dream L115",
    "price": null,
    "rpm": 2200,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic 120",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 120
  },
  {
    "name": "Jonsbo CR-1100",
    "price": null,
    "rpm": [
      600,
      1500
    ],
    "noise_level": [
      18,
      31
    ],
    "color": "Gray / Black",
    "size": null
  },
  {
    "name": "Jonsbo CR-1400",
    "price": null,
    "rpm": [
      900,
      2300
    ],
    "noise_level": [
      20,
      30.5
    ],
    "color": "White",
    "size": null
  },
  {
    "name": "Noua Siberus TR360",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Inter-Tech ALSEYE H360",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      13.5,
      35.2
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermalright Frozen Magic ARGB",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Geometric Future Eskimo Junior 24",
    "price": null,
    "rpm": 2000,
    "noise_level": 29,
    "color": "White",
    "size": 240
  },
  {
    "name": "Deepcool CASTLE R",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 32,
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING FROZN A400 ARGB",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": 25.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING FROZN A410 DW",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 29.85,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING DASHFLOW XT",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": 32.5,
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING IS-28i BLACK",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": 35.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING IS-30i",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "ID-COOLING IS-37-XT BLACK",
    "price": null,
    "rpm": [
      800,
      3600
    ],
    "noise_level": [
      17,
      35.8
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING FX120 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING SE-213X-B",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 28,
    "color": "Black / Blue",
    "size": null
  },
  {
    "name": "ID-COOLING SE-213X-R",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 28,
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "ID-COOLING SE-223i",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 28,
    "color": "Black",
    "size": null
  },
  {
    "name": "Cooler Master MasterLiquid 360L Core SF6 Luke",
    "price": null,
    "rpm": [
      650,
      1750
    ],
    "noise_level": 27.2,
    "color": "White / Orange",
    "size": 360
  },
  {
    "name": "Zalman ALPHA2 A36",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.7,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Thermaltake Astria 400 ARGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 26.8,
    "color": "Black",
    "size": null
  },
  {
    "name": "Zalman Reserator 3 MAX",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": [
      18.89,
      36.7
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Masscool 8W501B1M3G",
    "price": 30,
    "rpm": 2400,
    "noise_level": 26.2,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Black Edition",
    "price": null,
    "rpm": [
      750,
      1600
    ],
    "noise_level": [
      25.4,
      25.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Archon IB-E X2",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone Argon AR09-115XS",
    "price": 48.64,
    "rpm": [
      1200,
      5000
    ],
    "noise_level": [
      18.02,
      42.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Antec KUHLER Shelf",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master DI5-8E5PA-0L-GP",
    "price": null,
    "rpm": 2800,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron T195",
    "price": null,
    "rpm": [
      1000,
      5000
    ],
    "noise_level": [
      20.5,
      49.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron T860",
    "price": null,
    "rpm": [
      2000,
      6000
    ],
    "noise_level": [
      20.23,
      44.88
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool CI01-9525EP",
    "price": null,
    "rpm": [
      900,
      2600
    ],
    "noise_level": [
      12,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake A4012-02",
    "price": null,
    "rpm": 2500,
    "noise_level": 21,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake A4022",
    "price": null,
    "rpm": 1300,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0257",
    "price": null,
    "rpm": 1700,
    "noise_level": 17,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0497",
    "price": null,
    "rpm": 2500,
    "noise_level": 27,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0527",
    "price": null,
    "rpm": [
      800,
      1700
    ],
    "noise_level": 16,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0534",
    "price": null,
    "rpm": [
      1200,
      2400
    ],
    "noise_level": [
      20,
      26.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0554",
    "price": null,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      19,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS 7500 Cu LED",
    "price": null,
    "rpm": [
      1150,
      2300
    ],
    "noise_level": [
      17,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS 8700 NT",
    "price": null,
    "rpm": [
      1150,
      2100
    ],
    "noise_level": [
      17.5,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS 9700 NT",
    "price": null,
    "rpm": [
      1250,
      2800
    ],
    "noise_level": [
      19.5,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0508",
    "price": null,
    "rpm": [
      1300,
      2000
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0574",
    "price": null,
    "rpm": [
      800,
      1300
    ],
    "noise_level": 16,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCBSK-1000",
    "price": null,
    "rpm": [
      650,
      2200
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9900NT",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      19.5,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPH-9525CU",
    "price": 25.99,
    "rpm": 1800,
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPJ-12025",
    "price": null,
    "rpm": 1000,
    "noise_level": 21,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPK-10025EA",
    "price": null,
    "rpm": 1800,
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone NT01-E",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 5U1082F1M4",
    "price": null,
    "rpm": [
      2000,
      3600
    ],
    "noise_level": [
      23,
      45.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 5W1081F1M3",
    "price": null,
    "rpm": 2400,
    "noise_level": 31,
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8W553B1M3",
    "price": null,
    "rpm": 2400,
    "noise_level": 26.2,
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8WA743",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      20,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8WT15-38",
    "price": null,
    "rpm": 2400,
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z1",
    "price": null,
    "rpm": [
      1700,
      3100
    ],
    "noise_level": [
      18,
      33.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z2",
    "price": null,
    "rpm": [
      500,
      3400
    ],
    "noise_level": [
      17,
      34.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z300",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill RCX-Z80-AL",
    "price": null,
    "rpm": 2500,
    "noise_level": 22.41,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCMG-2100",
    "price": null,
    "rpm": null,
    "noise_level": 26.5,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCRT-1000",
    "price": null,
    "rpm": [
      470,
      1900
    ],
    "noise_level": [
      9.8,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCYS-1000",
    "price": null,
    "rpm": [
      470,
      1900
    ],
    "noise_level": [
      7.05,
      27.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "StarTech FANK8AM2",
    "price": null,
    "rpm": 2600,
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS8000A",
    "price": null,
    "rpm": [
      1400,
      2600
    ],
    "noise_level": [
      20,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS5X SZ",
    "price": null,
    "rpm": [
      1400,
      2800
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Balder SD1283",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek D982",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Dark Knight S1283V",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek HDT-D1284",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": 27.2,
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek HDT-S1283",
    "price": null,
    "rpm": [
      800,
      1500
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek HDT-S963",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      23,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek HDT-SD964",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      22,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm Nirvana NV120 PWM",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-10D",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-10D Smart",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Antec Performance Max",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCMN-2000",
    "price": null,
    "rpm": [
      500,
      1700
    ],
    "noise_level": [
      9.6,
      36.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0532",
    "price": null,
    "rpm": 2500,
    "noise_level": 34,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0550",
    "price": null,
    "rpm": [
      740,
      3700
    ],
    "noise_level": [
      21,
      40
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CL-P0101",
    "price": null,
    "rpm": [
      600,
      3700
    ],
    "noise_level": [
      15,
      46.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKZT-1000",
    "price": null,
    "rpm": [
      800,
      3300
    ],
    "noise_level": [
      8.2,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enzotech Extreme-X Rev.A",
    "price": null,
    "rpm": [
      1000,
      2500
    ],
    "noise_level": [
      15.8,
      43.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS7X LED",
    "price": null,
    "rpm": [
      1250,
      1950
    ],
    "noise_level": [
      17,
      25
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Slim Silence 775",
    "price": null,
    "rpm": [
      1100,
      2300
    ],
    "noise_level": [
      15,
      24.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Slim Silence AM2",
    "price": null,
    "rpm": [
      1200,
      2500
    ],
    "noise_level": [
      15,
      27.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys AC2200BT",
    "price": null,
    "rpm": 2200,
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys AC4400BT",
    "price": null,
    "rpm": 2200,
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC106",
    "price": null,
    "rpm": 2200,
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC207",
    "price": null,
    "rpm": 2500,
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC4100AST",
    "price": null,
    "rpm": 2200,
    "noise_level": 30.1,
    "color": null,
    "size": null
  },
  {
    "name": "TUNIQ T-120-LFB",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "TUNIQ Tower 120",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright U120eXtrem1366RT R-C",
    "price": null,
    "rpm": 1600,
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCMG-3000",
    "price": null,
    "rpm": [
      300,
      1600
    ],
    "noise_level": 26.5,
    "color": null,
    "size": null
  },
  {
    "name": "Sunbeam CR-CCTF",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      16,
      20
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Sunbeam CR-CCTF92-4",
    "price": null,
    "rpm": [
      1200,
      2200
    ],
    "noise_level": 27,
    "color": null,
    "size": null
  },
  {
    "name": "Corsair H70 Core",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master Hyper 612 PWM",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": [
      9,
      36
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETD-T60-TB",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      10,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETD-T60-VD",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40-TA",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool HPKC-10025EA",
    "price": null,
    "rpm": 1800,
    "noise_level": 23,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Siberian",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      10,
      22.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions CC-GX7-01-A",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      10,
      26.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-1000D 775",
    "price": null,
    "rpm": 2500,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ZEROtherm ZT-1000D 1156",
    "price": null,
    "rpm": 3000,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-100HA1",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      8,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-T40-VD",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Syba CL-CNL-EOLE802",
    "price": null,
    "rpm": 2200,
    "noise_level": 25,
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-120HA4",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      8,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-PNTH",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0533",
    "price": null,
    "rpm": [
      1000,
      6000
    ],
    "noise_level": [
      21,
      48
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Nexus FLC-3000 R2",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": [
      15,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCBSK-2000",
    "price": null,
    "rpm": null,
    "noise_level": [
      9.32,
      33.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC211HTPC",
    "price": null,
    "rpm": 2600,
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC4004IEXT",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      17.8,
      28.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC106",
    "price": null,
    "rpm": 1500,
    "noise_level": 19,
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC6001IM",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      18.2,
      26.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC4005IB",
    "price": null,
    "rpm": [
      900,
      1500
    ],
    "noise_level": [
      21.4,
      32.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC4001IM",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      17.8,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC4002IW",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      17.8,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys MC6002GS",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      17.6,
      27.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Logisys IC4300X4",
    "price": null,
    "rpm": [
      400,
      2800
    ],
    "noise_level": [
      17.8,
      40.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "SilenX EFZ-120HA3",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14PE_OR",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14PE_RD",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS20LQ",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      17,
      36
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Cooler Master Gemin II S524",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      15.1,
      31.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14CS",
    "price": null,
    "rpm": [
      700,
      1200
    ],
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 7WA868",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      19,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14CS_RD",
    "price": null,
    "rpm": 1300,
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8W2002F1M4",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      20,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKC-2100",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      9.6,
      24.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech PRO-MGH-B",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NK54TZ",
    "price": null,
    "rpm": 3500,
    "noise_level": 30.6,
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8W5020F1M",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      20,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool TTC-NK85TZ/V2(RB)",
    "price": null,
    "rpm": [
      800,
      2150
    ],
    "noise_level": [
      17.2,
      39
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Evercool NI2011E-9525EP",
    "price": null,
    "rpm": [
      1000,
      3000
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool TTC-NK35TZ/RPW/V3",
    "price": null,
    "rpm": [
      900,
      2800
    ],
    "noise_level": [
      12,
      31
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKC-2000",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      9.6,
      24.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek ld964",
    "price": null,
    "rpm": [
      1000,
      2800
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCMG-3100",
    "price": null,
    "rpm": [
      300,
      1600
    ],
    "noise_level": [
      9.6,
      32.15
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Vantec VAF-1225",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": [
      20,
      32
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R22",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCSMZ-2100",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      7.2,
      31.07
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R19",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14CS_BL",
    "price": null,
    "rpm": 700,
    "noise_level": [
      13.4,
      19
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0596",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      21,
      44
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ELC120-TB",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      17.3,
      31.2
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Enermax ELC120-TA",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      18.5,
      32.8
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Phanteks PH-TC90LS",
    "price": null,
    "rpm": [
      1000,
      2500
    ],
    "noise_level": [
      19,
      26
    ],
    "color": null,
    "size": null
  },
  {
    "name": "NZXT Respire T40",
    "price": null,
    "rpm": [
      1300,
      1800
    ],
    "noise_level": [
      26.5,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Alpine 7 Pro",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman LQ-320",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Zalman LQ-315",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Zalman LQ-310",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Zalman CNPS9900 D/F",
    "price": null,
    "rpm": [
      900,
      1400
    ],
    "noise_level": [
      19,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NC55TZ/RB",
    "price": null,
    "rpm": [
      1800,
      2200
    ],
    "noise_level": [
      28.8,
      38
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Titan TTC-NA43TZ/CU35",
    "price": null,
    "rpm": [
      900,
      2600
    ],
    "noise_level": [
      14,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Eisberg 120L Prestige",
    "price": null,
    "rpm": 1600,
    "noise_level": 20.5,
    "color": null,
    "size": 120
  },
  {
    "name": "Silverstone AR01",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": [
      16.39,
      33.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone AR02",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      16,
      24
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone AR03",
    "price": null,
    "rpm": [
      1000,
      2200
    ],
    "noise_level": [
      16.39,
      33.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Rosewill ROCC-13001",
    "price": null,
    "rpm": 2000,
    "noise_level": [
      19.39,
      31.05
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone TD02",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      16,
      33.5
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Silverstone TD03",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      16,
      33.5
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Thermaltake CLP0607",
    "price": null,
    "rpm": [
      1000,
      2000
    ],
    "noise_level": [
      20,
      39.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron R12",
    "price": null,
    "rpm": null,
    "noise_level": 0,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright TS-140",
    "price": null,
    "rpm": [
      900,
      1300
    ],
    "noise_level": [
      17,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCKC-3000",
    "price": null,
    "rpm": [
      500,
      1300
    ],
    "noise_level": [
      13,
      30.7
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Praeton LD963",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Gelid Solutions Siberian Pro",
    "price": null,
    "rpm": [
      900,
      2200
    ],
    "noise_level": [
      10,
      23.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 8W2002B1M4",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      20,
      34
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ARCTIC Freezer A11",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": 22.5,
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ELC-LM120S-TAA",
    "price": null,
    "rpm": 2500,
    "noise_level": 30,
    "color": null,
    "size": 120
  },
  {
    "name": "Enermax Liqtech 240",
    "price": null,
    "rpm": 2500,
    "noise_level": 30,
    "color": null,
    "size": 240
  },
  {
    "name": "Enermax ETS-N30-TAA",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      16,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake NiC L32",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      18,
      38.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake CLP0604",
    "price": null,
    "rpm": [
      1200,
      2100
    ],
    "noise_level": [
      21,
      48
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright MACHO 120 REV.A",
    "price": null,
    "rpm": [
      600,
      1300
    ],
    "noise_level": 25.4,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Venomous X RT Rev.SB-E",
    "price": null,
    "rpm": [
      700,
      1500
    ],
    "noise_level": [
      17,
      28.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK EreBoss",
    "price": null,
    "rpm": [
      600,
      1400
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK ZELOS",
    "price": null,
    "rpm": [
      800,
      1400
    ],
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK RHEA",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": 27.9,
    "color": null,
    "size": null
  },
  {
    "name": "RAIJINTEK EREBOSS BLACK",
    "price": null,
    "rpm": [
      650,
      1400
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman Reserator 3 MAX Dual",
    "price": null,
    "rpm": [
      1000,
      2300
    ],
    "noise_level": [
      23.2,
      46.6
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Deepcool CAPTAIN 120",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      17.6,
      39.29
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "RAIJINTEK TRITON GREEN",
    "price": null,
    "rpm": [
      1000,
      2600
    ],
    "noise_level": [
      21.6,
      36.6
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "RAIJINTEK TRITON RED",
    "price": null,
    "rpm": [
      1000,
      2600
    ],
    "noise_level": [
      21.6,
      36.6
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "RAIJINTEK TRITON BLUE",
    "price": null,
    "rpm": [
      1000,
      2600
    ],
    "noise_level": [
      21.6,
      36.6
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Thermaltake Gravity A1",
    "price": null,
    "rpm": 1800,
    "noise_level": 22.3,
    "color": null,
    "size": null
  },
  {
    "name": "Swiftech H240-X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      8.3,
      28.8
    ],
    "color": null,
    "size": 280
  },
  {
    "name": "Rosewill AIOLOS",
    "price": null,
    "rpm": 1500,
    "noise_level": 24.6,
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Basic 65",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Prolimatech Basic 81",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Masscool 5T568S1H3",
    "price": null,
    "rpm": 4200,
    "noise_level": 31.8,
    "color": null,
    "size": null
  },
  {
    "name": "Dynatron T459",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "Phanteks PH-TC14S_BK",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 25.3,
    "color": null,
    "size": null
  },
  {
    "name": "Zalman CNPS9300 AT",
    "price": null,
    "rpm": [
      1500,
      2400
    ],
    "noise_level": [
      20,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Loki II",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      20,
      28
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master Blizzard T2 mini",
    "price": null,
    "rpm": 2200,
    "noise_level": 22,
    "color": null,
    "size": null
  },
  {
    "name": "Evercool TRANSFORMER S",
    "price": null,
    "rpm": 2200,
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone TD03-E",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "Thermaltake Frio Silent 12",
    "price": null,
    "rpm": 1400,
    "noise_level": [
      12,
      19.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Akasa Venom Voodoo",
    "price": null,
    "rpm": [
      600,
      1900
    ],
    "noise_level": [
      6.9,
      28.9
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Cooler Master TPC 812XS",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      8,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Thermaltake BigTyp Revo.",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 20,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright Macho Rev.A(BW)",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Xigmatek Dark Knight SD1483 Night Hawk",
    "price": null,
    "rpm": [
      800,
      1200
    ],
    "noise_level": 18,
    "color": null,
    "size": null
  },
  {
    "name": "Swiftech H140-X",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      8.3,
      28.8
    ],
    "color": null,
    "size": 140
  },
  {
    "name": "Silverstone TD03-LITE",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18,
      35
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "RAIJINTEK PALLAS Black",
    "price": null,
    "rpm": [
      650,
      1400
    ],
    "noise_level": 28,
    "color": null,
    "size": null
  },
  {
    "name": "Deepcool Maelstrom 120K",
    "price": null,
    "rpm": [
      600,
      1800
    ],
    "noise_level": [
      18.2,
      32.4
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "LEPA EXllusion 240",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      14,
      30
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "CRYORIG A40",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      13,
      37
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Cooler Master X6",
    "price": null,
    "rpm": [
      600,
      1900
    ],
    "noise_level": [
      8,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone TD03-SLIM",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      16.5,
      27.4
    ],
    "color": null,
    "size": 120
  },
  {
    "name": "ARCTIC Freezer i32 CO",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-40",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-40PRO",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      14,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FI-REEX",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FI-VC",
    "price": null,
    "rpm": 1600,
    "noise_level": 21,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FI-VC Twin",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      32.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-25",
    "price": null,
    "rpm": [
      800,
      2700
    ],
    "noise_level": [
      14,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-25i",
    "price": null,
    "rpm": [
      800,
      2700
    ],
    "noise_level": [
      14,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-203",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-203K",
    "price": null,
    "rpm": 1800,
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-204K",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213i",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-214i",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-802",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.3,
    "color": null,
    "size": null
  },
  {
    "name": "Noctua NH-U9DO A3",
    "price": null,
    "rpm": [
      1000,
      1600
    ],
    "noise_level": [
      7.9,
      17.6
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING FROSTFLOW 240L-R",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": [
      20,
      38.2
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "Reeven Ouranos",
    "price": null,
    "rpm": [
      300,
      1700
    ],
    "noise_level": [
      5.8,
      36.4
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Chrono Guard",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      7.2,
      31.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Arcziel",
    "price": null,
    "rpm": [
      300,
      2500
    ],
    "noise_level": [
      7.2,
      31.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Brontes",
    "price": null,
    "rpm": [
      650,
      2200
    ],
    "noise_level": [
      10.5,
      31.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Hans",
    "price": null,
    "rpm": [
      300,
      1500
    ],
    "noise_level": [
      4,
      29.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Reeven Steropes",
    "price": null,
    "rpm": [
      500,
      2000
    ],
    "noise_level": [
      9.32,
      33.67
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Phononic HEX 2.0",
    "price": null,
    "rpm": [
      1000,
      2650
    ],
    "noise_level": [
      17,
      33
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn ATLAS",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": [
      8,
      24.3
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Alpenf\u00f6hn Olymp",
    "price": null,
    "rpm": [
      300,
      1400
    ],
    "noise_level": [
      8,
      26.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Silverstone Tundra TD02-SLIM",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": [
      16.5,
      27.4
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "RIOTORO BIFROST 120TI",
    "price": null,
    "rpm": null,
    "noise_level": null,
    "color": null,
    "size": 120
  },
  {
    "name": "Cooltek LP53",
    "price": null,
    "rpm": [
      1000,
      2100
    ],
    "noise_level": [
      16,
      27.1
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax LiqTech TR4 240",
    "price": null,
    "rpm": [
      500,
      2300
    ],
    "noise_level": [
      14,
      28
    ],
    "color": null,
    "size": 240
  },
  {
    "name": "FSP Group Windale 6",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": 32,
    "color": null,
    "size": null
  },
  {
    "name": "FSP Group Windale 6",
    "price": null,
    "rpm": [
      600,
      1600
    ],
    "noise_level": 32,
    "color": null,
    "size": null
  },
  {
    "name": "Thermalright AXP-100H MUSCLE",
    "price": null,
    "rpm": [
      900,
      2500
    ],
    "noise_level": [
      22,
      30
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Enermax ETS-N30R-TAA",
    "price": null,
    "rpm": [
      800,
      2800
    ],
    "noise_level": [
      16,
      27
    ],
    "color": null,
    "size": null
  },
  {
    "name": "Scythe SCIOR-1000",
    "price": null,
    "rpm": [
      300,
      1800
    ],
    "noise_level": [
      4.5,
      26.7
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Deepcool MAELSTROM 240 RGB",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": [
      17.8,
      30
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Antec Mercury 360",
    "price": null,
    "rpm": [
      900,
      1800
    ],
    "noise_level": 30,
    "color": "Black / White",
    "size": 360
  },
  {
    "name": "LEPA NEOllusion-RGB M/B Sync",
    "price": null,
    "rpm": [
      400,
      1800
    ],
    "noise_level": [
      14,
      33
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Enermax Liqtech TR4 II 280",
    "price": null,
    "rpm": [
      500,
      1500
    ],
    "noise_level": [
      14,
      25
    ],
    "color": "Black",
    "size": 280
  },
  {
    "name": "ID-COOLING Chromaflow240",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Akasa Venom",
    "price": null,
    "rpm": [
      600,
      1900
    ],
    "noise_level": [
      6.9,
      28.9
    ],
    "color": "Yellow / Black",
    "size": null
  },
  {
    "name": "SilentiumPC Navis RGB 280",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 280
  },
  {
    "name": "RAIJINTEK PALLAS 120 RGB",
    "price": null,
    "rpm": [
      200,
      1400
    ],
    "noise_level": 28.43,
    "color": "Black",
    "size": null
  },
  {
    "name": "Silverstone Tundra SST-TD02-LITE-V2",
    "price": null,
    "rpm": [
      1500,
      2500
    ],
    "noise_level": [
      18,
      35
    ],
    "color": "Black / White",
    "size": 240
  },
  {
    "name": "Cooler Master GeminII M5 LED",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": 31,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "upHere C92",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      15.1,
      31.6
    ],
    "color": "Black / Red",
    "size": null
  },
  {
    "name": "Dynatron K987",
    "price": null,
    "rpm": [
      1200,
      2800
    ],
    "noise_level": [
      16.08,
      34.48
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Reeven Justice II",
    "price": null,
    "rpm": [
      300,
      1200
    ],
    "noise_level": [
      5.83,
      25.1
    ],
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "RAIJINTEK Orcus 120",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 120
  },
  {
    "name": "RAIJINTEK Orcus 240",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": 23,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Apacer ZADAK Spark Lite 240",
    "price": null,
    "rpm": [
      800,
      2200
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Akasa K25",
    "price": null,
    "rpm": [
      600,
      3000
    ],
    "noise_level": 28.71,
    "color": null,
    "size": null
  },
  {
    "name": "GAMDIAS CHIONE E2",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "GAMDIAS CHIONE M2",
    "price": null,
    "rpm": [
      1200,
      2400
    ],
    "noise_level": null,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright AXP-90i",
    "price": null,
    "rpm": 2700,
    "noise_level": 22.4,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Thermalright Macho Rev.C Plus",
    "price": null,
    "rpm": [
      300,
      1300
    ],
    "noise_level": [
      15,
      21
    ],
    "color": "Silver / Black",
    "size": null
  },
  {
    "name": "ID-COOLING ICEFLOW ARGB",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING DK-09i",
    "price": null,
    "rpm": 2200,
    "noise_level": 26.8,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DK-03 RGB PWM",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING DK-01T",
    "price": null,
    "rpm": 2200,
    "noise_level": 23.8,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-20i",
    "price": null,
    "rpm": [
      800,
      2700
    ],
    "noise_level": [
      14,
      23
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING IS-50 MAX RGB",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-914-XT ARGB V2",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-904-XT SLIM",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      25.8
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-207-TRX BLACK",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT BLACK V2",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-214V3",
    "price": null,
    "rpm": [
      600,
      2200
    ],
    "noise_level": [
      14,
      35
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213V3-R",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213V3-B",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213V2-B Lite",
    "price": null,
    "rpm": 1600,
    "noise_level": 26.4,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-213 RAINBOW",
    "price": null,
    "rpm": [
      500,
      1600
    ],
    "noise_level": [
      16,
      20.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT-B",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-224-XT-R",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      32.5
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-902-SD",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING SE-903-B V2",
    "price": null,
    "rpm": 2000,
    "noise_level": 23.1,
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING HUNTER VC-TWIN",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      16.2,
      29.2
    ],
    "color": null,
    "size": null
  },
  {
    "name": "ID-COOLING ZOOMFLOW 360",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16.3,
      33.5
    ],
    "color": "Black",
    "size": 360
  },
  {
    "name": "ID-COOLING DASHFLOW 240",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "ID-COOLING AURAFLOW X 240 TGA",
    "price": null,
    "rpm": [
      900,
      2000
    ],
    "noise_level": [
      16,
      31.5
    ],
    "color": "Black",
    "size": 240
  },
  {
    "name": "Thermalright TA120 EX",
    "price": null,
    "rpm": 1850,
    "noise_level": 29.6,
    "color": "Silver / Gray",
    "size": null
  },
  {
    "name": "Thermalright Frozen Magic 360",
    "price": null,
    "rpm": 1500,
    "noise_level": 25.6,
    "color": "Black",
    "size": 360
  },
  {
    "name": "Jonsbo PISA A5",
    "price": null,
    "rpm": [
      800,
      1850
    ],
    "noise_level": 36.8,
    "color": "Gray",
    "size": null
  },
  {
    "name": "Noua Siberus TR120",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      18,
      30
    ],
    "color": "Black",
    "size": 120
  },
  {
    "name": "Noua Siberus TR241",
    "price": null,
    "rpm": [
      800,
      1800
    ],
    "noise_level": [
      25,
      32
    ],
    "color": "White",
    "size": 240
  },
  {
    "name": "Noua Sub-Zero AT240",
    "price": null,
    "rpm": [
      800,
      2000
    ],
    "noise_level": 31,
    "color": "Black",
    "size": 240
  },
  {
    "name": "Noua Arcade",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 37.1,
    "color": "Black",
    "size": null
  },
  {
    "name": "Noua Disturbia",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": 37.8,
    "color": "Black / Silver",
    "size": null
  },
  {
    "name": "Noua Numb Pro",
    "price": null,
    "rpm": [
      800,
      1600
    ],
    "noise_level": 29,
    "color": "Black",
    "size": null
  },
  {
    "name": "Thermalright Frozen Fusion ARGB",
    "price": null,
    "rpm": 2150,
    "noise_level": 28.1,
    "color": "Black",
    "size": 360
  },
  {
    "name": "SilentiumPC Navis Pro 120",
    "price": null,
    "rpm": [
      800,
      2300
    ],
    "noise_level": null,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING FX120",
    "price": null,
    "rpm": [
      500,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": 120
  },
  {
    "name": "ID-COOLING FX240",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": 240
  },
  {
    "name": "ID-COOLING SE-206-XT ARGB",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "Black",
    "size": null
  },
  {
    "name": "ID-COOLING SE-206-XT",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": 35.2,
    "color": "White",
    "size": null
  },
  {
    "name": "ID-COOLING SE-207-TR-AM",
    "price": null,
    "rpm": [
      700,
      1800
    ],
    "noise_level": [
      15.2,
      35.2
    ],
    "color": "Black",
    "size": null
  },
  {
    "name": "Zalman ALPHA2 A36",
    "price": null,
    "rpm": [
      600,
      2000
    ],
    "noise_level": 29.7,
    "color": "White",
    "size": 360
  }
];