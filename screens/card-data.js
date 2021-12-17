import { ActionCodeOperation } from "@firebase/auth";
import React, { useState, useContext } from "react";
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from '../context/context';
export default function Card() {
    
    const { state, dispatch } = useContext(GlobalContext);







    let Products = [
        {
            productName: 'Shirt',
            image: 'https://5.imimg.com/data5/IQ/CY/MY-42824871/stylish-party-wear-shirts-500x500.jpg',
            price: '$70',
            Discount: '20% off',
            isSelected: false
        },
        {
            productName: 'Nike Shoes',
            image: 'https://static-buyma-jp.akamaized.net/imgdata/item/200216/0051500838/242615188/428.jpg',
            price: '$30',
            Discount: '10% off'
        },
        {
            productName: 'Jeans',
            image: 'https://image.shutterstock.com/image-photo/brown-male-cargo-pants-trousers-260nw-1984233974.jpg',
            price: '$50',
            Discount: '20% off'
        },
        {
            productName: 'Checker Shirt',
            image: 'https://teestorez.com/wp-content/uploads/2019/12/Ralph-Lauren-Checkers-Shirt.jpg',
            price: '$70',
            Discount: '20% off'
        },
        {
            productName: 'Cargo Shirt',
            image: 'https://i.pinimg.com/originals/8e/5d/e7/8e5de7203df2481355b1988eb21c36ab.jpg',
            price: '$40',
            Discount: '10% off'
        }
    ]





    return (
        <ScrollView
            style={{ paddingBottom: 180, }}
        >

            {
                Products.map(({ productName, image, price, Discount }, index) => {


                    return (
                        <View key={productName + index}
                            style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}

                        >
                            <View
                                style={{
                                    borderRadius: 10,

                                    width: 300,
                                    backgroundColor: "#fff",
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 5
                                }}
                            >
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                    <Image style={{ width: 200, height: 250 }} source={{ uri: image }} />

                                </View>
                                <View style={{ position: 'absolute', paddingLeft: 240, paddingTop: 10, }}>
                                    <Text style={{ backgroundColor: '#900', color: "#fff", borderRadius: 5, width: 60, padding: 5 }}>{Discount}</Text>
                                </View>

                                <View style={{ position: 'absolute' }}>
                                    <Icon name="heart-outline" color='#900' style={{ fontSize: 30, padding: 10 }} />
                                </View>




                                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10 }}>

                                    <Icon name="cart-outline" color='#900' style={{ fontSize: 30 }} onPress={() => {
                                        // ToastAndroid.show("Added To cart", ToastAndroid.SHORT)
                                        let Product = {
                                            name,
                                            image,
                                            price,
                                            Discount
                                        }
                                        dispatch({ type: "ADD_TO_CART", payload: Product });
                                    }} />

                                </View>

                                <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingTop: 230, paddingLeft: 260, fontSize: 19 }}>{price}</Text>
                                </View>


                                <View style={{ position: 'absolute', paddingTop: 270 }}>

                                    <Text style={{ fontSize: 19, paddingLeft: 10, paddingTop: -20 }}>{productName}</Text>

                                </View>
                            </View>
                            </View>
                    )

                })
            }

        </ScrollView>
    )
}















