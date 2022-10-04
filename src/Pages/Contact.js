import React from "react";

function Contact() {
  return (
    // eslint-disable-next-line
    <div className="text-white grid md:grid-cols-2 select-none">
      <div className="order-2 md:order-1 mb-8 md:mb-0">
        <iframe title="google_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.031498187902!2d72.85183461846337!3d19.06339139250735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b86ea1b%3A0xce7eea4b1bbdf296!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1664913081932!5m2!1sen!2sin"
          className="m-10 w-3/4 h-3/4 rounded-3xl"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col ">
        <div className="m-10">
          <h1 className="font-bold text-lg">FoodKa's Customer Care Number </h1>
          <p>1800-208-1234</p>
        </div>
        <div className="m-10">
          <h1 className="font-bold text-lg">FoodKa's Contact Address</h1>
          <p>
            FoodKa's India, Tower-D, Plot No. 5, <br />
            5th Floor, Logix Techno Park,
            <br />
            Sector 127, BKC - 401304, Mumbai.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
