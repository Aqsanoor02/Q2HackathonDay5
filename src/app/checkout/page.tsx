// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Product } from '../../../Types/products'
// import { getCartItems } from '../actions/actions'
// import Link from 'next/link'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'

// const CheckOut = () => {

//     const [cartItems, setCartItems] = useState<Product[]>([])
//     const [discount, setDiscount]=useState<number>(0)
//     const [formValues, setFormValues]= useState({
//         firstName:"",
//         LastName:"",
//         email:"",
//         phone:"",
//         address:"",
//         zipCode:"",
//         city:"",
//     })

//     const [formErrors, setFormErrors]= useState({
//         firstName:false,
//         lastName:false,
//         email:false,
//         phone:false,
//         address:false,
//         zipCode:false,
//         city:false,
//     })

//     useEffect(()=>{
//         setCartItems(getCartItems())
//         const appliedDiscount = localStorage.getItem('appliedDiscount')
//         if(appliedDiscount){
//             setDiscount(Number(appliedDiscount))
//         }
//     },[])

//     const subTotal = cartItems.reduce((total,item) => item.price*item.inventory,0)
//     const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         setFormValues({
//             ...formValues,
//             [e.target.id]:e.target.value
//         })
//     }

//     const validateForm =()=>{
//         const errors = {
//             firstName: !formValues.firstName,
//             lastName: !formValues.LastName,
//             email: !formValues.email,
//             phone : !formValues.phone,
//             address: !formValues.address,
//             zipCode: !formValues.zipCode,
//             city: !formValues.city,

//         };
//         setFormErrors(errors);
//         return Object.values(errors).every((error)=> !error);
//     }
//     const handlePlaceOrder=()=>{
//         if(validateForm()){
//             localStorage.removeItem('appliedDiscount')
//         }
//     }
//   return (
//     <div className='min-h-screen bg-gray-300'>
//         <div>
//             <div className='max-w-6 mx-auto px-4 sm:px-6 lg:px-8'>
//                 <nav>
//                     <Link href={'/cart'}> Cart
//                     </Link>
//                     <span>Checkout</span>
//                 </nav>
//             </div>
//         </div>
//         <div className='main'>
//             <div className='order'>
//                 <div>
//                     <h2>Order Summary</h2>
//                     {cartItems.length > 0 ?(
//                         cartItems.map((item)=>(
//                             <div key={item._id}>
//                                 <div className='image'>
//                                     {item.image && (
//                                         <Image
//                                         src={urlFor(item.image).url()} alt='image' width={50} height={50}
//                                         className='object-cover'
//                                         />
//                                     ) }
//                                 </div>
//                                 <div>
//                                     <h3>{item.productName}</h3>
//                                     <p>{item.inventory}</p>
//                                     <p>${item.price * item.inventory}</p>
//                                 </div>
//                             </div>
//                         ))
//                     ):(
//                         <p>Your Cart is empty</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default CheckOut




'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../Types/products'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRight } from 'lucide-react'

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  })

  useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem('appliedDiscount')
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, [])

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
  const total = subTotal - discount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    })
    setFormErrors({
      ...formErrors,
      [e.target.id]: false, // Clear error when user starts typing
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    }
    setFormErrors(errors)
    return Object.values(errors).every((error) => !error)
  }

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem('appliedDiscount')
      alert('Order placed successfully!')
      // Redirect or perform other actions here
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-end items-center">
            <Link href="/cart" className="text-lg font-semibold text-black hover:text-blue-700">
              Cart
            </Link>
            <ChevronRight></ChevronRight>
            <span className="text-lg font-semibold text-gray-700">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.productName}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                    <p className="text-gray-600">Quantity: {item.inventory}</p>
                    <p className="text-gray-600">Price: ${(item.price * item.inventory).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}

          {/* Totals */}
          <div className="mt-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800 font-semibold">${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Discount</p>
                <p className="text-red-600 font-semibold">-${discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-t pt-4">
                <p className="text-gray-800 font-bold">Total</p>
                <p className="text-gray-800 font-bold">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout Details</h2>
          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.firstName && (
                <p className="text-sm text-red-500 mt-1">First Name is required</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.lastName && (
                <p className="text-sm text-red-500 mt-1">Last Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.phone ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.phone && <p className="text-sm text-red-500 mt-1">Phone is required</p>}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.address ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500 mt-1">Address is required</p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.zipCode ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500 mt-1">Zip Code is required</p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.city ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.city && <p className="text-sm text-red-500 mt-1">City is required</p>}
            </div>

            {/* Place Order Button */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckOut