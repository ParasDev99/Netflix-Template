import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Spacing from '@/constants/Spacing'
import Colors from '@/constants/Colors'
import FontSize from '@/constants/FontSize'
import Fonts from '@/constants/Fonts'
import { Movie, popular } from '@/data'
import { ITEM_HEIGHT, ITEM_SIZE } from '@/constants'

type Props = {
    title: string,
    movies: Movie[]
}

const Movies: React.FC<Props> = ({ title, movies }) => {
    return (
        <View style={{ marginVertical: Spacing.margin.base }}>
            <Text style={{ color: Colors.text, fontSize: FontSize.lg, fontFamily: Fonts['poppins-semiBold'] }}>{title}</Text>
            <ScrollView horizontal style={{ marginTop: Spacing.margin.base }} showsHorizontalScrollIndicator={false}>
                {movies.map(myMovie => <TouchableOpacity
                    key={myMovie.id}
                    style={{ marginRight: Spacing.margin.base }}>
                    <Image source={myMovie.image} style={{ height: ITEM_HEIGHT, width: ITEM_SIZE, borderRadius: Spacing.borderRadius.sm }} />
                </TouchableOpacity>)}
            </ScrollView>
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({})