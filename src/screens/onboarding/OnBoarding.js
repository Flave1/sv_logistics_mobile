import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, FONTS, AndroidSafeArea} from '../../constants';
import {
  ImageSvgOne,
  ImageSvgTwo,
  SkipSvg,
  ArrowSvg,
  ImageThreeSvg,
} from '../svg';

const slides = [
  {
    id: '1',
    title: 'Explore Culinary Delights with Cafay',
    description:
      `Enjoy a seamless food delivery experience with our curated selection of restaurants`,
    image: <ImageSvgOne />,
  },
  {
    id: '2',
    title: 'Effortless Ordering',
    description:
      `Discover the ease of Cafay! Browse menus, customize your order, and enjoy stress-free dining. 
      It's that simple – tap, choose, and savor your favorite flavors delivered to your doorstep.`,
    image: <ImageThreeSvg />,
  },
  {
    id: '3',
    title: 'Exclusive Offers, Loyalty Rewards',
    description:
      'Use Cafay for exclusive offers and loyalty rewards! Enjoy special discounts and freebies with every order',
    image: <ImageSvgTwo />,
  },
];

export default function OnBoarding() {
  const navigation = useNavigation();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPrevtSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  function renderDots() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {slides.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.orange,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }

  function renderContent() {
    return (
      <View style={{flex: 1}}>
        {currentSlideIndex == 0 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingHorizontal: 16,
            }}
            onPress={() => navigation.navigate('SignIn')}>
            <SkipSvg />
          </TouchableOpacity>
        )}
        {currentSlideIndex == slides.length - 1 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingHorizontal: 16,
            }}></TouchableOpacity>
        )}

        {currentSlideIndex !== 0 && currentSlideIndex !== slides.length - 1 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingHorizontal: 16,
            }}
            onPress={() => navigation.navigate('SignIn')}>
            <SkipSvg />
          </TouchableOpacity>
        )}
        <FlatList
          data={slides}
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingTop: SIZES.height * 0.03}}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    marginBottom: 11,
                    height: 297,
                  }}>
                  {item.image}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    ...FONTS.H2,
                    lineHeight: 40 * 1,
                    marginBottom: 10,
                    color: COLORS.black,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.gray,
                    ...FONTS.bodyText,
                    lineHeight: 16 * 1.5,
                    marginBottom: 40,
                    paddingHorizontal: 20,
                  }}>
                  {item.description}
                </Text>
                {renderDots()}
              </View>
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 34,
            paddingHorizontal: 16,
          }}>
          <TouchableOpacity onPress={currentSlideIndex !== 0 && goToPrevtSlide}>
            {currentSlideIndex !== 0 && <ArrowSvg />}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: currentSlideIndex == slides.length - 1 ? 170 : 110,
              backgroundColor: COLORS.orange,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={
              currentSlideIndex == slides.length - 1
                ? () => navigation.navigate('SignIn')
                : goToNextSlide
            }>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                fontSize: 14,
                textTransform: 'uppercase',
                fontFamily: 'Lato-Regular',
              }}>
              {currentSlideIndex == slides.length - 1 ? 'get started' : 'next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
      {renderContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.orange,
  },
});
