import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'paveena',
      email: 'andee@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'andee',
      email: 'paveena@gmail.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Corsair 4000D Airflow',
      price: 104.99,
      type: 'ATX Mid Tower',
      color: 'Black',
      psu: null,
      side_panel: 'Tinted Tempered Glass',
      countInStock: 1000000,
      internal_35_bays: 2,
      slug: 'sorry-idk',
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
    },
    {
      name: 'NZXT H5 Flow',
      price: 94.99,
      type: 'ATX Mid Tower',
      color: 'Black',
      psu: null,
      side_panel: 'Tempered Glass',
      countInStock: 100000000,
      internal_35_bays: 1,
      slug: 'sorry',
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
    },
    {
      name: 'NZXT H9 Flow',
      price: 159.99,
      slug: 'ATX Mid Tower',
      color: 'White',
      psu: null,
      side_panel: 'Tempered Glass',
      external_volume: 66.9,
      countInStock: 10000000,
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
    },
  ],
}

export default data
