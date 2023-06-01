type Animal = {
  id: number;
  favorited: boolen;
  primary_photo_cropped: {
    full: string,
    large: string,
    medium: string,
    small: string
 } | null;
 url: string,
  age: string,
  breeds: {
    mixed: boolean,
    primary: string,
    secondary: string,
    unknown: boolean
  },
  contact: {
    address: {
      address1: string,
      address2: string,
      city: string,
      country: string,
      postcode: string,
      state: string
    }
    email: string,
    phone: string
  }
  description: string,
  gender: string,
  name: string,
  size: string,
  species: string,
  type: string,
  status: string,
  attributes: {
    house_trained: boolean,
    spayed_neutered: boolean,
    shots_current: boolean,
  },
  photos: [{
    0: {
      small: string,
    }

  }
  ]
};

export { Animal, EventHandler };