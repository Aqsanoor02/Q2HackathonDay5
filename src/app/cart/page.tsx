'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../Types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'
import AuthGuard from '@/components/AuthGuard'

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    useEffect(()=>{
        setCartItems(getCartItems())
    },[]);

    const handleRemove=(id:string)=>{
        Swal.fire({
            title:'Are you sure',
            text: 'You will not be able to recover this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText: 'Yes, remove it!',
        }).then((result)=>{
            if(result.isConfirmed){
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire('Removed', 'Item has been removed from cart','success')
            }
        })
    }

    const handleQuantityChange=(id:string, quantity:number)=>{
        updateCartQuantity(id,quantity);
        setCartItems(getCartItems())
    }

    const handleIncrement=(id:string)=>{
        const product=cartItems.find((item)=> item._id === id)
        if(product)
            handleQuantityChange(id,product.inventory + 1)
    }
    const handledecrement=(id:string)=>{
        const product=cartItems.find((item)=> item._id === id)
        if(product && product.inventory>1)
            handleQuantityChange(id,product.inventory - 1)
    }
    const calculatedTotal=()=>{
        return cartItems.reduce((total,item)=>total+ item.price*item.inventory,0)
    };
    const router = useRouter();
    const handleProceed=()=>{
        Swal.fire({
            title:'Proceed to Checkout?',
            text:' Please review your cart before checkout',
            icon:'question',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, Proceed',
        }).then((result)=>{
            if(result.isConfirmed){
                Swal.fire('Success','Your order has been proceed!',
                    'success');
                    router.push('/checkout')
                setCartItems([])
            }
        })
    }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex  md:flex-row items-center justify-between border-b pb-6">
              <div className="flex items-center  space-x-4">
                <div>
                    {item.image && (
                        <Image
                        src={urlFor(item.image).url()} width={200} height={200}
                        alt={item.productName} className="w-20 h-20 object-cover rounded-lg"
                        />
                    )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{item.productName}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => handledecrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="text-right">
              <p className="text-2xl font-bold">Total: ${calculatedTotal().toFixed(2)}</p>
              <button
                onClick={handleProceed}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage