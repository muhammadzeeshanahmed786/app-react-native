import React, { useContext } from "react";
import { Text, View, ScrollView, Image, Button } from 'react-native'
import { GlobalContext } from '../context/context'
import Icon from 'react-native-vector-icons/Ionicons';



export default function ShowCard() {

    const { state, dispatch } = useContext(GlobalContext);
    // let ShowProductsName = state.cartItem.name
    // let ShowProductsImage = state.cartItem.image
    // let ShowProductsDiscount = state.cartItem.Discount
    // let ShowProductsPrice = state.cartItem
    let ShowProducts = state.cartItem


    return (
        <>
            <View style={{  paddingTop: 20,padding:10  }}>

                <Text style={{ backgroundColor: '#900', color: "#fff", borderRadius: 5,fontSize:30, width: 340 }}>Your Added Cart is here!</Text>


            </View>
            <ScrollView
                style={{ paddingBottom: 180, }}
            >


                {
                    ShowProducts.map((items, index) => {
                        let { productName, image, price, Discount } = items

                        return (
                            <View key={name + index}
                                style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}

                            >
                                <View
                                    style={{
                                        borderRadius: 10,

                                        width: 300,
                                        height: 300,
                                        backgroundColor: "#fff",
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 5
                                    }}
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                        <Image style={{ width: 200, height: 200 }} source={{ uri: image }} />

                                    </View>
                                    <View style={{ position: 'absolute', paddingLeft: 240, paddingTop: 10, }}>
                                    </View>


                                    <View style={{ position: 'absolute', paddingTop: 20 }}>

                                        <Text style={{ backgroundColor: '#900', color: "#fff", borderRadius: 5, width: 60, padding: 5 }}>{Discount}</Text>


                                    </View>



                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10, paddingTop: 40 }}>

                                        <Icon name="trash" style={{ fontSize: 30, color: '#900' }} onPress={() => {

                                            // dispatch({ type: "ADD_TO_CART", payload: items.index });

                                        }} />

                                    </View>

                                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ paddingTop: 220, paddingLeft: 260, fontSize: 19 }}>{price}</Text>
                                    </View>


                                    <View style={{ position: 'absolute', paddingTop: 220, paddingVertical: 50 }}>

                                        <Text style={{ fontSize: 19, paddingLeft: 10, }}>{productName}</Text>
                                        <View style={{ paddingTop: 10, width: 100 }}>
                                            <Button title='Check out' color='#900' />

                                        </View>
                                    </View>


                                </View>
                            </View>
                        )

                    })
                }

            </ScrollView>
        </>
    )
}