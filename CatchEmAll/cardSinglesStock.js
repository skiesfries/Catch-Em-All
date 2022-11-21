import pokemon from 'pokemontcgsdk';

pokemon.configure({apiKey: 'd4e6d2e8-a313-47e9-a697-df62ff54cfec'})


pokemon.card.find('base1-4')
.then(card => {
    const newCard = //sanity card doc creation
    {
      _id: card.id,
      _type:'cardSingles',
      image: card.images.large,
      name: card.name,
      set: card.set,
      cardNumber: card.number
    }
   
    
    sanity.createIfNotExists(newCard)
})