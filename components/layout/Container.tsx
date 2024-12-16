import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacing from '@/constants/Spacing'

type Props = {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{
                padding: Spacing.padding.base,
                paddingBottom: Spacing.padding.xxl
            }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Container

