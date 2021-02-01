const express = require('express');
const router = express.Router();

const wines = [
  {
    id: 1,
    name: 'Domaine de la Butte La Pied de la Butte',
    imageUrl: 'assets/images/wine1.jpg',
    price: 19.95,
    foodPairing: [
      {
        name: 'Embutidos',
        glutten: false,
        kcal: 600,
        vegan: false
      },
      {
        name: 'Patés',
        glutten: false,
        kcal: 200,
        vegan: false
      }
    ],
    isOnSale: false,
    quantityInCart: 0
  },
  {
    id: 2,
    name: 'Lolo',
    imageUrl: 'assets/images/wine2.jpg',
    price: 6.15,
    foodPairing: [
      {
        name: 'Arroces caldosos',
        glutten: true,
        kcal: 455,
        vegan: true
      },
      {
        name: 'Arroces de pescado',
        glutten: true,
        kcal: 564,
        vegan: false
      }
    ],
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 3,
    name: 'Pago de Carraovejas',
    imageUrl: 'assets/images/wine3.jpg',
    price: 31.9,
    foodPairing: [
      {
        name: 'Carnes rojas asadas',
        glutten: false,
        kcal: 532,
        vegan: false
      },
      {
        name: 'Quesos curados',
        glutten: false,
        kcal: 330,
        vegan: true
      }
    ],
    isOnSale: false,
    quantityInCart: 0
  }
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundWines = wines.filter(
      ({ name }) => name.toLowerCase().indexOf(query) !== -1
    );
    return res.status(200).json(foundWines);
  }
  return res.status(200).json(wines);
});

router.get('/:code', (req, res) => {
  let wineCode = req.params.code;
  console.log ( wineCode )
  let foundWine = wines.find(each => each.id == wineCode);
  console.log(foundWine);
  if (foundWine) {
    return res.status(200).json(foundWine);
  }
  return res.status(400).json({msg: 'Wine with code ' + wineCode + ' not found!'});
});


router.post('/', (req, res) => {
  let wine = req.body;

  if (wine.id) {
    return res
      .status(400)
      .json({ msg: 'Wine seems to already have an id assigned' });
  }

  wine.id = wines.length + 1;
  wine.quantityInCart = 0;
  wines.push(wine);
  return res.status(200).json(wine);
});

router.patch('/:id', (req, res) => {
  const wineId = req.params.id;
  const foundWine = wines.find(({ id }) => id == wineId);
  if (foundWine) {
    const changeInQuantity = req.body.changeInQuantity;
    foundWine.quantityInCart += changeInQuantity;
    return res.status(200).json({ msg: 'Successfully updated cart' });
  }
  return res
    .status(400)
    .json({ msg: 'Wine with id ' + wineId + ' not found.' });
});

module.exports = router;
