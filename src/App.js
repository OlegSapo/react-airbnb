//підключаємо компонент загальної сторінки
import Page from "./component/page";

//підключаємо компонент header
import Header from "./component/header";

//підключаємо компонент Title
import Title from "./component/title";

//підключаємо компонент Photo
import Photo from "./component/photo";

//підключаємо компонент Price
import Price from "./component/price";

//підключаємо компонент RoomList
import RoomList from "./component/room-list";

//підключаємо компонент Details
import Details from "./component/details";

//підключаємо компонент Description
import Description from "./component/description";

//підключаємо компонент Amenities
import Amenities from "./component/amenities";

//підключаємо компонент Contact
import Contact from "./component/contact";

//підключаємо компонент Additional
import Additional from "./component/additional";

//підключаємо компонент Reviews
import Reviews from "./component/reviews";

//підключаємо компонент Attractions
import Attractions from "./component/attractions";

//головний компонент
function App() {
  const data = {
    listing_name: "Іст-Сайд Біл",
    reviews_summary: {
      average_rating: 4.9,
      total_reviews: 190,
    },
    location: {
      city: "Остін, Техас",
      country: "Сполучені Штати",
    },
    superhost: true,

    image: "https://picsum.photos/1000/1000",

    price: {
      original_price: 308,
      discounted_price: 218,
      currency: "$",
      cleaning_fee: 90,
      service_fee: 200,
    },
    availability: {
      checkin_date: "9/6/2023",
      checkout_date: "9/11/2023",
    },

    roomTypes: [
      {
        id: 5313,
        type: "Deluxe Room",
        pricePerNight: 300,
        currency: "$",
        capacity: 2,
      },
      {
        id: 6264,
        type: "Suite",
        pricePerNight: 500,
        currency: "$",
        capacity: 4,
      },
      {
        id: 7332,
        type: "Presidential",
        pricePerNight: 1000,
        currency: "$",
        capacity: 6,
      },
    ],

    description:
      "Насолоджуйтеся цим чистим, сучасним котеджем, розташованим у затишному, але зручному районі Центрально-Східного Остіна. Натхненний японськими чайними будинками, цей котедж на задньому дворі забезпечує легкий доступ до місць проведення SXSW, фестивалю ACL, центру міста, чудових ресторанів та громадського транспорту, а також пропонує спокійний відпочинок для відпочинку та зарядки.",

    property_details: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },

    neighborhood_info: "Район чарівний, веселий, безпечний і милий...",

    amenities: {
      hasPool: true,
      hasGym: false,
      hasFreeBreakfast: true,
      hasFreeWiFi: true,
      hasParking: false,
      hasPetsAllowed: false,
      hasAirportShuttle: true,
      hasConciergeService: true,
      hasRoomService: false,
      hasChildFriendly: true,
    },

    contact_info: {
      name: "Kerthy",
      image: "https://picsum.photos/80/80",
      response_rate: 100,
      response_time: "Протягом години",
      info: "Я кінорежисерка і телевізійний продюсер Остіна-Брукліна, якого можна знайти на велосипеді до Фермерського ринку...",
      phone: "+123-456-7890",
    },

    additional_properties: {
      house_rules:
        "Паління та домашні тварини заборонені. Тиша з 22:00 до 7:00.",
      cancellation_policy:
        "Гнучка політика скасування з повним поверненням коштів у разі скасування за 7 днів до заїзду.",
      local_transportation:
        "Громадські автобуси та таксі в межах пішої досяжності.",
      host_languages: ["Англійська", "іспанська"],
      special_offers: "Знижка 10% при бронюванні від 7 ночей.",
      checkin_instructions:
        "Час реєстрації - 15:00. Будь ласка, зв'яжіться з нами заздалегідь, повідомте орієнтовний час свого прибуття.",
    },

    guestReviews: [
      {
        id: 43454,
        guestName: "Alice Johnson",
        rating: 5,
        review:
          "Amazing experience! The staff was very friendly and the facilities were top-notch.",
      },
      {
        id: 75543,
        guestName: "Bob Smith",
        rating: 4,
        review:
          "Great location and beautiful views. However, the prices at the restaurant were a bit high.",
      },
      {
        id: 55431,
        guestName: "Eve Williams",
        rating: 5,
        review:
          "Absolutely loved the spa treatments. It was a relaxing and rejuvenating stay.",
      },
    ],

    nearbyAttractions: [
      {
        id: 453,
        name: "Crystal Clear Beach",
        link: "www.test.com",
      },
      {
        id: 741,
        name: "Tropical Rainforest Hiking Trails",
        link: "www.test.com",
      },
      {
        id: 422,
        name: "Island Waterfalls",
        link: "www.test.com",
      },
      {
        id: 876,
        name: "Cultural Village Tours",
        link: "www.test.com",
      },
    ],
  };

  return (
    <Page>
      {/* відображаємо компонент Logo */}
      <Header />
      {/* відображаємо компонент Title та передаємо в нього потрібні дані  */}
      <Title
        id1={true}
        title={data.listing_name}
        rating={data.reviews_summary.average_rating}
        review={data.reviews_summary.total_reviews}
        city={data.location.city}
        country={data.location.country}
        superhost={data.superhost}
      />
      {/* відображаємо компонент Photo  */}
      <Photo src={data.image} name={data.listing_name} />
      {/* відображаємо компонент Price  */}
      <Price
        price={data.price.original_price}
        discount={data.price.discounted_price}
        currency={data.price.currency}
        cleaning={data.price.cleaning_fee}
        service={data.price.service_fee}
        checkin={data.availability.checkin_date}
        checkout={data.availability.checkout_date}
      />
      {/* відображаємо компонент RoomList  */}
      <RoomList list={data.roomTypes} />
      {/* відображаємо компонент Description  */}
      <Description title="Опис" children={data.description} />
      {/* відображаємо компонент Details  */}
      <Details
        guests={data.property_details.guests}
        bedrooms={data.property_details.bedrooms}
        beds={data.property_details.beds}
        baths={data.property_details.baths}
      />
      {/* відображаємо компонент Description  */}
      <Description title="Про сусідів" children={data.neighborhood_info} />
      {/* відображаємо компонент Details  */}
      <Amenities
        hasPool={data.amenities.hasPool}
        hasGym={data.amenities.hasGym}
        hasFreeBreakfast={data.amenities.hasFreeBreakfast}
        hasFreeWiFi={data.amenities.hasFreeWiFi}
        hasParking={data.amenities.hasParking}
        hasPetsAllowed={data.amenities.hasPetsAllowed}
        hasAirportShuttle={data.amenities.hasAirportShuttle}
        hasConciergeService={data.amenities.hasConciergeService}
        hasRoomService={data.amenities.hasRoomService}
        hasChildFriendly={data.amenities.hasChildFriendly}
      />
      {/* відображаємо компонент Details  */}
      <Contact
        contctname={data.contact_info.name}
        image={data.contact_info.image}
        rate={data.contact_info.response_rate}
        time={data.contact_info.response_time}
        info={data.contact_info.info}
        phone={data.contact_info.phone}
      />
      {/* відображаємо компонент Additional  */}
      <Additional
        rules={data.additional_properties.house_rules}
        policy={data.additional_properties.cancellation_policy}
        transportation={data.additional_properties.local_transportation}
        languages={data.additional_properties.host_languages}
        offers={data.additional_properties.special_offers}
        instructions={data.additional_properties.checkin_instructions}
      />
      {/* відображаємо компонент Reviews  */}
      <Reviews reviews={data.guestReviews} />
      {/* відображаємо компонент Attractions  */}
      <Attractions attractions={data.nearbyAttractions} />
    </Page>
  );
}

export default App;
