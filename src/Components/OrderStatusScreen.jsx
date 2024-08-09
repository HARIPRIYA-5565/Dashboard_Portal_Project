import React, { useState } from "react";
import NavbarSection from "./Navbar";

const pendingOrdersData = [
  { name: 'Jeanette Russell', orderNumber: '#ORD-0023' },
  { name: 'Ken Brown', orderNumber: '#ORD-0022' },
  { name: 'Kristin Murray', orderNumber: '#ORD-0020' },
];

const processingData = [
  { name: 'Kristin Murray', orderNumber: '#ORD-0025' },
];

const readyToDeliverData = [
  { name: 'Lynn Hicks', orderNumber: '#ORD-0024' },
  { name: 'Owen Ruiz', orderNumber: '#ORD-0021' },
  { name: 'Catherine Wheeler', orderNumber: '#ORD-0019' },
];

export default function OrderStatusScreen() {
  const [pendingOrders, setPendingOrders] = useState(pendingOrdersData);
  const [processingOrders, setProcessingOrders] = useState(processingData);
  const [readyToDeliverOrders, setReadyToDeliverOrders] = useState(readyToDeliverData);
  const [statusChanged, setStatusChanged] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null);

  const addOrder = (status, order) => {
    switch (status) {
      case 'pending':
        setPendingOrders([...pendingOrders, order]);
        break;
      case 'processing':
        setProcessingOrders([...processingOrders, order]);
        break;
      case 'readyToDeliver':
        setReadyToDeliverOrders([...readyToDeliverOrders, order]);
        break;
      default:
        break;
    }
    setStatusChanged(true);
    setTimeout(() => setStatusChanged(false), 3000); 
  };

  const deleteOrder = (status, orderNumber) => {
    switch (status) {
      case 'pending':
        setPendingOrders(pendingOrders.filter(o => o.orderNumber !== orderNumber));
        break;
      case 'processing':
        setProcessingOrders(processingOrders.filter(o => o.orderNumber !== orderNumber));
        break;
      case 'readyToDeliver':
        setReadyToDeliverOrders(readyToDeliverOrders.filter(o => o.orderNumber !== orderNumber));
        break;
      default:
        break;
    }
    setStatusChanged(true);
    setTimeout(() => setStatusChanged(false), 3000); 
  };

  const handleExpand = (orderNumber) => {
    setExpandedOrder(expandedOrder === orderNumber ? null : orderNumber);
  };

  return (
    <div>
      <NavbarSection statusChanged={statusChanged} />
      <div>
        <h2 className="text-gray-700 font-semibold text-xl px-4 py-2">Order Status</h2>
        <p className="text-gray-700 px-4">
          <span className="text-blue-600 cursor-pointer">Dashboard</span> / 
          <span className="text-blue-600 cursor-pointer"> Order</span> / 
          <span> Order Status</span>
        </p>
      </div>
      <div className="bg-white shadow-lg py-10 px-2 shadow-gray-300 mx-2 my-4">
        <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-4 sm:space-x-4">
          {/* Pending Orders Card */}
          <div className="shadow-md shadow-gray-300 rounded-sm flex flex-col w-full">
            <h3 className="text-md font-medium bg-[#6C747E] text-white py-2 px-4 rounded-sm">Pending</h3>
            <div className="flex-1 space-y-4 px-4 pb-4 overflow-y-auto">
              {pendingOrders.map((order, index) => (
                <div key={index} className="bg-white shadow-md shadow-gray-300 rounded-lg p-6">
                  <p className="flex justify-between text-gray-700 cursor-pointer" onClick={() => handleExpand(order.orderNumber)}>
                    <span className='text-md font-medium'>{order.name}</span>
                    <span className="rounded-lg text-sm">{order.orderNumber}</span>
                  </p>
                  {expandedOrder === order.orderNumber && (
                    <div className="mt-4">
                      <button 
                        className="bg-red-500 text-white px-2 py-2 rounded text-sm" 
                        onClick={() => deleteOrder('pending', order.orderNumber)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-2">
              <button 
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm" 
                onClick={() => addOrder('pending', { name: 'New Order', orderNumber: '#ORD-9999' })}
              >
                Add Order
              </button>
            </div>
          </div>
          {/* Processing Orders Card */}
          <div className="shadow-md shadow-gray-300 rounded-sm flex flex-col w-full">
            <h3 className="text-md font-medium bg-[#FEC007] text-white py-2 px-4 rounded-sm">Processing</h3>
            <div className="flex-1 space-y-4 px-4 pb-4 overflow-y-auto">
              {processingOrders.map((order, index) => (
                <div key={index} className="bg-white shadow-md shadow-gray-300 rounded-lg p-6">
                  <p className="flex justify-between text-gray-700 cursor-pointer" onClick={() => handleExpand(order.orderNumber)}>
                    <span className='text-md font-medium'>{order.name}</span>
                    <span className="rounded-lg text-sm">{order.orderNumber}</span>
                  </p>
                  {expandedOrder === order.orderNumber && (
                    <div className="mt-4">
                      <button 
                        className="bg-red-500 text-white px-2 py-2 rounded text-sm" 
                        onClick={() => deleteOrder('processing', order.orderNumber)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-2">
              <button 
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm" 
                onClick={() => addOrder('processing', { name: 'New Order', orderNumber: '#ORD-9999' })}
              >
                Add Order
              </button>
            </div>
          </div>
          {/* Ready to Deliver Orders Card */}
          <div className="shadow-md shadow-gray-300 rounded-sm flex flex-col w-full">
            <h3 className="text-md font-medium bg-[#007BFF] text-white py-2 px-4 rounded-sm">Ready to Deliver</h3>
            <div className="flex-1 space-y-4 px-4 pb-4 overflow-y-auto">
              {readyToDeliverOrders.map((order, index) => (
                <div key={index} className="bg-white shadow-md shadow-gray-300 rounded-lg p-6">
                  <p className="flex justify-between text-gray-700 cursor-pointer" onClick={() => handleExpand(order.orderNumber)}>
                    <span className='text-md font-medium'>{order.name}</span>
                    <span className="rounded-lg text-sm">{order.orderNumber}</span>
                  </p>
                  {expandedOrder === order.orderNumber && (
                    <div className="mt-4">
                      <button 
                        className="bg-red-500 text-white px-2 py-2 rounded text-sm" 
                        onClick={() => deleteOrder('readyToDeliver', order.orderNumber)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-2">
              <button 
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm" 
                onClick={() => addOrder('readyToDeliver', { name: 'New Order', orderNumber: '#ORD-9999' })}
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
