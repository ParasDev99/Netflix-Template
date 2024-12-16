import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import FontSize from '@/constants/FontSize'
import Fonts from '@/constants/Fonts'
import Spacing from '@/constants/Spacing'
import { Feather, Ionicons } from '@expo/vector-icons'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import { categories, filterData, FilterItem, games, mainCover, mightLike, popular } from '@/data'
import CategoryFilter from '@/components/others/CategoryFilter'
import { BlurView } from 'expo-blur'
import { ITEM_HEIGHT, ITEM_SIZE } from '@/constants'
import Movies from '@/components/others/Movies'

const HomeScreen: React.FC = () => {
  const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')
  const MAIN_IMAGE_HEIGHT = HEIGHT / 1.7
  const GAME_ITEM_SIZE = 110
  const [showCategories, setshowCategories] = useState(false)

  const handleFilter = (item: FilterItem) => {
    if (item.items) setshowCategories(true)
  }

  return (
    <LinearGradient style={{ height: '100%' }}
      // @ts-ignore
      colors={Colors.backgroundGradient}>
      {showCategories &&
        <BlurView
          tint='dark'
          intensity={90}
          style={{
            position: 'absolute',
            zIndex: 1,
            height: HEIGHT,
            width: WIDTH,
            paddingHorizontal: Spacing.padding.lg,
            paddingVertical: Spacing.padding.xxl * 2

          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map(categories => <TouchableOpacity
              key={categories.id}>
              <Text style={{
                fontSize: FontSize.lg,
                color: Colors.textGray,
                marginBottom: Spacing.margin.xxl,

              }}>{categories.title}</Text>
            </TouchableOpacity>)}
          </ScrollView>

          <TouchableOpacity
            onPress={() => { setshowCategories(false) }}
            style={{
              backgroundColor: Colors.primary,
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: Spacing.borderRadius.xxl
            }}>
            <Ionicons name='close' size={24} color={Colors.onPrimary} />
          </TouchableOpacity>
        </BlurView>}

      <Container>
        <Header title={'For Others'} />
        <CategoryFilter onFilter={handleFilter} />
        <TouchableOpacity style={{
          height: MAIN_IMAGE_HEIGHT,
          width: '95%',
          alignSelf: 'center',
          borderWidth: 2,
          borderColor: Colors.darkBorder,
          borderRadius: Spacing.borderRadius.base,
          overflow: 'hidden'
        }}>
          <Image source={mainCover.image} style={{
            height: '100%',
            width: '100%',
          }} />

          <View style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
          }}>
            <View style={{
              flexDirection: 'row',
              marginVertical: Spacing.margin.base,
              alignSelf: 'center'
            }}>
              {mainCover.categories.map((category, index) =>
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center', }}
                  key={category.id}>
                  <Text style={{
                    color: Colors.text,
                    fontSize: FontSize.base,
                    fontFamily: Fonts['poppins-medium']
                  }}>{category.title}
                  </Text>

                  {index !== mainCover.categories.length - 1 && <View style={{
                    height: 8,
                    width: 8,
                    borderRadius: Spacing.borderRadius.xxl,
                    backgroundColor: Colors.primary,
                    marginHorizontal: Spacing.margin.base
                  }}>
                  </View>}
                </TouchableOpacity>)}
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: Spacing.padding.lg,
              marginBottom: Spacing.margin.lg
            }}>
              <TouchableOpacity style={{
                paddingVertical: Spacing.padding.base,
                paddingHorizontal: Spacing.padding.lg,
                backgroundColor: Colors.primary,
                width: '48%',
                justifyContent: 'center',
                flexDirection: 'row',
                borderRadius: Spacing.borderRadius.base,
                alignItems: 'center',
              }}>
                <Ionicons name='play' size={24} color={Colors.onPrimary} />
                <Text style={{
                  color: Colors.onPrimary,
                  fontSize: FontSize.base
                }}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                paddingVertical: Spacing.padding.base,
                paddingHorizontal: Spacing.padding.lg,
                backgroundColor: Colors.secondary,
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: Spacing.borderRadius.base
              }}>
                <Feather name='plus' size={24} color={Colors.onSecondary} />
                <Text style={{
                  color: Colors.onSecondary,
                  fontSize: FontSize.base
                }}>My List</Text>
              </TouchableOpacity>
            </View>
          </View>

        </TouchableOpacity>

        <View style={{ marginVertical: Spacing.margin.base }}>
          <Text style={{ color: Colors.text, fontSize: FontSize.lg, fontFamily: Fonts['poppins-semiBold'], marginTop: Spacing.margin.xl }}>Mobile Games</Text>
          <ScrollView horizontal style={{ marginVertical: Spacing.margin.base }} showsHorizontalScrollIndicator={false}>
            {games.map(myGame => <TouchableOpacity
              style={{ marginRight: Spacing.margin.base }}
              key={myGame.id}>
              <Image source={myGame.image} style={{ width: GAME_ITEM_SIZE, height: GAME_ITEM_SIZE, borderRadius: Spacing.borderRadius.lg }}
              />
            </TouchableOpacity>)}
          </ScrollView>
        </View>

        <Movies title='Popular' movies={popular} />
        <Movies title="We think you'll love this" movies={mightLike} />
      </Container>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})