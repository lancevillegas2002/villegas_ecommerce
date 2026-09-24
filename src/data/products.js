const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 399,
    category: "Clothing",
    stock: 12,
    image: "https://imgs.search.brave.com/5sgku0D5T4PN6DCaaGd3dZollWV0njoYOU_rmbWXoXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vdG9wbnRwL3Rv/cG50cDI0MDUvdG9w/bnRwMjQwNTAwMDA1/LzIzMDA5NjU3MS1o/YW5naW5nLXdoaXRl/LXNoaXJ0LXdpdGgt/d29vZC1oYW5nZXIt/b24td2FsbC5qcGc_/dmVyPTY",
    shortDescription: "Simple cotton shirt for everyday wear.",
    description: "A comfortable classic white cotton T-shirt with a relaxed fit. Easy to pair with jeans, shorts, or casual pants."
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: 899,
    category: "Clothing",
    stock: 8,
    image: "https://imgs.search.brave.com/WlCW2Yc3diMJ2PL-NBtPkjgVOyNe2xKu_JRgylZ8xeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzViL2U0/LzViZTQ4ODY0OGRi/OTdlZTdiZDA2MzNi/NzFkYWZmNTcwYTli/ZmQyNTQuanBn",
    shortDescription: "Warm basic hoodie with a front pocket.",
    description: "A soft black hoodie designed for casual everyday use. It includes a drawstring hood and a roomy front pocket."
  },
  {
    id: 3,
    name: "Canvas Backpack",
    price: 749,
    category: "Bags",
    stock: 10,
    image: "https://imgs.search.brave.com/EQhSnwpxSX46hH7tqHaakFtRvnxeZ6jL3VUjBuVJYD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFQNjV6aWMyREwu/anBn",
    shortDescription: "Practical backpack for school or travel.",
    description: "A lightweight canvas backpack with a main compartment and front pocket. Suitable for school, work, or short trips."
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 1299,
    category: "Shoes",
    stock: 7,
    image: "https://imgs.search.brave.com/E9-oivxJUj3t4b-6ahKPOWRO7eEy8WdLUQE_AwwGI7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFXRGxjRmJzR0wu/anBn",
    shortDescription: "Lightweight shoes for daily activities.",
    description: "Comfortable running shoes with a lightweight upper and cushioned sole for walking, exercise, and daily activities."
  },
  {
    id: 5,
    name: "Baseball Cap",
    price: 299,
    category: "Accessories",
    stock: 15,
    image: "https://imgs.search.brave.com/sDO98dcASoPpa7AiltBn_ZRA9a5-g1LhjexkhyOQeQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODA4NTkx/MjYyMDUtMWM1OTNi/YjRmOWU4P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE1YeDhZ/bUZ6WldKaGJHd2xN/akJqWVhCOFpXNThN/SHg4TUh4OGZEQT0",
    shortDescription: "Adjustable cap with a simple design.",
    description: "A basic adjustable baseball cap that provides shade and completes a casual outfit."
  },
  {
    id: 6,
    name: "Digital Watch",
    price: 599,
    category: "Accessories",
    stock: 6,
    image: "https://imgs.search.brave.com/yH4LTT40P7oHQscYTf1DVcoh9BBhiVdtJdh5x5cQWsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDI3NTQxNS9waG90/by9uZXcteW9yay1u/eS1mZWJydWFyeS04/dGgtc2Vpa28td2F0/Y2gtb24tZmVicnVh/cnktOHRoLTE5OTAt/aW4tbmV3LXlvcmst/Y2l0eS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RTZ4dnU2/eTc3ZHFrU0FEcE5i/YnhyNDR3QUlESzUz/VHNvTmQxVlJnXzBY/Yz0",
    shortDescription: "Simple digital watch for everyday use.",
    description: "An easy-to-read digital watch with a comfortable strap and a clean design for everyday use."
  },
  {
    id: 7,
    name: "Denim Jeans",
    price: 999,
    category: "Clothing",
    stock: 9,
    image: "https://imgs.search.brave.com/xXYuLY0Mvepn5zHfSBQQ15LTXHVctHN-Tfg1NTg-LYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NTEyNjI3L3Bob3Rv/L2xldmlzLWplYW5z/LWxhYmVsLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fQ3Iw/UDNJYWN0cFhEbm8w/MmxTNDI4WTJQYWxf/OWJKcUNaREwwMUls/T3hNPQ",
    shortDescription: "Classic straight-fit denim jeans.",
    description: "Straight-fit denim jeans made for casual wear. The simple design makes them easy to match with shirts and sneakers."
  },
  {
    id: 8,
    name: "Sling Bag",
    price: 499,
    category: "Bags",
    stock: 11,
    image: "https://imgs.search.brave.com/A9xh4Vhz0XvLF4Y9gK6om-ukO8wsiRH1-jRkFn4Skgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25j/ZXB0Z2xvYmFsLmNv/L2Nkbi9zaG9wL2Zp/bGVzL0RTQzA5OTgx/LTIuanBnP3Y9MTc4/ODQzNTM4MSZ3aWR0/aD0yMDAw",
    shortDescription: "Compact bag for daily essentials.",
    description: "A compact sling bag with enough room for a phone, wallet, keys, and other small everyday items."
  },
  {
    id: 9,
    name: "Casual Sneakers",
    price: 1099,
    category: "Shoes",
    stock: 5,
    image: "https://imgs.search.brave.com/fySMWl2jBAYowGN_sJ8U3nYc9OXCFyzK76kNzsRGbnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFHRi0rb2xPQ0wu/anBn",
    shortDescription: "Clean sneakers for casual outfits.",
    description: "Versatile casual sneakers with a simple shape and comfortable sole, suitable for school, work, and weekends."
  },
  {
    id: 10,
    name: "Basic Polo Shirt",
    price: 549,
    category: "Clothing",
    stock: 13,
    image: "https://imgs.search.brave.com/aaBd0lnvAq6gSGEfSdOsGUtUk8kaxMa9mP1lyp-G0c8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3dna0FB/ZVN3NndOcWxrSlkv/cy1sOTYwLndlYnA",
    shortDescription: "Neat polo shirt for smart-casual wear.",
    description: "A simple polo shirt with a classic collar and comfortable fabric for school events, work, or casual occasions."
  }
];

export default products;