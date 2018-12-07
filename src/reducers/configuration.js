import { ADD_ITEM, REMOVE_ITEM } from '../actions';

import bulkBroz from '../assets/images/products/bulkbroz.jpeg';
import soundCloud from '../assets/images/products/soundcloud.jpeg';
import igModel from '../assets/images/products/igmodel.jpeg';
import szaDel from '../assets/images/products/szadel.jpeg';
import lilTekashi from '../assets/images/products/liltekashi.jpeg';
import cannithusiast from '../assets/images/products/cannithusiast.jpeg';
import vapeLife from '../assets/images/products/vapeislife.jpeg';
import ninties from '../assets/images/products/90roman.jpeg';
import ptStudent from '../assets/images/products/ptstudent.jpeg';
import sageCrystals from '../assets/images/products/sagecrystals.jpeg';
import copicGrad from '../assets/images/products/copicGrad.jpeg';
import postModern from '../assets/images/products/postmodern.jpeg';
import florWar from '../assets/images/products/florescentwar.jpeg';
import gentrified from '../assets/images/products/compton.jpeg';
import millenPink from '../assets/images/products/millpink.jpeg';
import unicornHang from '../assets/images/products/unicornhangover.jpeg';
import plantBased from '../assets/images/products/plantbased.jpeg';
import nippon from '../assets/images/products/nippon.jpeg';

const INITIAL_STATE = {
  data: [],
  itemCount: 0,
  items: [
    {
      img: bulkBroz,
      title: 'Bulk Broz',
      price: 9.99,
      description: `Are you addicted to taking pre-workout with dangerously high doses of caffeine and various illegal stimulants? Obsessed with working out your chest and biceps? Do you often forget to hit legs due to your upper body obsession? Do you look at treadmills with disdain and aim to eat at least 2500 calories in protein powder and donuts? We have a feeling this might be the vibe for you.`,
      quantity: 0,
      category: 'Masc',
    },
    {
      img: soundCloud,
      title: 'Soundcloud Rapper',
      price: 9.99,
      description: `Send your soundcloud link to all of your followers in hopes that they don't report you for spam, dye the tips of your dreads teal as soon as they lock, and tattoo as much ink on your face as possible to prevent yourself from ever considering backing out of this dream for a much hated 9 to 5 job. Or, come see us to cop this vibe, and save yourself some time.`,
      quantity: 0,
      category: 'Masc',
    },
    {
      img: igModel,
      title: 'Instagram Model',
      price: 9.99,
      description: `Inspired by everyone's favorite modeling platform. Rev up those surgery engines and fire up those DIY videos, because you're going to be more beautiful than you ever thought was humanly possible in real life.`,
      quantity: 0,
      category: 'Femme',
    },
    {
      img: szaDel,
      title: 'SZA Del Baraz',
      price: 9.99,
      description: `We believe in your ability to journey deep within yourself and find those airy, indie, "unique" vocals reminiscent of our favorite neo rhythm and soul-ers who enjoy avacahdies and banahnies.`,
      quantity: 0,
      category: 'Femme',
    },
    {
      img: lilTekashi,
      title: 'Lil Tekashi Uzi',
      price: 9.99,
      description: `If you loved SZA Del Baraz, you'll thoroughly enjoy the well-known counterpart of her: the mumble wrapping paper of vibes. Have fun deciphering intellectual conversation pieces from this one.`,
      quantity: 0,
      category: 'Masc',
    },
    {
      img: cannithusiast,
      title: 'Cannabis Enthusiast',
      price: 9.99,
      description: `Embrace all the different shades of this green vibe, featuring Ozone and BluntPower spray, leaves and papers, bowls and pipes, and fantastic tours of privileged farmers curating the highest quality of bud you can feast your red eyes on. We know, we know...you prefer edibles. There's plenty of vibes for everyone.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: vapeLife,
      title: 'Vape is Life',
      price: 9.99,
      description: `No matter how tough things get, you'll never regret dropping 300 dollars of your rent money on that vape of yours, because you can practically smoke anywhere--except when you blow that particularly weird smelling oil that creeps people out around you. No matter, as long as you can keep blowing those Os while absorbing 5 times the amount of nicotine you'd normally intake with a cigarette. Not that it makes it a better alternative. By all means, run the tobacco industry out of business for us all with this vibe.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: ninties,
      title: 'Ninties Romanticism',
      price: 9.99,
      description: `Despite hardly remembering, experiencing, or for some of you, ever being born within the remarkable decade that was the 1990s, your obsession with grunge fashion, the early conception of the internet and 90s anime has become a marketable phenomenon. Your blissful ignorance of the wars, scandals and the mourned end of an era of inexpensive gasoline still finds you interested in thrifting for swishy sweat suits and binge watching indie films featuring 12 year olds navigating major cities without adult supervision, filmed with cool camera filters that make footage appear aged.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: ptStudent,
      title: 'Post Traumatic Student Loans',
      price: 9.99,
      description: `Boy, is this a big one. Let's try a questionnaire. Were your parents unaware of how much more college tuition costs today than it did thirty years ago? Did you sign up to incur tens of thousands of dollars of debt at the barely legal age of 18? Did you graduate, only to be incapable of finding work that pays enough to pay back your debt? Did you succumb to alcoholism as a result of realizing you'll be in debt to the government and/or Sallie Mae for the rest of your life? Join the club, family. Get some therapy along with this vibe.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: sageCrystals,
      title: 'Sage and Crystals',
      price: 9.99,
      description: `This one has the potential to be exploited just as much as anything else that exists in our society.`,
      quantity: 0,
      category: 'Femme',
    },
    {
      img: copicGrad,
      title: 'Copic Gradients',
      price: 9.99,
      description: `We love gradients. Who doesn't love gradients? We sure love gradients. What's even cooler is that they can even occur in nature. Who would've thought? Nevertheless, enhance your copic marker swag with this vibe.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: postModern,
      title: 'Post Modern Pastels',
      price: 9.99,
      description: `If you want to consider yourself even remotely close to being an alternative photographer or fashion blogger, you've got to have a little pastel in almost every photo and article of clothing you own. Because it's spring time year around.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: florWar,
      title: 'Florescent War Crimes',
      price: 9.99,
      description: `Take pride in your ability to blissfully ignore the criminal activity of the federal government in your country by adding that florescent light touch to each of your vibey photography of your cat cleaning itself.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: gentrified,
      title: `Gentrified Compton`,
      price: 9.99,
      description: `Because we all know they're next in line. You know, one day you look up and see bike rentals, salad bars and flavored mayonnaise shops pop up, and the next day your rent is three times higher than you can afford and you're forced out of your neighborhood your family has lived in for generations. Fun times.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: millenPink,
      title: 'Millenial Pink',
      price: 9.99,
      description: `It's basically pastel rose. But you know, those darn Millenials, always coming up with their own colors. How old are they anyway?`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: unicornHang,
      title: 'Unicorn Hangover',
      price: 9.99,
      description: `What makes someone a unicorn? Well, that definitely depends on the context of the conversation. We're going to go with a this guy in the photo.`,
      quantity: 0,
      category: 'Non-Binary',
    },
    {
      img: plantBased,
      title: 'Plant Based Craft Beer',
      price: 9.99,
      description: `We love beer. Who doesn't love IPAs and fancy flavored home brews? And for your vegan friends in particular, we have a sure fire way of ensuring that there are absolutely no animal byproducts involved in the process of brewing. Just don't piss them off by eating chicken tenders to soak up 5 bottles of this vibe.`,
      quantity: 0,
      category: 'Masc',
    },
    {
      img: nippon,
      title: 'Nipponjin',
      price: 9.99,
      description: `Time for another questionnaire. Are you obsessed with Japanese culture, despite having never been there a day in your life? Did you learn how to speak conversational Japanese by watching anime? Do women from your country repulse you, frankly because they aren't Japanese? Well, sounds like your pretty Japanese.`,
      quantity: 0,
      category: 'Masc',
    },
  ],
  cart: [],
};

export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;

      const add =
        state.cart.indexOf(action.item) !== -1
          ? state.cart.map(item => (item.title === action.item.title ? (item = action.item) : item))
          : [...state.cart, action.item];

      const addCount = add.map(item => item.quantity).reduce((a, v) => a + v);

      return {
        ...state,
        itemCount: addCount,
        cart: [...add],
      };
    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;

      const remove = state.cart
        .map(item => (item.title === action.item.title ? (item = action.item) : item))
        .filter(item => item.quantity > 0);

      const remCount =
        remove.length > 0 ? remove.map(item => item.quantity).reduce((a, v) => a + v) : 0;

      return {
        ...state,
        itemCount: remCount,
        cart: [...remove],
      };
    default:
      return state;
  }
};
