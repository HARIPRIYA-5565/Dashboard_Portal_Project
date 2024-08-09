import React from 'react';
import NavbarSection from './Navbar';
import PieChartSection from './PieChart';
export default function DashboardSection() {
  const cardData = [
    { number: '4', label: 'Pending Order', image: "/Icons/shoppingBagimgg.png" },
    { number: '0', label: 'Processing Orders', image: "/Icons/barImg.png" },
    { number: '3', label: 'Ready to Deliver ', image: "/Icons/thumbsupImg.png" },
    { number: '0', label: 'Delivered Orders', image: "/Icons/TickImg.png" }
  ];

  return (
    <div>
      <NavbarSection />
      <div>
        <h2 className="text-gray-700 font-semibold text-xl p-4">Dashboard</h2>
        <div className="container mx-auto px-4 py-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="bg-[#17A2B7] px-4 py-8 rounded-sm flex items-center">
                <div className="flex-1 space-y-4">
                  <div className="text-white font-semibold text-2xl">{card.number}</div>
                  <div className="text-white font-normal text-sm">{card.label}</div>
                </div>
                {card.image && (
                  <div>
                    <img src={card.image} alt={card.label} className="w-24 h-24" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
            <div className="md:col-span-3 shadow-md shadow-gray-400 rounded-sm ">
             
                <div className="text-white font-semibold  bg-[#17A2B7] px-4 py-2">Today's Delivery</div>
                <div className="text-white font-normal text-sm py-24"></div>
            </div>
            <div className="md:col-span-1 shadow-md shadow-gray-400 rounded-sm ">
                <div className="text-white font-semibold  bg-[#17A2B7] px-4 py-2">Overview</div>
                <div className='py-4'><PieChartSection/></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
