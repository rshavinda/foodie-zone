import React, {useState, useRef} from "react";
import { View,Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Icon } from 'react-native-elements';
import Header from "../../components/Header";
import { colors, titleText } from "../../global/styles";
import * as Animatable from 'react-native-animatable'

export default function SignInScreen() {

    const [textInputToFocus, setTextInputToFocus] = useState(false)

    const textInputEmail = useRef(1)
    const textInputPassword = useRef(2)

    return (
        <View style={styles.container}>

            <Header
                title="Home"
                type="arrow-left" />

            <View style={{marginLeft: 20, marginTop: 10 }}>
                <Text style={titleText}>
                    Sign-In
                </Text>
            </View>

            <View style={{ marginTop: 10, alignSelf: "center" }}>
                <Text style={styles.text1}>
                    Please enter the email and password {"\n"}register with your account
                </Text>
            </View>

            <View style={{marginTop:22}}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="E-mail"
                    ref={textInputEmail}
                />
            </View>


            <View style={styles.textInput2}>
                <Animatable.View
                    animation={textInputToFocus ? "" : "fadeInRight"}
                    duration={400}>
                    <Icon
                        name="lock"
                        type="material"
                        iconStyle={{ color: colors.grey3 }}
                        style={{marginRight:8}}
                    />
                </Animatable.View>

                <TextInput
                    style={{ width: '80%' }}
                    placeholder="Password"
                    ref={textInputPassword}
                    onFocus={() => {
                        setTextInputToFocus(false);
                    }}

                    onBlur={() => {
                        setTextInputToFocus(true)
                    }}
                />

                <Animatable.View
                    animation={textInputToFocus ? "" : "fadeInLeft"}
                    duration={400}>
                    <Icon
                        name="visibility-off"
                        type="material"
                        iconStyle={{ color: colors.grey3 }}
                        style={{marginRight:10}}

                    />
                </Animatable.View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16,
        textAlign: "center",
    },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 32,
        borderRadius: 12,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop:4,
        paddingBottom:4,
        paddingRight:8,
    },

    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 32,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 16,
        paddingTop:4,
        paddingBottom:4,
        paddingRight:8,
    },

})