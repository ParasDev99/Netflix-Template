import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import FontSize from '@/constants/FontSize'
import Fonts from '@/constants/Fonts'
import { Feather } from '@expo/vector-icons'
import Spacing from '@/constants/Spacing'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: Colors.text, fontSize: FontSize.xl, fontFamily: Fonts['poppins-semiBold'] }}>{title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: Spacing.margin.lg }}>
                    <Feather name='cast' color={Colors.text} size={FontSize.xl} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: Spacing.margin.lg }}>
                    <Feather name='search' color={Colors.text} size={FontSize.xl} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ height: 30, width: 30, borderRadius: Spacing.borderRadius.sm }} source={require('../../assets/images/user/user.jpg')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Header