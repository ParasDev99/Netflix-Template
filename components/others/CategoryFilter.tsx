import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { filterData, FilterItem } from '@/data'
import Fonts from '@/constants/Fonts'
import FontSize from '@/constants/FontSize'
import Spacing from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

type Props = {
    onFilter?: (item: FilterItem) => void
}

const CategoryFilter: React.FC<Props> = ({ onFilter }) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: Spacing.margin.lg }}>
            {filterData.map(item => <TouchableOpacity onPress={() => onFilter?.(item)} key={item.id} style={{ flexDirection: 'row', marginRight: Spacing.margin.base, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.border, paddingHorizontal: Spacing.padding.base, paddingVertical: Spacing.padding.xs, borderRadius: Spacing.borderRadius.xxl }}>
                <Text style={{ fontSize: FontSize.sm, color: Colors.text, fontFamily: Fonts['poppins-bold'] }}>
                    {item.title}
                </Text>
                {item.items && <Ionicons name='chevron-down' size={24} color={Colors.text} />}
            </TouchableOpacity>)}
        </View>
    )
}

export default CategoryFilter

const styles = StyleSheet.create({})