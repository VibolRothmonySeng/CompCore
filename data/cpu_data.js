const cpuData = [
  {
    "name": "AMD Ryzen 7 7800X3D",
    "price": 339,
    "core_count": 8,
    "core_clock": 4.2,
    "boost_clock": 5,
    "tdp": 120,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 7600X",
    "price": 204.99,
    "core_count": 6,
    "core_clock": 4.7,
    "boost_clock": 5.3,
    "tdp": 105,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 5600X",
    "price": 144.31,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 7600",
    "price": 185,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 5.1,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Core i9-14900K",
    "price": 544.99,
    "core_count": 24,
    "core_clock": 3.2,
    "boost_clock": 6,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i7-14700K",
    "price": 399.99,
    "core_count": 20,
    "core_clock": 3.4,
    "boost_clock": 5.6,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i5-12400F",
    "price": 128,
    "core_count": 6,
    "core_clock": 2.5,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3600",
    "price": 84,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 7700X",
    "price": 288.81,
    "core_count": 8,
    "core_clock": 4.5,
    "boost_clock": 5.4,
    "tdp": 105,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 7950X3D",
    "price": 564,
    "core_count": 16,
    "core_clock": 4.2,
    "boost_clock": 5.7,
    "tdp": 120,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 5600",
    "price": 129.99,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5800X",
    "price": 202,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 4.7,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-12600KF",
    "price": 159.13,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 4.9,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 5500",
    "price": 91.53,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-12700K",
    "price": 248,
    "core_count": 12,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5700X",
    "price": 171.89,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-13700K",
    "price": 359,
    "core_count": 16,
    "core_clock": 3.4,
    "boost_clock": 5.4,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i5-12600K",
    "price": 175.74,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 4.9,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5800X3D",
    "price": 261.18,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 4.5,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 7900X",
    "price": 396.58,
    "core_count": 12,
    "core_clock": 4.7,
    "boost_clock": 5.6,
    "tdp": 170,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 5600G",
    "price": 134.48,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Radeon Vega 7",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 5900X",
    "price": 277.99,
    "core_count": 12,
    "core_clock": 3.7,
    "boost_clock": 4.8,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13600K",
    "price": 283.99,
    "core_count": 14,
    "core_clock": 3.5,
    "boost_clock": 5.1,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i9-14900KS",
    "price": 652.95,
    "core_count": 24,
    "core_clock": 3.2,
    "boost_clock": 6.2,
    "tdp": 150,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i7-12700KF",
    "price": 223.95,
    "core_count": 12,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-12100F",
    "price": 94.98,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 58,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13600KF",
    "price": 249.99,
    "core_count": 14,
    "core_clock": 3.5,
    "boost_clock": 5.1,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 7700",
    "price": 281.63,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5.3,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Threadripper 3990X",
    "price": 4255,
    "core_count": 64,
    "core_clock": 2.9,
    "boost_clock": 4.3,
    "tdp": 280,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-13900K",
    "price": 486.59,
    "core_count": 24,
    "core_clock": 3,
    "boost_clock": 5.8,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i7-14700KF",
    "price": 375.74,
    "core_count": 20,
    "core_clock": 3.4,
    "boost_clock": 5.6,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13400F",
    "price": 185.99,
    "core_count": 10,
    "core_clock": 2.5,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 7900X3D",
    "price": 403.99,
    "core_count": 12,
    "core_clock": 4.4,
    "boost_clock": 5.6,
    "tdp": 120,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Core i9-12900K",
    "price": 334,
    "core_count": 16,
    "core_clock": 3.2,
    "boost_clock": 5.2,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 4500",
    "price": 72.77,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 7950X",
    "price": 510.38,
    "core_count": 16,
    "core_clock": 4.5,
    "boost_clock": 5.7,
    "tdp": 170,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Core i5-14600K",
    "price": 295.99,
    "core_count": 14,
    "core_clock": 3.5,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 3700X",
    "price": 205.84,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-13700KF",
    "price": 303.49,
    "core_count": 16,
    "core_clock": 3.4,
    "boost_clock": 5.4,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5700G",
    "price": 174.4,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Radeon Vega 8",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5700X3D",
    "price": 214.99,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 4.1,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 7500F",
    "price": null,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 5950X",
    "price": 363,
    "core_count": 16,
    "core_clock": 3.4,
    "boost_clock": 4.9,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-14600KF",
    "price": 293.99,
    "core_count": 14,
    "core_clock": 3.5,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 8500G",
    "price": 179,
    "core_count": 6,
    "core_clock": 4.1,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Radeon 740M",
    "smt": true
  },
  {
    "name": "Intel Core i9-14900KF",
    "price": 509.14,
    "core_count": 24,
    "core_clock": 3.2,
    "boost_clock": 6,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-10400F",
    "price": 97.99,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 4600G",
    "price": 95.16,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon Vega 7",
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 4100",
    "price": 68.98,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-14400F",
    "price": 199.99,
    "core_count": 10,
    "core_clock": 2.5,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 7900",
    "price": 369,
    "core_count": 12,
    "core_clock": 3.6,
    "boost_clock": 5.4,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 8700G",
    "price": 329,
    "core_count": 8,
    "core_clock": 4.2,
    "boost_clock": 5.1,
    "tdp": 65,
    "graphics": "Radeon 780M",
    "smt": true
  },
  {
    "name": "Intel Core i5-14500",
    "price": 239.99,
    "core_count": 14,
    "core_clock": 2.6,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 2600",
    "price": 150,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-12400",
    "price": 156.76,
    "core_count": 6,
    "core_clock": 2.5,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i7-9700K",
    "price": 260,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.9,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 3 3200G",
    "price": 81.39,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon Vega 8",
    "smt": false
  },
  {
    "name": "Intel Core i7-8700K",
    "price": 193,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.7,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 8600G",
    "price": 228.99,
    "core_count": 6,
    "core_clock": 4.3,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Radeon 760M",
    "smt": true
  },
  {
    "name": "Intel Core i9-13900KF",
    "price": 488.84,
    "core_count": 24,
    "core_clock": 3,
    "boost_clock": 5.8,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-10100F",
    "price": 70.73,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Threadripper 3970X",
    "price": 1675,
    "core_count": 32,
    "core_clock": 3.7,
    "boost_clock": 4.5,
    "tdp": 280,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 7500F",
    "price": null,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-14700F",
    "price": 369.55,
    "core_count": 20,
    "core_clock": 2.1,
    "boost_clock": 5.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron E1400",
    "price": 14,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 3600X",
    "price": 210,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 4.4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 2700X",
    "price": 210,
    "core_count": 8,
    "core_clock": 3.7,
    "boost_clock": 4.3,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-9900K",
    "price": 405,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-14100F",
    "price": 114.98,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.7,
    "tdp": 58,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-10700K",
    "price": 247.25,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 5.1,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 3900X",
    "price": 395,
    "core_count": 12,
    "core_clock": 3.8,
    "boost_clock": 4.6,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-11400F",
    "price": 115.98,
    "core_count": 6,
    "core_clock": 2.6,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13500",
    "price": 244.85,
    "core_count": 14,
    "core_clock": 2.5,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i3-12100",
    "price": 116.98,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 60,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i9-12900KF",
    "price": 339.55,
    "core_count": 16,
    "core_clock": 3.2,
    "boost_clock": 5.2,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-12700F",
    "price": 249.99,
    "core_count": 12,
    "core_clock": 2.1,
    "boost_clock": 4.9,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-13100F",
    "price": 109.99,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4.5,
    "tdp": 58,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9400F",
    "price": 95.99,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-7700K",
    "price": 230,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": 4.5,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-6700K",
    "price": 180,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 91,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i9-13900KS",
    "price": 589.99,
    "core_count": 24,
    "core_clock": 3,
    "boost_clock": 6,
    "tdp": 150,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3600",
    "price": 119.99,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-13700F",
    "price": 349.98,
    "core_count": 16,
    "core_clock": 2.1,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 3800X",
    "price": 285,
    "core_count": 8,
    "core_clock": 3.9,
    "boost_clock": 4.5,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-11700K",
    "price": 233,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3400G",
    "price": 98.15,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon Vega 11",
    "smt": true
  },
  {
    "name": "Intel Core i5-9600K",
    "price": 137,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-11900K",
    "price": 257.99,
    "core_count": 8,
    "core_clock": 3.5,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "Intel Core i5-10400",
    "price": 130,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-6500",
    "price": 67,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 2600X",
    "price": 195,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-8700",
    "price": 200,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-10900K",
    "price": 450,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-14700",
    "price": 399.98,
    "core_count": 20,
    "core_clock": 2.1,
    "boost_clock": 5.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i5-13400",
    "price": 228.98,
    "core_count": 10,
    "core_clock": 2.5,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i5-8400",
    "price": 124,
    "core_count": 6,
    "core_clock": 2.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 5500GT",
    "price": 115,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Radeon Vega 7",
    "smt": true
  },
  {
    "name": "Intel Core i3-14100",
    "price": 149,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.7,
    "tdp": 60,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i7-4790K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.4,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i7-6700",
    "price": 128,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i7-10700F",
    "price": 218.99,
    "core_count": 8,
    "core_clock": 2.9,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-12700",
    "price": 265.49,
    "core_count": 12,
    "core_clock": 2.1,
    "boost_clock": 4.9,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i9-12900KS",
    "price": 369,
    "core_count": 16,
    "core_clock": 3.4,
    "boost_clock": 5.5,
    "tdp": 150,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 3100",
    "price": 170,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4690K",
    "price": 53,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i5-10600K",
    "price": 169.65,
    "core_count": 6,
    "core_clock": 4.1,
    "boost_clock": 4.8,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 3950X",
    "price": 495,
    "core_count": 16,
    "core_clock": 3.5,
    "boost_clock": 4.7,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-7700",
    "price": 167,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 5600GT",
    "price": 130,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Radeon Vega 7",
    "smt": true
  },
  {
    "name": "Intel Core i9-10850K",
    "price": 279,
    "core_count": 10,
    "core_clock": 3.6,
    "boost_clock": 5.2,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Threadripper 3960X",
    "price": 1244.02,
    "core_count": 24,
    "core_clock": 3.8,
    "boost_clock": 4.5,
    "tdp": 280,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-11400",
    "price": 136.5,
    "core_count": 6,
    "core_clock": 2.6,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i9-11900KF",
    "price": 232,
    "core_count": 8,
    "core_clock": 3.5,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 1600 (14nm)",
    "price": 256.07,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-14400",
    "price": 229.98,
    "core_count": 10,
    "core_clock": 2.5,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Core i7-4770",
    "price": 74.95,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i5-10600KF",
    "price": 123,
    "core_count": 6,
    "core_clock": 4.1,
    "boost_clock": 4.8,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-11700F",
    "price": 201.99,
    "core_count": 8,
    "core_clock": 2.5,
    "boost_clock": 4.9,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 2700",
    "price": 185,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-6950X",
    "price": 804.98,
    "core_count": 10,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-11600K",
    "price": 179.99,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": 4.9,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "Intel Core i5-6600K",
    "price": 130,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 91,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i3-10100",
    "price": 93.74,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-13700",
    "price": 371.99,
    "core_count": 16,
    "core_clock": 2.1,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i5-12500",
    "price": 195.98,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i7-10700",
    "price": 234.8,
    "core_count": 8,
    "core_clock": 2.9,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 1600 (12nm)",
    "price": 120,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-3770",
    "price": 95,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Core i3-10105F",
    "price": 79.78,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-8600K",
    "price": 139,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2699 V4",
    "price": 190,
    "core_count": 22,
    "core_clock": 2.2,
    "boost_clock": 3.6,
    "tdp": 145,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-14900",
    "price": 554.99,
    "core_count": 24,
    "core_clock": 2,
    "boost_clock": 5.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 2200G",
    "price": 130,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Radeon Vega 8",
    "smt": false
  },
  {
    "name": "Intel Core i9-10900KF",
    "price": 255,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7500",
    "price": 89,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900KF",
    "price": 292,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 3950X",
    "price": 2147.03,
    "core_count": 16,
    "core_clock": 3.5,
    "boost_clock": 4.7,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 200GE",
    "price": 69.98,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "Intel Core i7-9700",
    "price": 250.26,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-7400",
    "price": 90.35,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-4790",
    "price": 145.1,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 5700",
    "price": null,
    "core_count": 8,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 2400G",
    "price": 135,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon Vega 11",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3500X",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-3470",
    "price": 59,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2630 V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.6,
    "boost_clock": 3.1,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-14900F",
    "price": 528.99,
    "core_count": 24,
    "core_clock": 2,
    "boost_clock": 5.8,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-4770K",
    "price": 135,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 1700",
    "price": 195,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G6900",
    "price": 74.79,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 46,
    "graphics": "Intel UHD Graphics 710",
    "smt": false
  },
  {
    "name": "Intel Celeron G5900",
    "price": 40.43,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i7-10700KF",
    "price": 240,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 5.1,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-9700F",
    "price": 289,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-9100F",
    "price": 135.19,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 5600X3D",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.4,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-11700",
    "price": 249.44,
    "core_count": 8,
    "core_clock": 2.5,
    "boost_clock": 4.9,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "Intel Core i7-3770K",
    "price": 175,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Core i3-8100",
    "price": 110,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-4590",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 1600X",
    "price": 119.99,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2680 V4",
    "price": 1975,
    "core_count": 14,
    "core_clock": 2.4,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-11700KF",
    "price": 244.27,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8350",
    "price": 208,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4690",
    "price": 51.43,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i5-7600K",
    "price": 169.02,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-8500",
    "price": 172.92,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900KS",
    "price": 1989,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": 5,
    "tdp": 127,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-13900",
    "price": 490,
    "core_count": 24,
    "core_clock": 2,
    "boost_clock": 5.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i3-13100",
    "price": 147.99,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4.5,
    "tdp": 60,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 3700X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-4130",
    "price": 41.13,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Core i5-4460",
    "price": 68.56,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.4,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "AMD A6-6400K",
    "price": 75,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 8470D",
    "smt": false
  },
  {
    "name": "AMD Ryzen 7 1700X",
    "price": 225,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 1400",
    "price": 110,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-11600KF",
    "price": 164.89,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": 4.9,
    "tdp": 125,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 1200 (14nm)",
    "price": 105,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-9700KF",
    "price": 218,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.9,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 3 3300X",
    "price": 150,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9400",
    "price": 160.91,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 7 3800XT",
    "price": 349.99,
    "core_count": 8,
    "core_clock": 3.9,
    "boost_clock": 4.7,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-10980XE",
    "price": 1200,
    "core_count": 18,
    "core_clock": 3,
    "boost_clock": 4.8,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 3900XT",
    "price": 379,
    "core_count": 12,
    "core_clock": 3.8,
    "boost_clock": 4.7,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Threadripper 1900X",
    "price": 109.99,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3600XT",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 4.5,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4570",
    "price": 104.54,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i3-7350K",
    "price": 40,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 60,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD FX-6300",
    "price": null,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-10105",
    "price": 89.95,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-9600KF",
    "price": 180.12,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-10900F",
    "price": 259.99,
    "core_count": 10,
    "core_clock": 2.8,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-6400",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "AMD Athlon 3000G (14nm)",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3600",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 3500",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-13900F",
    "price": 549.99,
    "core_count": 24,
    "core_clock": 2,
    "boost_clock": 5.6,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 1800X",
    "price": 235,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 1500X",
    "price": 195,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-2400",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "AMD Threadripper 2990WX",
    "price": 2500,
    "core_count": 32,
    "core_clock": 3,
    "boost_clock": 4.2,
    "tdp": 250,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-2600",
    "price": 188.49,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "Intel Core i5-4670K",
    "price": 62,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i3-7100",
    "price": 70,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-4790K",
    "price": 185,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.4,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel 300",
    "price": 88.1,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 46,
    "graphics": "Intel UHD Graphics 710",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630",
    "price": 24.28,
    "core_count": 6,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-11900F",
    "price": 210,
    "core_count": 8,
    "core_clock": 2.5,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-8700K",
    "price": 272.5,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.7,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-2600K",
    "price": 85,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 3000",
    "smt": true
  },
  {
    "name": "Intel Core i5-3570K",
    "price": 116.49,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 4000",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2683 V4",
    "price": 1998.95,
    "core_count": 16,
    "core_clock": 2.1,
    "boost_clock": 3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7600",
    "price": 89,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i3-6100",
    "price": 100,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i5-10500",
    "price": 238.99,
    "core_count": 6,
    "core_clock": 3.1,
    "boost_clock": 4.5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 PRO 7945",
    "price": null,
    "core_count": 12,
    "core_clock": 3.7,
    "boost_clock": 5.4,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "AMD Threadripper 1920X",
    "price": 270,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon II X2 240",
    "price": 29.48,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-3570",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Core i5-6600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i7-6800K",
    "price": 103,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G4900",
    "price": 48.59,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i7-6900K",
    "price": 120,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.7,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 3200G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon Vega 8",
    "smt": false
  },
  {
    "name": "Intel Core i5-12600",
    "price": 337.11,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G7400",
    "price": 102.73,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 46,
    "graphics": "Intel UHD Graphics 710",
    "smt": true
  },
  {
    "name": "Intel Core i7-5820K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-2500K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 3000",
    "smt": false
  },
  {
    "name": "Intel Pentium G640",
    "price": 30,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900K",
    "price": 699.99,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-11600",
    "price": 140,
    "core_count": 6,
    "core_clock": 2.8,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "AMD Athlon X4 845",
    "price": 50,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8400",
    "price": 27.55,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-9400F",
    "price": null,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4930K",
    "price": 100,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.9,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Threadripper 1950X",
    "price": 914.29,
    "core_count": 16,
    "core_clock": 3.4,
    "boost_clock": 4,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2650 V4",
    "price": null,
    "core_count": 12,
    "core_clock": 2.2,
    "boost_clock": 2.9,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-12900F",
    "price": 432.99,
    "core_count": 16,
    "core_clock": 2.4,
    "boost_clock": 5.1,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9500",
    "price": 160.74,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2640 V3",
    "price": 67.15,
    "core_count": 8,
    "core_clock": 2.6,
    "boost_clock": 3.4,
    "tdp": 90,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G4930",
    "price": 48.75,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i9-10900X",
    "price": 615,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 4.7,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-9100",
    "price": 145,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD 2650",
    "price": 84.71,
    "core_count": 2,
    "core_clock": 1.45,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8240",
    "smt": false
  },
  {
    "name": "Intel Core i3-4150",
    "price": 41.13,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Core i9-10900",
    "price": 275.7,
    "core_count": 10,
    "core_clock": 2.8,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-12900",
    "price": 458,
    "core_count": 16,
    "core_clock": 2.4,
    "boost_clock": 5.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i9-7960X",
    "price": 347.48,
    "core_count": 16,
    "core_clock": 2.8,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron 420",
    "price": 75.44,
    "core_count": 1,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Threadripper 2950X",
    "price": 1075,
    "core_count": 16,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-11500",
    "price": 146.16,
    "core_count": 6,
    "core_clock": 2.7,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "Intel Core i9-9900",
    "price": 464.15,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-13900T",
    "price": null,
    "core_count": 24,
    "core_clock": 1.1,
    "boost_clock": 5.3,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "Intel Core i5-7500T",
    "price": 67.63,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-4790",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i7-8086K",
    "price": 450.01,
    "core_count": 6,
    "core_clock": 4,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-6500",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "AMD Ryzen 9 3900X",
    "price": null,
    "core_count": 12,
    "core_clock": 3.8,
    "boost_clock": 4.6,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-8700",
    "price": 611.05,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD FX-8320",
    "price": 175,
    "core_count": 8,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-12100T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": 4.1,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "Intel Pentium E5700",
    "price": 19.98,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-7900X",
    "price": 400,
    "core_count": 10,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-2700K",
    "price": 89,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 3000",
    "smt": true
  },
  {
    "name": "Intel Core i7-7700",
    "price": 329.95,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-8400",
    "price": 249.95,
    "core_count": 6,
    "core_clock": 2.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-7740X",
    "price": 235,
    "core_count": 4,
    "core_clock": 4.3,
    "boost_clock": 4.5,
    "tdp": 112,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1650 V4",
    "price": 84.94,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-7800X",
    "price": 489.99,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G6400",
    "price": 74.99,
    "core_count": 2,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Core i9-10940X",
    "price": 780,
    "core_count": 14,
    "core_clock": 3.3,
    "boost_clock": 4.8,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4440",
    "price": 100,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.3,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i5-4670",
    "price": 51.48,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Celeron E3500",
    "price": 14.99,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-8600",
    "price": 188.38,
    "core_count": 6,
    "core_clock": 3.1,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900K (Standard Folding Box)",
    "price": 406.96,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 1300X",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2667 V3",
    "price": 1008.93,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 2600",
    "price": null,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-11900",
    "price": 269.99,
    "core_count": 8,
    "core_clock": 2.5,
    "boost_clock": 5.2,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 750",
    "smt": true
  },
  {
    "name": "AMD FX-9590",
    "price": 302.58,
    "core_count": 8,
    "core_clock": 4.7,
    "boost_clock": 5,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-8500T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.1,
    "boost_clock": 3.5,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 3 1200 (12nm)",
    "price": 105,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 3600",
    "price": 262.86,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-2500",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "Intel Core i3-2100",
    "price": 49,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 2600X",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.2,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2683 V4",
    "price": 189.95,
    "core_count": 16,
    "core_clock": 2.1,
    "boost_clock": 3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-10850KA Avengers Limited Edition",
    "price": null,
    "core_count": 10,
    "core_clock": 3.6,
    "boost_clock": 5.2,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Celeron G3900",
    "price": 39.9,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Core i7-6850K",
    "price": 115,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-4170",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Core i7-7700K",
    "price": null,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": 4.5,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-7980XE",
    "price": 1156.2,
    "core_count": 18,
    "core_clock": 2.6,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2698 V3",
    "price": null,
    "core_count": 16,
    "core_clock": 2.3,
    "boost_clock": 3.6,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-3220",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "AMD FX-8370",
    "price": 234.98,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": 4.3,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 3600X",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 4.4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G5905",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "AMD Threadripper 2970WX",
    "price": 1099.99,
    "core_count": 24,
    "core_clock": 3,
    "boost_clock": 4.2,
    "tdp": 250,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-9700F",
    "price": 395.34,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4820K",
    "price": 205.86,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 3.9,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-5930K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Threadripper 2920X",
    "price": 707.8,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4.3,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A4-6300",
    "price": 46.79,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon HD 8370D",
    "smt": false
  },
  {
    "name": "AMD Ryzen 7 3800X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.9,
    "boost_clock": 4.5,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13500T",
    "price": null,
    "core_count": 14,
    "core_clock": 1.6,
    "boost_clock": 4.6,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD Athlon X2 340",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G4560",
    "price": 133.41,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2697 V4",
    "price": null,
    "core_count": 18,
    "core_clock": 2.3,
    "boost_clock": 3.6,
    "tdp": 145,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8300",
    "price": 117.33,
    "core_count": 8,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-9700K",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.9,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-6700K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 91,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i3-2120",
    "price": 150.59,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "Intel Core i7-7820X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-13600",
    "price": null,
    "core_count": 14,
    "core_clock": 2.7,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 770",
    "smt": true
  },
  {
    "name": "AMD 5350",
    "price": null,
    "core_count": 4,
    "core_clock": 2.05,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8400",
    "smt": false
  },
  {
    "name": "Intel Core i5-9400",
    "price": 110,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i3-4160",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Core i5-3470S",
    "price": 50,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Core i7-6950X",
    "price": 506.35,
    "core_count": 10,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-5960X",
    "price": null,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-10920X",
    "price": 799,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4.8,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630 V3",
    "price": 169.95,
    "core_count": 8,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7400T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": 3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Pentium G2020",
    "price": 34.99,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G5400",
    "price": 72.95,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Core i9-9980XE",
    "price": 1498.95,
    "core_count": 18,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1650 V3",
    "price": 54.46,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-6700",
    "price": 354.99,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2687W V4",
    "price": 1900.16,
    "core_count": 12,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 160,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-13700T",
    "price": null,
    "core_count": 16,
    "core_clock": 1.4,
    "boost_clock": 4.9,
    "tdp": 35,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9600K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD FX-6350",
    "price": 100,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-3930K",
    "price": 298.98,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2699 V3",
    "price": null,
    "core_count": 18,
    "core_clock": 2.3,
    "boost_clock": 3.6,
    "tdp": 145,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-3330",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Core i7-980X Extreme Edition",
    "price": 153.64,
    "core_count": 6,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2690 V4",
    "price": 1025.58,
    "core_count": 14,
    "core_clock": 2.6,
    "boost_clock": 3.5,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-10600",
    "price": 349.95,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.8,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-3450",
    "price": 59,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2697 V2",
    "price": null,
    "core_count": 12,
    "core_clock": 2.7,
    "boost_clock": 3.5,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 1700X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-9700",
    "price": 299.8,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i3-4370",
    "price": 41.13,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i3-13100T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 4.2,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 730",
    "smt": true
  },
  {
    "name": "AMD Ryzen 9 3900",
    "price": null,
    "core_count": 12,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7100T",
    "price": 41.13,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A6-9500",
    "price": 76.69,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "AMD A8-7600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i7-870",
    "price": 100,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9550",
    "price": 52.55,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-10300",
    "price": 104.27,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD FX-6120",
    "price": 58.53,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4.1,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-530",
    "price": 45,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E8500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.16,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4300",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 3400G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon Vega 11",
    "smt": true
  },
  {
    "name": "Intel Core i5-3350P",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-920",
    "price": 90,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q6600",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1231 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A8-7680",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i9-7920X",
    "price": 556.54,
    "core_count": 12,
    "core_clock": 2.9,
    "boost_clock": 4.4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-4960X Extreme Edition",
    "price": 775.04,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-4770S",
    "price": 117.98,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2695 V2",
    "price": 189,
    "core_count": 12,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-9980XE",
    "price": 1097,
    "core_count": 18,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-6100",
    "price": 72.8,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-7320",
    "price": 48,
    "core_count": 2,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A10-7850K",
    "price": 139.84,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i7-9800X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 4.5,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-3820",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon II X4 640",
    "price": 57.01,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2630 V4",
    "price": 335.07,
    "core_count": 10,
    "core_clock": 2.2,
    "boost_clock": 3.1,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2650 V2",
    "price": 185,
    "core_count": 8,
    "core_clock": 2.6,
    "boost_clock": 3.4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-8700T",
    "price": 304.38,
    "core_count": 6,
    "core_clock": 2.4,
    "boost_clock": 4,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 5 2400G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon Vega 11",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2660",
    "price": null,
    "core_count": 8,
    "core_clock": 2.2,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-750",
    "price": 72,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4350",
    "price": 122.96,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2220",
    "price": 19.98,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-3240",
    "price": 106.51,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Core i5-4430",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2670 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.3,
    "boost_clock": 3.1,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2698 V4",
    "price": null,
    "core_count": 20,
    "core_clock": 2.2,
    "boost_clock": 3.6,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9300",
    "price": 42.6,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G4400",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "AMD Ryzen 5 PRO 7645",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 5.1,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Core i5-9600",
    "price": 195,
    "core_count": 6,
    "core_clock": 3.1,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-7700T",
    "price": 489.95,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": 3.8,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-6402P",
    "price": 80,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Core i7-3770S",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Core i9-9960X",
    "price": 998.95,
    "core_count": 16,
    "core_clock": 3.1,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G4920",
    "price": 50.27,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i7-7800X",
    "price": 289.95,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 PRO 7745",
    "price": null,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 5.3,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2660 V4",
    "price": 399,
    "core_count": 14,
    "core_clock": 2,
    "boost_clock": 3.2,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-9370",
    "price": 198.5,
    "core_count": 8,
    "core_clock": 4.4,
    "boost_clock": 4.7,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4790S",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Core i5-8600K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-9500T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.2,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-6700T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.6,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i7-860",
    "price": 361.21,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G4900T",
    "price": 59.95,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 965 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2697 V3",
    "price": null,
    "core_count": 14,
    "core_clock": 2.6,
    "boost_clock": 3.6,
    "tdp": 145,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 2200G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Radeon Vega 8",
    "smt": false
  },
  {
    "name": "AMD A8-6600K",
    "price": 92.86,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 8570D",
    "smt": false
  },
  {
    "name": "Intel Pentium G3258",
    "price": 51.36,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i5-6500T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 3.1,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9650",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-8350K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 91,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-2320",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "Intel Core i9-7900X",
    "price": 898.95,
    "core_count": 10,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-3550",
    "price": 335,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2680 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.5,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 970",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E3400",
    "price": 18.98,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-9350KF",
    "price": 206,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.6,
    "tdp": 91,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon X4 860K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1620 V3",
    "price": 69.02,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-6300",
    "price": 78.51,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-3250",
    "price": 57.65,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Core i5-2400S",
    "price": 70,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "AMD A6-3670K",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6530D",
    "smt": false
  },
  {
    "name": "Intel Core i3-8100T",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7500",
    "price": 99.63,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-7100",
    "price": 74.9,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A10-9700",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1630 V4",
    "price": 229.95,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X6 1090T Black",
    "price": null,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G6405",
    "price": 88.72,
    "core_count": 2,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Celeron G5920",
    "price": 52.99,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2687W V3",
    "price": null,
    "core_count": 10,
    "core_clock": 3.1,
    "boost_clock": 3.5,
    "tdp": 160,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7600K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-10700K Avengers Collector's Edition",
    "price": 741,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 5.1,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-950",
    "price": 100,
    "core_count": 4,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon II 160u",
    "price": null,
    "core_count": 1,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 20,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-650",
    "price": 70,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "AMD A8-9600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2620 V4",
    "price": 429.95,
    "core_count": 8,
    "core_clock": 2.1,
    "boost_clock": 3,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron 440",
    "price": 29.98,
    "core_count": 1,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4570T",
    "price": 75.13,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1660 V2",
    "price": 1129,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2620",
    "price": 36.75,
    "core_count": 6,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-4620",
    "price": 58.67,
    "core_count": 8,
    "core_clock": 2.2,
    "boost_clock": 2.6,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-760",
    "price": 100,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4570S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G6500",
    "price": 70.98,
    "core_count": 2,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2176G",
    "price": 643.62,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.7,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core i7-4770K",
    "price": 231.05,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i5-7400",
    "price": 110,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Celeron G5925",
    "price": 53.99,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1230 V2",
    "price": 271.85,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1240L V5",
    "price": null,
    "core_count": 4,
    "core_clock": 2.1,
    "boost_clock": 3.2,
    "tdp": 25,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-10900K",
    "price": null,
    "core_count": 10,
    "core_clock": 3.7,
    "boost_clock": 5.3,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-9900X",
    "price": 655.06,
    "core_count": 10,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-3970X Extreme Edition",
    "price": null,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 150,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-6100",
    "price": 98.95,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "AMD FX-8350",
    "price": 192.57,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2640",
    "price": 43.31,
    "core_count": 6,
    "core_clock": 2.5,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-5820K",
    "price": 429.95,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4590S",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4000",
    "smt": false
  },
  {
    "name": "AMD A8-7650K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i3-6300",
    "price": 92.54,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i5-7500",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 7 2700",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-960",
    "price": 220,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9500F",
    "price": 249,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270 V3",
    "price": 420,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Extreme QX9770",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 136,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2695 V4",
    "price": null,
    "core_count": 18,
    "core_clock": 2.1,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Extreme QX9650",
    "price": 152.52,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-8400T",
    "price": 139,
    "core_count": 6,
    "core_clock": 1.7,
    "boost_clock": 3.3,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Athlon X2 370K",
    "price": null,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1660 V3",
    "price": 204.44,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8150",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-6800K",
    "price": 467.04,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "Intel Core i7-4771",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "AMD A10-7800",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 950",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2650",
    "price": 89,
    "core_count": 8,
    "core_clock": 2,
    "boost_clock": 2.8,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G4900",
    "price": 72.55,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i5-4690K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "AMD A10-7860k",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": 5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 PRO 7745",
    "price": null,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 5.3,
    "tdp": 65,
    "graphics": "Radeon",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1245 V5",
    "price": 474.39,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1620 V4",
    "price": 148.94,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5400",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Core i9-9960X",
    "price": null,
    "core_count": 16,
    "core_clock": 3.1,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 3000G (14nm)",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "AMD A10-7890K",
    "price": null,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2660 V3",
    "price": null,
    "core_count": 10,
    "core_clock": 2.6,
    "boost_clock": 3.3,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 955",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4670S",
    "price": 535,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "AMD FX-8320",
    "price": 106.55,
    "core_count": 8,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-9400",
    "price": null,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-8500",
    "price": 172.92,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-9600KF",
    "price": 339.95,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-5600K",
    "price": 249.99,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 7560D",
    "smt": false
  },
  {
    "name": "Intel Core i5-6400",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i7-3960X Extreme Edition",
    "price": 295.16,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2660 V3",
    "price": 149.94,
    "core_count": 10,
    "core_clock": 2.6,
    "boost_clock": 3.3,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7100T",
    "price": 48.1,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i9-7980XE",
    "price": 1249.95,
    "core_count": 18,
    "core_clock": 2.6,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2620 V3",
    "price": 80,
    "core_count": 6,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2640 V4",
    "price": null,
    "core_count": 10,
    "core_clock": 2.4,
    "boost_clock": 3.4,
    "tdp": 90,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G1610",
    "price": 37,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i3-540",
    "price": 60,
    "core_count": 2,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "AMD A10-7700K",
    "price": 132.86,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1230 V3",
    "price": 315.86,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-6350",
    "price": null,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G5500",
    "price": 64.06,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2690 V2",
    "price": null,
    "core_count": 10,
    "core_clock": 3,
    "boost_clock": 3.6,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8320E",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1100T Black",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-2300",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2650 V3",
    "price": null,
    "core_count": 10,
    "core_clock": 2.3,
    "boost_clock": 3,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2124",
    "price": 110,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 71,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4770K",
    "price": 155.86,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "AMD FX-8350",
    "price": 253.24,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G3220",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i3-6098P",
    "price": 59,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 510",
    "smt": true
  },
  {
    "name": "Intel Pentium G4600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Threadripper 2990WX",
    "price": null,
    "core_count": 32,
    "core_clock": 3,
    "boost_clock": 4.2,
    "tdp": 250,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E6400",
    "price": 35,
    "core_count": 2,
    "core_clock": 2.13,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-980",
    "price": 356.02,
    "core_count": 6,
    "core_clock": 3.333,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-4130T",
    "price": 60,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Pentium E5400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-10100T",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.8,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A10-5700",
    "price": 72.51,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7660D",
    "smt": false
  },
  {
    "name": "AMD FX-9590",
    "price": null,
    "core_count": 8,
    "core_clock": 4.7,
    "boost_clock": 5,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4790K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.4,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2660",
    "price": null,
    "core_count": 8,
    "core_clock": 2.2,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-10850K",
    "price": null,
    "core_count": 10,
    "core_clock": 3.6,
    "boost_clock": 5.2,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-10320",
    "price": 120,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-7820X",
    "price": 489.05,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-2600S",
    "price": 235,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2680",
    "price": 110,
    "core_count": 8,
    "core_clock": 2.7,
    "boost_clock": 3.5,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-5930K",
    "price": 529.95,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-2310",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics 2000",
    "smt": false
  },
  {
    "name": "AMD A4-5300",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2690 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.6,
    "boost_clock": 3.5,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-9820X",
    "price": null,
    "core_count": 10,
    "core_clock": 3.3,
    "boost_clock": 4.1,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-9100T",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 820",
    "price": 56.64,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G3930",
    "price": 56.99,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i5-7640X",
    "price": 250,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 112,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G3930T",
    "price": 46.07,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i7-990X Extreme Edition",
    "price": null,
    "core_count": 6,
    "core_clock": 3.467,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G2030",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i7-9700T",
    "price": null,
    "core_count": 8,
    "core_clock": 2,
    "boost_clock": 4.3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-9400T",
    "price": null,
    "core_count": 6,
    "core_clock": 1.8,
    "boost_clock": 3.4,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G6600",
    "price": 69.63,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-6100T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i9-9940X",
    "price": null,
    "core_count": 14,
    "core_clock": 3.3,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9300",
    "price": 172,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8120",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-3870K",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6550D",
    "smt": false
  },
  {
    "name": "Intel Core i5-7600T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9775",
    "price": 1298,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 150,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2660",
    "price": null,
    "core_count": 8,
    "core_clock": 2.2,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1220 V3",
    "price": 103.6,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.5,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6600",
    "price": 50,
    "core_count": 2,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1650 V2",
    "price": 229.95,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron 440",
    "price": 49.99,
    "core_count": 1,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G440",
    "price": null,
    "core_count": 1,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD FX-4100",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-5800K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 7660D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2680 V2",
    "price": null,
    "core_count": 10,
    "core_clock": 2.8,
    "boost_clock": 3.6,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-4790T",
    "price": 155.86,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.9,
    "tdp": 45,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-9900X",
    "price": null,
    "core_count": 10,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Ryzen 3 1200 (12nm)",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G6605",
    "price": 176.34,
    "core_count": 2,
    "core_clock": 4.3,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A10-7870K",
    "price": 281.82,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": 4.1,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD A12-9800",
    "price": 140,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i3-3210",
    "price": 70,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5420",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Core i5-10600K",
    "price": null,
    "core_count": 6,
    "core_clock": 4.1,
    "boost_clock": 4.8,
    "tdp": 125,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2670",
    "price": null,
    "core_count": 8,
    "core_clock": 2.6,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-8300",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 62,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-9920X",
    "price": 799.99,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2687W",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 150,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7400T",
    "price": 75,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": 3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 955 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9550S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-6500",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 8570D",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1275 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": true
  },
  {
    "name": "Intel Core i5-9600K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.6,
    "tdp": 95,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-930",
    "price": 198.73,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 945",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9400",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2687W V2",
    "price": null,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 4,
    "tdp": 150,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A6-7400K",
    "price": 89.98,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Core i3-8100",
    "price": 124.9,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-8500",
    "price": null,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i9-9900T",
    "price": null,
    "core_count": 8,
    "core_clock": 2.1,
    "boost_clock": 4.4,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-7740X",
    "price": 504.57,
    "core_count": 4,
    "core_clock": 4.3,
    "boost_clock": 4.5,
    "tdp": 112,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G530",
    "price": 41.86,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2288G",
    "price": null,
    "core_count": 8,
    "core_clock": 3.7,
    "boost_clock": 5,
    "tdp": 95,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9550",
    "price": 165.51,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G1820",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD 3850",
    "price": null,
    "core_count": 4,
    "core_clock": 1.3,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8280",
    "smt": false
  },
  {
    "name": "Intel Pentium G3250",
    "price": 61,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Opteron 6378",
    "price": null,
    "core_count": 16,
    "core_clock": 2.4,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4460S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4000",
    "smt": false
  },
  {
    "name": "AMD Athlon 220GE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E7300",
    "price": 38.19,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-6700",
    "price": 78.02,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "Intel Celeron 420",
    "price": null,
    "core_count": 1,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1055T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2160",
    "price": 49,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 250",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon X4 750K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-5675C",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": "Iris Pro Graphics 6200",
    "smt": false
  },
  {
    "name": "Intel Core i7-5775C",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Iris Pro Graphics 6200",
    "smt": true
  },
  {
    "name": "Intel Core i9-7940X",
    "price": null,
    "core_count": 14,
    "core_clock": 3.1,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 200GE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5400T",
    "price": 79.95,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1245 V6",
    "price": 555.48,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.1,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1620 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 3.9,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G630",
    "price": 37.49,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i3-4340",
    "price": 60,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i3-4160",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1650 V4",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-7600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-7700T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": 3.8,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Ryzen 7 1800X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1270 V6",
    "price": 725.37,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-9300",
    "price": 264.13,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.3,
    "tdp": 62,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 630",
    "price": 52.6,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E-2286G",
    "price": 777.91,
    "core_count": 6,
    "core_clock": 4,
    "boost_clock": 4.9,
    "tdp": 95,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core i5-4690S",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E8600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-2130",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "Intel Core i5-2550K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-5500",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7560D",
    "smt": false
  },
  {
    "name": "Intel Celeron G1840",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1620",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.8,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-6600T",
    "price": 184.98,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.5,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i5-8600",
    "price": 269.95,
    "core_count": 6,
    "core_clock": 3.1,
    "boost_clock": 4.3,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-3330S",
    "price": 149.94,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.2,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "AMD Athlon 240GE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "AMD Athlon II X4 640",
    "price": 74.79,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-5775C",
    "price": 969.65,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Iris Pro Graphics 6200",
    "smt": true
  },
  {
    "name": "Intel Core i5-3450S",
    "price": 95,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1245 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": true
  },
  {
    "name": "Intel Core i5-3340",
    "price": 278.02,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.3,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1680 V3",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-6600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i5-6400T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": 2.8,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i7-6800K",
    "price": 329.11,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-3570S",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Pentium Gold G5600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-3570",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1241 V3",
    "price": 298,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2650L",
    "price": 129.94,
    "core_count": 8,
    "core_clock": 1.8,
    "boost_clock": 2.3,
    "tdp": 70,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A12-9800E",
    "price": 138.02,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 35,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2670 V2",
    "price": null,
    "core_count": 10,
    "core_clock": 2.5,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 760K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.1,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-3245",
    "price": 60,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2650L V2",
    "price": null,
    "core_count": 10,
    "core_clock": 1.7,
    "boost_clock": 2.1,
    "tdp": 70,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 880K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Threadripper 2970WX",
    "price": null,
    "core_count": 24,
    "core_clock": 3,
    "boost_clock": 4.2,
    "tdp": 250,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-9940X",
    "price": 998.95,
    "core_count": 14,
    "core_clock": 3.3,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-875K",
    "price": 180,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2609 V4",
    "price": 293.37,
    "core_count": 8,
    "core_clock": 1.7,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5300",
    "price": 59.49,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2140",
    "price": 79.95,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 620",
    "price": 59.49,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1275 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1225 V5",
    "price": 265,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": false
  },
  {
    "name": "Intel Core i5-7640X",
    "price": 225.4,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 112,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-550",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 940 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1240 V2",
    "price": 345,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1240 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4440S",
    "price": 117.8,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.3,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i7-3770T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 3.7,
    "tdp": 45,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Core i3-6320",
    "price": null,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Pentium G3260",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A10-9700E",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 35,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i5-9500",
    "price": null,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1275",
    "price": 376.99,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core i7-940",
    "price": 149.94,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1245 V2",
    "price": 367.5,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics P4000",
    "smt": true
  },
  {
    "name": "Intel Core i7-870",
    "price": 195.02,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G4500",
    "price": 80.79,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Pentium G620",
    "price": null,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1045T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-3225",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "AMD A6-5400K",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7540D",
    "smt": false
  },
  {
    "name": "AMD 5150",
    "price": null,
    "core_count": 4,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8400",
    "smt": false
  },
  {
    "name": "AMD FX-4300",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1226 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1230 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G4560",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 610",
    "smt": true
  },
  {
    "name": "AMD A6-7480",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Pentium E5800",
    "price": 58,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1220 V5",
    "price": 121.05,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G3900",
    "price": 53.5,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q6600",
    "price": 94.97,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-7920X",
    "price": null,
    "core_count": 12,
    "core_clock": 2.9,
    "boost_clock": 4.4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-880",
    "price": null,
    "core_count": 4,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-970",
    "price": null,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Sempron 140",
    "price": null,
    "core_count": 1,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4130",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2660 V2",
    "price": null,
    "core_count": 10,
    "core_clock": 2.2,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1650",
    "price": null,
    "core_count": 6,
    "core_clock": 3.2,
    "boost_clock": 3.8,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2603 V3",
    "price": 135,
    "core_count": 6,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2650L V4",
    "price": null,
    "core_count": 14,
    "core_clock": 1.7,
    "boost_clock": 2.5,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-8600T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.3,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Threadripper 2950X",
    "price": null,
    "core_count": 16,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9600T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.3,
    "boost_clock": 3.9,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2276G",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": 4.9,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core i3-10305",
    "price": 169.99,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.5,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-2120T",
    "price": 60,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "Intel Core i3-2105",
    "price": 60,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 3000",
    "smt": true
  },
  {
    "name": "AMD FX-9370",
    "price": null,
    "core_count": 8,
    "core_clock": 4.4,
    "boost_clock": 4.7,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-4650",
    "price": null,
    "core_count": 8,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630L V3",
    "price": 410,
    "core_count": 8,
    "core_clock": 1.8,
    "boost_clock": 2.9,
    "tdp": 55,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E6750",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6800",
    "price": null,
    "core_count": 2,
    "core_clock": 3.333,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-3850",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6550D",
    "smt": false
  },
  {
    "name": "Intel Pentium G645",
    "price": 70,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1220 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-6790K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.3,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2690",
    "price": null,
    "core_count": 8,
    "core_clock": 2.9,
    "boost_clock": 3.8,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2670",
    "price": null,
    "core_count": 8,
    "core_clock": 2.6,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2667 V2",
    "price": null,
    "core_count": 8,
    "core_clock": 3.3,
    "boost_clock": 4,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1265L V3",
    "price": 398.95,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 3.7,
    "tdp": 45,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core i7-6850K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7300",
    "price": null,
    "core_count": 2,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-9350K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.6,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-860",
    "price": 189.95,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2176G",
    "price": 844.02,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4.7,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core i5-4690",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2236",
    "price": 441.91,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 4.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 975",
    "price": 168.02,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2620 V3",
    "price": 95.07,
    "core_count": 6,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A6-7470K",
    "price": 89,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2643 V4",
    "price": 479,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.7,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2278G",
    "price": null,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 5,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Celeron E3400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-930",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Extreme QX6700",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 455",
    "price": null,
    "core_count": 3,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 840",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 980 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-3220T",
    "price": 80,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Core i3-4330",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1271 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-3240",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Core i7-6700T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.6,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1240 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Opteron 6328",
    "price": 499.99,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.8,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2470V2",
    "price": 229.95,
    "core_count": 10,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-8350K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 91,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i3-560",
    "price": 60,
    "core_count": 2,
    "core_clock": 3.333,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Pentium G2140",
    "price": 45,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A10-6700",
    "price": 112.76,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "AMD A10-5800K",
    "price": 78.02,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 7660D",
    "smt": false
  },
  {
    "name": "Intel Core i7-6900K",
    "price": 295.06,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.7,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E6320",
    "price": null,
    "core_count": 2,
    "core_clock": 1.86,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-680",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q8400",
    "price": 155.97,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4690K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 88,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1246 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": true
  },
  {
    "name": "AMD FX-8370E",
    "price": null,
    "core_count": 8,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 B59",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-6100T",
    "price": 149.94,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1275 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1230 V6",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 240GE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "Intel Core i5-9400",
    "price": null,
    "core_count": 6,
    "core_clock": 2.9,
    "boost_clock": 4.1,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-4590T",
    "price": null,
    "core_count": 4,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 4000",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2695 V3",
    "price": 498.95,
    "core_count": 14,
    "core_clock": 2.3,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon II X4 635",
    "price": 58.02,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2603",
    "price": 98.95,
    "core_count": 4,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1280 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E4300",
    "price": null,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G6950",
    "price": 55.01,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i5-750",
    "price": 403,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 830",
    "price": 55.05,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A6-3650",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6530D",
    "smt": false
  },
  {
    "name": "AMD FX-8120",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-4350",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1276 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2690",
    "price": null,
    "core_count": 8,
    "core_clock": 2.9,
    "boost_clock": 3.8,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1630 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2623 V3",
    "price": 229.95,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8310",
    "price": null,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-6500T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 3.1,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "AMD FX-8370",
    "price": null,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": 4.3,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-7800X",
    "price": null,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2420V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.2,
    "boost_clock": 2.7,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-8300T",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Ryzen 7 1800X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Threadripper 2920X",
    "price": null,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4.3,
    "tdp": 180,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 220GE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Radeon Vega 3",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2136",
    "price": 796,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A4-3400",
    "price": 134.09,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD A4-3300",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1620 V4",
    "price": 136.62,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1285 V6",
    "price": 994.94,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": 4.5,
    "tdp": 79,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2146G",
    "price": 825,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4.5,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E7400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-975 Extreme Edition",
    "price": null,
    "core_count": 4,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X6 1075T",
    "price": null,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G840",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A6-3500",
    "price": null,
    "core_count": 3,
    "core_clock": 2.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6530D",
    "smt": false
  },
  {
    "name": "AMD FX-8150",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1230",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1225 V2",
    "price": 247.5,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics P4000",
    "smt": false
  },
  {
    "name": "AMD FX-9590",
    "price": null,
    "core_count": 8,
    "core_clock": 4.7,
    "boost_clock": 5,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-5960X",
    "price": null,
    "core_count": 8,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2650L V3",
    "price": null,
    "core_count": 12,
    "core_clock": 1.8,
    "boost_clock": 2.5,
    "tdp": 65,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-4570S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1260L V5",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": 3.9,
    "tdp": 45,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1235L V5",
    "price": null,
    "core_count": 4,
    "core_clock": 2,
    "boost_clock": 3,
    "tdp": 25,
    "graphics": "Intel HD Graphics P530",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2603 V4",
    "price": 449.95,
    "core_count": 6,
    "core_clock": 1.7,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon 5370",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon R3 (on die)",
    "smt": false
  },
  {
    "name": "Intel Core i7-9800X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.8,
    "boost_clock": 4.5,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9600",
    "price": null,
    "core_count": 6,
    "core_clock": 3.1,
    "boost_clock": 4.6,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2136",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2274G",
    "price": 1064,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.9,
    "tdp": 83,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1650 V3",
    "price": null,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1275 V2",
    "price": 374,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics P4000",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1280 V6",
    "price": 562,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": 4.2,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9400",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-2125",
    "price": 152,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 3000",
    "smt": true
  },
  {
    "name": "AMD A4-6300B",
    "price": 54.44,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon HD 8370D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2643 V3",
    "price": 235.44,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.7,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Opteron 6344",
    "price": 349.99,
    "core_count": 12,
    "core_clock": 2.6,
    "boost_clock": 3.2,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2683 V3",
    "price": 896.5,
    "core_count": 14,
    "core_clock": 2,
    "boost_clock": 3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1220 V6",
    "price": 389.95,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 72,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1225 V6",
    "price": 355.29,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2174G",
    "price": 655.27,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.7,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 810",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1200",
    "price": null,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4400",
    "price": 108,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6550",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6700",
    "price": 74.95,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-920",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 965",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 270",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-6200",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G640T",
    "price": 84.88,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A10-5700",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7660D",
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 651K",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1235",
    "price": 219,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1245",
    "price": 245,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Pentium G3420",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i5-3340S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.3,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2620 V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.1,
    "boost_clock": 2.6,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-4360",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Pentium G3240",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Sempron 150",
    "price": null,
    "core_count": 1,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Opteron 6378",
    "price": null,
    "core_count": 16,
    "core_clock": 2.4,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-7890K",
    "price": null,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 870K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": 4.1,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A8-7650K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2430V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.5,
    "boost_clock": 3,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9500F",
    "price": null,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E-2236",
    "price": null,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 4.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2104G",
    "price": 589,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2246G",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 4.8,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G6600",
    "price": null,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Pentium G4620",
    "price": 224.12,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-660",
    "price": 149.94,
    "core_count": 2,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E8400",
    "price": 168.14,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-661",
    "price": 80,
    "core_count": 2,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 87,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Celeron G540",
    "price": 69.98,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Celeron G3920",
    "price": 495.09,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2124G",
    "price": 279.88,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4.5,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 720",
    "price": null,
    "core_count": 3,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1600",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2180",
    "price": null,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-965 Extreme Edition",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9650",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron 145",
    "price": null,
    "core_count": 1,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-2405S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 3000",
    "smt": false
  },
  {
    "name": "AMD FX-8100",
    "price": null,
    "core_count": 8,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4170",
    "price": null,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A4-4000",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "AMD A6-6420K",
    "price": null,
    "core_count": 2,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon HD 8000 Series",
    "smt": false
  },
  {
    "name": "Intel Pentium G3440",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A10-7800",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD FX-4100",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2637 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Pro A10-7800B",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD A4-7300",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon HD 8470D",
    "smt": false
  },
  {
    "name": "AMD A10-7860k",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i7-6900K",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.7,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Celeron G3930",
    "price": 63.92,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Pentium G4560T",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Core i3-7300T",
    "price": 128.46,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD A8-7670K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2126G",
    "price": 896,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "Intel Core i5-4670T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 45,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2665",
    "price": 149.94,
    "core_count": 8,
    "core_clock": 2.4,
    "boost_clock": 3.1,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Duo E4300",
    "price": 70,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1220",
    "price": 115,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4350",
    "price": 113.51,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G3470",
    "price": 58.31,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G3470",
    "price": 153.1,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 925",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q6700",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9550S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6850",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 645",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 450",
    "price": null,
    "core_count": 3,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G2120",
    "price": 52,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1240",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1265L V2",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 45,
    "graphics": "Intel HD Graphics 2500",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1225 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1660",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": 3.9,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A10-6800K",
    "price": null,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "AMD A4-3450",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-4160T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 4400",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630",
    "price": null,
    "core_count": 6,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD FX-8370",
    "price": null,
    "core_count": 8,
    "core_clock": 4,
    "boost_clock": 4.3,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G3450",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i7-6950X",
    "price": null,
    "core_count": 10,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G4600",
    "price": 169.95,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-7500T",
    "price": 199.95,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1240 V6",
    "price": 429.95,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.1,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-7960X",
    "price": null,
    "core_count": 16,
    "core_clock": 2.8,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 970",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-9820X",
    "price": null,
    "core_count": 10,
    "core_clock": 3.3,
    "boost_clock": 4.1,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-9500F",
    "price": null,
    "core_count": 6,
    "core_clock": 3,
    "boost_clock": 4.4,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E3300",
    "price": 64.79,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1035T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2620",
    "price": 77,
    "core_count": 6,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Pro A10-7850B",
    "price": 148.02,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1220 V5",
    "price": 354.97,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-9920X",
    "price": null,
    "core_count": 12,
    "core_clock": 3.5,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon II X2 255",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron 430",
    "price": 59.95,
    "core_count": 1,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron 430",
    "price": 59.95,
    "core_count": 1,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 545",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 550 Black",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 635",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 955 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2220",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4600",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7600",
    "price": 98.95,
    "core_count": 2,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8300",
    "price": 99.95,
    "core_count": 2,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.16,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8200",
    "price": null,
    "core_count": 4,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8300",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G850",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 631",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-2380P",
    "price": 70,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8300",
    "price": null,
    "core_count": 8,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G2130",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2609",
    "price": 95.07,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD 5150",
    "price": null,
    "core_count": 4,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8400",
    "smt": false
  },
  {
    "name": "AMD A10-7850K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD A10-7700K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Core i3-4370",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2643 V2",
    "price": 403.96,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A8-7600",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 860K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 B99",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2609 V3",
    "price": null,
    "core_count": 6,
    "core_clock": 1.9,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2650 V3",
    "price": null,
    "core_count": 10,
    "core_clock": 2.3,
    "boost_clock": 3,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2687W V3",
    "price": null,
    "core_count": 10,
    "core_clock": 3.1,
    "boost_clock": 3.5,
    "tdp": 160,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2670 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.3,
    "boost_clock": 3.1,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1230 V2",
    "price": 249.95,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 69,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X6 1065T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-4770T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 45,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "AMD A8-7670K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD A8-7670K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Pentium G4520",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1245 V5",
    "price": 399,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": true
  },
  {
    "name": "AMD Opteron 6320",
    "price": 246.96,
    "core_count": 8,
    "core_clock": 2.8,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i9-7900X",
    "price": null,
    "core_count": 10,
    "core_clock": 3.3,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1275 V6",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "AMD A6-9500E",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": 3.4,
    "tdp": 35,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2620",
    "price": 139.94,
    "core_count": 6,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-9350K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.6,
    "tdp": 91,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2244G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.8,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1245 V6",
    "price": 449.95,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.1,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "AMD Athlon II X2 215",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 260",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron 420",
    "price": null,
    "core_count": 1,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 425",
    "price": null,
    "core_count": 3,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 555 Black",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 630",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1055T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 705e",
    "price": null,
    "core_count": 3,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 905e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 910e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1400",
    "price": null,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6420",
    "price": 69.95,
    "core_count": 2,
    "core_clock": 2.13,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6700",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6750",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-670",
    "price": 119.99,
    "core_count": 2,
    "core_clock": 3.46,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core i7-860S",
    "price": 100,
    "core_count": 4,
    "core_clock": 2.53,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-940",
    "price": null,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q9505",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6700",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-2100T",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 2000",
    "smt": true
  },
  {
    "name": "AMD Phenom II X4 960T Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-6100",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G630T",
    "price": 75,
    "core_count": 2,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G870",
    "price": 77,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G550",
    "price": null,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1280",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1280",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 740",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G2010",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Celeron G1830",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2603 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A4-4020",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "AMD Sempron 145",
    "price": null,
    "core_count": 1,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-6700T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": 3.5,
    "tdp": 45,
    "graphics": "Radeon HD 8650D",
    "smt": false
  },
  {
    "name": "AMD A10-6790K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.3,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "AMD A4-6300",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon HD 8370D",
    "smt": false
  },
  {
    "name": "AMD A4-4000",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "AMD FX-4150",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.1,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-6350",
    "price": null,
    "core_count": 6,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 651",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-4360T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1230 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630L V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 60,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-1620 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X2 350",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon X4 840",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron X2 250",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G3460",
    "price": 65.9,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2640 V3",
    "price": 189.95,
    "core_count": 8,
    "core_clock": 2.6,
    "boost_clock": 3.4,
    "tdp": 90,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2685 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.6,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2680 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.5,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Phenom II X6 1065T",
    "price": null,
    "core_count": 6,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-7870K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": 4.1,
    "tdp": 95,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "Intel Pentium G4400",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1240 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Opteron 6320",
    "price": 246.96,
    "core_count": 8,
    "core_clock": 2.8,
    "boost_clock": 3.3,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Opteron 6328",
    "price": 499.99,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 3.8,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-6800K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.4,
    "boost_clock": 3.6,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7320",
    "price": null,
    "core_count": 2,
    "core_clock": 4.1,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-7500T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i5-7600T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-7700T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": 3.8,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i7-7820X",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": 4.5,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1240 V6",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.1,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A6-9550",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Core i5-3550S",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.7,
    "tdp": 65,
    "graphics": "Intel HD Graphics 2500",
    "smt": false
  },
  {
    "name": "Intel Core i3-8300",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 62,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i3-4360",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics 4600",
    "smt": true
  },
  {
    "name": "Intel Core i3-9300",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.3,
    "tdp": 62,
    "graphics": "Intel UHD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Xeon E-2144G",
    "price": 867,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": 4.5,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2274G",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.9,
    "tdp": 83,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Celeron G5925",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 58,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Celeron G5905T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i3-10325",
    "price": null,
    "core_count": 4,
    "core_clock": 3.9,
    "boost_clock": 4.7,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "AMD Athlon II X4 620",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2640 V2",
    "price": null,
    "core_count": 8,
    "core_clock": 2,
    "boost_clock": 2.5,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Opteron 6344",
    "price": null,
    "core_count": 12,
    "core_clock": 2.6,
    "boost_clock": 3.2,
    "tdp": 115,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G4920",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel UHD Graphics 610",
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 220",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 240",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 435",
    "price": null,
    "core_count": 3,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 440",
    "price": null,
    "core_count": 3,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 445",
    "price": null,
    "core_count": 3,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 920",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 925",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 250u",
    "price": null,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 25,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 400e",
    "price": null,
    "core_count": 3,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 415e",
    "price": null,
    "core_count": 3,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 965 Black (140W)",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 140,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1200",
    "price": null,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2180",
    "price": null,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E3200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4400",
    "price": null,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4600",
    "price": 98.95,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6500",
    "price": 90.66,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6850",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6850",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7200",
    "price": 80.98,
    "core_count": 2,
    "core_clock": 2.53,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8400",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-655K",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 73,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "Intel Core i5-750S",
    "price": 125,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-965 Extreme Edition",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q8200",
    "price": null,
    "core_count": 4,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8200S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9505",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9550",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9770",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 136,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme X6800",
    "price": null,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 75,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 610e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 565 Black",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 840",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron 130",
    "price": null,
    "core_count": 1,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A4-3400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD FX-8150",
    "price": null,
    "core_count": 8,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 645",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X6 1100T Black",
    "price": null,
    "core_count": 6,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-2450P",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 260",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 641",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G465",
    "price": null,
    "core_count": 2,
    "core_clock": 1.9,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1225",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 95,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1270",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1275 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 77,
    "graphics": "Intel HD Graphics P4000",
    "smt": true
  },
  {
    "name": "Intel Celeron G1620",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Celeron G1630",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 55,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2609 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4130",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A10-6800B",
    "price": null,
    "core_count": 4,
    "core_clock": 4.1,
    "boost_clock": 4.4,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "AMD A4-6320",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon HD 8370D",
    "smt": false
  },
  {
    "name": "AMD A4-3400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD A4-3420",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "Intel Celeron G470",
    "price": null,
    "core_count": 1,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "AMD FX-4170",
    "price": null,
    "core_count": 4,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-4320",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 221",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD E2-3200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6370D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2687W",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 150,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 550",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 25,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Pro A8-7600B",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": "Radeon R7 (on-die)",
    "smt": false
  },
  {
    "name": "AMD Pro A4-7300B",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon HD 8470D",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2609 V3",
    "price": null,
    "core_count": 6,
    "core_clock": 1.9,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2603 V3",
    "price": null,
    "core_count": 6,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2695 V3",
    "price": null,
    "core_count": 14,
    "core_clock": 2.3,
    "boost_clock": 3.3,
    "tdp": 120,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1270 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630 V2",
    "price": null,
    "core_count": 6,
    "core_clock": 2.6,
    "boost_clock": 3.1,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i5-5675C",
    "price": null,
    "core_count": 4,
    "core_clock": 3.1,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": "Iris Pro Graphics 6200",
    "smt": false
  },
  {
    "name": "Intel Core i3-6320",
    "price": null,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i3-6300T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Core i5-6400T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": 2.8,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Core i5-6600T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": 3.5,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Pentium G4500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Pentium G4400T",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 510",
    "smt": false
  },
  {
    "name": "Intel Pentium G4500T",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Pentium G3260",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i7-6850K",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 3.8,
    "tdp": 140,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G4620",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Celeron G3950",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Pentium G4600T",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-7101TE",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 610",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1220 V6",
    "price": 398.95,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": 3.5,
    "tdp": 72,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1225 V6",
    "price": 369.51,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1230 V6",
    "price": 449.95,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X4 940",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-870S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.667,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.9,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Pentium Gold G5500T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel UHD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2665",
    "price": null,
    "core_count": 8,
    "core_clock": 2.4,
    "boost_clock": 3.1,
    "tdp": 115,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2660",
    "price": null,
    "core_count": 8,
    "core_clock": 2.2,
    "boost_clock": 3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-9320",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.4,
    "tdp": 62,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-9320",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4.4,
    "tdp": 62,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E-2174G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.7,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2134",
    "price": 697,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.5,
    "tdp": 71,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Pentium G3420",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2637 V3",
    "price": 483.62,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.7,
    "tdp": 135,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7350K",
    "price": null,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 60,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-7600T",
    "price": 229.95,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": 3.7,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 250",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron 430",
    "price": null,
    "core_count": 1,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 435",
    "price": null,
    "core_count": 3,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 440",
    "price": null,
    "core_count": 3,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 550",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 635",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 945",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 945",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 235e",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 240e",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 245e",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 405e",
    "price": null,
    "core_count": 3,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 720 Black",
    "price": null,
    "core_count": 3,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 740 Black",
    "price": null,
    "core_count": 3,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2140",
    "price": null,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2140",
    "price": null,
    "core_count": 2,
    "core_clock": 1.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2160",
    "price": null,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2160",
    "price": null,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E3200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E3300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E4500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5300",
    "price": 79.4,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5300",
    "price": 79.4,
    "core_count": 2,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6320",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 1.86,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6400",
    "price": 89.95,
    "core_count": 2,
    "core_clock": 2.13,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6420",
    "price": null,
    "core_count": 2,
    "core_clock": 2.13,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6550",
    "price": null,
    "core_count": 2,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6600",
    "price": null,
    "core_count": 2,
    "core_clock": 3.06,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6700",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8400",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.16,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i7-860S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.53,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core 2 Quad Q6700",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8300",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8300",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8400",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8400S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9450",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6800",
    "price": null,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6800",
    "price": null,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 630",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 265",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 715 Black",
    "price": null,
    "core_count": 3,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 970 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 545",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X2 560 Black",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 955",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 955",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 630",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron 130",
    "price": null,
    "core_count": 1,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 960T Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G860",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A8-3850",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6550D",
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 250",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron G555",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G3430",
    "price": 51.5,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 54,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD FX-9370",
    "price": null,
    "core_count": 8,
    "core_clock": 4.4,
    "boost_clock": 4.7,
    "tdp": 220,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD 5350",
    "price": null,
    "core_count": 4,
    "core_clock": 2.05,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon HD 8400",
    "smt": false
  },
  {
    "name": "Intel Celeron G1850",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Sempron X2 198",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron X2 198",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Sempron X2 190",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A4-3300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD A4-3300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD A4-3400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6410D",
    "smt": false
  },
  {
    "name": "AMD A4-5300",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "AMD A6-7400K",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Celeron G470",
    "price": null,
    "core_count": 1,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": true
  },
  {
    "name": "AMD FX-4200",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-6200",
    "price": null,
    "core_count": 6,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 651",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 638",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 638",
    "price": null,
    "core_count": 4,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD E2-3200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Radeon HD 6370D",
    "smt": false
  },
  {
    "name": "AMD Athlon X2 370K",
    "price": null,
    "core_count": 2,
    "core_clock": 4.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-1660 V2",
    "price": null,
    "core_count": 6,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 130,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon X2 450",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G3250",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G3250T",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G3460",
    "price": 75.9,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2622 V3",
    "price": null,
    "core_count": 8,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2630 V3",
    "price": 459,
    "core_count": 8,
    "core_clock": 2.4,
    "boost_clock": 3.2,
    "tdp": 85,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2697 V3",
    "price": null,
    "core_count": 14,
    "core_clock": 2.6,
    "boost_clock": 3.6,
    "tdp": 145,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2609",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2603 V2",
    "price": null,
    "core_count": 4,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 80,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1245 V3",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 84,
    "graphics": "Intel HD Graphics P4600",
    "smt": true
  },
  {
    "name": "AMD FX-8310",
    "price": null,
    "core_count": 8,
    "core_clock": 3.4,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-4570S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": "Intel HD Graphics 4600",
    "smt": false
  },
  {
    "name": "Intel Core i3-6300T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.3,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Pentium G4520",
    "price": null,
    "core_count": 2,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1225 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 3.7,
    "tdp": 80,
    "graphics": "Intel HD Graphics P530",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 845",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 3.8,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A6-7470K",
    "price": null,
    "core_count": 2,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 880K",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2658 V3",
    "price": null,
    "core_count": 12,
    "core_clock": 2.2,
    "boost_clock": 2.9,
    "tdp": 105,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD Athlon 5370",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 25,
    "graphics": "Radeon R3 (on die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 860K",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i3-7300",
    "price": null,
    "core_count": 2,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Celeron G3950",
    "price": null,
    "core_count": 2,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 610",
    "smt": false
  },
  {
    "name": "Intel Core i3-7100T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i3-7300T",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-7400T",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": 3,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": false
  },
  {
    "name": "Intel Core i7-7740X",
    "price": null,
    "core_count": 4,
    "core_clock": 4.3,
    "boost_clock": 4.5,
    "tdp": 112,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E5-2440V2",
    "price": null,
    "core_count": 8,
    "core_clock": 1.9,
    "boost_clock": 2.4,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i7-870S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.667,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i9-7940X",
    "price": null,
    "core_count": 14,
    "core_clock": 3.1,
    "boost_clock": 4.4,
    "tdp": 165,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E-2146G",
    "price": 988,
    "core_count": 6,
    "core_clock": 3.5,
    "boost_clock": 4.5,
    "tdp": 80,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "Intel Xeon E-2124",
    "price": null,
    "core_count": 4,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 71,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E-2124G",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 4.5,
    "tdp": 71,
    "graphics": "Intel HD Graphics P630",
    "smt": false
  },
  {
    "name": "Intel Pentium G3240",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Xeon E3-1275 V6",
    "price": 361.55,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 73,
    "graphics": "Intel HD Graphics P630",
    "smt": true
  },
  {
    "name": "AMD Athlon II X2 245",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron 450",
    "price": null,
    "core_count": 1,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 710",
    "price": null,
    "core_count": 3,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 805",
    "price": null,
    "core_count": 4,
    "core_clock": 2.5,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 910",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 260u",
    "price": null,
    "core_count": 2,
    "core_clock": 1.8,
    "boost_clock": null,
    "tdp": 25,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 405e",
    "price": null,
    "core_count": 3,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 600e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 605e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.3,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X4 610e",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 45,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 940 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Celeron E1600",
    "price": null,
    "core_count": 2,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2180",
    "price": null,
    "core_count": 2,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E2200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6300",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6400",
    "price": null,
    "core_count": 2,
    "core_clock": 2.13,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6540",
    "price": null,
    "core_count": 2,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E6550",
    "price": null,
    "core_count": 2,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.53,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E7500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8190",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8200",
    "price": null,
    "core_count": 2,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Duo E8500",
    "price": null,
    "core_count": 2,
    "core_clock": 3.16,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core i5-750S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.4,
    "boost_clock": null,
    "tdp": 82,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8200",
    "price": null,
    "core_count": 4,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8200S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.33,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q8400S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9400S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9400S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9450",
    "price": null,
    "core_count": 4,
    "core_clock": 2.66,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Quad Q9505S",
    "price": null,
    "core_count": 4,
    "core_clock": 2.83,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6800",
    "price": null,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6800",
    "price": null,
    "core_count": 4,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 100,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX6850",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9650",
    "price": null,
    "core_count": 4,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 130,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9775",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 150,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9775",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 150,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme QX9775",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 150,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Core 2 Extreme X6800",
    "price": null,
    "core_count": 2,
    "core_clock": 2.93,
    "boost_clock": null,
    "tdp": 75,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 255",
    "price": null,
    "core_count": 2,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 425",
    "price": null,
    "core_count": 3,
    "core_clock": 2.7,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E5500",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium E6700",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 975",
    "price": null,
    "core_count": 4,
    "core_clock": 3.6,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 245",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 245",
    "price": null,
    "core_count": 2,
    "core_clock": 2.9,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 925",
    "price": null,
    "core_count": 4,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X3 720 Black",
    "price": null,
    "core_count": 3,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 460",
    "price": null,
    "core_count": 3,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X3 440",
    "price": null,
    "core_count": 3,
    "core_clock": 3,
    "boost_clock": null,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Pentium G620T",
    "price": null,
    "core_count": 2,
    "core_clock": 2.2,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 970",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Phenom II X4 980 Black",
    "price": null,
    "core_count": 4,
    "core_clock": 3.7,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD A6-3650",
    "price": null,
    "core_count": 4,
    "core_clock": 2.6,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 6530D",
    "smt": false
  },
  {
    "name": "AMD A6-6420K",
    "price": null,
    "core_count": 2,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 65,
    "graphics": "Radeon HD 8000 Series",
    "smt": false
  },
  {
    "name": "Intel Pentium G3450",
    "price": null,
    "core_count": 2,
    "core_clock": 3.4,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Pentium G3258",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "AMD A10-6790B",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": null,
    "tdp": 100,
    "graphics": "Radeon HD 8670D",
    "smt": false
  },
  {
    "name": "AMD A4-6320",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon HD 8370D",
    "smt": false
  },
  {
    "name": "AMD A4-4020",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": 3.4,
    "tdp": 65,
    "graphics": "Radeon HD 7480D",
    "smt": false
  },
  {
    "name": "AMD FX-6130",
    "price": null,
    "core_count": 6,
    "core_clock": 3.6,
    "boost_clock": 3.9,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8120",
    "price": null,
    "core_count": 8,
    "core_clock": 3.1,
    "boost_clock": null,
    "tdp": 125,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8140",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 4.1,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon II X2 221",
    "price": null,
    "core_count": 2,
    "core_clock": 2.8,
    "boost_clock": null,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8320E",
    "price": null,
    "core_count": 8,
    "core_clock": 3.2,
    "boost_clock": 4,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD FX-8370E",
    "price": null,
    "core_count": 8,
    "core_clock": 3.3,
    "boost_clock": 4.3,
    "tdp": 95,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Athlon X4 530",
    "price": null,
    "core_count": 4,
    "core_clock": 2,
    "boost_clock": null,
    "tdp": 25,
    "graphics": null,
    "smt": false
  },
  {
    "name": "AMD Pro A6-7400B",
    "price": null,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": 3.9,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "Intel Pentium G3250",
    "price": null,
    "core_count": 2,
    "core_clock": 3.2,
    "boost_clock": null,
    "tdp": 53,
    "graphics": "Intel HD Graphics",
    "smt": false
  },
  {
    "name": "Intel Core i3-6300",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": null,
    "tdp": 51,
    "graphics": "Intel HD Graphics 530",
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1230 V5",
    "price": null,
    "core_count": 4,
    "core_clock": 3.4,
    "boost_clock": 3.8,
    "tdp": 80,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Core i3-7300T",
    "price": 128.46,
    "core_count": 2,
    "core_clock": 3.5,
    "boost_clock": null,
    "tdp": 35,
    "graphics": "Intel HD Graphics 630",
    "smt": true
  },
  {
    "name": "Intel Core i5-7640X",
    "price": null,
    "core_count": 4,
    "core_clock": 4,
    "boost_clock": 4.2,
    "tdp": 112,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E5-2450V2",
    "price": null,
    "core_count": 8,
    "core_clock": 2.5,
    "boost_clock": 3.3,
    "tdp": 95,
    "graphics": null,
    "smt": true
  },
  {
    "name": "Intel Xeon E3-1270 V6",
    "price": null,
    "core_count": 4,
    "core_clock": 3.8,
    "boost_clock": 4.2,
    "tdp": 72,
    "graphics": null,
    "smt": true
  },
  {
    "name": "AMD A6-9550",
    "price": null,
    "core_count": 2,
    "core_clock": 3.8,
    "boost_clock": 4,
    "tdp": 65,
    "graphics": "Radeon R5 (on die)",
    "smt": false
  },
  {
    "name": "AMD Athlon X4 940",
    "price": null,
    "core_count": 4,
    "core_clock": 3.2,
    "boost_clock": 3.6,
    "tdp": 65,
    "graphics": null,
    "smt": false
  },
  {
    "name": "Intel Xeon E-2134",
    "price": null,
    "core_count": 4,
    "core_clock": 3.5,
    "boost_clock": 4.5,
    "tdp": 71,
    "graphics": null,
    "smt": true
  }
];