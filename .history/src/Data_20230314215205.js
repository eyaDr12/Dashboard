

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);










export const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  export const userRows = [
    {
      id: 1,
      fname: "Ahmed",
      lname: " Aidi",
      email: "Ahmedaidi@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 2,
      fname: "firas",
      lname: " korbi",
      email: "jon@gmail.com",
          PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 3,
      fname: "feres",
      lname: " ben ali",
      email: "benaliferes@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 4,
      fname: "mourad",
      lname: " gargouri",
      email: "mouradgargouri@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 5,
      fname: "issa",
      lname: " drissi",
      email: "issadrissi@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 6,
      fname: "kacem",
      lname: " cherif",
      email: "kacemcherif@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 7,
      fname: "iheb",
      lname: " mejri",
      email: "ihebmejri@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 8,
      fname: "moataz",
      lname: " agha",
      email: "moatazagha@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 9,
      fname: "rami",
      lname: " heddi",
      email: "ramiheddi@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
    {
      id: 10,
      fname: "ali",
      lname: " fraj",
      email: "alifraj@gmail.com",
           PhoneNumber: "8547962",
      Adress :"Tunis",
    },
  ];

  export const productRows = [
    {
      id: 1,
      name: "Syrup Of Dates",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "8 DT",
    },
    {
      id: 2,
      name: "Forest Honey",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2020/05/orange-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "22.5 DT",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img:
        "https://i1.wp.com/izoguern.com/wp-content/uploads/2019/10/forest-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2020/05/orange-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 5,
      name: "Syrup Of Dates",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "8 DT",
    },
    {
      id: 6,
      name: "Forest Honey",
      img:
        "https://i2.wp.com/izoguern.com/wp-content/uploads/2019/10/thyme-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "22.5 DT",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2020/05/orange-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 8,
      name: "Syrup Of Dates",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "8 DT",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img:
        "https://i2.wp.com/izoguern.com/wp-content/uploads/2019/10/thyme-honey-scaled.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 10,
      name: "Syrup Of Dates",
      img:
        "https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1",
      stock: 123,
      status: "active",
      price: "8 DT",
    },
  ];



  export const OrderRows = [
    {
      id: 1,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "bizert",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 2,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "beja",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 3,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "jandouba",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 4,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "sfax",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 5,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "siliana",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 6,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "tataouin",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 7,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern dates",
      Location: "djerba",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 8,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern dates",
      Location: "sousse",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 9,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern honey",
      Location: "nabeul",
      Transaction: "$120.00",
      Date:'02/01/2023'
    },
    {
      id: 10,
      Username: "Jon Snow",
      Prodimg:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      Prodname: "izoguern dates",
      Location: "hammamet",
      Transaction: "$120.00",
      Date:'02/01/2023'

    },
  ];


  