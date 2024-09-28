const motherboardData = [
  {
    "name": "MSI B650 GAMING PLUS WIFI",
    "price": 169.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B650-A GAMING WIFI",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B760 GAMING PLUS WIFI",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z790-A MAX WIFI",
    "price": 239.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B550 GAMING GEN3",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450M-A PRO MAX II",
    "price": 69.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B650 TOMAHAWK WIFI",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 GAMING X AX",
    "price": 179.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B550M-A WIFI II",
    "price": 104.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Silver"
  },
  {
    "name": "ASRock B650M Pro RS WiFi",
    "price": 149.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B660M Pro RS",
    "price": 94.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "MSI PRO B650M-P",
    "price": 119.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING Z790-PRO WIFI",
    "price": 279.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG X670E TOMAHAWK WIFI",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z790-P WIFI",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B550 TOMAHAWK MAX WIFI",
    "price": 159.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B550-F GAMING WIFI II",
    "price": 189.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI PRO B650M-A WIFI",
    "price": 156.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B650I Lightning Wifi",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI B550M PRO-VDH WIFI",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B650-S WIFI",
    "price": 139.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 EAGLE AX",
    "price": 169.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Asus ROG STRIX B650E-F GAMING WIFI",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 AORUS ELITE AX ICE",
    "price": 229.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 DARK HERO",
    "price": 579.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Prime B450M-A II",
    "price": 69.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte B650 AORUS ELITE AX",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B760-PLUS",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550M K",
    "price": 94.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Silver"
  },
  {
    "name": "MSI MAG Z790 TOMAHAWK WIFI",
    "price": 209.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte TRX40 AORUS XTREME",
    "price": 1840.02,
    "socket": "sTRX4",
    "form_factor": "XL ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X670E AORUS PRO X",
    "price": 299.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "Asus ROG STRIX Z790-A GAMING WIFI II",
    "price": 335.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE AX",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B450M-HDV R4.0",
    "price": 59.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "MSI PRO B550M-VC WIFI",
    "price": 116.55,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B760-P WIFI DDR4",
    "price": 139.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B650-PLUS WIFI",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550 UD AC",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG STRIX B650E-I GAMING WIFI",
    "price": 299.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z790-E GAMING WIFI II",
    "price": 427.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B550-A PRO",
    "price": 109.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO A620M-E",
    "price": 74.95,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI PRO H610M-G DDR4",
    "price": 79.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B650M Pro RS",
    "price": 134.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z690-A WIFI",
    "price": 149.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B760-I GAMING WIFI",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B550M Pro4",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte A520I AC",
    "price": 109.99,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B450M/ac R2.0",
    "price": 77.66,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B450M PRO-VDH MAX",
    "price": 74.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M-HDV/M.2",
    "price": 119.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "White / Black"
  },
  {
    "name": "Gigabyte B760M DS3H DDR4",
    "price": 99.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B550-PLUS WIFI II",
    "price": 134,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B650M D3HP",
    "price": 119.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B650-P WIFI",
    "price": 162.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B550-A GAMING",
    "price": 171.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus TUF GAMING A520M-PLUS WIFI",
    "price": 97.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte B650 GAMING X AX V2",
    "price": 184.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Asus ROG STRIX X670E-E GAMING WIFI",
    "price": 449.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 FORMULA",
    "price": 749.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "NZXT N7 B650E",
    "price": 279.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "ASRock Z690M-ITX/ax",
    "price": 134.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B550M AORUS ELITE AX",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG B550 GAMING PLUS",
    "price": 131,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550 AORUS ELITE AX V2",
    "price": 139.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A620I LIGHTNING WIFI",
    "price": 139.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650M AORUS ELITE AX",
    "price": 189.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B450M DS3H WIFI",
    "price": 88.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus TUF GAMING X570-PLUS (WI-FI)",
    "price": 193.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock B760M-H/M.2",
    "price": 89.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING X670E-PLUS WIFI",
    "price": 269.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B650M-HDV/M.2",
    "price": 150.71,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG B650I EDGE WIFI",
    "price": 261.33,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650I AORUS ULTRA",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550 GAMING X V2",
    "price": 92.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X670E GAMING PLUS WIFI",
    "price": 229.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650M-H/M.2+",
    "price": 99.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX Z690-I GAMING WIFI",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B450M K",
    "price": 80,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS PRO X",
    "price": 349.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "MSI MAG B550 TOMAHAWK",
    "price": 139.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z790 GODLIKE MAX",
    "price": 1196.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 AORUS ELITE AX V2",
    "price": 187.79,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A520M-HDV",
    "price": 66.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B450 Gaming Plus MAX",
    "price": 74.98,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "ASRock B550M-ITX/ac",
    "price": 129.99,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650 Steel Legend WiFi",
    "price": 179.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "Gigabyte A620I AX",
    "price": 139.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus ROG STRIX Z690-E GAMING WIFI",
    "price": 230.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME X670-P WIFI",
    "price": 209.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760M-P DDR4",
    "price": 99.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG CROSSHAIR X670E HERO",
    "price": 639.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z790-E GAMING WIFI",
    "price": 359.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG B760 TOMAHAWK WIFI",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte H410M H V2",
    "price": 72.91,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Asus TUF GAMING Z790-PLUS WIFI",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus ROG ZENITH II EXTREME ALPHA",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X670E Steel Legend",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B550I AORUS PRO AX",
    "price": 189.99,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650M D3HP AX",
    "price": 134.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B760M DS3H AX",
    "price": 139.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550M DS3H AC",
    "price": 108.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE X WIFI7",
    "price": 279.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z790-P WIFI",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "NZXT N7 B650E",
    "price": 249.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ProArt X670E-CREATOR WIFI",
    "price": 424.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "MSI B450 TOMAHAWK MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X670 AORUS ELITE AX (rev. 1.0)",
    "price": 269.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A620M Pro RS WiFi",
    "price": 177.85,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B450M PRO4 R2.0",
    "price": 80.15,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "MSI PRO H610M-G WIFI DDR4",
    "price": 99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H610M-HVS",
    "price": 69.98,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "MSI MPG Z790 EDGE TI MAX WIFI",
    "price": 299.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650E PG RIPTIDE WIFI",
    "price": 189.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B650M GAMING PLUS WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z690 Extreme",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 EAGLE AX",
    "price": 183.94,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte B650E AORUS ELITE X AX ICE",
    "price": 249.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / White"
  },
  {
    "name": "Gigabyte B550M DS3H",
    "price": 89,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus ROG STRIX B650E-E GAMING WIFI",
    "price": 331.14,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760 GAMING X AX",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte A520M K V2",
    "price": 78.04,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG STRIX B550-F GAMING",
    "price": 158.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550 Phantom Gaming 4/ac",
    "price": 89.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760M-A WIFI DDR4",
    "price": 149.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS WIFI II",
    "price": 194.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "NZXT N7 Z790",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Gigabyte B760I AORUS PRO",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650M PG RIPTIDE WIFI",
    "price": 169.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B650M-PLUS WIFI",
    "price": 189.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX X670E-F GAMING WIFI",
    "price": 349.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ProArt Z790-CREATOR WIFI",
    "price": 439.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "Asus PRIME B650-PLUS",
    "price": 164.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A520M-A PRO",
    "price": 69.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "NZXT N7 Z790",
    "price": 296.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550M-HDV",
    "price": 74.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B550M PG RIPTIDE",
    "price": 102.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus ROG STRIX X670E-I GAMING WIFI",
    "price": 424.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B760-A GAMING WIFI",
    "price": 209.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X670 GAMING X AX V2",
    "price": 209.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte A520M DS3H V2",
    "price": 89.2,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Brown"
  },
  {
    "name": "Asus ROG STRIX Z790-H GAMING WIFI",
    "price": 249.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z790 GAMING PLUS WIFI",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z690 Pro RS",
    "price": 119.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX Z790-F GAMING WIFI II",
    "price": 409.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG X670E GODLIKE",
    "price": 1287.01,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte TRX40 AORUS PRO WIFI",
    "price": 529.99,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Orange"
  },
  {
    "name": "Asus TUF GAMING B550M-PLUS WIFI II",
    "price": 202.34,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI PRO Z790-S WIFI",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX X670E-A GAMING WIFI",
    "price": 334.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H370M-HDV",
    "price": 74.95,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550 Phantom Gaming-ITX/ax",
    "price": 159.99,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B660M-A WIFI D4",
    "price": 171.27,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B760M MORTAR WIFI II",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX Z790-A GAMING WIFI D4",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B650M MORTAR WIFI",
    "price": 199.95,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z790I EDGE WIFI",
    "price": 297.83,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B550-VC",
    "price": 139.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE AX ICE",
    "price": 259.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / White"
  },
  {
    "name": "Asus PRIME B550-PLUS",
    "price": 109.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock B760M Pro RS/D4 WiFi",
    "price": 148.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock X670E PG Lightning",
    "price": 238.76,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte A520M S2H",
    "price": 80.48,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B550 Phantom Gaming 4",
    "price": 89.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG Z790 TOMAHAWK MAX WIFI",
    "price": 269.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI PRO-H610M-E-DDR4",
    "price": 91.11,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H510M K V2",
    "price": 84.73,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME Z790-A WIFI",
    "price": 249,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A320M-K",
    "price": 68.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus ROG STRIX B450-F GAMING II",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG X670E CARBON WIFI",
    "price": 409.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B760M GAMING PLUS WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B650M PG Lightning Wifi",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Intel DQ45EK",
    "price": 276.09,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 HERO",
    "price": 529.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B450M Steel Legend",
    "price": 89.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE X AX",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG B650 EDGE WIFI",
    "price": 227.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME X670E-PRO WIFI",
    "price": 299.76,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650 LiveMixer",
    "price": 138.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Orange / Black"
  },
  {
    "name": "MSI PRO Z790-P WIFI DDR4",
    "price": 201.19,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B650M-A WIFI II",
    "price": 226.56,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B550-PLUS AC-HES",
    "price": 109.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO Z790-A WIFI",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H510M-A WIFI",
    "price": 109.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M PG SONIC WiFi",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Blue / Silver"
  },
  {
    "name": "Asus TUF GAMING A620M-PLUS WIFI",
    "price": 148.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B650 PRO RS",
    "price": 244.21,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H610M S2H V2 DDR4",
    "price": 89.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B650I AX",
    "price": null,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z790-I GAMING WIFI",
    "price": 439.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B760 TOMAHAWK WIFI DDR4",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Fatal1ty B450 Gaming-ITX/ac",
    "price": 146.86,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z790-F GAMING WIFI",
    "price": 269.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z790 Lightning WiFi",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X670E AORUS XTREME (rev. 1.0)",
    "price": 649.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550M Steel Legend",
    "price": 115.98,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME Z790-V WIFI",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "NZXT N7 B550",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus ROG STRIX B450-F GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790M AORUS ELITE AX ICE",
    "price": 204.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "MSI B450M-A PRO MAX",
    "price": 92.21,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 UD AC",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 APEX ENCORE",
    "price": 869.47,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B450M Pro4",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B650 PG LIGHTNING",
    "price": 149.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X670E Taichi",
    "price": 409.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760 AORUS ELITE AX",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B450M DS3H",
    "price": 124.94,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550M AORUS ELITE",
    "price": 132.27,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus ROG STRIX TRX40-XE GAMING",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte X670E AORUS MASTER (rev. 1.0)",
    "price": 391.71,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B650E Taichi Lite",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z790 Riptide WiFi",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760-PLUS WIFI",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 GAMING X AX",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650M GAMING X AX",
    "price": 214.86,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B760M-HDV/M.2 D4",
    "price": 89.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG Z690 TOMAHAWK WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z390-P",
    "price": 199.94,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG Z790 CARBON WIFI II",
    "price": 399.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte A620M S2H",
    "price": 89.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "ASRock B660M-HDV",
    "price": 94.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "MSI MPG B760I EDGE WIFI",
    "price": 206.61,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B650M-B",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z690-A GAMING WIFI D4",
    "price": 397.86,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B760M-A",
    "price": 145.54,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MEG X670E ACE",
    "price": 679.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock X670E Taichi Carrara",
    "price": 429.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI MEG Z790 ACE MAX",
    "price": 699.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z690-A WIFI DDR4",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z390-A PRO",
    "price": 246.18,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B650M DS3H",
    "price": 193.53,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B650M K",
    "price": 119.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Silver"
  },
  {
    "name": "ASRock H310CM-DVS",
    "price": 62.8,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B450M-K II",
    "price": 91.17,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING Z790-PLUS WIFI D4",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550 AORUS ELITE V2",
    "price": 173.32,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Crosshair VIII Dark Hero",
    "price": 579.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z390-A",
    "price": 284,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z790 Pro RS",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760-VC WIFI IV",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z790-VC WIFI",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME A520M-A II/CSM",
    "price": 79.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG B650 CARBON WIFI",
    "price": 458.47,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B450M/AC",
    "price": 82.38,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A520M-ITX/ac",
    "price": 119.17,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650M AORUS ELITE AX ICE",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "MSI Z790 GAMING PRO WIFI",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 UD AC",
    "price": 169.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B760M-A WIFI D4",
    "price": 188.54,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z390 AORUS PRO WIFI",
    "price": 298,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550 Pro4",
    "price": 119.67,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H610I",
    "price": 119.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B660 TOMAHAWK WIFI DDR4",
    "price": 235.49,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z790 EDGE WIFI",
    "price": 291.94,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H610I-PLUS D4-CSM",
    "price": 112.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B760M Steel Legend WiFi",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B660-PLUS D4",
    "price": 149.02,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B550M MORTAR MAX WIFI",
    "price": 149.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B760M Pro RS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX X570-E GAMING WIFI II",
    "price": 459,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B550-PLUS",
    "price": 157,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B650E PG-ITX WIFI",
    "price": 289.99,
    "socket": "AM5",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF GAMING B650-PLUS",
    "price": 260.54,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME X670-P",
    "price": 221.02,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B550M-P GEN3",
    "price": 103.6,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450 TOMAHAWK",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M PG Riptide",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE AX",
    "price": 174.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H510M-K",
    "price": 129.06,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z690 PG Riptide",
    "price": 124.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z490-A PRO",
    "price": 329,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B760M-A WIFI",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-K D4",
    "price": 107.39,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B450M DS3H V2",
    "price": 102.84,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG Z690 ACE",
    "price": 223.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock B450 Steel Legend",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro X10SLL-F",
    "price": 169.99,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock B560M-HDV",
    "price": 129.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX Z590-E GAMING WIFI",
    "price": 349.63,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z790 CARBON WIFI",
    "price": 439.56,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M C",
    "price": 139.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Gray"
  },
  {
    "name": "ASRock A520M-HVS",
    "price": 81.23,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS MASTER",
    "price": 439.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B450 AORUS ELITE V2",
    "price": 126.81,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG CROSSHAIR X670E GENE",
    "price": 658.73,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS XTREME X",
    "price": 1611.9,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z790 Taichi Lite",
    "price": 341.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus TUF GAMING B650M-E WIFI",
    "price": 227.53,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING Z690-PLUS WIFI",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z690 Phantom Gaming 4/D5",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z490-P",
    "price": 199.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG X570 UNIFY",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B650E STEEL LEGEND WIFI",
    "price": 199.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760 Pro RS/D4",
    "price": 149.5,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760M-P",
    "price": 141.53,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG Z690 UNIFY",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A520M-K",
    "price": 97.85,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO X670-P WIFI",
    "price": 349.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus ROG STRIX B760-F GAMING WIFI",
    "price": 247.94,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z790M-PLUS",
    "price": 196.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z690M Phantom Gaming 4",
    "price": 99.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H610M-HDV/M.2+ D5",
    "price": 98.4,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "White / Black"
  },
  {
    "name": "ASRock B760M-ITX/D4 WiFi",
    "price": 148.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B560M MORTAR WIFI",
    "price": 240.28,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI MPG X570 GAMING EDGE WIFI",
    "price": 299,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING X670E-PLUS",
    "price": 353.13,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus TUF GAMING B660-PLUS WIFI D4",
    "price": 215.81,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Yellow / Black"
  },
  {
    "name": "MSI MAG Z790 TOMAHAWK WIFI DDR4",
    "price": 265.75,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B550M-K",
    "price": 114.97,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock X570 Phantom Gaming-ITX/TB3",
    "price": 299,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z690 EDGE WIFI DDR4",
    "price": 369,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus X99-WS/IPMI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PROART B650-CREATOR",
    "price": 229.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "Gigabyte B450 I AORUS PRO WIFI",
    "price": 195.03,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z790-A WIFI DDR4",
    "price": 194.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760 Pro RS",
    "price": 149.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock X670E Pro RS",
    "price": 219.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760I AORUS PRO DDR4",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B450M-A",
    "price": 207.5,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING X570-PRO WIFI II",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte A620M GAMING X",
    "price": 119.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Gray"
  },
  {
    "name": "Asus PRIME B450-PLUS",
    "price": 130.96,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z370-E GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M D3H",
    "price": 144.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte Z790 AORUS MASTER X",
    "price": 499.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X570 Phantom Gaming 4S",
    "price": 3939.77,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z790M-ITX WIFI",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B450-PLUS II",
    "price": 135.58,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte A620M GAMING X AX",
    "price": 127.55,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Gray"
  },
  {
    "name": "ASRock H670M-ITX/ax",
    "price": 165.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760 DS3H AC DDR4",
    "price": 139.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z390-E GAMING",
    "price": 365,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B760-A GAMING WIFI D4",
    "price": 214.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME Z790-P WIFI D4",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z690 Phantom Gaming-ITX/TB4",
    "price": 194.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG STRIX B550-F GAMING (WI-FI)",
    "price": 329,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z490 GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS PRO X WIFI7",
    "price": 349.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG B760M EDGE TI WIFI",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B450 AORUS PRO WIFI (rev. 1.0)",
    "price": 237.26,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B660-I GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z790 Nova WiFi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B550-I GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS WIFI D4",
    "price": 256.25,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME B650M-A AX II",
    "price": 159.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z790 Steel Legend WiFi",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z790I AORUS ULTRA",
    "price": 289.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-H270N-WIFI",
    "price": 209.99,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z790 PRO RS WIFI",
    "price": 187.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650E AORUS MASTER",
    "price": 448.02,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H510M S2H V3",
    "price": 90.41,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Asus PRIME H510M-E",
    "price": 114.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z790 D AC",
    "price": 184.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte X570 AORUS ELITE WIFI",
    "price": 319.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z390 GAMING EDGE AC",
    "price": 399.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760 GAMING X DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450-A PRO MAX",
    "price": 144.97,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME X570-PRO",
    "price": 458.71,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B760M DS3H AX DDR4",
    "price": 164.58,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B450 AORUS M",
    "price": 153.9,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H610M-A WIFI D4",
    "price": 152.14,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z790 ACE",
    "price": 469.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gold / Black"
  },
  {
    "name": "Gigabyte X570SI AORUS PRO AX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG X570 GAMING PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z790 PG Lightning/D4",
    "price": 230.02,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450 TOMAHAWK MAX II",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-A320M-S2H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock A620M-HDV/M.2",
    "price": 109.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "MSI X470 GAMING PLUS MAX",
    "price": 199.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro MBD-X10DAX",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 2048,
    "memory_slots": 16,
    "color": "Green / Black"
  },
  {
    "name": "ASRock X570 Phantom Gaming 4 WiFi ax",
    "price": 129.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z270-A",
    "price": 381.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock B450 Pro4 R2.0",
    "price": 115.56,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B550M-PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG CROSSHAIR X670E EXTREME",
    "price": null,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A320M-A PRO MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE AX DDR4",
    "price": 258.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Strix X570-I Gaming",
    "price": 539,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte A520 AORUS ELITE",
    "price": 119.02,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B650M PG RIPTIDE",
    "price": 185.33,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B760M PG Lightning Wifi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z690-F GAMING WIFI",
    "price": 326,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z790 PG LIGHTNING",
    "price": 209.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B660M-K D4",
    "price": 113.92,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650 AORUS PRO AX",
    "price": 366.85,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus H110M-K",
    "price": 189.99,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte B760 DS3H AC",
    "price": 154.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE X AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "Asus PRIME Z690-P WIFI",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B450 AORUS ELITE",
    "price": 158.9,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A320M-HDV R4.0",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus ROG STRIX Z790-A GAMING WIFI",
    "price": 337.25,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MEG Z790 GODLIKE",
    "price": 1151.43,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z790 CARBON MAX WIFI II",
    "price": 469.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-A AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B450M-PLUS II",
    "price": 142.43,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650 AERO G",
    "price": 259.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550M Phantom Gaming 4",
    "price": 104.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570 AORUS ELITE",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG X570 TOMAHAWK WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B660-A GAMING WIFI D4",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M GAMING X AX DDR4",
    "price": 192.6,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B660M-ITX/ac",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B760-PLUS D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME X570-P",
    "price": 288.29,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI MAG B550M MORTAR WIFI",
    "price": 289.8,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z790 AERO G",
    "price": 259.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI PRO B760-P DDR4 II",
    "price": 171.45,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING Z690-PLUS WIFI D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760 Pro RS WiFi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650M GAMING WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X570 Steel Legend",
    "price": 139.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING X570-PLUS",
    "price": 289.86,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI MPG B550 GAMING EDGE WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650M GAMING PLUS WF",
    "price": 159.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B560M PRO-E",
    "price": 133.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG Strix X570-E Gaming",
    "price": 609,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A320M-DVS R4.0",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H410M S2H V2",
    "price": 86.14,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus TUF GAMING B660M-PLUS WIFI",
    "price": 234.86,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Yellow / Black"
  },
  {
    "name": "Gigabyte H610M K DDR4",
    "price": 97.98,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560M DS3H AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B650M PG Lightning",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B350 TOMAHAWK ARCTIC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "MSI Z370-A PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B365M DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X570S PG Riptide",
    "price": 139.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX X99 GAMING",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660M DS3H AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ProArt B760-CREATOR WIFI",
    "price": 219.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B350M BAZOOKA",
    "price": 160,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B365M DS3H WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z490-E GAMING",
    "price": 478.66,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte H610M S2H V3 DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H610M-ITX/eDP",
    "price": 108.97,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG ZENITH EXTREME ALPHA",
    "price": 899.99,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z690-A DDR4",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime X470-Pro",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock X570 Steel Legend WiFi ax",
    "price": 149.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z390 UD",
    "price": 209.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B250M-DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z790 UD AX",
    "price": 266.58,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B460M PRO-VDH WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS WIFI",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock Z77 Extreme4",
    "price": 299.99,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Z170-A",
    "price": 331.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "NZXT N7 B550",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus P5G41-M LE/CSM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B550 Steel Legend",
    "price": 155,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B760-G GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z790 Taichi Carrara",
    "price": 389.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus TUF GAMING B760-PLUS WIFI D4",
    "price": 209.8,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME Z790M-PLUS D4",
    "price": 193,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A320M-A PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG X570S TOMAHAWK MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z690M PG RIPTIDE/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime X299-A II",
    "price": 259.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B560 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte TRX40 AORUS MASTER",
    "price": 703.51,
    "socket": "sTRX4",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X570 Taichi",
    "price": 212.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z490 GAMING PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z790 PG-ITX/TB4",
    "price": 369.2,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING H570-PRO WIFI",
    "price": 284.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B450M GAMING PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME B550M-A",
    "price": 107.86,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus H81M-K",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte H610I DDR4",
    "price": 184.22,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B550M-A AC",
    "price": 100,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE AX DDR4",
    "price": 224,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B560M-PLUS WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gold / Black"
  },
  {
    "name": "Asus ROG MAXIMUS XI HERO (WI-FI)",
    "price": 439,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450M MORTAR MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z690 HERO",
    "price": 499,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 HERO EVA-02 EDITION",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "MSI MPG Z390 GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z790 PG SONIC",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X570 Pro4",
    "price": 129.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z790-V AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME A620-PLUS WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus STRIX B350-F GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z690 FORMULA",
    "price": 459.25,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B450M S2H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B650-E WIFI",
    "price": 189.99,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME Z690-A",
    "price": 258.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte A620M DS3H",
    "price": 142.63,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Asus PRIME A620M-A-CSM",
    "price": 129.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B550M PRO-VDH",
    "price": 127.38,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z97-GAMING 5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG Crosshair VIII Hero (WI-FI)",
    "price": 719,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z690-P D4",
    "price": 309.27,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B550-E GAMING",
    "price": 235,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-K D4",
    "price": 136.3,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock FM2A68M-DG3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI MAG B760M MORTAR WIFI",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING B650M-PLUS",
    "price": 230.93,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B550M-K ARGB",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock X570 Taichi Razer Edition",
    "price": 235.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A620M-K",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte A520M H",
    "price": 83.81,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Big Bang - XPower II",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570 I AORUS PRO WIFI",
    "price": 359,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B660M-A WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel DQ77MK",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "MSI B450 GAMING PRO CARBON AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus H110M-C/CSM",
    "price": 89.99,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "NZXT N7-Z69XT-W1",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus PRIME B660M-A AC D4",
    "price": 149.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG Z690 TOMAHAWK WIFI",
    "price": 255,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF Gaming Z590-PLUS WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock 970M PRO3",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro X11SCL-IF",
    "price": 243.35,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Gigabyte H610M S2H",
    "price": 94.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Silver"
  },
  {
    "name": "Asus Strix B550-XE Gaming WiFi",
    "price": 219.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG B660M MORTAR WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING A620M-PLUS",
    "price": 166.28,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI MPG Z690 CARBON WIFI",
    "price": 440,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro MBD-X10DRI-O",
    "price": 657,
    "socket": "2 x LGA2011-3 Narrow",
    "form_factor": "EATX",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Black / Green"
  },
  {
    "name": "MSI H310M PRO-VDH PLUS",
    "price": 149.9,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z690 Taichi",
    "price": 209.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "ASRock X570 Phantom Gaming 4",
    "price": 198,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B85M-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B760M GAMING X DDR4",
    "price": 166.82,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B450 Pro4",
    "price": 145,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X570-A PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B350 TOMAHAWK",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 EXTREME",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus STRIX Z270-E GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760 DS3H AX DDR4",
    "price": 154.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B550M-A PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550 VISION D-P",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus Prime Z370-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Q270M-C",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "MSI B450 GAMING PRO CARBON MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 GAMING X DDR4",
    "price": 229.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B550M-A/CSM",
    "price": 116.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock B365M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Strix X570-F Gaming",
    "price": 345,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550M-C",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A620M-HDV/M.2+",
    "price": 127.12,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "MSI MPG Z390 GAMING PRO CARBON",
    "price": 279.66,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M DS3H",
    "price": 168.8,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M DS3H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus P5QL-VM DO/CSM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI PRO B760-VC WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H310M-E R2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H510M H V2",
    "price": 88.92,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Brown"
  },
  {
    "name": "Gigabyte B550 AORUS PRO AC",
    "price": 306.39,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte Z790 AORUS XTREME X ICE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "ASRock B660M Pro RS/ax",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ProArt B550-CREATOR",
    "price": 239.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "NZXT N7-Z69XT-B1",
    "price": 269.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M H DDR4",
    "price": 125.23,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Asus PRIME H770-PLUS D4",
    "price": 159.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG X570 GAMING PRO CARBON WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro WS X299 SAGE II",
    "price": 826.6,
    "socket": "LGA2066",
    "form_factor": "SSI CEB",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Z170 PRO GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF GAMING A620-PRO WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B760-P WIFI",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z590-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B760M Pro RS/D4",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B360M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650E TAICHI",
    "price": 369.99,
    "socket": "AM5",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570S AORUS ELITE AX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B350-PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X470 GAMING PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte GA-AB350-GAMING 3",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte B650 Gaming X",
    "price": 232.89,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-E D4-CSM",
    "price": 99.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI TRX40 PRO WIFI",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z390 GAMING X",
    "price": 269.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte B760 GAMING X",
    "price": 204.46,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI MPG B560I GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z690 FORCE WIFI",
    "price": 240.04,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG Crosshair VIII Hero",
    "price": 481.82,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF Z390-PLUS GAMING (WI-FI)",
    "price": 279,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z790 AORUS XTREME",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450M PRO-M2 MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550 AORUS ELITE AX",
    "price": 201.91,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z270P-D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z790 Taichi",
    "price": 379.99,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus TUF B450-PLUS GAMING",
    "price": 170,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B560M-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B760M PG Lightning/D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H510M-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG Z490 TOMAHAWK",
    "price": 355,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M GAMING X AX",
    "price": 195.21,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Z10PE-D16 WS",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "SSI EEB",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte B650M S2H",
    "price": 184.79,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI PRO Z690-P DDR4",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X570 GAMING X",
    "price": 229.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B660M-A DDR4",
    "price": 289,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H610M-HDV",
    "price": 89.43,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z690 APEX",
    "price": 599.95,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B560-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z690 Steel Legend WiFi 6E/D5",
    "price": 189.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B660M-PLUS WIFI D4",
    "price": 236.91,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI Z590-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550 Taichi Razer Edition",
    "price": 169.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A520M PRO",
    "price": 86,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MPG B550I GAMING EDGE WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX X470-F Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B760M PG Lightning",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z370-F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X470 AORUS ULTRA GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte B760 DS3H AX",
    "price": 154.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "ASRock H610M-ITX/ac",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B650M-K",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B350M MORTAR ARCTIC",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Biostar H610MH",
    "price": 119.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Asus TUF GAMING B550-PLUS (WI-FI)",
    "price": 248.47,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H610M-HDV/M.2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte B460M DS3H AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A320M/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "White / Black"
  },
  {
    "name": "Asus Prime Z590-P WiFi",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X670 GAMING X AX (rev. 1.0)",
    "price": 307.83,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z690-P WIFI D4",
    "price": 377.38,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B550M-E WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Orange / Black"
  },
  {
    "name": "Asus PROART B760-CREATOR D4",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "MSI PRO B760M-E DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ProArt Z690-CREATOR WIFI",
    "price": 689,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "Asus Zenith II Extreme",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "ASRock B560M-C",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z790 LiveMixer",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Purple / Black"
  },
  {
    "name": "Asus ROG STRIX Z390-F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z270-A PRO",
    "price": 435.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B550 PG Velocita",
    "price": 129.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B450I GAMING PLUS AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG Strix B450-I Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 UD",
    "price": 240.06,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 AERO G",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Strix X299-E Gaming II",
    "price": 449.41,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar B450MH",
    "price": 106.02,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus PRIME H510M-A",
    "price": 136.88,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime B760M-K",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Z97-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte A520M K",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus B75M-Plus",
    "price": 273.02,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus ROG STRIX Z690-G GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H81M-DS2V",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Supermicro X9SRI-F-O",
    "price": 545.49,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green"
  },
  {
    "name": "MSI B350M GAMING PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B360M BAZOOKA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock A620M Pro RS",
    "price": 158.44,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z790 D AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte X570S AERO G",
    "price": 527.9,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus TUF B450M-PLUS GAMING",
    "price": 289,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus TUF GAMING B550-PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-E D4",
    "price": 99.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B450M BAZOOKA MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550M Pro RS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Gigabyte H610M H V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte Z790M AORUS ELITE AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B560M DS3H V3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570 AORUS MASTER",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING Z490-PLUS (WI-FI)",
    "price": 360.6,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-A D4-CSM",
    "price": 109.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X570 AORUS PRO WIFI",
    "price": 349.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550 PG Riptide",
    "price": 131.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Strix TRX40-E Gaming",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760 DS3H",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "ASRock B450M-HDV",
    "price": 85.09,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG X570S EDGE MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B650M GAMING WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B550M AORUS PRO-P",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Intel DH61AG",
    "price": 163.08,
    "socket": "LGA1155",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI MAG Z390 TOMAHAWK",
    "price": 287.32,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-A320M-H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ProArt B660-CREATOR D4",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A520M Phantom Gaming 4",
    "price": 95.66,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B365M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B350 PC MATE",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Prime Z370-P",
    "price": 241.3,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "NZXT N5 Z690",
    "price": 234.49,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z790M PG LIGHTNING/D4",
    "price": 200.49,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-A AX",
    "price": 195.91,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370 GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte H310M M.2 2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "ASRock Z790 Pro RS/D4",
    "price": 194.14,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B550 GAMING X",
    "price": 159.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS Z690 HERO EVA",
    "price": 515.15,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Purple / Green"
  },
  {
    "name": "MSI B450M MORTAR TITANIUM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Gigabyte Z690 AORUS ULTRA",
    "price": 249.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z170A GAMING M5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z590 PRO WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z390 Phantom Gaming 4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z390 Phantom Gaming 4",
    "price": 199.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock AB350 Pro4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus TUF GAMING Z690-PLUS D4",
    "price": 272.41,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B660M-A D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI 970 GAMING",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus X99-A II",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "MSI PRO H610M-G",
    "price": 119.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590 UD AC",
    "price": 307.39,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING A520M-PLUS",
    "price": 138.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-F2A78M-HD2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B460M-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG X570S CARBON MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 UD AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560 DS3H AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Prime TRX40-Pro",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Biostar A320MH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI B550M PRO-VDH WIFI (CEC)",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte H610M H V3 DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X570S AORUS MASTER",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-A320M-S2H V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Pro H510M-CT/CSM",
    "price": 84.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "MSI PRO H610M-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H610M-HVS/M.2 R2.0",
    "price": 91.05,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B450M-A/CSM",
    "price": 188,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550 AORUS ELITE",
    "price": 234.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z390 AORUS ULTRA",
    "price": 329.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF B365M-PLUS GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock H510M-HDV/M.2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z690 EXTREME",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus TUF GAMING B460M-PLUS (WI-FI)",
    "price": 283.02,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI MAG B550M MORTAR",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B360M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus H61M-K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI MEG Z590 UNIFY-X",
    "price": 310.11,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z390 I AORUS PRO WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B450 AORUS PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "NZXT N7 Z590",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Asus PRIME B450M-K",
    "price": 169.9,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z490-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS VIII HERO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF GAMING B450M-PRO II",
    "price": 196.57,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte Z790 GAMING X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte H510M H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z690-A",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B550M BAZOOKA",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B250M BAZOOKA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H310M-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING Z790-PLUS D4",
    "price": 309.26,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-A WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG Z790 EDGE WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z390 AORUS ELITE",
    "price": 279.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A320M-HDV",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XIII HERO",
    "price": 598,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG Z690I UNIFY",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus WS X299 SAGE/10G",
    "price": 599,
    "socket": "LGA2066",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro B550M-C/CSM",
    "price": 102.25,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "MSI Z270 GAMING PRO CARBON",
    "price": 406.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro MBD-X10SRL-F-O",
    "price": 511.84,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "ATX",
    "max_memory": 1024,
    "memory_slots": 8,
    "color": "Black / Green"
  },
  {
    "name": "ASRock Z690 PG Velocita",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B250M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B660I AORUS Pro DDR4",
    "price": 345.76,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B365M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-G41MT-S2PT",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus MAXIMUS VII HERO",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B365M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus X99-M WS",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B550M/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z390 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Crosshair VIII Formula",
    "price": 536.26,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B660-A GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z390 AORUS MASTER",
    "price": 379.38,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z490 GAMING CARBON WIFI",
    "price": 349,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z690 EDGE WIFI",
    "price": 400.55,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte B460M DS3H V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI X370 GAMING PRO CARBON",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B560M PRO-VDH WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-78LMT-USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus ROG STRIX Z590-A GAMING WIFI",
    "price": 459,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE AX",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Crosshair VIII Extreme",
    "price": null,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760 GAMING X AX DDR4",
    "price": 204.72,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z97X-SLI",
    "price": 380.99,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B450M Pro4-F",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X370 Pro4",
    "price": 110.73,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI H510M PRO",
    "price": 199.9,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Beige"
  },
  {
    "name": "Gigabyte Z370P D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 D DDR4",
    "price": 246.11,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME X370-PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus TUF GAMING B650M-E",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B550M-PLUS (WI-FI)",
    "price": 261.72,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock TRX40 Creator",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS X HERO (WI-FI AC)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-K",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MPG B550 GAMING CARBON WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z690-P",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B560-A GAMING WIFI",
    "price": 274,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B450NH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M GAMING DDR4",
    "price": 133.34,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME B350M-A",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B650M-A II-CSM",
    "price": 162.4,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME Z590-P",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B365 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus M5A78L-M PLUS/USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H61M-S1",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus ROG Crosshair VIII Impact",
    "price": 583.45,
    "socket": "AM4",
    "form_factor": "Mini DTX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B760-G GAMING WIFI D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H610M S2H V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus B85M-G",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI MAG Z590 TOMAHAWK WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H310M-E",
    "price": 172.07,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H310CM-HDV",
    "price": 149.99,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock X299 Taichi CLX",
    "price": 219.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B550M-A (WI-FI)",
    "price": 209.5,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B650M AORUS PRO AX",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock AB350M Pro4",
    "price": 220.5,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME B760M-A D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z590 VISION G",
    "price": 349.69,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME Z270-P",
    "price": 355.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H470M-HVS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B560 TOMAHAWK WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570 AORUS XTREME",
    "price": 766.9,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B660M MORTAR DDR4",
    "price": 242,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760 AORUS ELITE AX DDR4",
    "price": 246.31,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 AORUS PRO",
    "price": 429.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Rampage IV Black Edition",
    "price": 1210.92,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z690 Phantom Gaming 4",
    "price": 209.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XII HERO (WI-FI)",
    "price": 519.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450I GAMING PLUS MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z690-A GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z390 GAMING PRO CARBON AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF B450M-PRO GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A520M Pro4",
    "price": 96.69,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B450M AORUS ELITE",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE AX-W",
    "price": 366.07,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME X670-P WIFI-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-Z97X-UD5H",
    "price": 406.49,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI MPG Z590 GAMING CARBON WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus H110M-R",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z97S SLI Krait Edition",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z370 Extreme4",
    "price": 934.23,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X570S AORUS ELITE",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550 Extreme4",
    "price": 157.41,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "Gigabyte Z690 AERO G DDR4",
    "price": 241.45,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H81M-P33",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus ROG STRIX Z390-I GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte Z390 AORUS PRO",
    "price": 370.25,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus CROSSHAIR VI HERO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z370 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C9Z390-PGW",
    "price": 788.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ProArt X570-CREATOR WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B450MHP",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRO Q570M-C/CSM",
    "price": 164.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte A520M DS3H",
    "price": 120.9,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME A520M-R",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-970A-DS3P",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus ROG STRIX Z590-I GAMING WIFI",
    "price": 449,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG MAXIMUS Z790 APEX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock X299E-ITX/ac",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Mini ITX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z77X-UD3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte B660 DS3H AC DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Strix Z370-I Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B360 GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro X11SCL-LN4F",
    "price": 303.38,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "MSI MAG B365M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE DDR4",
    "price": 257.75,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 AORUS ELITE AC",
    "price": 349.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B760-VC WIFI II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B760M-E D4",
    "price": 178.48,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte Z690 AORUS MASTER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450 Gaming Plus",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte Z590 AORUS ELITE AX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B550MH",
    "price": 139.66,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B660M-C",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus A620M-AYW WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X570S UD",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus TUF X470-PLUS GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H410M PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B450-A PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H610M H",
    "price": 111.65,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Silver"
  },
  {
    "name": "ASRock B460M Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B660M-A WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H570M-PLUS/CSM",
    "price": 199.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Z10PE-D16",
    "price": null,
    "socket": "2 x LGA2011-3 Narrow",
    "form_factor": "SSI EEB",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG41TX",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Creator TRX40",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus AM1I-A",
    "price": null,
    "socket": "AM1",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z490 VISION G",
    "price": 429.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "MSI Z97 PC MATE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B460M-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME A520M-E",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI X370 XPOWER GAMING TITANIUM",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "Asus TUF B360M-PLUS GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Orange"
  },
  {
    "name": "Asus TUF GAMING X570-PRO (WI-FI)",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock B760I Lightning WiFi",
    "price": 169.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-A-CSM",
    "price": 161.81,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X570 AORUS ULTRA",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660 GAMING X AX DDR4",
    "price": 174.63,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING H670-PRO WIFI D4",
    "price": 199.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Asus Pro B650M-CT-CSM",
    "price": 149.99,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus TUF GAMING B760M-PLUS",
    "price": 207.61,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte B560M DS3H V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B550 Taichi",
    "price": 301.67,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gold / Black"
  },
  {
    "name": "MSI MAG X570S TORPEDO MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "Asus Pro B760M-CT-CSM",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "MSI MPG B760I EDGE WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MPG Z590 GAMING PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-DS2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Crosshair VII Hero (Wi-Fi)",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte TRX40 DESIGNARE",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "XL ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z390-H GAMING",
    "price": 339.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "NZXT N5 Z690",
    "price": 239.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING H770-PRO WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG X570 ACE",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-AB350M-Gaming 3",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte B450 Gaming X",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H610M-H2/M.2 D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS IX HERO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B660M-E DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P8H61-M LX3 R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME B560M-A AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z590 AORUS ULTRA",
    "price": 389,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG B460M MORTAR WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H310M S2H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Brown"
  },
  {
    "name": "MSI MPG B550I GAMING EDGE MAX WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z87-G45 Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H97M Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME B760M-A WIFI-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B660M BAZOOKA DDR4",
    "price": 227.6,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "ASRock X570M Pro4",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus STRIX X370-F GAMING",
    "price": 408.67,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H670 PG Riptide",
    "price": 149.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 UD DDR4",
    "price": 223.14,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B660 Steel Legend",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-F2A55M-DS2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI B350M PRO-VDH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI X99A GAMING PRO CARBON",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A320M",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z390I GAMING EDGE AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI TRX40 PRO 10G",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-A320M-GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "ASRock B450M Steel Legend Pink",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Pink"
  },
  {
    "name": "Asus PRIME H410M-E",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B650M-C",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z590 PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550 AORUS MASTER",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H310M-K R2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock TRX40 TAICHI",
    "price": null,
    "socket": "sTRX4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar A520MH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X399M Taichi",
    "price": null,
    "socket": "sTR4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 S WIFI DDR4 (rev. 1.1/1.2)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 6,
    "color": "Black"
  },
  {
    "name": "ASRock Z790I Lightning WiFi",
    "price": 259.99,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H310CM-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370 GAMING PRO CARBON",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H310M-A R2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B450M GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Asus PRIME B460-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Sabertooth 990FX R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus STRIX Z270F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG X299 CREATION",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "ASRock X99 Extreme11",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-A/USB 3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B450M MORTAR",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H310-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570 UD",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370 TOMAHAWK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte Z490I AORUS ULTRA",
    "price": 467.9,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte A520M AORUS ELITE",
    "price": 99.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI MEG X570S ACE MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z370 AORUS Gaming 7 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550 VISION D",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus ROG MAXIMUS XI FORMULA",
    "price": 689,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus M5A97 R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B350 GAMING PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty B450 GAMING K4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS X FORMULA",
    "price": 711,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-E-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX Z270i GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B250M PRO-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B550M AORUS PRO AX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B760M MORTAR MAX WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME X670E-PRO WIFI-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H610M H DDR4",
    "price": 103.6,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus P8Z77-V PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus ROG Crosshair VII Hero",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450M PRO-VDH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown"
  },
  {
    "name": "MSI PRO B660-A DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Foxconn A7DA-S 3.0",
    "price": 90,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte Z590 AORUS MASTER",
    "price": 449.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z490-I GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H410M-K",
    "price": 180,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX X470-I GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-AB350M-DS3H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 D",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI B150A Gaming Pro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte H610M S2H DDR4",
    "price": 173,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z270 GAMING M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte Z370 HD3 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B550 AORUS PRO V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z690 STEEL LEGEND/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z690 Taichi Razer Edition",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus H61M-C",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B450M Pro4-F R2.0",
    "price": 159,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590 AORUS XTREME",
    "price": 848.48,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B760M-H2/M.2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B550-A PRO (CEC)",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z590 GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B250M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME B760M-A AX6",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H670M Pro RS",
    "price": 139.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte Z590 AORUS ELITE",
    "price": 324.03,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ProArt B760-CREATOR",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Copper"
  },
  {
    "name": "Gigabyte MW50-SV0",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Blue / Black"
  },
  {
    "name": "Gigabyte GA-P35-DS3L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus PRO A520M-C II/CSM",
    "price": 91.13,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte B760M GAMING AC DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG MAXIMUS XII FORMULA",
    "price": 654,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B360-F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z390 DESIGNARE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B560M-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H410M-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B660 Pro RS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Biostar Z690 VALKYRIE",
    "price": 865.65,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H770-PLUS",
    "price": 233.9,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Rampage V Edition 10",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "ASRock X399 Taichi",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z790 GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI A320M PRO-VH PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Z97 PRO GAMER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H110M Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI X470 GAMING PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B365M Phantom Gaming 4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X299 Steel Legend",
    "price": 222.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Sabertooth Z87",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus H170-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock A88M-G/3.1",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF Z370 Plus Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI B450M BAZOOKA",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z270 SLI PLUS",
    "price": 394.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B560M Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus H110M-A/M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-AX370M-DS3H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z390M GAMING EDGE AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360N GSM",
    "price": 179.99,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z590M Pro4",
    "price": 249.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z390 Phantom Gaming-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M Pro-A D4 WiFi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus PRIME H610M-A D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming 7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X399D8A-2T",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Z270 Killer SLI/ac",
    "price": 333.78,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock X399 Phantom Gaming 6",
    "price": 918,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360 AORUS Gaming 3 WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus Z790 GAMING WIFI7",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME Z690M-PLUS D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME A320M-A",
    "price": 119.99,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock B660M Phantom Gaming 4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B660M-G DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Z170I PRO GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B150M BAZOOKA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI H310M PRO-M2 PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Pro B560M-CT/CSM",
    "price": 199,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Gigabyte B660 DS3H DDR4",
    "price": 203.34,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-D D4",
    "price": 115.96,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B660-F GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z590 Phantom Gaming-ITX/TB4",
    "price": 349,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte Z590 AORUS PRO AX",
    "price": 305.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z490-A GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B365 HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus H81M-C/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus TUF GAMING B560-PLUS WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus MAXIMUS IX FORMULA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z370 SLI PLUS",
    "price": 381.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI MEG Z390 ACE",
    "price": 600,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z370-A II",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar A620MP-E PRO",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING B660M-PLUS D4",
    "price": 303.67,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Orange / Black"
  },
  {
    "name": "MSI X99A SLI PLUS",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-S2H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z590-C/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560 HD3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus TUF Z390-PRO GAMING",
    "price": 355.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Colorful CVN X570M GAMING FROZEN V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Asus Z97I-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte H410M S2 V3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H270M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z490-F GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-R",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H670 Steel Legend",
    "price": 165.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Gray"
  },
  {
    "name": "Asus Z10PA-D8",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 512,
    "memory_slots": 8,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8Z77-V LX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte B560M AORUS PRO AX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M AORUS Pro AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B250M GAMING PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI PRO B650-VC WIFI",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro B660M-C D4-CSM",
    "price": 129.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "ASRock Z690 Steel Legend",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "NZXT N7 Z590",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX Z490-G GAMING (WI-FI)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B560-F GAMING WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z490I UNIFY",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus H110-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z390 D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z690 UNIFY-X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Big Bang-Marshal (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte Z370 AORUS Gaming 5 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG Z690M MORTAR WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X299 UD4 Pro",
    "price": 389.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte B550M S2H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H61M-DS2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus SABERTOOTH X99",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG Strix Z370-H Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X470 GAMING PRO CARBON",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B460M DS3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG B550 UNIFY",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z590 UNIFY",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z790 CARBON MAX WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X370 KILLER SLI/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI B360M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560M DS3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte A620M H (rev. 1.0)",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B760M-C",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z390 Extreme4",
    "price": 199.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-A II",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B450M H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME X670-P-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B660 AORUS Master DDR4",
    "price": 313.12,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-AB350N-Gaming WIFI (rev. 1.0)",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "NZXT N7 Z390",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Gigabyte B550M AORUS PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B660T-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z590 Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ECS G31T-M7",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus Q170M-C/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus ROG MAXIMUS XI HERO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H310M-HDV/M.2",
    "price": 199.99,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z590I AORUS ULTRA",
    "price": 509,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B550M-ZAKU (WI-FI)",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B75M-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H81M-DS2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590I VISION D",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Intel DQ45CB",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Z170-A PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "EVGA Z790 CLASSIFIED",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME A620-PLUS WIFI6",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock A320M-ITX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-X79S-UP5-WIFI",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus X99-DELUXE",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "MSI Z170A GAMING M7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG STRIX Z590-F GAMING WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H670-PLUS D4",
    "price": 246.89,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B660M MORTAR MAX WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H61M-P31/W8",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H97M-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z170A PC MATE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X370 GAMING PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B360 GAMING ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "ASRock B365 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z490M GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A320M PRO-VH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI PRO B650-VC WIFI II",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B560 AORUS PRO AX",
    "price": 294.89,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus WS C246M PRO",
    "price": 320.5,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Pro A620M-DASH-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Asus Z87-Pro",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI A68HM-E33 V2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z170A GAMING PRO CARBON",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z370-P II",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B460M Pro4/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X670 AORUS ELITE AX (rev. 1.1)",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro X10SL7-F",
    "price": 246.77,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock Z690 Extreme WiFi 6E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H81M-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H110M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Asus STRIX Z270H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF Z270 MARK 2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI Z270 PC MATE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X470 AORUS GAMING 5 WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock X570 PG Velocita",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus H170I-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z390 M GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P7H55-M Pro",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H61M-S2PV(R2.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Sabertooth Z77",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG MAXIMUS VIII HERO ALPHA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B360M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z390 GODLIKE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MPG Z590 GAMING FORCE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG B760M MORTAR MAX WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B450M-PRO S",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Maximus VI Hero",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B365M-H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z490 Phantom Gaming-ITX/TB3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B460 TORPEDO",
    "price": 249.9,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B560M Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus WS X299 SAGE",
    "price": 518.36,
    "socket": "LGA2066",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 AORUS ELITE",
    "price": 327.91,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA PLUS DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus TUF GAMING Z490-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660M AORUS ELITE AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H97M-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar AM1MH",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI H110M PRO-VH PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown"
  },
  {
    "name": "MSI B350I PRO AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte X470 AORUS GAMING 7 WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI PRO H610M-B DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime A320I-K",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H410M-HDV/M.2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "EVGA Z790 DARK K|NGP|N",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX B560-G GAMING WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Z170-E",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-EP45-UD3R",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus 970 PRO GAMING/AURA",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110M-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF X299 MARK 2",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Asus TUF GAMING B460-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE DDR4",
    "price": 249.99,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF Z390M-PRO GAMING (WI-FI)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Supermicro X10DRL-i",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "ATX",
    "max_memory": 512,
    "memory_slots": 8,
    "color": "Green"
  },
  {
    "name": "MSI Z170A SLI PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-AB350-Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B350M MORTAR",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI MPG Z590M GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Rampage VI Extreme Encore",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B660 TOMAHAWK EVA e-PROJECT",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Purple / Black"
  },
  {
    "name": "Gigabyte H370 AORUS Gaming 3 WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte B550 AORUS PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI X79MA-GD45",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z170XP-SLI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B250M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte H310M H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Brown"
  },
  {
    "name": "Asus ROG STRIX B450-E GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H81M-VG4 R3.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte A520M DS3H AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B550-P GEN3",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI H510I PRO WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Q87M-E/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus H81M-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B450M BAZOOKA V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B760M PG Riptide Wifi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Maximus XIII Extreme",
    "price": 684.66,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-AX370-Gaming K7",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock AB350 Gaming-ITX/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus M5A99FX PRO R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 990FX Extreme9",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z87-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z170-P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-B150M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B150 Gaming M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B250 PC MATE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock X470 Master SLI/AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660 GAMING X DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Pro WS X570-ACE",
    "price": 589,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B560M PRO-VDH",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar Z690A VALKYRIE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus X99-A",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock C236 WSI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-Z270X-Ultra Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B360M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A520M/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-A WIFI-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B560M-K",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus STRIX H270F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X470 Taichi",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG X570 GODLIKE",
    "price": null,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Z590 WIFI GUNDAM EDITION",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B760 AORUS ELITE",
    "price": 267.5,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B560 Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus H170 PRO GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro X10SRA",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 512,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock AB350M",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA LITE DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B650 Pro RS WiFi",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG B760M MORTAR",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650M AORUS ELITE",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar H610MHP",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME Z590-V",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte X570S GAMING X",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-990FXA-UD3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME X399-A",
    "price": null,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO-B660M-A-CEC-WIFI-DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B650MT",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B660 TOMAHAWK WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B660M Steel Legend",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus M5A97 LE R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z170-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H110M PRO-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-78LMT-USB3 R2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte C246-WU4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF B450-Pro Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-AB350M-DS3H V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H510M-A/CSM",
    "price": 165.35,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock EP2C602-4L/D16",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "SSI EEB",
    "max_memory": 512,
    "memory_slots": 16,
    "color": "Blue / White"
  },
  {
    "name": "MSI Z270 GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME B560-PLUS AC-HES",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus P10S WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z590M-ITX/ax",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME B760M-PLUS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus X79 Deluxe",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z97X-Gaming 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99M-GAMING 5",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B365M-PRO-VH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B660M Pro RS/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B760M AORUS PRO AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B660-G GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H610M-HDV/M.2 R2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus P5QProTurbo",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus P8Z77-V LK",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME H270-PLUS-CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B450M PRO-VDH PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 UD",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B760M-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z390M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z790-P",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus STRIX B250F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370 GAMING M5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Prime B360-Plus",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI MEG Z690 GODLIKE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690M AORUS ELITE DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME A320M-E",
    "price": 207,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Z170-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H110M-DGS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "MSI B250M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TB250-BTC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus ROG ZENITH EXTREME",
    "price": null,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B550MX/E PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus B85M-E/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte B660 DS3H AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z590M-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650M C V2",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte Z370XP SLI (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus Crosshair V Formula-Z",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus RAMPAGE V EXTREME",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z10PE-D8 WS",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "SSI EEB",
    "max_memory": 512,
    "memory_slots": 8,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B450M PRO-M2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus TUF B360M-PLUS GAMING S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME Z490-V",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H610M/ac",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H510M-HVS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MEG Z490 UNIFY",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Sabertooth X58",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Brown / Black"
  },
  {
    "name": "Asus MAXIMUS VII IMPACT",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B250M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock X370 Taichi",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z370 Killer SLI/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z370M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B560M AORUS ELITE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B550T-SILVER",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B760M-G DDR4",
    "price": 179.01,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus CROSSHAIR VI HERO (WI-FI AC)",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Supermicro C9X299-PGF",
    "price": 889.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI Z370 GAMING PRO CARBON AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z97-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H97N-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS VIII RANGER",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H110M Pro-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS X HERO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MAG B460 TOMAHAWK",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B560M PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-78LMT-S2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Z97-K/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z170A GAMING M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B150 PC Mate",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock 970A-G/3.1",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H110-D3A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H410M S2H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550M GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B650-PLUS-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar Z690GTA",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "MSI MAG B660M MORTAR WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG STRIX B365-F GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus TUF GAMING Z590-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro H8DG6-F",
    "price": null,
    "socket": "2 x G34",
    "form_factor": "EATX",
    "max_memory": 512,
    "memory_slots": 16,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X99 Taichi",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "MSI H110M PRO-VD PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus STRIX Z270G",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z370M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock G31M-S R2.0",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus Z97M-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z270M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z270 Extreme4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "NZXT N7 Z490",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "ASRock B760M Pro-A WiFi",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Supermicro C7X99-OCE-O",
    "price": 700,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "NZXT N7 Z490",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z790-P DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B365M PRO4-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus X99-DELUXE II",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME B250-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF Z370 Pro Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus PRIME B360M-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H370M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z97X-Gaming 5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97-Gaming 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-Ultra Gaming",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z270 GAMING M7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty AB350 Gaming K4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z390 STEEL LEGEND",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B550M PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Rampage IV Gene",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8H61-M LE/CSM R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 760GMA-P34(FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI H81M-E33",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61M-VG3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus ROG STRIX Z370-G GAMING (WI-FI AC)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B360-I GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H510M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z590 VISION D",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG X570S UNIFY-X MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte X570S AORUS PRO AX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar H510MHP 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI B85-G43 GAMING",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-F2A68HM-S1",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z270 TOMAHAWK ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Asus ROG STRIX B360-H GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "MSI Z270 GAMING M5",
    "price": 481.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z270I GAMING PRO CARBON AC",
    "price": 400,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar H81MHV3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte X570 AORUS PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-G31M-ES2L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Intel DB75EN",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-Z170-HD3 DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus B150M-A/M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-AX370-GAMING 5",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus TUF H310M-PLUS GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B365M-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA LITE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Pro Q670M-C-CSM",
    "price": 169.19,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus TUF GAMING B660M-E D4",
    "price": 222.29,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI X299 PRO",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Asus A68HM-K",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Maximus V Gene",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97-G45 Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z170-AR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI Z170A KRAIT GAMING 3X",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock 760GM-HDV",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME H410M-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B560 TORPEDO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME A620M-E-CSM",
    "price": 142.43,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG Strix H370-F Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar H310MHP",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI X370 SLI PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B550 AORUS PRO AX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Sabertooth X79",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock X99 Extreme4",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus TUF SABERTOOTH 990FX R3.0",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B250M-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG B550 UNIFY-X",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z590 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B560M-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z690 Steel Legend WiFi 6E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B365 M AORUS ELITE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI MEG Z490 ACE",
    "price": 399,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B760M-A AX D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-970A-UD3P",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Z97-P",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170N-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110I-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H510M PRO-E",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X299 WSI/IPMI",
    "price": 369.99,
    "socket": "LGA2066",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRO H610M-CT D4-CSM",
    "price": 98.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "MSI MAG B460M MORTAR",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 AERO D",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z370 AORUS GAMING WIFI (rev. 1.0)",
    "price": 376.49,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z77X-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M5A78L-M/USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-AR",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z270-Gaming K3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte X399 AORUS XTREME",
    "price": null,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A320M PRO-M2 V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z590 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B660 AORUS Master",
    "price": 401.59,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Strix X399-E Gaming",
    "price": null,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar A520MT",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Intel DQ57TM",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "MSI B75MA-E33",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B250 GAMING M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-AX370-Gaming K5",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME X299-A",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H310M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B360 HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B460M-HDV",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 GAMING X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "EVGA Z690 DARK K|NGP|N",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B760M-A WIFI D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650M C",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte Z490 AORUS MASTER",
    "price": 400.9,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime X299-Deluxe II",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "White / Black"
  },
  {
    "name": "Gigabyte Z490 GAMING X",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z170 Pro4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock AB350M-HDV",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "MSI B350 GAMING PRO CARBON",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF B360-PRO GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte X299X DESIGNARE 10G",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG B560M BAZOOKA",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus PRIME B760M-R D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 S WIFI DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "EVGA X299 Micro",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar H610MH D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z77-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z97 Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X99A GAMING 7",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z170A GAMING PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus MAXIMUS IX CODE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A320M-DGS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XI CODE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H110M PRO-VH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Silver"
  },
  {
    "name": "Supermicro X11SCA-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Silver"
  },
  {
    "name": "MSI X470 GAMING PRO MAX",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H470 HD3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG A520M VECTOR WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590 GAMING X",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 AORUS PRO DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610I-PLUS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M D3H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte H610M GAMING WIFI DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME H510M-A R2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus WS Z390 PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690M AORUS ELITE AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus M5A99X EVO R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H97-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z97 Anniversary",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus ASUS B85M-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B350 TOMAHAWK PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-AX370-Gaming 3",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Red"
  },
  {
    "name": "MSI B360-A PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown"
  },
  {
    "name": "ASRock Fatal1ty X470 Gaming-ITX/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B450M BAZOOKA PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z390 Taichi",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M GAMING X AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B650M-A",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-K ARGB",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760 AORUS MASTER DDR4",
    "price": 278.52,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus TUF Z270 MARK 1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Camo"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock EPC612D4U-8R",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Micro ATX",
    "max_memory": 512,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Asus PRIME Z270-AR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus WS C246 PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M GAMING DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z9PE-D8 WS",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "SSI EEB",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77-I Deluxe",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H61-I R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 970A-G43",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z87-GD65 Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H81M-S2PV",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-F2A88XN-WIFI",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI Z97-GAMING 7",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z97 Extreme6",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus B85M-G R2.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z97A GAMING 6",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110M-E/M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-B250M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME Q370M-C/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus PRIME B460M-K",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MEG Z590 GODLIKE",
    "price": 779.99,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B560M-A/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B650MP-E PRO",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X570D4U-2L2T",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Silver"
  },
  {
    "name": "Gigabyte Z690I AORUS ULTRA PLUS (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus ROG STRIX B360-G GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "MSI MAG B550 TORPEDO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B450MX-S",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar G41D3C",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus H81M-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z97-PRO(Wi-Fi ac)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus MAXIMUS VII RANGER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty X99M Killer",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B150M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus Z170 PRO GAMING/AURA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel BBS2600CP2J",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "SSI EEB",
    "max_memory": 512,
    "memory_slots": 16,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte Z370 AORUS Ultra Gaming (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B350M PRO-VD PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte Z370N WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte B360M AORUS GAMING 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte X399 AORUS PRO",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B760M GAMING WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI Z270 SLI",
    "price": 249.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z370 AORUS Gaming 3 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8Z68-V PRO/GEN3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z87-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock X99M Extreme4",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z370I GAMING PRO CARBON AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME Z390M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus ROG STRIX B460-F GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z590 ACE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "EVGA X570 DARK",
    "price": null,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI PRO B660M-P DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B650M H",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H610M-A",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Q670M D3H",
    "price": 179.99,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Gray"
  },
  {
    "name": "Biostar B660GTN",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Blue / Black"
  },
  {
    "name": "MSI MAG B660M MORTAR",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Colorful CVN Z790M FROZEN D5 V20",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus P6T",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P45T-ES3G",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DQ67SWB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-B85M-D2V",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI X99S SLI Plus",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Supermicro MBD-X10DAL-I-O",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 512,
    "memory_slots": 8,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte GA-B85M-DS3H-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus MAXIMUS VIII GENE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B150M-DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus B150 PRO GAMING/AURA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME Z270-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI Z270 TOMAHAWK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-AX370-Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF B360-Plus Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte Z370M DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B365M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI MAG B460M BAZOOKA",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A520M PRO-VDH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI MAG Z690 TORPEDO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "Gigabyte GA-Z97X-GAMING 7",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus A68HM-Plus",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Z170-DELUXE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus A88X-PLUS/USB 3.1",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI X370 KRAIT GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus STRIX X299-E GAMING",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI X299 RAIDER",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG RAMPAGE VI EXTREME",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z370 PC PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI Z370M GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M D3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z390M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime H310I-PLUS R2.0/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI PRESTIGE X570 CREATION",
    "price": null,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF Z390-PLUS GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME X570-P/CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING B460M-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME H410M-A/CSM",
    "price": 129.99,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z590M Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H510M S2H",
    "price": 175,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Supermicro MBD-X11SSV-Q-O",
    "price": 314.01,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Supermicro MBD-X11SCV-Q-O",
    "price": 342,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "ASRock X370 Killer SLI",
    "price": 219.99,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock B460 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS VIII EXTREME",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar B660GTA",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "Gigabyte Z790M AORUS ELITE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "EVGA 270-WS-W555-A1",
    "price": null,
    "socket": "2 x LGA1366",
    "form_factor": "HPTX",
    "max_memory": 48,
    "memory_slots": 12,
    "color": "Black / Red"
  },
  {
    "name": "Asus P9X79",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-970A-D3P",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-Z97X-UD3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170-HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus B150M-C",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus SABERTOOTH Z170 S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Gray"
  },
  {
    "name": "ASRock X370 Gaming-ITX/ac",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z370 Taichi",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H370 HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X299 CREATOR",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B460M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Colorful CVN B550M GAMING FROZEN V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "ASRock H510M-HDV",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650 AORUS ELITE",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B650 PG Lightning WiFi",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME H510M-R R2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H170 Pro4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte X299 DESIGNARE EX",
    "price": 769,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z490 AORUS PRO AX",
    "price": 449.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z77X-UD5H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H81 Pro BTC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z170X-UD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H170-GAMING 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150M-A D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI X99A GODLIKE GAMING CARBON",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime H370M-Plus/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H310M DS2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI MAG Z390M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A320M-HDV R3.0",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H310CM-HDV/M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte C246M-WU4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z490M-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus ROG STRIX B460-H GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B460M PRO-VDH",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590 UD",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z790-C",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X470D4U",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Asus B760M-AYW WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Supermicro C9X299-PG300F",
    "price": 699.99,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI PRO B760-P II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO-B660M-B-DDR4",
    "price": 270,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus X99-E WS/USB 3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z77 MPOWER",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus Z97-PRO",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B250M-C-CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte GA-Z270-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar X370GTN",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B360M D2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B450M PRO-M2 V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock X570 Phantom Gaming X",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 Extreme4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B560M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO H610M-S DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar Racing Z490A-Silver",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME B650M-A",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z590 Extreme WiFi 6E",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH61CRB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus P8Z68-V LX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8B75-M LX PLUS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97MX-Gaming 5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B150M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG STRIX B350-I GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B360 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI H310M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus TUF Z370-Plus Gaming II",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte B460 HD3",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B560-I GAMING WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI A520M PRO-VH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B650EGTQ",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Fatal1ty Z170 Gaming K4",
    "price": 349.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro MBD-X11SSL-F-O",
    "price": 327.58,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Supermicro X9SRA",
    "price": 596.31,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Green"
  },
  {
    "name": "Asus P9X79 PRO",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61M-DGS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H81M-D PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus H97I-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI C236A WORKSTATION",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z270 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-H270-Gaming 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z370 HD3P (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte X399 DESIGNARE EX",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H410M H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B460M PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B660GTQ",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "ASRock Z490 Taichi",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H470M-HDV/M.2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P5Q-EM DO",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus Maximus VI Impact",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus H97-PRO GAMER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z97P-D3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock X99E-ITX/ac",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z170A KRAIT GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-Z170MX-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z170-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus H110M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H270 TOMAHAWK ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "Asus TUF B350M-PLUS GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus PRIME B350M-E",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI A320M PRO-VD/S",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B360I GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF B360M-E GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Orange / Black"
  },
  {
    "name": "ASRock Z390 Phantom Gaming SLI/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B460 AORUS PRO AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B460 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI MEG Z590I UNIFY",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H610M K",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Asus PRIME Z790-V WIFI-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-D",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B760M MORTAR II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B760MX2-E D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 AORUS ULTRA",
    "price": 431.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P5KPL-AM EPU",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "MSI G41M-P33",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-F2A88XM-D3H",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI AM1I",
    "price": null,
    "socket": "AM1",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z97 Extreme4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H81M-S2H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B85M-E45",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus B85M-GAMER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H170M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus X99-E",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B250 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z270M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Fatal1ty X370 Gaming K4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus STRIX B250H Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock A320M Pro4",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI A320M GAMING PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-A320MA-M.2 (rev. 1.0)",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H310M S2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF H370-Pro Gaming (WI-FI)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 UD AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Colorful CVN B760I FROZEN WIFI V20",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "White / Black"
  },
  {
    "name": "Gigabyte H510M K",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG Maximus XIII Apex",
    "price": 649.99,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B760MZ-E PRO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME X299-DELUXE",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X470 GAMING M7 AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690M DS3H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Gray"
  },
  {
    "name": "MSI PRO B660M-P WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B760M-A-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-H55M-S2V",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus P5G41T-M LX",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn H61S",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "Gigabyte GA-B75M-D3V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Z87-K",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-B85-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock H81M-HDS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus H81-GAMER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus X99-PRO/USB 3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Asus Z170M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B150I GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-Designare EX",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "White / Blue"
  },
  {
    "name": "Supermicro X10SDV-8C-TLN4F",
    "price": null,
    "socket": "Integrated Xeon D-1541",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "ASRock Z170 Extreme4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z270XP-SLI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B250I GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Red"
  },
  {
    "name": "Gigabyte GA-AB350M-D3H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock B360M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H310M PRO-VH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H310M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte C246N-WU2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560M AORUS PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 UD",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660M GAMING AC DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar X670E VALKYRIE",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-D D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte GA-X58A-UD7",
    "price": 515,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "ASRock C246 WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-B250M-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus ROG STRIX B560-E GAMING WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Intel DH67BL",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus KGPE-D16",
    "price": null,
    "socket": "2 x G34",
    "form_factor": "SSI EEB",
    "max_memory": 256,
    "memory_slots": 16,
    "color": "Multicolor"
  },
  {
    "name": "ASRock H77M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus H81I-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H81I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H81M-D2V",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H81M-S1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus X99-A/USB 3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H170M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H170 Gaming M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus MAXIMUS VIII FORMULA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150I PRO GAMING/WIFI/AURA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B150M BAZOOKA PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME H270-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B250M-D2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B360M-C/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus ROG STRIX Z490-H GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H410M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock X570D4U",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Asus Pro A620M-C-CSM",
    "price": 154.89,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "ASRock Fatal1ty Z370 Professional Gaming i7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X470D4U2-2T",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Asus Crosshair IV Extreme",
    "price": 509.95,
    "socket": "AM3",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar Z790 VALKYRIE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H510M-R",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 AORUS TACHYON",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Intel DG33TLM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRIME H410M-D",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus P6X58D Premium",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DQ77KB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Asus P9X79 LE",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B85M Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B85-G41 PC Mate",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock C226M WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "EVGA Stinger WiFi",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ECS KAM1-I(1.0)",
    "price": null,
    "socket": "AM1",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z170M Mortar",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-990FXA-UD3 R5",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus H110M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H110M ECO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z170-Gaming K3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ECS H110M4-C23",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI X370 GAMING PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus STRIX B250I GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI X299 TOMAHAWK ARCTIC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "White / Gray"
  },
  {
    "name": "ASRock Fatal1ty Z370 Gaming-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310M S2P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Brown"
  },
  {
    "name": "Gigabyte Z370 AORUS ULTRA GAMING WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B460M AORUS PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus ROG STRIX B460-I GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B460-G GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte B660M AORUS Pro DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z690-C/ac",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO B760M-B",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar A620MT",
    "price": 129.13,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 GAMING X AX",
    "price": 317,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME H510M-D",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XII EXTREME",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG STRIX X370-I GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A520M-A/CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel DH55TC",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac GF9300-K-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus P8P67 PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8B75-M/CSM",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus V Formula",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z97-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty Z97M Killer",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99A XPOWER GAMING TITANIUM",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "White / Black"
  },
  {
    "name": "MSI H270 GAMING M3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H270-A PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H370M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310M A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Brown"
  },
  {
    "name": "ASRock Fatal1ty X470 Gaming K4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X470 Taichi Ultimate",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ECS H81H3-M4 (V1.0A)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Gigabyte Z490M GAMING X",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H410M-HVS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MEG Z590 ACE GOLD EDITION",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Gold"
  },
  {
    "name": "EVGA Z690 CLASSIFIED",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z590 PRO WIFI (CEC)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel D525MW",
    "price": 152.51,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "ASRock Fatal1ty Z370 Gaming K6",
    "price": 431.99,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z690 AORUS XTREME",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Sabertooth P67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-X79-UD3",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z77-DS3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8Z77-M PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H87-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Fatal1ty X99X Killer",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z170M-E D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-B150M-D2V DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H110I Pro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B250M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H270M-DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X399 SLI PLUS",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI H310M PRO-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H370M D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI B360M GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H310M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B350M-K",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "NZXT N7 Z390",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B450M PRO-VDH V2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B460M D3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus TUF GAMING B460-PRO (WI-FI)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus TUF GAMING H470-PRO (WI-FI)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG B460I GAMING EDGE WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H570-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock H510M/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "EVGA X570 FTW WIFI",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H310M-D R2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M D2H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-R",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME Z790-V AX-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z390 Phantom Gaming 6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA X299 FTW K",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "ASRock X570 Extreme4",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MAG Z590 TORPEDO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte H310N",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI 760GM-P23 (FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M5A78L-M LX PLUS",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H77-V LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H77-M PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DH87RL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H81M-E34",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus MAXIMUS VII FORMULA",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99S Gaming 7",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Asus M5A97 PLUS",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 970A SLI Krait Edition",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI X99A Raider",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z170X-UD5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z170M Pro4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI Z170I GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150M-A",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H110M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME Z270M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A320M GRENADE",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI A320M PRO-VD PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME A320M-C R2.0",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-AB350M-HD3 (rev. 1.0)",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG Strix H370-I Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z390 GAMING SLI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar A32M2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MAG B560M MORTAR",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B560M D3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus WS X299 PRO/SE",
    "price": 515.32,
    "socket": "LGA2066",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG Z790 EDGE MONSTER HUNTER EDITION",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte B760M AORUS PRO AX DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z590 Steel Legend WiFi 6E",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Rampage III Gene",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "Micro ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Asus M2N68-AM PLUS",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus P9X79 WS",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "SSI CEB",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X79A-GD45 Plus",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z87 Extreme4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus M5A97 EVO R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus A88XM-A",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus H97M-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-X99-UD4",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus B85-PRO GAMER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus ASUS CS-B",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z170N-WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus H170M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock EPC612D4I",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock Z170M Extreme4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock H270M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B350M-A/CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty X370 Professional Gaming",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-A320M-HD2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus ROG MAXIMUS X CODE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H370M BAZOOKA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI A320M PRO-M2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z68AP-D3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z390 PHANTOM GAMING X",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H110M-DVS R3.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B460M Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Colorful CVN B460I GAMING FROZEN V20",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "White / Black"
  },
  {
    "name": "ASRock H570 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B660M GAMING X DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE AX (rev. 1.4)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock C246M WS",
    "price": 323.01,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Supermicro C9Z390-CGW",
    "price": 667.39,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ProART Z490-CREATOR 10G",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Colorful BATTLE-AX Z790M-PLUS D5 V20",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Intel DG45FC",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue / Silver"
  },
  {
    "name": "Asus Rampage III Extreme",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X58A-UD3R",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-G41M-ES2L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "ASRock H61M-VS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X79 Extreme4",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI 970A-G46",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77-V DELUXE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "XFX MBN790IUL9",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z87-D3HP",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-H81M-H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-F2A88XM-DS2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H97 PC MATE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H170M-PLUS/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-990FX-Gaming",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock C236M WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock A68M-ITX",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Supermicro X10SRM-TF",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Micro ATX",
    "max_memory": 512,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus B150M PRO GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z270 KRAIT GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-B250-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus STRIX B250G Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus TUF B360-Pro Gaming (Wi-Fi)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Orange"
  },
  {
    "name": "Gigabyte H370N WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte B360M H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Red"
  },
  {
    "name": "ASRock B360M Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B365M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A320I-K/CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B460M GAMING HD",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B560M Pro4/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus TUF GAMING B560M-E",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus PRIME B550M-K ARGB-CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro X10SLM-F-O",
    "price": 345.99,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus PRIME H470M-PLUS/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B450MX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME A620M-E",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P7P55D",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG43GT",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Intel DX58SO",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H61M-E33 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock X79 Extreme4-M",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B75MA-P45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Classified SR-X",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "HPTX",
    "max_memory": 96,
    "memory_slots": 12,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8H61-M LX PLUS R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H61H2-MV",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Z77-A",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus B75M-A",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H87M-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B85M-P33",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85M-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Fatal1ty H97 Performance",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H97-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-F2A68HM-H",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus RAMPAGE V EXTREME/U3",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z97 Killer/3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "EVGA Micro 2",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H170N-WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus H110M-A/DP",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI X99A WORKSTATION",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-H270-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming K5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming 7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Fatal1ty Z270 Gaming K6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty X399 Professional Gaming",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X399 GAMING PRO CARBON AC",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X399 AORUS Gaming 7",
    "price": null,
    "socket": "sTR4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z370M D3H (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "NZXT N7 Z370",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "MSI H310M GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME H310M-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus ROG MAXIMUS XI GENE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Creator X299",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H570M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H610I-PLUS D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B660M-G",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO Z790-P II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO H610M-S WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 AORUS XTREME",
    "price": 735.9,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C7Z87-OCE",
    "price": 516.09,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X370M Pro4",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI X99A SLI KRAIT EDITION",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-B75M-HD3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus P7P55D-E LX",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI P43-C51",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67 LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH61BEB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus P8Z77-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X79-UP4",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Gray"
  },
  {
    "name": "EVGA 111-IB-E692-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z87X-UD3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI B85M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97N-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z97X-UD3H-BK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Fatal1ty X99 Professional Gaming i7",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z270MX-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty B250 Gaming K4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H270 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI B360M MORTAR TITANIUM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "MSI B360M PRO-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "EVGA Z390 FTW",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B365M-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z490M",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H410M S2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H410M/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H410M-HDV",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B560I AORUS PRO AX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Colorful CVN Z790D5 GAMING FROZEN V20",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Copper"
  },
  {
    "name": "MSI PRO B760M-A DDR4 II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock A620M-HDVP",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-F2A88XM-D3HP",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG CROSSHAIR VI EXTREME",
    "price": null,
    "socket": "AM4",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar TB85",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus TUF X299 MARK 1",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Asus WS X299 PRO",
    "price": 745.12,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro B560M-C/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus P5P43TD",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Gigabyte GA-P43-ES3G",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus P6TD Deluxe",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Orange"
  },
  {
    "name": "ECS H61H2-M2(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Sabertooth 990FX",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z68XP-UD3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DH61WWB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Biostar H61MGC",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus P9X79 DELUXE",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Rampage IV Extreme",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Intel DH61ZE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus Z9PA-D8",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "Asus B85-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock 970 Extreme3 R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-H97-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H97 GAMING 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus X99-DELUXE/U3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-X99-Gaming 5P",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Asus SABERTOOTH Z170 MARK 1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "EVGA Z170 Stinger",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B150M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte G1.Sniper B7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte GA-990FXA-UD3 Ultra",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H110M-S2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "MSI Z270M MORTAR",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI B250M MORTAR ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Gigabyte GA-AX370-Gaming K3",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X299M GAMING PRO CARBON AC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X370 GAMING PRO CARBON AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z370 AORUS ULTRA GAMING 2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ECS A320AM4-M3D",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI MEG Z490 GODLIKE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z590 Extreme",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte B660M D2H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H470M H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B550M-SILVER",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B560MX-E PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Silver"
  },
  {
    "name": "Gigabyte B760M GAMING X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H310CM-HG4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-K D4-ARGB",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 S DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock C70M1",
    "price": null,
    "socket": "Integrated C-Series C-70",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H310M PRO-M2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME B760M-K D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Colorful CVN Z790 GAMING FROZEN V20",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus M4A88T-I Deluxe",
    "price": null,
    "socket": "AM3",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P61-USB3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8Z68-V PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-970A-UD3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H77M-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI Z77A-G43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Q77-M/CSM",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H77N-WIFI",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar TA970",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z87-Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z87-G41 PC Mate",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H81M-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock 990FX Killer",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus MAXIMUS VII GENE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97M Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK S",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "White / Gray"
  },
  {
    "name": "Gigabyte GA-Z97-HD3P",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Fatal1ty X99M Killer/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H170M-E D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H170-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H110M-HDS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-B150N-GSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-B250-HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H110M-S2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B350GTN",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-970A-DS3P FX (rev. 2.1)",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z370 KRAIT GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "EVGA Z370 FTW",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H110M-HDV R3.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte B360N WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus TUF H310-Plus Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Orange / Black"
  },
  {
    "name": "MSI MEG X399 CREATION",
    "price": null,
    "socket": "sTR4",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z390 Taichi Ultimate",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XI EXTREME",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z490 VISION D",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX H470-I GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H470M-HDV",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M Pro-A D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Supermicro MBD-X11SAE-F-O",
    "price": 495.15,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Supermicro A1SRI-2758F-O",
    "price": 489,
    "socket": "Integrated Atom C2358",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Biostar B550GTQ",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590 AORUS TACHYON",
    "price": 495.15,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-MA785GM-US2H",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Intel DH67CL",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock G41M-S3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Z68X-UD3H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock 970 Extreme4",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z77A-G45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8B75-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B75 Pro3-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z77 Extreme3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus H87M-Plus/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus GRYPHON Z87",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z87-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH87MC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI CSM-B75MA-P45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85M-DS3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK 1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z97-GD65 Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H97 Anniversary",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus X99-E WS",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A68M-HD+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI A88XI AC V2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-X99-SLI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming G1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z170A TOMAHAWK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro MBD-X11SSM-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus B150M-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z170A MPOWER GAMING TITANIUM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Supermicro X10SDV-4C-TLN2F",
    "price": null,
    "socket": "Integrated Xeon D-1521",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "MSI B250M PRO-VH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI B250I PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z270X-DESIGNARE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "ASRock X299 Taichi",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime H370-Plus",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar X470GTN",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock X370M-HDV",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XII APEX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI B560-A PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B650M-E",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI PRO Z690-P WIFI",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro MBD-X11SSH-LN4F",
    "price": 394.66,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "ASRock H470M Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B550M H",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490M Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro WS C246-ACE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus P6X58D-E",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-G41MT-D3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Maximus IV Extreme-Z",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z68 Extreme3 Gen3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Intel DX79SI",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH77EB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H61M-P31 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z77A-G41",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H87-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H81M",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H81M-DGS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "EVGA Classified",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z170M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus MAXIMUS VIII IMPACT",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B150N Phoenix-WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-Z170-Gaming K3-EU",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-Phoenix SLI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Orange / White"
  },
  {
    "name": "Supermicro X9DRL-3F",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "Biostar H110MH PRO D4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI B350 KRAIT GAMING",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI X299 SLI PLUS",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Blue / Silver"
  },
  {
    "name": "MSI B360M PRO-VH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H370 AORUS GAMING 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H310M GAMING ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "White"
  },
  {
    "name": "Gigabyte GA-AX370M-Gaming 3",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Beige / Red"
  },
  {
    "name": "Asus PRIME H310M-C/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte X470 AORUS GAMING 7 WIFI-50",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX B365-G GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H570 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock B660M PG Riptide",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI PRO H410M-B",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z690-C/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A620M-A",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B650E AORUS TACHYON",
    "price": null,
    "socket": "AM5",
    "form_factor": "ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H410M S2 V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Biostar B760NH-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI Z270 XPOWER GAMING TITANIUM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock X470 Master SLI",
    "price": 583.33,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H570M Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z590 Taichi",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus M4A79XTD EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG41AN",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "MSI X58 Pro-E",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H55M-P33",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-G41MT-S2P",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus F1A55-M LX PLUS",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B75M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus F1A75-M PRO R2.0",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B85M-ITX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-Q87M-D2H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Maximus VI Formula",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus A88X-PRO",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock X99 WS-E",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock EP2C612D16SM",
    "price": null,
    "socket": "2 x LGA2011-3 Narrow",
    "form_factor": "SSI EEB",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Z97X Killer/3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110M-C D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock EP2C612 WS",
    "price": null,
    "socket": "2 x LGA2011-3",
    "form_factor": "SSI EEB",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X150M-PRO ECC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z170A SLI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-B150-HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI 970A GAMING PRO CARBON",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty Z270 Gaming-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z170 Pro4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus MAXIMUS IX APEX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z270 GAMING PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X370 GAMING X",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus ROG STRIX X299-XE GAMING",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360N AORUS GAMING WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H310-A PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Prime H370-A/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar H61MLV",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte X299X AORUS MASTER",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte H470M DS3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H410M PRO-VH",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H570M-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B660M D3H DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE AX DDR4 V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H510M-E R2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760-VC",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590M",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Brown"
  },
  {
    "name": "MSI MAG H670 TOMAHAWK WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock E3V5 WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z270 Killer SLI",
    "price": 333.78,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-Z270N-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte Z390 AORUS XTREME",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro X9SRH-7TF",
    "price": 794.99,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "Asus Pro B460M-C/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus M4A88TD-V EVO/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG41WV",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Yellow / Black"
  },
  {
    "name": "MSI X58M",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "Micro ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A78LT-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H67MA-USB3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus Rampage III Black Edition",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "EATX",
    "max_memory": 48,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "Foxconn H61MXV",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z77 Pro3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z77 Pro4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI H61M-P20 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DX79SR",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P9X79-E WS",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "SSI CEB",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus VI Gene",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z87X-UD4H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty Z87 Killer",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar H61MGV Ver. 7.x",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI A88X-G45 GAMING",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI H97M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X99 Extreme3",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X99-UD3",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI A68HM-E33",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus M2N",
    "price": null,
    "socket": "AM2",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Yellow"
  },
  {
    "name": "Gigabyte G1.Sniper Z170",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "MSI B150M Pro-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro X10SRM-F",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Micro ATX",
    "max_memory": 512,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Supermicro X10SDV-7TP4F",
    "price": null,
    "socket": "Integrated Xeon D-1537",
    "form_factor": "Flex ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "ASRock Fatal1ty Z170 Gaming K6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99A TOMAHAWK",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro X10SLH-F",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "ASRock Fatal1ty H270 Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME X370-A",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X370 GAMING M7 ACK",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H370 GAMING PRO CARBON",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H310M PRO-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "EVGA X299 MICRO ATX 2",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Prime H310M-C R2.0/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Asus Prime X299 Edition 30",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Biostar H410MH",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H510M-S2H-V2-rev-13",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B760-P DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610I-PLUS-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO A620M-C EX",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Supermicro C9Z390-CG-IW",
    "price": 590.5,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI H170A PC Mate",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA Z490 DARK K|NGP|N",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Biostar B760A-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus P7P55D-E",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 132-BL-E758-A1",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock N68-S UCC",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Rampage III Formula",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-P67A-D3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DQ67OWB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Asus Rampage IV Formula",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z77M-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z75 Pro3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock 960GM/U3S3 FX",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X79 Extreme11",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B75M-DGS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z77-HD3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z87 Pro3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar B75MU3B",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H81M-ITX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Q87T/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI A88XM GAMING",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H97 Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z97-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A58ML",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI 990FXA-GAMING",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z170-P D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z170A XPOWER GAMING TITANIUM EDITION",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z170M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-H170-D3HP",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H110M-S2PV DDR3 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Q170M-MK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B150M Gaming Pro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus X99-E-10G WS",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z270-HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z270X-UD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H270I GAMING PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TB350-BTC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus ROG MAXIMUS IX EXTREME",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H370 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310 D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z490 Phantom Gaming 4/ax",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock E3C246D4U2-2L2T",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "MSI B560M PRO WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z590M GAMING X",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar H510MH/E 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 UD AC",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B550MXC PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B760M E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus PRIME B650M-A AX6 II",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock X570 Creator",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel DH55HC",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A87TD/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Crosshair IV Formula",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Zotac NF610I-K-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock P45X3 Deluxe",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67-I DELUXE (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Z68 Extreme4 Gen3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P5G41T-M LX PLUS",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X79 Extreme3",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X79 Extreme6",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty X79 Professional",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z77A-GD65",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B75M-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus P8B75-M LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B75A-G43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H61M-E33/W8",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Sabertooth 990FX/GEN3 R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte G1.SNIPER 5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus Z87-C",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DZ87KLT75K",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus VI Extreme",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z87X-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus H87I-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H81M-DGS R2.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-H81N",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus VANGUARD B85",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown"
  },
  {
    "name": "Gigabyte GA-Z97M-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H97M-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z97M-ITX/AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Micro",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus X99-PRO",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Asus A68HM-E",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-F2A68HM-DS2H",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar Hi-Fi A70U3P",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI G41M4-F",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Red"
  },
  {
    "name": "MSI A68HM-GRENADE",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI A68HI AC",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z170 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-B150M-HD3 DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-970-Gaming",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI 970A-G43 Plus",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock E3C236D2I",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus H110M-E",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI B150M MORTAR ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White"
  },
  {
    "name": "Gigabyte GA-Gaming B8",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming K7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-B250M-Gaming 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming 7",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar A320MH PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus ROG STRIX B250G GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock N68-GS4 FX R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI H370 GAMING PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar X470GT8",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z490 UD AC",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 PG Velocita",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B550GTA",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H470-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "EVGA Z590 FTW WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M AORUS Pro AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI B560M PRO-VDH WIFI (CEC)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock A620M-C",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B660M-HDVP/D5 R2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z790 EAGLE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Biostar B760MX2-E PRO D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Supermicro MBD-X9SCM-F-O",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Asus P7P55 LX",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55M-UD2",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P5QPL-AM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus M5A78L-M LX",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M5A97",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z68P-DS3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock 970 Extreme3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X79A-GD45 (8D)",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H77-DS3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI FM2-A55M-E33",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B75M R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z77A-G45 Gaming",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H87-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z87 MPOWER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Intel DB85FL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar H61MGV3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock E3C226D2I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "MSI H81M-E35",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-C",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H97M Anniversary",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85M-GAMING 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Z97-DELUXE/USB 3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z97-E/USB3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI X99A GODLIKE GAMING",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z170 Extreme7+",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z170A-G45 GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H170-PLUS D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty Z170 Gaming-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150M-K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus H110I-PLUS D3/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty Z170 Professional Gaming i7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H110N",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H110M-H DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B150M Night Elf",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H170M PRO-VDH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus PRIME B250-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H270M MORTAR ARCTIC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Silver"
  },
  {
    "name": "MSI H270M BAZOOKA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-H270M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H270M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "EVGA Z270 Stinger",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B350GT5",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI X299 GAMING PRO CARBON AC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Z370 AORUS Gaming K3 (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI A320M PRO-VHL",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-H110M-S2PH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H370M DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI H310I PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "EVGA Z370 Micro ATX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG RAMPAGE VI EXTREME OMEGA",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte H370M D3H GSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z390 PHANTOM GAMING 7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X570 Extreme4 WiFi ax",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B450GT3",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H410M DS2V",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z490 Phantom Gaming 4/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock H470M-ITX/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA Z490 FTW WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z590 PG Velocita",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock Z590 Phantom Gaming 4/ac",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z490 UD AC-Y1",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO H610M-C EX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B760MX-E D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B760MX2-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760-PLUS-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H610M-R D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE AX (rev. 1.2)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 1,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A520M-R-CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B760M-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ASRock C2750D4I",
    "price": null,
    "socket": "Integrated Atom C2750",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Blue"
  },
  {
    "name": "Asus Pro B760M-C-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "MSI B360 GAMING PRO CARBON",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Foxconn M61PMV",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Intel DP55KG",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55A-UD4P",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P5N-D",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-MA78LM-S2H",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Intel DG43RK",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-EP45T-UD3LR",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Zotac GF8200-C-E",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock P43DE3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac NF610I-L-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H55M-LE",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X58-USB3",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "Foxconn H55MXV",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock P67 Extreme4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DH61DLB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Foxconn H61MX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Z68MA-D2H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Z68X-UD4-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-78LMT-S2P",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-990FXA-UD5",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P8P67 PRO (REV 3.1)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H61-M LX (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar H61MHB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI X79A-GD45",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Rampage IV Extreme/BF3",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Intel DP45SG",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 Extreme6",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z77 Extreme4-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B75 Pro3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H77 Pro4/MVP",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z77E-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus P8Z77-V PRO/THUNDERBOLT",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI ZH77A-G43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H77-M LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 970 Pro3 R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z77A-GD65 Gaming",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H61M-USB3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z87M-Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H87 Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H87M Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z87M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H87N-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-78LMT-S2P(REV5.0)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI A78M-E35",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-G1.SNIPER Z97",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B85N PHOENIX-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-F2A58M-HD2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus A88XM-E",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "EVGA Z97 Classified",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z97M Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X99-UD5 WIFI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-F2A68HM-HD2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK 1/USB 3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-X99-UD4P",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock EP2C612D16SM-2T",
    "price": null,
    "socket": "2 x LGA2011-3 Narrow",
    "form_factor": "SSI EEB",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Green / Blue"
  },
  {
    "name": "MSI A78M-E35 V2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI X99A GAMING 9 ACK",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97A GAMING 7",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-P85-D3T",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK 2/USB 3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z170 OC Formula",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H170A Gaming Pro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110M-A D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z170A-X1/3.1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-X150-PLUS WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock FM2A58M-HD+ R2.0",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus B150-PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-B250M-D3V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z270N-WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty B250M Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI A320M BAZOOKA",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus ROG STRIX H270I GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming 9",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA Z370 Classified K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA X299 DARK",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA B360 Micro Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI X470 GAMING PRO CARBON AC",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG MAXIMUS XI APEX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B460M D2V",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H470 Phantom Gaming 4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Pro H410M-C/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Colorful BATTLE-AX B550M-HD PRO V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B660MX-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte Z790 AORUS ELITE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B660MX-E PRO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H610M S2 DDR4 (rev. 1.2)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-A D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M D2H",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B45M2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-A WIFI D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte A620M C",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Gray / Black"
  },
  {
    "name": "Asus PRIME H610M-K ARGB-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B760M Pro-A",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "White / Black"
  },
  {
    "name": "Asus EX-B760M-V7",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME B760M-F",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z170A-X1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar Z490GTA EVO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660-AORUS-ELITE-AX-DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B560MHP 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus P7P55D Deluxe",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-EP43T-USB3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DG41TY",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "EVGA 270-WS-W555-A2",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "HPTX",
    "max_memory": 48,
    "memory_slots": 12,
    "color": "Black / Red"
  },
  {
    "name": "Asus P6T6 WS Revolution",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar G41M7",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus P8H67-M PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8P67 Deluxe",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M5A99X EVO",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z68-V LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH77DF",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH77KC",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z77N-WIFI",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 980DE3/U3S3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus H87M-PRO",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z87-Deluxe",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-B75N",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H81M-S2PH",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock FM2A88X-ITX+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-F2A88XM-HD3",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus A55BM-E",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ECS H81H3-I/HDMI (V1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI CSM-H87M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus A78M-A",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar AM1MHP",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-AM1M-S2H",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z97 MPOWER MAX AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS H81H3-TI2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 8,
    "memory_slots": 1,
    "color": "Black"
  },
  {
    "name": "ASRock Z97M OC Formula",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-Z97X-Gaming G1 WIFI-BK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97-G55 SLI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Z97 FTW",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H97M-ITX/AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B85M GAMING",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H81M-ITX/WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus CROSSBLADE RANGER",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B85 Anniversary",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-EX58-UD4P",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "Asus X99-S",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "Asus H81-PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H87WSA-DL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "EVGA Z170 FTW",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Fatal1ty H170 Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H170M-D3H DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H170M-DS3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus M5A78L-M LE/USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z170X-GAMING 6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte MW21-SE0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-F2A88X-D3HP",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H110I PRO AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus P10S-M WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z170X-Ultra Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H270 PC MATE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-Z270M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty Z270 Gaming K4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "EVGA Z270 Classified K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-990X-Gaming SLI",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B250N-Phoenix WIFI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Asus PRIME B250M-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H110M-HDS R3.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Asus STRIX Z370-G GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M D3H GSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Q370M D3H GSM PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z390 Phantom Gaming 9",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-B360M-V5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B360M BAZOOKA PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA Z390 DARK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Supermicro X11SCL-IF",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Silver"
  },
  {
    "name": "Gigabyte GA-AB350M-D3V",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B150M Pro-D",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H470I AORUS PRO AX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus ROG STRIX Z490-G GAMING",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B460 Pro4",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C9Z490-PGW",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Pro Q470M-C/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Asus PRIME B460I-PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Colorful CVN B550M GAMING PRO V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B550M PRO-DASH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B560M Pro4/ac+",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-B660M-V5 D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Asus PRIME H670-PLUS D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B660-A",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Q570M D3H",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar Z790A-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte Q670M D3H DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar B660MXC PRO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z490 PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-R D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B650MS2-E",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Supermicro C7Z170-OCE",
    "price": 536.24,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus PRO H610M-C D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "EVGA Z590 DARK",
    "price": 799,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Supermicro MBD-X11SBA-LN4F-O",
    "price": 322.05,
    "socket": "Integrated Pentium N3700",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "MSI X299 TOMAHAWK AC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H470 Steel Legend",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel DG45ID",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Blue / Silver"
  },
  {
    "name": "Gigabyte GA-H55M-S2H",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Intel DH57JG",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "Gigabyte GA-EP43-UD3L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus P5QL/EPU",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Zotac GF9300-G-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS G41T-M2(1.0)",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P7H55/USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DP67BG",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68A-D3H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus Crosshair V Formula",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus M5A97 EVO",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-A75M-S2V",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Maximus IV Gene-Z",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8Z68-M Pro",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DX79TO",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TPOWER X79",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H61MA-D3V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI A55M-P33",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H77MA-G43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77-V LE PLUS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 760GM-P34(FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn B75M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI FM2-A75MA-E35",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 Extreme11",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-A75M-DS2",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Foxconn H77MXV-D",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "ASRock H61MV-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z87MX-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Z87-Expert",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z87N-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H87M-D3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-G1.Sniper A88X",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte GA-F2A88X-D3H",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z87M GAMING",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z87 Extreme11/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z87I GAMING AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar B85MG",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI H87-G43 GAMING",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar AM1ML",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock Q1900M",
    "price": null,
    "socket": "Integrated Celeron J1900",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown"
  },
  {
    "name": "ASRock Z97 PRO3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97X-Gaming G1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H97-PRO",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H81TM-ITX R2.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Foxconn H61MD",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus B85M-F",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Q87M-MK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-G1.SNIPER B6",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock Fatal1ty Z97 Professional",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99A XPOWER AC",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock Fatal1ty 970 Performance",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150 PRO GAMING D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H110M-S2H GSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-X99P-SLI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Orange"
  },
  {
    "name": "Asus E3 PRO GAMING V5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar H170GT3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS H110M-C3D (1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H81M-HDS R2.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B250 KRAIT GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI X299 XPOWER GAMING AC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H270 Gaming Pro Carbon",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI Z370 GODLIKE GAMING",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B360MHD PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H310MHD PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "EVGA H370 Stinger",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Supermicro X11SCM-LN8F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Silver"
  },
  {
    "name": "Biostar X570GT",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte H470 AORUS PRO AX",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B460M AORUS ELITE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Biostar Z490GTA",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H410M PRO-C",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660M GAMING X AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H81M-S2V",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar B650M-SILVER",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H470M K",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M AORUS ELITE DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B760T-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO B760M-G",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-K-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO H610M-G II",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 AORUS TACHYON",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "EATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H410MHG",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H55M-UD2H",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DP55WB",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55A-UD3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-MA785GT-UD3H",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-870A-UD3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus Rampage II Extreme",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-G41M-ES2H",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "MSI NF980-G65",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H55M-ED55",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-MA770T-UD3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P7P55 WS SuperComputer",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar P43D3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus P8P67-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH67CF",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "Intel DX58SO2",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P43T-ES3G",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Biostar G41U3G",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar G41HDRCH",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI P67A-GD65 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DP35DPM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Supermicro MBD-C7P67-O",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "MSI P67A-G43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61ICAFE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JNC9C-550-LF",
    "price": null,
    "socket": "Integrated Atom N550",
    "form_factor": "Mini ITX",
    "max_memory": 2,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Intel D410PT",
    "price": null,
    "socket": "Integrated Atom D410",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Asus M5A88-V EVO",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P6X58-E PRO",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 48,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68XP-UD4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-990FXA-UD7",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-970A-D3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Jetway JTI41M",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Fatal1ty 990FX Professional",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H61M-S2-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H61M-S2H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock 990FX Extreme3",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus P8Z68-V/GEN3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-A55M-DS2",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus Maximus IV Gene-Z/GEN3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X79 Extreme6/GB",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z77A-GD55",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H77-M/CSM",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte G1.Sniper M3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus P8H77-I",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus V Extreme",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z77X-UP5 TH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z9PA-U8",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Z77A-G43 Gaming",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H87-PRO",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z87M Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus Z87-WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "EVGA 150-SE-E789-KR",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock FM2A88X Extreme6+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-H87-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI A88X-G43",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97X-UD5H-BK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI Z97 Guard-Pro",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H97-GAMING 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte G1.SNIPER H6",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI H97I AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z97 Extreme9",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Classified",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-GAMING G1WIFI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99S XPOWER AC",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock X99 Professional",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B85M-DGS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus A88X-GAMER",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock 970 Performance",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock EP2C612D16C-4L",
    "price": null,
    "socket": "2 x LGA2011-3 Narrow",
    "form_factor": "SSI EEB",
    "max_memory": 1024,
    "memory_slots": 16,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Z97 Extreme4/3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI A88XM-E45 V2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock EPC612D4U-2T8R",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "Micro ATX",
    "max_memory": 512,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Fatal1ty X99 Professional/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z170 Extreme6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock FATAL1TY 970 PERFORMANCE/3.1",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B150 Gaming K4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B150M-D3H-GSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B150M-HDV/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-B150M-D3H DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z170X-UD5 TH",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-MA790GP-DS4H",
    "price": null,
    "socket": "AM3/AM2+",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus Z170-PREMIUM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus H110M-K D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock D1520D4I",
    "price": null,
    "socket": "Integrated Xeon D-1520",
    "form_factor": "Mini ITX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "EVGA X99 FTW K",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Asus H170-PRO/USB 3.1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI E3 KRAIT GAMING V5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z270M Extreme4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z270 Taichi",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Biostar X370GT3",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Biostar B350GT3",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Fatal1ty X299 Gaming K6",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z370 Killer SLI",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B350M PRO-VH PLUS",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus ROG MAXIMUS X APEX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H110M-Gaming 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty B360 Gaming K4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Fatal1ty H370 Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B360 AORUS GAMING 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H310M PRO-VL",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H310M-G/M.2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming 3 Pro",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar X470NH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A520M-E/CSM",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte H510M DS2V",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus Pro H510M-C/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Gigabyte Z690 AORUS ELITE",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660 GAMING X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus EX-B760M-V5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "ASRock B760M-HDVP",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M GAMING WIFI PLUS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H410M-K R3.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B550 AORUS ELITE AX V3 (rev. 1.5)",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock B660M-ITX/eDP",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar Z270GT4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-H55M-USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P7P55D Pro",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A79T DELUXE",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-880GA-UD3H",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-890FXA-UD5",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-890GPA-UD3H",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A89GTD PRO/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DP43BF",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "EVGA 170-BL-E762-A1",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "XL ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "EVGA 121-BL-E756-TR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "Micro ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Intel DG41MJ",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock K10N78M-PRO",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus M4A77D",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P5G41C-M LX",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI K9N6PGM2-V2",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-EP43T-UD3L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock G43Twins-FullHD",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar G41D3G",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus P8H67-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67 WS Revolution",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DP67DE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock P67 Pro",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TForce TG31-A7",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte G1.Assassin",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "XL ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "Biostar H61MH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H67M-D2-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "Gigabyte GA-P67A-UD4-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H61M-E23 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac H67ITX-C-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-G41MT-USB3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI H61M-P23 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68X-UD3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI 990FXA-GD80",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H61I-E35 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar P4M890M7SE",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "EVGA 130-SB-E675-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-Z68XP-UD3P",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Intel DZ68DB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 990FX Extreme4",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 880GMH/U3S3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac NM10-B-E-ION",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini DTX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TA990FXE",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-M68MT-S2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI X79A-GD65 (8D)",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 760GM-E51 (FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X79 Extreme9",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI 760GM-P21 (FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn H61AP",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8Z77-V LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H77-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 Pro4-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock N68C-GS FX",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z77M-D3H-MVP",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Z77X-UP4 TH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z77M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock FM2A75 Pro4-M",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z77A-G45 Thunderbolt",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus F2A85-M/CSM",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-F2A55M-HD2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z77 Fatal1ty Professional",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z87X-UD5H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z87M Extreme4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z87E-ITX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z87 XPOWER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS H87H3-M(1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS B85H3-M(1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock B85M-HDS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar Hi-Fi Z87X 3D",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI FM2-A75MA-P33",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z87I-Deluxe",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-F2A88X-UP4",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI CSM-H81M-P32",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H81M-E33 V2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI A78M-E45",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B85M-P33 V2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock FM2A55M-HD+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A88X Extreme4+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus H81T/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z87I AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-F2A78M-D3H",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS H81H3-A3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-Z97N-Gaming 5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97 XPOWER AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI H97 Guard-Pro",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar Hi-Fi A88W 3D",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z97 PROFESSIONAL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "EVGA X99 FTW",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-GAMING 5",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X99 OC Formula",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock FM2A88M PRO3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X99 Extreme6/ac",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X99S MPOWER",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI B85-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus A88XM-Plus",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock EPC612D8A",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "MSI X99S SLI Krait",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z97 Extreme6/3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 990FX Killer/3.1",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B85-HD3-A (rev. 1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock X99 OC Formula/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Gold"
  },
  {
    "name": "Asus P9D-I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z170A GAMING M9 ACK",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Fatal1ty Z170 Gaming K6+",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z170A Tomahawk AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock N3700-ITX",
    "price": null,
    "socket": "Integrated Pentium N3700",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H170M-ITX/DL",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus H170I-PLUS D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus B150M-K D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H170-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H170-HD3 DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H170A-X1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus B150M-PLUS D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H170I Pro AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus MAXIMUS VIII EXTREME/ASSEMBLY",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar B150GT5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Supermicro MBD-X11SSH-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock H110M-DVS/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock H110M-HDV/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Asus M5A78L/USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown"
  },
  {
    "name": "ASRock J3710-ITX",
    "price": null,
    "socket": "Integrated Pentium J3710",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-970-Gaming SLI",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus A88XM-A/USB 3.1",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar Z270GT9",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-B250M-Gaming 5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z270-WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A68HM GAMING",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming 3",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X299 OC Formula",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG RAMPAGE VI APEX",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "NZXT N7 Z370",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar Z370GT6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Yellow / Black"
  },
  {
    "name": "ASRock X299M Extreme4",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B360M GAMING HD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Red"
  },
  {
    "name": "Gigabyte Z370M AORUS Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Q370M VPRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus ROG Maximus XI Hero (Wi-Fi) Call of Duty: Black Ops 4 Edition",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte X299-WU8",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "SSI CEB",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B365M D2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock A520M-HDVP/DASH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI MPG X299M GAMING EDGE AC",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI H410I PRO WIFI",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H81M-S2PT",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H410M HD3P",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H410M SH2 V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H510M S2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z590 Phantom Gaming 4/ac+",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H410I-PLUS/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI A520M PRO-C DASH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte Z690 UD AX DDR4 V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H410M-F",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-F D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI PRO-B660M-VC-WIFI-DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar H410MH S2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H510MH 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B560M-SILVER",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "ECS B450AM4-M",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar B760MXC PRO 2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME A620M-K-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro Q670M-CE-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus PRIME B650M-A AX6 II-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M GAMING PLUS WIFI DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B650M-A WIFI II-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "EVGA P55V",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus P7P55D-E Deluxe",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P7P55-M",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus III Gene",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Maximus III Formula",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn A6GMV",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-MA770-UD3",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "MSI 760GM-E51",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-770T-USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A785TD-V EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 890FXA-GD70",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 132-BL-E758-TR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "Intel DG41KR",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / White"
  },
  {
    "name": "Zotac GF9300-A-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock 880GM-LE",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock G41M-LE",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock G41M-GS",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI 790GX-G65",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "MSI 790FX-GD70",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock P55 Extreme4",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P5G41T-M LE",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4N68T-M V2",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P55-GD65 USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock X58 Extreme 3",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "Asus P7F7-E WS SuperComputer",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67-M LE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Maximus IV Extreme",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock P67 Pro3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar G41DVI",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Gigabyte GA-M68MT-S2P",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI H61MU-E35 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock H61M-S",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H61M-D2P-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8H61-M (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-H61M-USB3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-880GMA-USB3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Jetway JNMF91-G41",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-990XA-UD3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock H61M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-A75M-UD2H",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI A75MA-G55",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A75M-HVS",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z68 Extreme7 Gen3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A75A-G55",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A55MH",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock A55M-HVS",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DZ68BC",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z68 Deluxe/GEN3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG41TY",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Silver"
  },
  {
    "name": "Gigabyte GA-X79-UD5",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JNF9A-Q67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Intel DH61SA",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Big Bang - Xpower II Limited Edition",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JNF9F-H61",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Intel DZ77BH55K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z77MA-G45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 Professional-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar H61MU3B",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI 990FXA-GD80V2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock X79 Champion",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z77 OC Formula",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-H77TN",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Thin Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock B85 Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H87M-ITX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B85M",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z87 MPOWER Max",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus Z87-Deluxe/DUAL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "EVGA 111-IB-E692-KR Stinger",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-F2A85XN-WIFI",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock EP2C602",
    "price": null,
    "socket": "2 x LGA2011",
    "form_factor": "SSI EEB",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "MSI FM2-A85XA-G43",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z87-G43 Gaming",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B85M Pro4/ASM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus Z87-Pro (V Edition)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JNF9J-Q87",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus A55BM-A/USB3",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z87-Deluxe/QUAD",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock FM2A88M-HD+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI H81M-P33 V2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-EP43-S3L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte G1.Sniper Z87",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "MSI A88XM-E45",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI B85I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte G1.Sniper B5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock FM2A78M-ITX+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-H81M-HD2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Foxconn H81MXV-D",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus AM1M-A",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H97 PERFORMANCE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus GRYPHON Z97",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z97S SLI Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA X79 Dark",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "ECS Z97-MACHINE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI Z97I AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus B85M-D PLUS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-Z97M-DS3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "MSI A58M-E35",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock X99 Extreme6",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus GRYPHON Z97 ARMOR EDITION",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock FM2A88X PRO3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X99S GAMING 9 ACK",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H97M-Gaming 3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus SABERTOOTH Z97 MARK1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Supermicro C7X99-OCE-F",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-PRO(Wi-Fi ac)/USB 3.1",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-X99-UD3P (rev. 1.0)",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock X99 Extreme6/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H97M WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "EVGA Z170 Classified",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus N3050M-E",
    "price": null,
    "socket": "Integrated Celeron N3050",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z170 Gaming K4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B150M Pro4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock H170M-ITX/ac",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z170-WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H110M-ITX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Supermicro C7Z170-M",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110I-PLUS/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "MSI C236M WORKSTATION",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z170M OC Formula",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock B150M Pro4/Hyper",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Supermicro X11SSL-CF",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Gigabyte GA-Z170X-UD3 Ultra",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X99A SLI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-B85M-D3H-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Translucent Black"
  },
  {
    "name": "Gigabyte GA-Z270-Gaming 3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H270-HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming 9",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming 8",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z270 SuperCarrier",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X299 GAMING M7 ACK",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock X299 Killer SLI/ac",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X299 GAMING PRO CARBON",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310M S2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310M DS2V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B360GT5S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ECS KAM1-I (V1.0)",
    "price": null,
    "socket": "AM1",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar B365MHC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Biostar X470GTQ",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus X299 Edition 30",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z490 AORUS ULTRA G2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro C9Z490-PG",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z490D4U-2L2T",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock A520M-HDVP",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H470-PLUS/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B450GT",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar Z490GTN",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar Z590I Valkyrie",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock B660M-HDVP/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus Pro H610M-C-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte B660M GAMING X",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI PRO B660M-B",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H610M HD3P (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI Z790-S01",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B660-AORUS-ELITE-DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME-H510M-F",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRO-B660M-C-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Biostar H510MX/E 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B560MH-E 2.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte H510M S2 V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Gigabyte A620M S2H (rev. 1.0)",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H770-PLUS-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Pro Q670M-CE D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green / Black"
  },
  {
    "name": "Asus PRIME H610M-R-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B650M D2H",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-R-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H610M S2 V3 DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte H610M D3H DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Zotac IONITX-E-E",
    "price": null,
    "socket": "Integrated Atom 230",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus P11C-I",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar Z590 VALKYRIE",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H55N-USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H55-USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P7H57D-V EVO",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55-USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "EVGA 132-LF-E657-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-P55A-UD3P",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4N98TD EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A785-M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-880GM-USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock 870 Extreme3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A87TD EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-EP45-UD3L",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Intel DB43LD",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-X58A-UD5",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "ASRock X58 Extreme",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac G31MAT-B-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar MCP6P3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "ASRock G41M-S",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Zotac G43ITX-A-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock 890FX Deluxe3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H55M-E33",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JI31GM4-L-LF",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI 870-G45",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P5G43T-M Pro",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P5P43TD/USB3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H55M-E23",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A88T-V EVO/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DG41CN",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Asus P8H67-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H67-M EVO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67-M PRO/CSM",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH67+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn A78AX 3.0",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Zotac 890GXITX-A-E",
    "price": null,
    "socket": "AM3",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte G1.Guerrilla",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "EATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "Gigabyte GA-P67A-UD3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI H67MA-E45 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H61H2-M3(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Zotac G41ITX-B-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Biostar H67MU3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8H61-I (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Intel DH67GDB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X58A-OC",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Orange"
  },
  {
    "name": "MSI Z68A-GD80 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock Z68 Extreme4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JMIG41TM-LF",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Fatal1ty P67 Performance",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8Z68-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar G31-M7G DVI",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P8Z68 Deluxe",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61M-GE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI PH61A-P35 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JNC94FL-525-LF",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Z68M-ITX/HT",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H61N-USB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 990XA-GD55",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z68 Pro3 GEN3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Zotac H61MAT-A-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Intel DG41RQ",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Silver"
  },
  {
    "name": "MSI X79A-GD65(8D) Frio Adv",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": null
  },
  {
    "name": "Gigabyte G1.ASSASSIN2",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Asus P8H61-M LX PLUS (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI H61M-P25 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A880GZ",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z77MX-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Biostar TZ75B",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar H77MU3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI 990FXA-GD65V2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DZ77SL50K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-970A-DS3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus P8Z77-V PREMIUM",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z77A-GD80",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H61H2-M12",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "MSI 880GMS-E41 (FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac D2700ITXS-A-E",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "ECS B75H2-M3(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "Asus F2A55-M LK PLUS",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z77X-UP7",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock FM2A85X Extreme6",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Intel DZ75ML-45K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77-I DELUXE/WD",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A55M-VS",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B75MA-P33",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte G1.Sniper M5",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock H87M",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z87 Extreme6",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H87 Performance",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z87 Pro4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "MSI B85M-E33",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS B85H3-M3(1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock H61M-PS4 Micro ATX Intel Motherboard",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Q87M vPro",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Zotac A55ITX-B-E",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-H77-D3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Foxconn Q77M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H87WS-DL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock E3C224-4L",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Z87-G55",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Z87 Stinger",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H81.Amp-UP",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock E3C224-V+",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Asus M5A97 LE R2.0 BOM",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 760GM-P34 (FX) BOM",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-H87TN",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Q87TN",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "EVGA Z87 FTW",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z87X-UD5 TH",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z87X-UD7 TH",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-Z87-DS3H",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar A58MD Ver. 6.x",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI H87M-E35",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock C2550D4I",
    "price": null,
    "socket": "Integrated Atom C2550",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "White / Blue"
  },
  {
    "name": "ECS B75H2-M4(V1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "MSI CSM-Q87M-E43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Fatal1ty H87 Performance",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B85N",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock FM2A88X+ Killer",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JNC9S-B85",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Green"
  },
  {
    "name": "MSI A88X-G41 PC MATE",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock AM1B-M",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-F2A55M-S1",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z97 MPOWER",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock FM2A88X+ BTC",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar H81MHP2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z97 Extreme3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97X-UD7 TH",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z97X-SOC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock H97M",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z97M Anniversary",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X99S GAMING 9 AC",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-SOC FORCE",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H81M Eco",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Green"
  },
  {
    "name": "ECS A58F2P-M4(1.0)",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-Z87X-SLI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI AM1M",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock EPC612D8A-TB",
    "price": null,
    "socket": "LGA2011-3 Narrow",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Green / Blue"
  },
  {
    "name": "Gigabyte GA-X99-Gaming 7 WIFI",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-X99-SOC Champion",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock QC5000-ITX/PH",
    "price": null,
    "socket": "Integrated A4-5000",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-EG43M-S2H",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Asus H97M-E/CSM/C/SI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock E3C222D4U",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock X99 Extreme4/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-990FXA-UD5 R5",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85M-HD3-A",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock H170 Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B150M-HDV",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-H81M-S2H GSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z170 Extreme3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock H170A-X1/3.1",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI H170M ECO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "MSI CSM-H110M Pro-VHL",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-X150M-PLUS WS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock E3C232D4U-V1L",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock E3C236D4U",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "MSI B150I GAMING PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B150M-HD3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z170X-Designare",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P10S-E/4L",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Supermicro X11SAE-M",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "ASRock B150M Pro4V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "MSI B150M GRENADE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-X170-WS ECC (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Blue"
  },
  {
    "name": "Biostar Z270GT8",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Fatal1ty H270M Performance",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar X370GT5",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI Z270 GAMING M6 AC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z270 MPOWER GAMING TITANIUM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver"
  },
  {
    "name": "MSI X299 TOMAHAWK",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B250M-EVO (rev. 1.0)",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Fatal1ty X299 Professional Gaming i9 XE",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock H310M-DGS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H310M HD2",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "MSI H310M PRO-VHL",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H310M-HDVP",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI X58 PLATINUM",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Multicolor"
  },
  {
    "name": "Asus PRIME H310I-PLUS/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte X299 AORUS Ultra Gaming Pro",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar B450MHC",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte X299 AORUS MASTER",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty X99 Professional",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "EATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte GA-H110M-S2PT",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ECS B350AM4-M2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z490 Phantom Gaming 4/2.5G",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Supermicro C9X299-RPGF",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "MSI X299 PRO 10G",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Asus WS C246M PRO/SE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B350M",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Colorful CVN X570 GAMING PRO V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Colorful CVN X570M GAMING PRO V14",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B560M-HDV-A",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar Z590GTA",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Blue / Black"
  },
  {
    "name": "ASRock Z590 OC Formula",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Gigabyte B660M AORUS Pro",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte Z690 GAMING X DDR4 V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Z490-GUNDAM (WI-FI)",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "MSI PRO-A320M-B",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar A320MD PRO",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Yellow"
  },
  {
    "name": "MSI PRO B760M-A DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M D DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Asus PRIME H610M-K-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B650MT-E PRO",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H610M K V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME B650M-F",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B85M DASH/OL R2.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H510M-F R3.0-CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M G AX",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro MBD-X11SSL-O",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Gigabyte GA-P67X-UD3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Biostar Z590MHP",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "EVGA 111-CD-E630-TR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Sabertooth 55I",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus P7P55D-E PRO",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac GF6100-E-E",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue / Red"
  },
  {
    "name": "ASRock M3A770DE",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "ASRock A785GMH/128M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-880GM-UD2H",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A88T-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A78T-E",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-MA790GPT-UD3H",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI 890GXM-G65",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-EP45T-USB3P",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Intel DG41RQ",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / Blue"
  },
  {
    "name": "Asus P5G41C-M",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P5G41T-M/CSM",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 131-GT-E767-TR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "Zotac H55ITX-A-E",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Zotac GF9300-I-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock P43DE",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Intel DH55PJ",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Big Bang XPOWER",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A780L",
    "price": null,
    "socket": "AM3/AM2+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI 770T-C35",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "Asus M4A88TD-M/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-880GM-D2H",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock N68C-S UCC",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Foxconn A88GMX",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS H57H-M (V1.0A)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar G41D3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn H55MX-S",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Zotac NF610I-E-E",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P7H55-M LE",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X58A-UD9",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "XL ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "ASRock X58 Extreme6",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H67-M LX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67 EVO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67-M PRO",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI GF615M-P31",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "ASRock P67 Extreme6",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M-GE/HT",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock P67 Transformer",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock A770DE+",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MS-E33",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn Inferno Katana GTI",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TA870U3+",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H67A-UD3H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ECS A785GM-M7",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Green / White"
  },
  {
    "name": "Sapphire PURE Black X58",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "MSI P67A-C43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-GD55 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67-M PRO (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P6X58-E WS",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "ASRock Fatal1ty P67 Professional (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-870A-USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ECS P45T-AD3",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H61-M LE/CSM (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Intel DH67BLB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67S-C43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-E350N-USB3",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel D425KT",
    "price": null,
    "socket": "Integrated Atom D425",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Zotac NM10-A-E-ION",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z68A-D3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z68 Pro3-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M5A87",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JMIP41TA-IC-LF",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JNAF91R-G41",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TZ68A+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus M5A88-M",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61DE/S3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-A75M-D2H",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Biostar TA75A+",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus F1A75-M PRO",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus F1A75-V PRO",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z68A-GD55 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A75 Extreme6",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z68 Professional Gen3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus F1A75-M LE",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JM26GT4-LF",
    "price": null,
    "socket": "AM2",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI A75A-G35",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 120-SB-E672-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "EVGA 130-SB-E685-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z68A-GD65 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 870 Extreme3 R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z68A-G43 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac Z68ITX-A-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus F1A75-I Deluxe",
    "price": null,
    "socket": "FM1",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JNAF92-Q67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "ASRock H61M-GS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 120-SB-E682-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Foxconn H67M-V",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Biostar TZ68K+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X79 Extreme7",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 48,
    "memory_slots": 6,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H67MS-E33 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TZ77XE3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Intel DZ77GA70K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Z77 WS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar B75MU3+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock 970 Pro3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte G1.Sniper 3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ECS H77H2-M3(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z77 Extreme9",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B75M-GL",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Zotac H67ITX-D-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar Hi-Fi Z77X 5.x",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Z77 FTW",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Intel DZ77RE75K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus F1A55-M LE R2.0",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 131-IB-E695-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ECS H61H2-I3 (v1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-F2A85X-UP4",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus F2A55-M/CSM",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z77IA-E53",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DZ68AF",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac Z77ITX-A-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock Z77 Extreme6/TB4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar Hi-Fi A85S3",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z77X-UD4H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-C847N-D",
    "price": null,
    "socket": "Integrated Celeron 847",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H61M-HD2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock FM2A85X-ITX",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar A960D+",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B75M-DGS R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z87M-D3H 1.0",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-Z87X-OC Force",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock Z87 Extreme3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B85M-GL",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-Z87X-OC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "EVGA 151-SE-E779-K3",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z87 OC Formula",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS NM70-I2(1.0)",
    "price": null,
    "socket": "Integrated Celeron 1037U",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Z87I-Pro Mini-ITX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H87M-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Asus A55M-E",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H61H2-I5 (V1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Q87M vPro/ASM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus A88X-PLUS",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-H87N",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock FM2A75M Pro4+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-970A-DS3P BOM",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus Z87-A (NFC Express Edition)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI CSM-B85M-E45",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn H81MX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock FM2A55M-VG3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar Hi-Fi H81S2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A78M-HD+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus A55BM-K",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS A75F2-M",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus F2A85-M2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS B85H3-M7",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Fatal1ty H97 Killer",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z97E-ITX/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z97X-Gaming GT",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z97I Gaming AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus H97M-E/CSM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "MSI H97M-E35",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar Hi-Fi Z97WE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Z97 OC FORMULA",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI Z97-G43 GAMING",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn H97M Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z97 Extreme6/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z87M-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z97-Gaming 9 ACK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI A68HM-P33",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z97I GAMING ACK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI X99A MPOWER",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock H81M-DG4",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus P5P41T LE",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H81M-D3V",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z97X-Game Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ASRock Fatal1ty X99X Killer/3.1",
    "price": null,
    "socket": "LGA2011-3",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-B85M-DASH",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock Z170 Extreme4+",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock H170M Pro4S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus B150M-C D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus B150-PLUS D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170X-SOC FORCE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B150 Pro4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock Q170M vPro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ECS Z170-CLAYMORE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-H110M-S2HP",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock B150M-ITX",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "MSI Z170A-G43 PLUS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Supermicro C7Z170-SQ",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus N3150I-C",
    "price": null,
    "socket": "Integrated Celeron N3150",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus B150M-C/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock B150M-HDS",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte MW31-SP0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA Z170 Classified K",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI CSM-H170M-A Pro",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "MSI B150M ECO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "ASRock E3V5 Performance Gaming/OC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus H110M-D D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock B150 GAMING K4/HYPER",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P10S-M",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus H170I-PRO/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock Fatal1ty E3V5 Performance Gaming/OC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus B150-PRO",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Biostar B250GT5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Biostar B250GT3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-Z270X-UD5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C7Z270-PG",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z270 CAMO SQUAD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Beige"
  },
  {
    "name": "Biostar X370GT7",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Biostar B350ET2",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B250M-J",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Fatal1ty X299 Professional Gaming i9",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte X299 AORUS Ultra Gaming",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Gigabyte X299 UD4",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock X299 Taichi XE",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C7Z270-CG-L",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME H270M PLUS CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte X299 AORUS Gaming 7 Pro",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Supermicro C9Z390-CG",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Supermicro X11SCZ-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Silver"
  },
  {
    "name": "Biostar X470GTA",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar X570GTA",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B250M PRO OPT BOOST",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock Z490 Phantom Gaming 4SR",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "EVGA Z490 DARK",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "EATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar Racing Z490T-Silver",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Mini ITX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI B365M PRO-VD",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI X299-A PRO",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 256,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar B460GTA",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B460GTQ",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B560GTQ",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus PRO H410M-C2/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Asus PRIME H610M-K D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar H610MX-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte B660 DS3H AC",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-A WIFI-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus EX-B760M-V5 D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte B760M AORUS PRO DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M AORUS PRO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B760MXC PRO",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H610M-HDVP/D5 R2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B650M-K-CSM",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus Pro H610M-CT2 D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Asus EX-B650M-V7",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus PRIME H610M-D-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H610M-K D4 ARGB-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte B760M D",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte B360 M AORUS PRO (rev.1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Biostar A620MS",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME B760M-F D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B760M-F-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-H55M-S2",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Intel DH57DD",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H57M-USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "EVGA 132-LF-E655-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "EVGA 141-LF-E658-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Intel DP55SB",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55A-UD6",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 6,
    "color": "Blue / White"
  },
  {
    "name": "MSI 740GM-P25",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn A74ML-K",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-MA74GM-S2",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Foxconn A76ML-K",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus M4A78L-M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock 770 Extreme3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus M4A785TD-V EVO/U3S6",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A785GXH/128M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-790XTA-UD4",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-890XA-UD3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI 870A-G54",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 141-BL-E760-A1",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "EATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Asus Rampage II Gene",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "Micro ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P55-UD3R",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A88T-M/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H55M PRO",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock P55 Pro/USB3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A78LT-M LE",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 890GX Extreme4",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P7H55-M LX",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-M68MT-D3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Biostar A770E3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "MSI P55-CD53",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 880GM-E41",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TA880G HD",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn Q57M",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A790GXM-AD3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Biostar N68S",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JMA3-880GP-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JMA3-79GDGEXL-LF",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus M4A88T-M LE",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 870S-G54",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac GF6100-F-E",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Foxconn A9DA-S",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Biostar G41 HD",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-890FXA-UD7",
    "price": null,
    "socket": "AM3",
    "form_factor": "XL ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A77T/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 785GM-E51",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A785GM-M5 1.0",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS A785GM-AD3(1.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar A780L3L",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS P55H-AK (V1.0)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS G41T-R3(V1.0A)",
    "price": null,
    "socket": "LGA775",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS A885GM-A2 (V1.1)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI P55A FUZION",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JM26GT4-D3-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI H55-GD65",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P7H55-M/CSM",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TP45E Combo 6.X",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn P55MX",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JXBLUE-H55-MINI-LF",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Zotac 880GITX-A-E",
    "price": null,
    "socket": "AM3",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-H67A-UD3H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H67MA-D2H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-H67M-D2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-P67A-UD4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI P67A-GD65",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-GD53",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-C43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67S-C43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH67GD",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TP67XE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MA-E45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H55M-E21",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JMIH55-M-LF",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock H67DE3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TP67B+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DX58OG",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A780L3G",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar P43-A7",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JNC81-LF",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus M4A87T",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus Maximus IV Extreme (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI P67A-G45 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H61M/U3S3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H67M-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-GD53 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P67A-UD3P-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus P8P67 WS Revolution (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 880G Pro3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TP67XE (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JMIH61M-DU3-LF",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI P67A-GD80 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar H61ML",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8P67 EVO (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar H61MU3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock P67 Pro3 SE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn A76ML-K 3.0",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus AT3IONT-I Deluxe",
    "price": null,
    "socket": "Integrated Atom 330",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI E350IS-E45",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JNC85-E350-LF",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock E350M1",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus E35M1-M PRO",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68X-UD5-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z68MX-UD2H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock Z68 Pro3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DH67CLB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus E35M1-I",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A770 A2+",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MS-E23 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH55 XE",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DP67BGB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JM28GT4D3-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TH61A",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI Z68A-GD65 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68XP-UD5",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI 990FXA-GD65",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar A780L3B",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-A75-D3H",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock P67 Extreme4 Gen3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z68A-G43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z68M-D2H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI Z68MA-G45 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac Z68ITX-B-E",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H67A-G43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z68A-GD80 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A75M-ITX",
    "price": null,
    "socket": "FM1",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z68A-G45 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI A55M-P35",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A55 Pro3",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar H61MLB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS A990FXM-A V1.0 CFX/CLI",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A990FXM-A V1.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-X79-UD7",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "EVGA 132-SE-E775-KR",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus F1A55-M LE",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus F1A55-M/CSM",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI A75MA-P35",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A55F-M3(1.0)",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-880GM-D2H (REV. 3.1)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-880GM-USB3L",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "EVGA 151-SE-E777-KR",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI 870A-G54 (FX)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JI61G-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Intel DZ68ZV",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DBS1200KP",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green"
  },
  {
    "name": "Jetway JTA980AG",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z68AP-D3(R2.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TA970XE",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ECS H55H-M(1.0)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JNMF92-H61",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TZ77MXE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TZ77A",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TZ77XE4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Gigabyte GA-Z77X-UD5H-WB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 Professional",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn A75M",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "ASRock Z77 Performance",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock AD2700B-ITX",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A75 Pro4/MVP",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Q77M vPro",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock AD2500B-ITX",
    "price": null,
    "socket": "Integrated Atom D2500",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ECS A890GXM-A2(2.0)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS H61H2-A2 Deluxe (1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ECS H77H2-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS H61H2-M13",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ECS H61H-G11",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "ECS A960M-M2",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar A75MG",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS A780LM-M2",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "EVGA 151-SE-E779-K2",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus Maximus V Formula/ThunderFX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus F1A55-M LX PLUS R2.0",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JTA98MG",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JHA18",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus E45M1-M PRO",
    "price": null,
    "socket": "Integrated E-Series E-450",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Z77 WS",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Asus F2A85-M PRO",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus F2A85-V PRO",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-F2A75M-D3H",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ECS A55F-M4(1.0)",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS A55F2-M3(1.0)",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS A85F2-A GOLDEN(1.0)",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Intel DZ68PL",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-F2A85XM-D3H",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI FM2-A85XA-G65",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock FM2A85X Extreme4-M",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ECS A85F2-A DELUXE(1.0)",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Maximus V Formula/Assassins C3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI FM2-A75IA-E53",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-Z77-HD4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI FM2-A85XMA-E35",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H61H2-I v1.1",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-F2A85XM-HD3",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ECS A990FXM-A",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar A780L3C",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Biostar COMBOA7L3C",
    "price": null,
    "socket": "Integrated Athlon II X2 215",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI B75MA-G43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus A85XM-A",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Z87 Professional",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock Z87 Extreme6/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H87M-G43",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS Z87H3-A4(1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ECS H87H3-M3(1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock Z87M OC Formula",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI Z87I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus P9D-X",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar Hi-Fi Z87W",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar Hi-Fi B85S3+ Ver. 6.x",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus P9D WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock E3C224",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "MSI Z87 MPOWER SP",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-F2A75M-HD2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock H87M Pro4/ASM",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-H81TN",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "ASRock FM2A88M Extreme4+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock E3C224D2I",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus A88XM-PLUS/CSM",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Sapphire PURE Black 990FX",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI A88XM-E35",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H87H3-TI (V1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Thin Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z87X-HD3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock B85 Killer",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI CSM-B85M-P32",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Fatal1ty Z87 Professional",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-H87N-WIFI(REV2.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte G1.SNIPER Z5S",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "MSI Z87 MPOWER MAX AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Foxconn H81MXV",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85N-WIFI",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-H81-D3",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Q87N",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H81M-E35 V2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Z97-DELUXE(NFC&WLC)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-AM1M-S2P",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "MSI Z97 U3 Plus",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z97-Gaming 9 AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus A78M-E",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "EVGA 111-HR-E972-KR",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar A88MQ",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte GA-Z97X-SOC FORCE LN2",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock FM2A78M PRO3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-B85N-PHOENIX",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock FM2A78 PRO3+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS B85H3-M9 (1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A78M-HD+ R2.0",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI Z97A GAMING 9 ACK",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro X10SAT-O",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z97A SLI KRAIT EDITION",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Z170 Extreme6+",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming GT",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z170 Krait Gaming",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ASRock Fatal1ty H170 Performance/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock H170 Pro4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock B150M Pro4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Supermicro X9SCM-iiF",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "MSI B150M BAZOOKA D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-MA790X-UD4P",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Gigabyte GA-Q170M-D3H",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus H110M-E D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gold"
  },
  {
    "name": "Asus H170-PRO/CSM",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "EVGA 141-BL-E757-TR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Biostar Z170GT7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-990XA-UD3 R5",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A88M Extreme4+ R2.0",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock H170 Performance/Hyper",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-Z170X-Gaming 5-EU",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock P55 Deluxe3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-X170-EXTREME ECC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Beige"
  },
  {
    "name": "Supermicro MBD-X10SLL+-F",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Biostar RACING Z170GTN",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar Z270GT6",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Gigabyte GA-B150M-DS3H DDR3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Supermicro X11SSA-F-B",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "ASRock Z270 Professional Gaming i7",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Supermicro C7H170-M",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock X299 Extreme4",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": null
  },
  {
    "name": "Supermicro X11SSZ-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Gigabyte B360 HD3P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B360M D3V",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar B360GT3S",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI X299M-A PRO",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H110 PC MATE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "MSI 785GM-P45",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock E3C246D4U",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "Biostar X570GT8",
    "price": null,
    "socket": "AM4",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B365GTA",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte H110M-S2PT",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H410M-HDVP2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B350GTX",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Gigabyte H410M DS2V V2",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-B560M-V5",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Asus PRIME H510M-A WIFI/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z590-C/ax",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock H610M-HDVP/D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-H610M-V3 D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Biostar Z690A-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte Z690 UD DDR4 V2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus EX-B660M-V5-PRO-D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "MSI Z590M PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B760M-AJ D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M POWER DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H510MHP",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B560MH-E PRO",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Brown / Silver"
  },
  {
    "name": "Gigabyte B560M DS3H PLUS",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Biostar B760MX-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B760M POWER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Gray / Black"
  },
  {
    "name": "Gigabyte H610M S2",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Silver"
  },
  {
    "name": "Biostar B650MXC PRO",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME H510M-E R2.0-CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H410M K",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Gray"
  },
  {
    "name": "Biostar B550MT",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B650MS2",
    "price": null,
    "socket": "AM5",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar H610MX2-E D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar H610MHC-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H610MHD D5",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H610MHP 2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar H610MT-E",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-F D4 R2.0",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H610M-F D4 R2.0-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus PRIME B760M-PLUS-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 192,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Asus PRIME H510M-F R3.0",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Asus B760M-AYW WIFI D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte B760M D3HP DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Supermicro MBD-X11SSM-F-O",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green"
  },
  {
    "name": "EVGA 141-LF-E658-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar T5 XE CFX-SLI",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "EVGA 123-LF-E653-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Intel DP55WG",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4N75TD",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac GF6100-B-E",
    "price": null,
    "socket": "AM3/AM2+",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-770TA-UD3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "MSI 770T-C45",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus M4A785TD-M EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A785GM-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "Asus M4A785T-M/CSM",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 785GTM-E45",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "MSI 790XT-G45",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock 880GMH/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-790FXTA-UD5",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "ASRock A790GMH/128M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JMA3-79GDGD-LF",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus M4A88TD-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 880G Extreme3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-880GMA-UD2H",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4A89TD PRO/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A89TD Pro",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TA890GXB HD",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ECS A890GXM-A",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Biostar TA890GXE",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus M4A89GTD PRO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 890GX Extreme3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 132-GT-E768-KR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-M68M-S2P",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Asus M4N68T-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock M3A785GMH/128M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "ASRock 880GXH/USB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 132-GT-E768-TR",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock 890GM Pro3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A780LM-S",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "EVGA 123-CD-E635-KR",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Gigabyte GA-D525TUD",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "Intel D525MW",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "ASRock 890FX Deluxe4",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-MA78LMT-S2",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "MSI 785GT-E63",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A880G+",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI NF750-G55",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 141-GT-E770-A1",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "EATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TA790GXE",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Biostar TA790XE",
    "price": null,
    "socket": "AM3/AM2+",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "MSI GF615M-P33",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 880GMA-E45",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI X58A-GD45",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TA890FXE",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI 870U-G55",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn A88GM Deluxe",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 880GMA-E53",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 870A Fuzion",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus M4A77TD",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TP43ECombo",
    "price": null,
    "socket": "LGA775",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TH55 HD",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock A785GM-LE/128M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "MSI 880GM-E43",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JMA3-785GP-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS A750GM-M (V7.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TA880GB+",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P7Q57-M DO/CSM",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H55-G43",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TPOWER i55",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Biostar H55A+",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TA790GXB3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "MSI Big Bang Trinergy",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock K10N78D",
    "price": null,
    "socket": "AM2+/AM2",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn A88GMV",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Biostar H55 HD",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS H57H-MUS(1.0A)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A880GM-AD3 (V1.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JHZ03-GT-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TH55B HD",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn A74ML-K 3.0",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS X58B-A3 SLI (V1.0)",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "Biostar TA785GE 128M",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TA870+",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Big Bang Fuzion",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JNC84E-LF",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock H55M-GE",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock H55DE3",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn P55A-S",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar T5 XE",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "ASRock H55M/USB3 R2.0",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS H55H-I",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "ECS P55H-CM (V1.0)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus Sabertooth 55i",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Jetway JXBLUE-77A4-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JM26GT4-A-LF",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar A785GE",
    "price": null,
    "socket": "AM3/AM2+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JPA76GM5D3-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Foxconn Cinema Premium",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Zotac H55ITX-C-E",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Jetway JHA12-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn A9DA",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS IC780M-A2 (V1.0A)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A880GM-M7 (V2.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS IC890GXM-A (V1.1)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock 760GM-GS3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 880GMH/USB3 R2.0",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-H67MA-UD2H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-P67A-UD3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-P67A-UD3P",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-P67A-UD5",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-P67A-UD7",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H67MA-EA45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MA-EA43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MA-EA33",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "MSI H67MA-ED55",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-GD55",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI P67A-C45",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DP67BA",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H67MS-E43",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH67XE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 870A-G55",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS P67H2-A Hydra",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ECS P67H2-A",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ECS P67H2-A4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS P67H2-A2 SLI",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ECS H67H2-A3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS H67H2-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ECS H67H2-M3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / White"
  },
  {
    "name": "ECS H67H2-M2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "ECS H67H2-M4",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS H67H2-I",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock P67 Professional",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M-GE",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway HI08",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway MIH67M-HU3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 760GM-P33",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 760GM-P35",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Red / Black"
  },
  {
    "name": "MSI 880G-E45",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 880GMA-E55",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock Fatal1ty P67 Professional",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 870A Fuzion Power Edition",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A880GU3",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "MSI 890FXA-GD65",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn H67A-S",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI 880GM-P51",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TP55",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Multicolor"
  },
  {
    "name": "Foxconn Inferno Katana",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI X58A-GD65",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A890GXM-A(2.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A880GM-M6(1.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TA785G3+",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte G1.Sniper",
    "price": null,
    "socket": "LGA1366",
    "form_factor": "ATX",
    "max_memory": 24,
    "memory_slots": 6,
    "color": null
  },
  {
    "name": "Biostar TH55XERCH",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 880GM-E35",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar A880G+RCH",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TA890GXERCH",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MA-E35 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H55H-CM",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-H67MA-UD2H-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H67-M LE (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P8H67-M EVO (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8P67 (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8P67 LE (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8P67 Deluxe (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 880GMA-E35",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67-M PRO/CSM (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M-ITX/HT",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8H67-M LX (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus P8P67-M (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H67MS-E43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H67N-USB3-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "ASRock P67 Extreme6 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-P67A-UD7-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock P67 Pro3 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Gigabyte GA-P67A-UD5-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus Sabertooth P67 (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TA880GU3+",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI 880GMS-E35",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock P67 Extreme 4 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 870S-G46",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 890GX Pro3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DP67DEB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 870A-G46",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI NF725GM-P43",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH67B",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar A870U3",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JMA3-880GTV2-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock H67M-GE/HT (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8P67 PRO (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H67M-GE (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JHZ03-GT-V2-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS P67H2-A2 SLI (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Sapphire PURE Black P67",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI PH67S-C43 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock 890FX Deluxe5",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Jetway JMA760TMHG-V2-LF",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar H67MH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Intel DH67CFB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Blue"
  },
  {
    "name": "MSI E350IA-E45",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS TIGD-CI3(1.0)",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus AT5NM10-I",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock AD525PV3",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock E350M1/USB3",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac NM10-A-E",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn AHD1S-K",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Foxconn D52S",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Sapphire PURE Fusion Mini E350",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Sapphire Pure White Fusion E350",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus AT5IONT-I",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS HDC-I2(1.0)",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Zotac IONITX-T-U",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Gigabyte GA-Z68X-UD7-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z68X-UD3P-B3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "MSI Z68MA-ED55 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Intel D510MO",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Asus E35M1-I DELUXE",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A880LM-M(1.0)",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus M4A785T-M",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS H67H2-M2(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Intel DP67BAB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Zotac IONITX-S-E",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI NF725GM-P31",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TForce 590 SLI Deluxe",
    "price": null,
    "socket": "AM2",
    "form_factor": "ATX",
    "max_memory": 4,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar TH67A+",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Biostar TZ68A+RCH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Zotac IONITX-K-E",
    "price": null,
    "socket": "Integrated Atom 330",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Biostar A870",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI H61M-P21 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH61 ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Zotac FUSION350-A-E",
    "price": null,
    "socket": "Integrated E-Series E-350",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar TA75M+",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-A75-UD4H",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Biostar A880GB+",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus F1A75-M",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A75F-M2",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock P67 Transformer (B3)",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus AT5NM10T-I",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus P8Q67-M DO/CSM (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "EVGA 160-SB-E679-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock A75M",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock A75 Pro4",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "EVGA 160-SB-E679-K2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus P8P67 (REV 3.1)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock A75 Pro4-M",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI 970A-G45",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TA75M+RCH",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A75F-A",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "MSI 880GMA-E35 (FX)",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Asus Crosshair V Formula/Thunderbolt",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus F1A75-V EVO",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TH61ITX+RCH",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Biostar TA785G3HD",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus P8H67-V (REV 3.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JNC94FL-510-LF",
    "price": null,
    "socket": "Integrated Atom D510",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock Z68M/USB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JA76MG2",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock A785GM-LE",
    "price": null,
    "socket": "AM3/AM2+/AM2",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Multicolor"
  },
  {
    "name": "Gigabyte G1.SNIPER2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "EVGA 160-SB-E689-KR",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "EVGA 160-SB-E689-K2",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "EATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Gigabyte GA-A55M-S2V",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Blue / White"
  },
  {
    "name": "Biostar A75MH",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JTA75MG",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock 870iCafe R2.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "MSI Z68A-GD55 (G3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar H61MLC",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JTN68M",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JTI61AG3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JNF96FL-525-LF",
    "price": null,
    "socket": "Integrated Atom D525",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus F1A75-M PRO/CSM",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Zotac A75ITX-A-E",
    "price": null,
    "socket": "FM1",
    "form_factor": "Mini ITX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS A55F-M2(1.0A)",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ECS X79R-AX(1.0)",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn Rattler",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Foxconn Z68A-S",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI H61MA-E35 (B3)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "EVGA 151-SE-E779-KR",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "XL ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JHA16-ULTRA",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JTIZ68MG",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Jetway JTI61M5",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JTA88MG",
    "price": null,
    "socket": "AM3",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JNC9KDL-2700",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock 770iCafe",
    "price": null,
    "socket": "AM3+/AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock 880GM-LE FX",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DB65ALB3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn D250S",
    "price": null,
    "socket": "Integrated Atom D2500",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue / Silver"
  },
  {
    "name": "Foxconn D270S",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Blue / Silver"
  },
  {
    "name": "Biostar A55MLV",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Jetway JNF9D-2700",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ASRock 970DE3/U3S3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar TZ77B",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ECS Z77H2-A2X DELUXE(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Foxconn H55A",
    "price": null,
    "socket": "LGA1156",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Asus M4A88T-V EVO",
    "price": null,
    "socket": "AM3",
    "form_factor": "ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn A75A",
    "price": null,
    "socket": "FM1",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS A75F-M",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock H77M-ITX",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock H77 Pro4-M",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock AD2700-ITX",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS Golden Z77H2-AX(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ECS Golden Z77H2-A2X(1.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Biostar A960G+",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS CDC-M/D2500",
    "price": null,
    "socket": "Integrated Atom D2500",
    "form_factor": "Micro ATX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-B75M-D3P",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "Gigabyte GA-Q77M-D2H",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Blue / White"
  },
  {
    "name": "EVGA 132-SE-E775-K2",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "EVGA 151-SE-E777-K2",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Intel D2700MUD",
    "price": null,
    "socket": "Integrated Atom D2700",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Green / Black"
  },
  {
    "name": "Biostar BIB75-AHB",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS Z77H2-A3(1.2)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Jetway JNAF93-Q77",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "Jetway JNMF93-Q77",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS A990FXM-A DELUXE(1.0)",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ECS CDC-I/D2500(1.0)",
    "price": null,
    "socket": "Integrated Atom D2500",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ECS A960M-M3",
    "price": null,
    "socket": "AM3+",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Jetway JTA55M1",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 8,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Jetway JMIH67M-HU3",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "Intel DZ77GAL-70K",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Foxconn A55MX",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus F1A55-M LX3",
    "price": null,
    "socket": "FM1",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Intel DB65AL",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock FM2A75M-DGS",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock FM2A75 Pro4",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "ASRock FM2A55M-DGS",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Biostar Hi-Fi A85W",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar TA75MH2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus F2A55-M LE",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A75F2-M2(1.0A)",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock FM2A75M-ITX",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "ASRock FM2A85X Extreme4",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte GA-F2A85X-D3H",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar A55MD2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ECS Z77H2-A2X DELUXE(V2.0)",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "ECS A75F2-A2(1.0)",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Asus F2A85-V",
    "price": null,
    "socket": "FM2",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A970M-A DELUXE v1.0",
    "price": null,
    "socket": "AM3+",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ECS Z77H2-A4 v1.1",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Biostar A55ML2",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "ASRock FM2A75M-ITX R2.0",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B75M-GL R2.0",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ECS X79R-AX (V1.0x)",
    "price": null,
    "socket": "LGA2011",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gray"
  },
  {
    "name": "Asus P8Z77-V PRO/THNDRBLT",
    "price": null,
    "socket": "LGA1155",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "ECS A55F2-M4(1.0)",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Gray"
  },
  {
    "name": "ASRock FM2A75M-DGS R2.0",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z87 Extreme9/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock Z87 OC Formula/ac",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "EATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "ECS Z87H3-A2X GOLDEN",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ECS Z87H3-A2X EXTREME",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "Asus A55M-A/USB3",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ASRock C226WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Brown / Black"
  },
  {
    "name": "Zotac A75ITX-B-E",
    "price": null,
    "socket": "FM2",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "Foxconn H87MX-D",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "Zotac H87ITX-A-E",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "ASRock FM2A55M-DGS R2.0",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus A55M-A",
    "price": null,
    "socket": "FM2",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": null
  },
  {
    "name": "ECS Z87H3-AX GOLDEN (1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": null
  },
  {
    "name": "ASRock AD2550R/U3S3",
    "price": null,
    "socket": "Integrated Atom D2550",
    "form_factor": "Mini ITX",
    "max_memory": 4,
    "memory_slots": 2,
    "color": "Black / Green"
  },
  {
    "name": "MSI A55M-E33",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS Z87H3-A3X",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock FM2A75M-HD+",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar A88M",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z87I-Pro",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI A55M-E35",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "MSI H87I AC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI A88XI AC",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Gigabyte GA-Z97X-SOC FORCE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Biostar Hi-Fi B85N 3D",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Mini ITX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "Biostar H81MHC",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Red"
  },
  {
    "name": "Asus Z97-WS",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Asus Z97-DELUXE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "ASRock AM1B-MDH",
    "price": null,
    "socket": "AM1",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "MSI H97M Eco",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "MSI B85M Eco",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "ECS Z97-PK (V1.0)",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "White / Gray"
  },
  {
    "name": "ASRock FM2A88M-HD+_R2.0",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar J1900MH2",
    "price": null,
    "socket": "Integrated Celeron J1900",
    "form_factor": "Micro ATX",
    "max_memory": 16,
    "memory_slots": 2,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI Z87 MPOWER-R",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Yellow"
  },
  {
    "name": "MSI A78M-E45 V2",
    "price": null,
    "socket": "FM2+",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Blue"
  },
  {
    "name": "Gigabyte GA-H97M-DS3P",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "ASRock Z170M Pro4",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "ASRock E3C224-V4L",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock E3C224D4M-16RE",
    "price": null,
    "socket": "LGA1150",
    "form_factor": "ATX",
    "max_memory": 32,
    "memory_slots": 4,
    "color": "Green / Blue"
  },
  {
    "name": "ASRock Fatal1ty B150 Gaming K4/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "ASRock B150M Pro4S/D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Asus B150-PRO D3",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Gold"
  },
  {
    "name": "Supermicro MBD-C7H170-M-O",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Red"
  },
  {
    "name": "MSI Z170A KRAIT GAMING R6 SIEGE",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus E3-PRO V5",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / White"
  },
  {
    "name": "Asus P10S-I",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Blue"
  },
  {
    "name": "ECS H110I-C4P",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Mini ITX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "ASRock B150M-DVS R2.0",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Orange"
  },
  {
    "name": "Biostar Hi-Fi B350S1",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte GA-Z270X-Gaming SOC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Orange"
  },
  {
    "name": "Supermicro C7Z270-CG",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Black / Green"
  },
  {
    "name": "Supermicro X11SCM-F",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 4,
    "color": "Green / Silver"
  },
  {
    "name": "ASRock H410M-HDVP",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Supermicro C9X299-PG300",
    "price": null,
    "socket": "LGA2066",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 8,
    "color": "Black"
  },
  {
    "name": "Biostar X470MH",
    "price": null,
    "socket": "AM4",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H510M-D/CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-H610M-V3 D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte B660M POWER DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B250MHC",
    "price": null,
    "socket": "LGA1151",
    "form_factor": "Micro ATX",
    "max_memory": 32,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B660M-SILVER",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Silver / Black"
  },
  {
    "name": "Gigabyte H610M HD3P (rev. 2.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Gigabyte B660M AORUS ELITE DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black"
  },
  {
    "name": "Asus PRIME H610M-F D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black / Silver"
  },
  {
    "name": "Asus EX-B760M-V5 D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Gigabyte B760 AORUS ELITE DDR4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "ATX",
    "max_memory": 128,
    "memory_slots": 4,
    "color": "Black / Silver"
  },
  {
    "name": "Biostar B560MHP",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Biostar B760MH D4",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Asus EX-B760M-V5-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 96,
    "memory_slots": 2,
    "color": "Red / Black"
  },
  {
    "name": "Asus PRIME H510M-A R2.0-CSM",
    "price": null,
    "socket": "LGA1200",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Silver / Black"
  },
  {
    "name": "Biostar H610MS",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Brown / Black"
  },
  {
    "name": "Asus PRIME B760M-F D4-CSM",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  },
  {
    "name": "Gigabyte B660M K DDR4 (rev. 1.0)",
    "price": null,
    "socket": "LGA1700",
    "form_factor": "Micro ATX",
    "max_memory": 64,
    "memory_slots": 2,
    "color": "Black"
  }
];